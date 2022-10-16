import { Hop } from '@hop-protocol/sdk';
import { chain } from 'eth-chains';
import type { ChainId, TokenSymbol, Token } from './types';

// import { Eth, Usdc, Usdt, Dai, Matic } from 'svelte-cryptoicon';

/**
 * TODO: complete with other networks and tokens
 */
export const tokens: Record<ChainId, Record<TokenSymbol, Token>> = {
	[chain.ethereum.mainnet.chainId]: {
		[Hop.Token.ETH]: {
			symbol: 'ETH',
			name: 'Ether',
			decimals: 18,
			native: true,
			icon: '/tokens/eth.svg'
		},
		[Hop.Token.USDC]: {
			symbol: 'USDC',
			name: 'USD Coin',
			decimals: 6,
			address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
			icon: '/tokens/usdc.svg'
		},
		[Hop.Token.USDT]: {
			symbol: 'USDT',
			name: 'Tether USD',
			decimals: 6,
			address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
			icon: '/tokens/usdt.svg'
		},
		[Hop.Token.MATIC]: {
			symbol: 'Matic',
			name: 'Matic',
			decimals: 18,
			address: '0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0',
			icon: '/tokens/matic.svg'
		},
		[Hop.Token.DAI]: {
			symbol: 'DAI',
			name: 'DAI',
			decimals: 18,
			address: '0x6b175474e89094c44da98b954eedeac495271d0f',
			icon: '/tokens/dai.png'
		}
	},
	[chain.arbitrum.mainnet.chainId]: {
		[Hop.Token.ETH]: {
			symbol: 'ETH',
			name: 'Ether',
			decimals: 18,
			native: true,
			icon: '/tokens/eth.svg'
		},
		[Hop.Token.USDC]: {
			symbol: 'USDC',
			name: 'USD Coin',
			decimals: 6,
			address: '0xff970a61a04b1ca14834a43f5de4533ebddb5cc8',
			icon: '/tokens/usdc.svg'
		},
		[Hop.Token.USDT]: {
			symbol: 'USDT',
			name: 'Tether USD',
			decimals: 6,
			address: '0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9',
			icon: '/tokens/usdt.svg'
		},
		[Hop.Token.DAI]: {
			symbol: 'DAI',
			name: 'DAI',
			decimals: 18,
			address: '0xda10009cbd5d07dd0cecc66161fc93d7c9000da1',
			icon: '/tokens/dai.png'
		}
	},
	[chain.polygon.mainnet.chainId]: {
		[Hop.Token.ETH]: {
			symbol: 'ETH',
			name: 'Ether',
			decimals: 18,
			native: true,
			icon: '/tokens/eth.svg'
		},
		[Hop.Token.USDC]: {
			symbol: 'USDC',
			name: 'USD Coin',
			decimals: 6,
			address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
			icon: '/tokens/usdc.svg'
		},
		[Hop.Token.USDT]: {
			symbol: 'USDT',
			name: 'Tether USD',
			decimals: 6,
			address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
			icon: '/tokens/usdt.svg'
		},
		[Hop.Token.MATIC]: {
			symbol: 'Matic',
			name: 'Matic',
			decimals: 18,
			address: '0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0',
			icon: '/tokens/matic.svg'
		},
		[Hop.Token.DAI]: {
			symbol: 'DAI',
			name: 'DAI',
			decimals: 18,
			address: '0x6b175474e89094c44da98b954eedeac495271d0f',
			icon: '/tokens/dai.png'
		}
	},
	[chain.optimism.mainnet.chainId]: {
		[Hop.Token.ETH]: {
			symbol: 'ETH',
			name: 'Ether',
			decimals: 18,
			native: true,
			icon: '/tokens/eth.svg'
		},
		[Hop.Token.USDC]: {
			symbol: 'USDC',
			name: 'USD Coin',
			decimals: 6,
			address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
			icon: '/tokens/usdc.svg'
		},
		[Hop.Token.USDT]: {
			symbol: 'USDT',
			name: 'Tether USD',
			decimals: 6,
			address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
			icon: '/tokens/usdt.svg'
		},
		[Hop.Token.MATIC]: {
			symbol: 'Matic',
			name: 'Matic',
			decimals: 18,
			address: '0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0',
			icon: '/tokens/matic.svg'
		},
		[Hop.Token.DAI]: {
			symbol: 'DAI',
			name: 'DAI',
			decimals: 18,
			address: '0x6b175474e89094c44da98b954eedeac495271d0f',
			icon: '/tokens/dai.png'
		}
	}
};
