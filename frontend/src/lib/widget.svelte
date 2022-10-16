<script lang="ts">
	type Colors = {
		backgroundColor: string;
		textColor: string;
	};

	type Protocols = {
		synapse: boolean;
		hop: boolean;
	}

	export const title: string = 'Bridge';
	export const colors: Colors = {
		backgroundColor: '#fff',
		textColor: '#333',
	};
	export const protocols: Protocols = {
		synapse: true,
		hop: true,
	};

	import '../app.postcss'; // needed for rollup export
	import { onMount } from 'svelte';

	import { init, address, provider, signer, connect } from '../store/wallet';

	import { Chain, Hop, HopBridge, type TToken } from '@hop-protocol/sdk';
	import { BigNumber, Wallet, utils } from 'ethers';

	// import { getTokenEstimation } from '../utils/uniswap';

	import type { WindowWithEthereum } from '../types';

	let hop;

	onMount(() => {
		init();
		// getTokenEstimation();
	});

	const chains = [
		Hop.Chain.Arbitrum, 
		Hop.Chain.Ethereum, 
		// Hop.Chain.Gnosis, 
		// Hop.Chain.Optimism, 
		// Hop.Chain.Polygon,
	];

	const tokens: TToken[] = [
		Hop.Token.ETH,
		Hop.Token.USDC,
		Hop.Token.USDT,
		Hop.Token.MATIC,
		Hop.Token.DAI,
	];

	console.log(tokens, chains);

	let fromTokenSymbol: string | null = null;
	let toTokenSymbol: string | null = null;
	
	let fromChain: string | null = null;
	let toChain: string | null = null;
	
	let amount = 0;

	let needsApproval;
	
	let balance;
	let tokenBalance: BigNumber | null = null;
	
	let bridge: HopBridge;

	let estimation: any;

	/**
	 * Get estimation from sdk
	 * Use that estimation to calculate swap estimation
	 * Return that value
	 */
	async function estimate() {
		if (!bridge || !fromChain || !toChain || !amount) {
			return;
		}
		const amountBn = bridge.parseUnits(amount);
		estimation = await bridge.getSendData(amountBn, fromChain, toChain);
	}
		
	const decimals: Record<string, number> = {
		[Hop.Token.ETH]: 18,
		[Hop.Token.USDC]: 6,
		[Hop.Token.USDT]: 6,
		[Hop.Token.MATIC]: 18,
		[Hop.Token.DAI]: 18,
	}

	async function updateTokenBalance() {
		if (!$address) {
			return
		}

		if (!bridge) {
			return;
		}

		if (!fromChain) {
			return;
		}

		if (!fromTokenSymbol) {
			return;
		}

		console.log('llego aca');

		try {
      tokenBalance = await bridge.getTokenBalance(fromChain);
    } catch (err: any) {
      console.error(err.message)
    }
  }

	async function updateNeedsApproval() {
    if (!$signer) {
			return;
		}

		if (!bridge) {
			return;
		}

		if (!fromChain) {
			return;
		}

		try {
			const amountBn = bridge.parseUnits(amount);
			needsApproval = await bridge.needsApproval(amountBn, fromChain);
		} catch (err: any) {
			console.error(err.message);
		}
  }

	async function updateBalance() {
		if (!$provider) {
			return
		}
		if (!$address) {
			return
		}
    try {
      balance = await $provider.getBalance($address);
    } catch (err: any) {
      console.error(err.message)
    }
  }

	async function send() {
		if (!fromChain || !toChain || !fromTokenSymbol) {
			return;
		}
		console.log('send');
	}

	$: if ($signer && fromTokenSymbol) {
		hop = new Hop('mainnet', $signer);
		bridge = hop.bridge(fromTokenSymbol);
	}

	$: if (bridge && fromChain && fromTokenSymbol) {
		updateTokenBalance();
	}

	$: if (bridge && fromChain && toChain && fromTokenSymbol && toTokenSymbol && amount) {
		estimate();
	}

	$: disabled = !fromChain || !toChain || !fromTokenSymbol || toChain === fromChain || amount === 0;
</script>

<div class="flex flex-col">

	{#if !$address}
		<button class="" on:click={connect}>Connect your wallet</button>
	{:else}
		<div>

			address: {$address}
		</div>

		{#if fromTokenSymbol}
			<div class="flex flex-row">
				Send: {fromTokenSymbol} {#if tokenBalance} ({utils.formatUnits(tokenBalance, decimals[fromTokenSymbol])}) {/if}
			</div>
		{/if}

		<select bind:value={fromTokenSymbol} class="m-2">
			<option>Token</option>
			{#each tokens as token}
				<option value={token}>{token}</option>
			{/each}
		</select>

		<select bind:value={fromChain} class="m-2">
			<option>From</option>
			{#each chains as chain}
				<option value={chain.slug}>{chain.name}</option>
			{/each}
		</select>

		<select bind:value={toChain} class="m-2">
			<option>To</option>
			{#each chains as chain}
				<option value={chain.slug}>{chain.name}</option>
			{/each}
		</select>

		<select bind:value={fromTokenSymbol} class="m-2">
			<option>To Token</option>
			{#each tokens as token}
				<option value={token}>{token}</option>
			{/each}
		</select>

		<input bind:value={amount} placeholder="amount" type="number" />

		<button 
			class:disabled={disabled}
			disabled={disabled}
			class="
				button 
				bg-green-300 
				disabled:bg-slate-300
			"  
			on:click={send}
		>Send</button>
	{/if}
</div>

<h1 class="font-sans text-red-600 bg-red-100">Hello {name}!a as</h1>