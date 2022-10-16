import { Chain } from 'eth-chains';
import type { BigNumber } from 'ethers';

export type ChainId = number;

export type Network = Chain;

export type TokenSymbol = string;

export type Token = {
	readonly name: string;
	readonly address?: string;
	readonly decimals: number;
	readonly symbol: TokenSymbol;
	readonly native?: boolean;
	readonly icon?: string;
};

export type EstimatedData = {
	totalFee: BigNumber;
	receivedAmount: BigNumber;
};
