import { Contract, ethers } from 'ethers';
// import { Address } from 'cluster';
import { Pool } from '@uniswap/v3-sdk';
import { Token, CurrencyAmount, Percent, TradeType } from '@uniswap/sdk-core';
import { Hop } from '@hop-protocol/sdk';
import { abi as IUniswapV3PoolABI } from '@uniswap/v3-core/artifacts/contracts/interfaces/IUniswapV3Pool.sol/IUniswapV3Pool.json';
import { abi as IUniswapV3FactoryABI } from '@uniswap/v3-core/artifacts/contracts/interfaces/IUniswapV3Factory.sol/IUniswapV3Factory.json';
import { abi as QuoterABI } from '@uniswap/v3-periphery/artifacts/contracts/lens/Quoter.sol/Quoter.json';
import { Route } from '@uniswap/v3-sdk';
import { AlphaRouter } from '@uniswap/smart-order-router';

console.log(IUniswapV3FactoryABI);

const UNISWAP_ADDRESSES: Record<string, string> = {
	UniswapV3Factory: '0x1F98431c8aD98523631AE4a59f267346ea31F984',
	Multicall2: '0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696',
	ProxyAdmin: '0xB753548F6E010e7e680BA186F9Ca1BdAB2E90cf2',
	TickLens: '0xbfd8137f7d1516D3ea5cA83523914859ec47F573',
	Quoter: '0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6',
	SwapRouter: '0xE592427A0AEce92De3Edee1F18E0157C05861564'
};

interface Immutables {
	factory: string;
	token0: string;
	token1: string;
	fee: number;
	tickSpacing: number;
	maxLiquidityPerTick: ethers.BigNumber;
}

interface State {
	liquidity: ethers.BigNumber;
	sqrtPriceX96: ethers.BigNumber;
	tick: number;
	observationIndex: number;
	observationCardinality: number;
	observationCardinalityNext: number;
	feeProtocol: number;
	unlocked: boolean;
}

const API_KEY = '728496b248434626839b9635be05eee8';

const RPC_URLS: Record<string, string | null> = {
	[Hop.Chain.Polygon.slug]: `https://polygon-mainnet.infura.io/v3/${API_KEY}`,
	[Hop.Chain.Optimism.slug]: `https://optimism-mainnet.infura.io/v3/${API_KEY}`,
	[Hop.Chain.Arbitrum.slug]: `https://arbitrum-mainnet.infura.io/v3/${API_KEY}`,
	[Hop.Chain.Ethereum.slug]: `https://mainnet.infura.io/v3/${API_KEY}`,
	[Hop.Chain.Gnosis.slug]: `https://rpc.gnosischain.com`
};

type TokenData = {
	symbol: string;
	name: string;
	decimals: number;
	address?: string;
};

const TOKENS_ETHEREUM: Record<string, TokenData> = {
	[Hop.Token.ETH]: {
		symbol: 'ETH',
		name: 'Ether',
		decimals: 18
	},
	[Hop.Token.USDC]: {
		symbol: 'USDC',
		name: 'USD Coin',
		decimals: 6,
		address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'
	},
	[Hop.Token.USDT]: {
		symbol: 'USDT',
		name: 'Tether USD',
		decimals: 6,
		address: '0xdac17f958d2ee523a2206206994597c13d831ec7'
	},
	[Hop.Token.MATIC]: {
		symbol: 'Matic',
		name: 'Matic',
		decimals: 18,
		address: '0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0'
	},
	[Hop.Token.DAI]: {
		symbol: 'DAI',
		name: 'DAI',
		decimals: 18,
		address: '0x6b175474e89094c44da98b954eedeac495271d0f'
	}
};

const TOKENS_ARBITRUM: Record<string, TokenData> = {
	[Hop.Token.ETH]: {
		symbol: 'ETH',
		name: 'Ether',
		decimals: 18
	},
	[Hop.Token.USDC]: {
		symbol: 'USDC',
		name: 'USD Coin',
		decimals: 6,
		address: '0xff970a61a04b1ca14834a43f5de4533ebddb5cc8'
	},
	[Hop.Token.USDT]: {
		symbol: 'USDT',
		name: 'Tether USD',
		decimals: 6,
		address: '0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9'
	},
	[Hop.Token.DAI]: {
		symbol: 'DAI',
		name: 'DAI',
		decimals: 18,
		address: '0xda10009cbd5d07dd0cecc66161fc93d7c9000da1'
	}
};

const TOKENS_GNOSIS: Record<string, TokenData> = {
	[Hop.Token.ETH]: {
		symbol: 'ETH',
		name: 'Ether',
		decimals: 18
	},
	[Hop.Token.USDC]: {
		symbol: 'USDC',
		name: 'USD Coin',
		decimals: 6,
		address: ''
	},
	[Hop.Token.USDT]: {
		symbol: 'USDT',
		name: 'Tether USD',
		decimals: 6,
		address: ''
	},
	[Hop.Token.MATIC]: {
		symbol: 'Matic',
		name: 'Matic',
		decimals: 18,
		address: ''
	},
	[Hop.Token.DAI]: {
		symbol: 'DAI',
		name: 'DAI',
		decimals: 18,
		address: ''
	}
};

const TOKENS_OPTIMISM: Record<string, TokenData> = {
	[Hop.Token.ETH]: {
		symbol: 'ETH',
		name: 'Ether',
		decimals: 18
	},
	[Hop.Token.USDC]: {
		symbol: 'USDC',
		name: 'USD Coin',
		decimals: 6,
		address: ''
	},
	[Hop.Token.USDT]: {
		symbol: 'USDT',
		name: 'Tether USD',
		decimals: 6,
		address: ''
	},
	[Hop.Token.MATIC]: {
		symbol: 'Matic',
		name: 'Matic',
		decimals: 18,
		address: ''
	},
	[Hop.Token.DAI]: {
		symbol: 'DAI',
		name: 'DAI',
		decimals: 18,
		address: ''
	}
};

const TOKENS_POLYGON: Record<string, TokenData> = {
	[Hop.Token.ETH]: {
		symbol: 'ETH',
		name: 'Ether',
		decimals: 18,
		address: ''
	},
	[Hop.Token.USDC]: {
		symbol: 'USDC',
		name: 'USD Coin',
		decimals: 6,
		address: ''
	},
	[Hop.Token.USDT]: {
		symbol: 'USDT',
		name: 'Tether USD',
		decimals: 6,
		address: ''
	},
	[Hop.Token.MATIC]: {
		symbol: 'Matic',
		name: 'Matic',
		decimals: 18
	},
	[Hop.Token.DAI]: {
		symbol: 'DAI',
		name: 'DAI',
		decimals: 18,
		address: ''
	}
};

const TOKENS = {
	[Hop.Chain.Arbitrum.slug]: TOKENS_ARBITRUM,
	[Hop.Chain.Ethereum.slug]: TOKENS_ETHEREUM,
	[Hop.Chain.Gnosis.slug]: TOKENS_GNOSIS,
	[Hop.Chain.Optimism.slug]: TOKENS_OPTIMISM,
	[Hop.Chain.Polygon.slug]: TOKENS_POLYGON
};

async function getRoute(chain: string) {
	const provider = getProvider(chain);

	const router = new AlphaRouter({ chainId: 1, provider });

	const WETH = new Token(
		Hop.Chain.Ethereum.chainId,
		'0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
		18,
		'WETH',
		'Wrapped Ether'
	);

	const USDC = new Token(
		Hop.Chain.Ethereum.chainId,
		'0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
		6,
		'USDC',
		'USD//C'
	);

	const typedValueParsed = '100000000000000000000';
	// const wethAmount = CurrencyAmount.fromRawAmount();

	// const route = await router.route(wethAmount, USDC, TradeType.EXACT_INPUT, {
	// 	recipient: `0xe7292962e48c18e04Bd26aB2AcCA00Ef794E8171`, // My address, change
	// 	slippageTolerance: new Percent(5, 100),
	// 	deadline: Math.floor(Date.now() / 1000 + 1800)
	// });
}

async function getPoolImmutables(poolContract: Contract) {
	console.log('asdsa');
	const [factory, token0, token1, fee, tickSpacing, maxLiquidityPerTick] = await Promise.all([
		poolContract.factory(),
		poolContract.token0(),
		poolContract.token1(),
		poolContract.fee(),
		poolContract.tickSpacing(),
		poolContract.maxLiquidityPerTick()
	]);

	const immutables: Immutables = {
		factory,
		token0,
		token1,
		fee,
		tickSpacing,
		maxLiquidityPerTick
	};
	return immutables;
}

function getTokenAddress(chain: string, tokenSymbol: string) {
	return TOKENS[chain][tokenSymbol];
}

function getProvider(chain: string) {
	const rpcProviderUrl = RPC_URLS[chain];

	if (!rpcProviderUrl) {
		throw new Error(`invalid chain ${chain}`);
	}

	const provider = new ethers.providers.JsonRpcProvider(rpcProviderUrl);

	return provider;
}

function getQuoterContract(chain: string) {
	const provider = getProvider(chain);

	const quoterAddress = UNISWAP_ADDRESSES.Quoter;

	const quoterContract = new ethers.Contract(quoterAddress, QuoterABI, provider);

	return quoterContract;
}

async function getPoolContract(chain: string, token0: TokenData, token1: TokenData) {
	const provider = getProvider(chain);

	const uniswapV3FactoryContract = new ethers.Contract(
		UNISWAP_ADDRESSES.UniswapV3Factory,
		IUniswapV3FactoryABI,
		provider
	);

	const poolAddress = await uniswapV3FactoryContract.getPool(token0.address, token1.address);
	console.log('pool', poolAddress);

	// const poolAddress = '0x8ad599c3A0ff1De082011EFDDc58f1908eb6e6D8';

	const poolContract = new ethers.Contract(poolAddress, IUniswapV3PoolABI, provider);

	return poolContract;
}

async function getPoolState(poolContract: Contract) {
	console.log('asdsa');

	const [liquidity, slot] = await Promise.all([poolContract.liquidity(), poolContract.slot0()]);

	const PoolState: State = {
		liquidity,
		sqrtPriceX96: slot[0],
		tick: slot[1],
		observationIndex: slot[2],
		observationCardinality: slot[3],
		observationCardinalityNext: slot[4],
		feeProtocol: slot[5],
		unlocked: slot[6]
	};

	return PoolState;
}

async function main(chain: string, token0: TokenData, token1: TokenData) {
	console.log(chain, token0, token1);

	const poolContract = await getPoolContract(chain, token0, token1);

	console.log('llego aca');

	// const [immutables, state] = await Promise.all([
	// 	getPoolImmutables(poolContract),
	// 	getPoolState(poolContract)
	// ]);

	// const TokenA = new Token(3, immutables.token0, token0.decimals, token0.symbol, token0.name);
	// const TokenB = new Token(3, immutables.token1, token1.decimals, token1.symbol, token1.name);

	// const poolExample = new Pool(
	// 	TokenA,
	// 	TokenB,
	// 	immutables.fee,
	// 	state.sqrtPriceX96.toString(),
	// 	state.liquidity.toString(),
	// 	state.tick
	// );
	// console.log(poolExample);
}

export function getTokenEstimation() {
	console.log(TOKENS);
	const chain = Hop.Chain.Arbitrum.slug;
	main(chain, TOKENS[chain].USDT, TOKENS[chain].DAI);
}
