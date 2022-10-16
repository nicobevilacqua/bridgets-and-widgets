import { chain } from 'eth-chains';
import type { Network, ChainId, TokenSymbol, Token } from '../types';
import { tokens } from '../tokens';
import { networks } from '../networks';

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

export function bridgeAndSwapTokens(
	fromChain: Network,
	toChain: Network,
	fromToken: Token,
	toToken: Token,
	amount: number
) {
	console.log('todo');
}
