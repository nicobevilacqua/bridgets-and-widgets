import { chain } from 'eth-chains';
import type { Network, ChainId, TokenSymbol, Token } from '../types';
import { tokens } from '../tokens';
import { networks } from '../networks';
import type { Signer } from 'ethers';

// import { Bridge, Tokens, Networks } from '@synapseprotocol/sdk';

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

export async function estimateData(
	fromNetwork: Network,
	toNetwork: Network,
	fromToken: Token,
	toToken: Token,
	amount: number
) {
	console.log('todo');
}

export async function bridgeAndSwapTokens(
	fromChain: Network,
	toChain: Network,
	fromToken: Token,
	toToken: Token,
	amount: number
) {
	const { Bridge, Tokens, ChainId, Networks } = await import('@synapseprotocol/sdk');

	console.log(Networks);
	console.log('todo');
}

export async function init(signer: Signer) {
	console.log('initializing synapse');
}

export async function needApproval() {}

export async function approve(network: Network, token: Token, amount: number) {}
