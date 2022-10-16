import { chain } from 'eth-chains';
import type { Network, ChainId, TokenSymbol, Token, EstimatedData } from '../types';
import { tokens } from '../tokens';
import { networks } from '../networks';
import type { Signer } from 'ethers';
import { BigNumber, utils } from 'ethers';
import { Bridge, Tokens, Networks } from '@synapseprotocol/sdk';
import { JsonRpcProvider } from '@ethersproject/providers';
import { parseUnits, formatUnits } from '@ethersproject/units';

import { RPC } from '../rpc';

/**
 * include only the supported networks
 */
export function getNetworks() {
	return {
		[chain.ethereum.mainnet.chainId]: networks[chain.ethereum.mainnet.chainId],
		[chain.polygon.mainnet.chainId]: networks[chain.polygon.mainnet.chainId],
		[chain.optimism.mainnet.chainId]: networks[chain.optimism.mainnet.chainId],
		[chain.arbitrum.mainnet.chainId]: networks[chain.arbitrum.mainnet.chainId]
	};
}

/**
 * include only the supported tokens
 */
export function getTokensForNetwork(chainId: ChainId): Record<TokenSymbol, Token> {
	const networks = getNetworks();

	if (!networks[chainId]) {
		throw new Error('Network not supported');
	}

	if (!tokens[chainId]) {
		throw new Error('Invalid network');
	}

	return tokens[chainId];
}

const TOKENS = {
	[Tokens.ETH.symbol]: Tokens.ETH,
	[Tokens.USDC.symbol]: Tokens.USDC,
	[Tokens.USDT.symbol]: Tokens.USDT,
	[Tokens.DAI.symbol]: Tokens.DAI
};

let signer: any;
export async function init(_signer: Signer) {
	signer = _signer;
	console.log('initializing synapse');
}

export async function getEstimatedData(
	fromNetwork: Network,
	toNetwork: Network,
	fromToken: Token,
	toToken: Token,
	amount: number
): Promise<EstimatedData> {
	const bridge = getBridge(fromNetwork);
	const { amountToReceive, bridgeFee } = await bridge.estimateBridgeTokenOutput({
		tokenFrom: TOKENS[fromToken.symbol], // token to send from the source chain, in this case USDT on Avalanche
		chainIdTo: toNetwork.chainId, // Chain ID of the destination chain, in this case BSC
		tokenTo: TOKENS[toToken.symbol], // Token to be received on the destination chain, in this case USDC
		amountFrom: utils.parseUnits(amount.toString(), fromToken.decimals)
	});
	console.log({
		totalFee: bridgeFee,
		receivedAmount: amountToReceive
	});
	return {
		totalFee: bridgeFee,
		receivedAmount: amountToReceive
	};
}

export async function getNeedApproval(
	fromNetwork: Network,
	toNetwork: Network,
	fromToken: Token,
	toToken: Token,
	amount: number
) {
	return true;
}

export async function approve(
	fromNetwork: Network,
	toNetwork: Network,
	fromToken: Token,
	toToken: Token,
	amount: number
) {
	if (!signer) {
		throw new Error('invalid signer');
	}

	const bridge = getBridge(fromNetwork);
	const transactionData = await bridge.buildApproveTransaction({
		token: TOKENS[fromToken.symbol]
	});
	const tx = await signer.sendTransaction(transactionData);
	const receipt = await tx.wait();
	return receipt.hash;
}

export async function bridgeAndSwapTokens(
	fromNetwork: Network,
	toNetwork: Network,
	fromToken: Token,
	toToken: Token,
	amount: number
) {
	if (!signer) {
		throw new Error('invalid signer');
	}

	const rpcUrl = RPC[fromNetwork.chainId];
	if (!rpcUrl) {
		throw new Error('invalid network');
	}

	const bridge = getBridge(fromNetwork);

	const estimatedData = await getEstimatedData(fromNetwork, toNetwork, fromToken, toToken, amount);

	const amountToSend = utils.parseUnits(amount.toString(), fromToken.decimals);

	const transactionData = await bridge.buildBridgeTokenTransaction({
		tokenFrom: TOKENS[fromToken.symbol], // token to send from the source chain, in this case nUSD on Avalanche
		chainIdTo: toNetwork.chainId, // Chain ID of the destination chain, in this case BSC
		tokenTo: TOKENS[toToken.symbol], // Token to be received on the destination chain, in this case USDC
		amountFrom: amountToSend, // Amount of `tokenFrom` being sent
		amountTo: estimatedData.receivedAmount, // minimum desired amount of `tokenTo` to receive on the destination chain
		addressTo: await signer.getAddress()
	});

	const tx = await signer.sendTransaction(transactionData);
	const receipt = await tx.wait();
	return receipt.hash;
}

function getBridge(fromNetwork: Network) {
	const bridge = new Bridge.SynapseBridge({
		network: fromNetwork.chainId
	});
	return bridge;
}
