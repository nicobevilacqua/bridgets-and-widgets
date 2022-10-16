import { chain } from 'eth-chains';
import type { Network, ChainId, TokenSymbol, Token } from '../types';
import { tokens } from '../tokens';
import { networks } from '../networks';
import type { Signer } from 'ethers';
import { Chain, Hop, HopBridge, type TToken, ChainSlug } from '@hop-protocol/sdk';

const CHAIN_SLUGS = {
	[chain.ethereum.mainnet.chainId]: ChainSlug.Ethereum,
	[chain.polygon.mainnet.chainId]: ChainSlug.Polygon,
	[chain.optimism.mainnet.chainId]: ChainSlug.Optimism,
	[chain.arbitrum.mainnet.chainId]: ChainSlug.Arbitrum
};

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

export async function getEstimatedData(
	fromNetwork: Network,
	toNetwork: Network,
	fromToken: Token,
	toToken: Token,
	amount: number
) {
	return { totalFee: 0.1 };
	// not working locally
	const bridge = getBridge(fromNetwork, toNetwork, fromToken, toToken);
	const parsedAmount = bridge.parseUnits(amount);
	const estimate = await bridge.getSendData(
		parsedAmount,
		CHAIN_SLUGS[fromNetwork.chainId],
		CHAIN_SLUGS[toNetwork.chainId]
	);

	return estimate;
}

export async function getNeedApproval(
	fromNetwork: Network,
	toNetwork: Network,
	fromToken: Token,
	toToken: Token,
	amount: number
) {
	return true;
	const bridge = getBridge(fromNetwork, toNetwork, fromToken, toToken);
	const amountBn = bridge.parseUnits(amount);
	const needsApproval = await bridge.needsApproval(amountBn, CHAIN_SLUGS[fromNetwork.chainId]);
	return needsApproval;
}

/**
 * Approve tokes transfers
 * @param network
 * @param token
 * @param amount
 */
export async function approve(
	fromNetwork: Network,
	toNetwork: Network,
	fromToken: Token,
	toToken: Token,
	amount: number
) {
	return '0x12121';
	const bridge = getBridge(fromNetwork, toNetwork, fromToken, toToken);
	const amountBn = bridge.parseUnits(amount);
	const tx = await bridge.sendApproval(
		amountBn,
		CHAIN_SLUGS[fromNetwork.chainId],
		CHAIN_SLUGS[toNetwork.chainId]
	);
	return tx.hash;
}

export async function bridgeAndSwapTokens(
	fromNetwork: Network,
	toNetwork: Network,
	fromToken: Token,
	toToken: Token,
	amount: number,
	fromAddress: string,
	toAddress?: string
) {
	const bridge = getBridge(fromNetwork, toNetwork, fromToken, toToken);
	const amountBn = bridge.parseUnits(amount);
	let options: any = {};

	const fromNetworkSlug = CHAIN_SLUGS[fromNetwork.chainId];
	const toNetworkSlug = CHAIN_SLUGS[toNetwork.chainId];

	if (toAddress) {
		options.recipient = toAddress;
	}

	if (fromNetworkSlug === 'ethereum') {
		options = {
			relayerFee: 0
		};
	} else {
		const { totalFee } = await getEstimatedData(fromNetwork, toNetwork, fromToken, toToken, amount);
		options = {
			bonderFee: totalFee
		};
	}
	const tx = await bridge.send(amountBn, fromNetworkSlug, toNetworkSlug, options);
	return tx;
}

let signer;
let hop: any;
export async function init(_signer: Signer) {
	console.log('initializing hop');
	signer = _signer;
	hop = new Hop('mainnet', _signer);
}

function getBridge(fromNetwork: Network, toNetwork: Network, fromToken: Token, toToken: Token) {
	if (!hop) {
		throw new Error('Lib not initialized');
	}

	const bridge = hop.bridge(fromToken.symbol);
	return bridge;
}
