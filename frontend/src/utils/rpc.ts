import { chain } from 'eth-chains';

const API_KEY = '728496b248434626839b9635be05eee8'; // TODO: move to .env

export const RPC: Record<string, string | null> = {
	[chain.polygon.mainnet.chainId]: `https://polygon-mainnet.infura.io/v3/${API_KEY}`,
	[chain.optimism.mainnet.chainId]: `https://optimism-mainnet.infura.io/v3/${API_KEY}`,
	[chain.arbitrum.mainnet.chainId]: `https://arbitrum-mainnet.infura.io/v3/${API_KEY}`,
	[chain.ethereum.mainnet.chainId]: `https://mainnet.infura.io/v3/${API_KEY}`,
	100: `https://rpc.gnosischain.com` // gnosis
};
