<script context="module">
	export const prerender = true;
</script>

<script>
	import { connected, signerAddress, chainId } from 'svelte-ethers-store';
	// import ByW from "./../../assets/ByW.png"
	import ByWLink from '$lib/images/logo.png';
	import SvgCheck from '$lib/svg/svgCheck.svelte';
	import Wallet from '$lib/WalletAddress.svelte';
	import WidgetHop from './hop/WidgetHop.svelte';
	import WidgetSynapse from './Synapse/WidgetSynapse.svelte';

	// import { main } from "$lib/placeOrder"
	import { onConnect, onDisconnect, connectWallet } from '$lib/web3';
	import Synapse from '$lib/svg/Synapse.svelte';
	import Hop from '$lib/svg/Hop.svelte';
	import Logo from '$lib/svg/logo.svelte';
	import { onMount } from 'svelte';

	var option0 = true;

	function runScript() {
		console.log('Running script');
		// main()
	}

	onMount(() => {
		var element = document.querySelectorAll('#code_block');
		console.log(element);
		if (element != null)
			element[0].innerText = `

            <Widget
                title="Widgets&Bridgets"
                protocols={{
                    synapse: true,
                    hop: true
                }}
                theme: 'dark'
                colors: {textColor: '#333'}
					/>
		        `;
		//  element.innerText = `
		//
		//         `;
	});
	// $: start_string = signerAddress != null && connected ? signerAddress.slice(0, 4) : ""
	// $: end_string = signerAddress != null && connected ? signerAddress.slice(-4) : ""
	// $: address = "" + start_string + end_string
	// $: backgroundImage = backgroundImages[randomIndex];

	async function changeNetwork() {
		const CHAIN_ID = 80001;
		const HEXCHAIN_ID = '0x' + CHAIN_ID.toString(16);
		try {
			await window.ethereum.request({
				method: 'wallet_addEthereumChain',
				params: [
					{
						chainId: HEXCHAIN_ID,
						chainName: 'Mumbai testnet',
						nativeCurrency: {
							name: 'Matic',
							symbol: 'MATIC',
							decimals: 18
						},

						rpcUrls: [
							'https://matic-mumbai--jsonrpc.datahub.figment.io/apikey/f1f9f2031af0fbbd9d45fb6c87caf3c2',
							'https://rpc.ankr.com/moonbeam/',
							'https://eth-mainnet.gateway.pokt.network/v1/lb/5db541c720ddaa659cf004d2',
							'https://eth-goerli-rpc.gateway.pokt.network/',
							'https://goerli.ethereum.coinbasecloud.net'
						],
						blockExplorerUrls: ['https://mumbai.polygonscan.com/']
					}
				]
			});
			setTimeout(() => {
				document.location.reload();
			}, 10);
		} catch (e) {
			console.log(e);
			alert('Please manually change your network to Mumbai testnet');
		}
	}
	console.log($connected);
</script>

<div class="index">
	{#if option0}
		<!-- style="position:absolute; right:0; top:0; " -->

		<WidgetSynapse />
		<div
			class="floating-widget"
			on:click={() => {
				option0 = !option0;
			}}
		>
			<Hop />
		</div>
	{:else}
		<div
			class="floating-widget"
			on:click={() => {
				option0 = !option0;
			}}
		>
			<Synapse />
		</div>
		<WidgetHop />
	{/if}
	<div
		class="from-primary to-secondary text-primary-content -mt-[4rem] grid place-items-center items-end bg-gradient-to-br pt-20 hero-image-main"
	>
		<div
			class="hero-content col-start-1 row-start-1 w-full max-w-7xl flex-col justify-between gap-10 pb-20 lg:flex-row lg:items-end lg:gap-0 xl:gap-20"
		>
			<div class="lg:px-10 lg:pb-12">
				<h1 class="font-title mb-2 py-4 font-extrabold lg:py-10">
					{#if $connected}
						<div class="floating-button-container btn btn-tertiar ">
							<!-- content -->
							{#if $chainId == 80001}
								<!-- {start_string}{end_string} -->
								<div on:click={onDisconnect}>
									<Wallet />
								</div>

								<!-- <button class="floating-button-wallet" on:click={onDisconnect}>
                                    asdasdasdas
                                    <span class="floating-button-address" />
                                </button> -->
							{:else}
								<button class="floating-button-wallet" on:click={changeNetwork}>
									WRONG NETWORK!
									<span class="floating-button-address" />
								</button>
							{/if}
						</div>
					{/if}
					<!-- <img style="max-width:54px" src={ByWLink} alt="Bridges & Widges Logo" /> -->
					<Logo />
					<!-- <ByW /> -->
					<!-- <SvgLogo /> -->
					<div class="mb-2 text-5xl lg:text-7xl title_milketh">Bridges&Widgets</div>
					<div class="text-2xl lg:text-3xl pt-4 subtitle_milketh">
						Use a bridge in minutes!<br />
						<!-- somethnig more here??-->
					</div>
				</h1>
				<div
					class="flex w-full flex-col items-start space-y-10 lg:flex-row lg:space-x-4 lg:space-y-0"
				>
					<div class="my-2 flex max-w-sm flex-col gap-2 text-left padding-small-screen">
						<div class="flex gap-2">
							<SvgCheck />
							Easy to use and made for everyone
						</div>
						<div class="flex gap-2">
							<SvgCheck />
							Analysis tools included
						</div>
						<div class="flex gap-2">
							<SvgCheck />
							Multichain compatible
						</div>
						<div class="flex gap-2">
							<SvgCheck />
							Compatible with a wide range of tokens
						</div>
					</div>
				</div>
				<div
					class="starting-buttons mt-4 flex flex-1 pt-6 justify-center space-x-2 sm:justify-start lg:mt-6 lg:justify-start"
				>
					{#if !$connected}
						<!-- <button
							on:click={onConnect}
							class="btn button-first-section btn-ghost btn-active lg:btn-lg normal-case"
						>
							Connect
						</button> -->
						<!-- <button
                            on:click={runScript}
                            class="btn button-first-section btn-ghost btn-active lg:btn-lg normal-case"
                        >
                            Test Script
                        </button> -->
						<!-- <button
                            on:click={connectWallet}
                            class="btn button-first-section btn-ghost btn-active lg:btn-lg normal-case"
                        >
                            Connect Wallet 2
                        </button> -->
						<!-- <a
                            href="/swap"
                            class="btn button-first-section btn-ghost btn-active lg:btn-lg normal-case "
                        >
                            Swap
                        </a> -->
						<!-- <a href="#how" class="btn lg:btn-lg normal-case">How does it work?</a> -->
					{:else}
						<!-- <a href="/faq" class="btn button-first-section lg:btn-lg normal-case">FAQ</a
                        > -->
					{/if}
					<a
						href="/hop"
						class="btn btn-tertiary button-first-section btn-ghost btn-active lg:btn-lg normal-case"
					>
						Trade with Hop
					</a>
					<a
						href="/Synapse"
						class="btn btn-tertiary button-first-section btn-active lg:btn-lg normal-case"
					>
						Trade with Synapse
					</a>
				</div>
			</div>
		</div>

		<!-- <Background /> https://cdn.pixabay.com/photo/2016/11/18/12/55/light-1834289_960_720.jpg-->
		<!-- <svg
            class="fill-secondary col-start-1 row-start-1 h-auto w-full"
            width="1600"
            height="595"
            viewBox="0 0 1600 595"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M0 338L53.3 349.2C106.7 360.3 213.3 382.7 320 393.8C426.7 405 533.3 405 640 359.3C746.7 313.7 853.3 222.3 960 189.2C1066.7 156 1173.3 181 1280 159.2C1386.7 137.3 1493.3 68.7 1546.7 34.3L1600 0V595H1546.7C1493.3 595 1386.7 595 1280 595C1173.3 595 1066.7 595 960 595C853.3 595 746.7 595 640 595C533.3 595 426.7 595 320 595C213.3 595 106.7 595 53.3 595H0V338Z"
            />
        </svg> -->
	</div>

	<!-- {$signerAddress} -->

	<div
		class="hero bg-base-100 text-base-content mx-auto min-h-screen max-w-md md:max-w-full background-regular"
	>
		<div class="hero-content px-4 text-center md:px-0">
			<div id="how">
				<h2 class="mt-32 mb-2 text-4xl font-extrabold md:text-6xl">How does it work?</h2>
				<h3 class="mb-5 text-3xl font-bold">As simple as a regular transaction</h3>
				<p class="mx-auto  mb-5 w-full max-w-lg" style="font-size: 20px">
					Bridges&Widgets aims to help users to perform bridge operations in a more simple way and
					aims to helps developers on implement bridge operations in few minutes
				</p>
				<div
					class="mt-6 mb-10 flex flex-col lg:flex-row second-box-content"
					style="font-size: 20px"
				>
					<div class="flex w-full flex-col text-left">
						<div class="text-center mx-auto w-full max-w-xs flex-grow sm:max-w-md">
							Users can both <b>swap</b> or
							<b>bridge</b> tokens For using Bridges&Widgets, follow these steps:
							<ol class="mt-4  text-center">
								<li class="">1 - Go to swap/bridge page</li>
								<li class="">2 - Add your tokens to buy and sell</li>
								<li class="">3 - Write a receiver address (optional)</li>
								<!-- <li class="">4 - Add a deadline (optional)</li> -->
								<li class="">4 - Sign the transaction</li>
							</ol>
						</div>
						<p class="mt-4 text-center mx-auto w-full max-w-xs flex-grow sm:max-w-md">
							And that's all! You have used <b> Bridges&Widgets</b>
						</p>
						<div class="mt-4 flex h-16 items-start justify-center">
							<a
								class="btn-what-is-a-transaction inline-block cursor-pointer rounded-md bg-indigo-600 px-4 py-3 text-center text-sm
                       font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-indigo-700 btn-tertiary btn"
								href="widget">Try our Widget</a
							>
						</div>
						<div class="mt-8 text-center inline-flex justify-center">
							<div class="mt-8 text-center inline-flex justify-center gap-4" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div
		class="hero from-primary to-accent text-primary-content min-h-screen bg-gradient-to-br background-gradient"
		id="private"
	>
		<div class="hero-content mx-auto max-w-md text-center md:max-w-full">
			<div id="transaction">
				<h2 class="mt-20 mb-12 text-4xl font-extrabold md:text-6xl">Why using Bridges&Widgets?</h2>
				<!-- <h3 class="mb-5 text-3xl font-bold">Lorem ipsum</h3> -->
				<p class="mx-auto mb-5 w-full regular-text lh-regular">
					Thanks to our widgets implementation, Bridges&Widgets allows your DApp to bridge in less
					than 5 minutes.
				</p>
				<p class="mx-auto mb-5 w-full regular-text lh-regular">
					You just need to import the package, copy the next code and include it on your
					application. A floating button, when clicked, will display a sidebar with the bridge
					options you needed!
				</p>
				<code id="code_block" style="" />
				<div class="my-5 flex flex-col custom-button-centered align-middle">
					<!-- <a class="uppercase text-white btn btn-primary btn-first-tx   rounded-full" href="/widget"
						>Try the widget</a
					> -->
				</div>
			</div>
		</div>
	</div>

	<div
		class="hero from-primary to-accent text-primary-content min-h-screen bg-gradient-to-br background-regular"
		id="private"
	>
		<div class="hero-content mx-auto max-w-md text-center md:max-w-full">
			<div>
				<h2 class="mt-20 mb-8  text-4xl font-extrabold md:text-6xl">Access to bridge Stadistics</h2>
				<h3 class="mb-5 text-3xl font-bold regular-text-title">
					Get knowledge of everything happening on Arbitrum and Synapse!
				</h3>
				<p class="mx-auto mb-5 w-full max-w-l regular-text-smaller">
					Actually, we implemented widgets for Hop and Synapse, that includes multiples chains and
					tokens. Also we track it.
				</p>
				<p class="mx-auto mb-5 w-full max-w-l regular-text-smaller">
					We provide you the tools, you enjoy the travel
				</p>

				<div
					class="my-20 flex flex-col md:flex-row custom-button-centered space-between md:gap-4 centered-buttons-small"
				>
					<a
						class="btn  btn-tertiary btn-outline rounded-full w-full md:w-1/2 btn-fix"
						href="https://dune.com/deivitto/widgets-and-bridges">More information</a
					>
					<br />
					<a class="btn btn-tertiary rounded-full w-full md:w-1/2 btn-fix" href="/stadistics">
						Go stadistics!</a
					>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	* {
		--primary: rgb(214, 123, 90) !important;
		--secondary: rgb(22, 56, 97) !important;
		--tertiary: rgb(123, 90, 214) !important;
		--white-hover: rgb(255, 255, 255) !important;

		--primary-light: rgba(214, 123, 90, 0.375) !important;
		--primary-hover: rgb(237, 137, 100) !important;
		--tertiary-light: rgba(123, 90, 214, 0.375) !important;
		--tertiary-hover: rgb(133, 97, 233) !important;
		--secondary-light: rgba(21, 55, 96, 0.375) !important;
		--secondary-hover: rgb(17, 45, 78) !important;
	}

	.step {
		text-align: left;
	}

	.custom-button-centered {
		max-width: 550px;
		margin-left: auto;
		margin-right: auto;
	}

	.floating-button-container {
		position: fixed;
		top: 1.5rem;
		right: 2rem;
		border-radius: 8px;
	}

	.floating-widget {
		position: fixed;
		left: 1rem;
		top: 90%;
		z-index: 9001;
		cursor: pointer;
		background: #cccccc38;
		border-radius: 50px;
		padding: 0.2rem;
	}

	/* .floating-button-container:after {
      content: "x";
      font-size: 8px;
      position: relative;
      width: 0;
      height: 0;
      top: -22px;
      right: -4px;
    } */

	.btn-what-is-a-transaction {
		padding: 1rem 4.2rem;
		font-size: 16px;
		border-radius: 35px;
		white-space: nowrap;
		/* min-height: 4rem; */
	}

	.lh-regular {
		line-height: 1.5;
	}

	.regular-text {
		font-size: 22px;
		max-width: 60%;
	}

	.regular-text-smaller {
		font-size: 20px;
		max-width: 60%;
	}

	.regular-text-title {
		font-size: 28px;
		max-width: 60%;
		text-align: center;
		margin-left: auto;
		margin-right: auto;
		font-weight: 500;
		margin-bottom: 2rem;
	}

	/* .logo-image {
        border-radius: 35px;
        max-width: 165px;
        margin-right: auto;
        transition: ease 0.5s;
        margin-top: -2rem;
    } */

	.starting-buttons {
		flex-wrap: wrap;
		gap: 1rem;
	}

	.starting-buttons > * {
		margin: 0;
	}

	/* .button-charming {
        height: 3rem;
        border-radius: 8px;
        padding: 0 2rem;
        background: linear-gradient(-45deg, #9925ea, #338aff, #9925ea);
        background-size: 400%;
        background-position: 90% 0;
        color: #fff;
        transition: background 0.8s;
        border: none;
    } */

	/* .button-charming:hover {
        background-position: 185% 50%;
    } */

	.button-first-section {
		min-width: 250px;
		transition: 0.5s ease;
	}

	.button-first-section:hover {
		/*  */
		filter: brightness(0.8);
	}

	/* @media (min-width: 1468px) {
        .ethereum-gif {
            position: absolute;
            right: 4rem;
            top: 1.8rem;
            height: 70p;
            width: 180px;
        }
    }

    .ethereum-gif {
        display: none;
    } */

	@media (max-width: 768px) {
		.max-w-md {
			max-width: 100%;
		}

		/* .custom-button-centered > button {
            max-width: 90%;
            margin-left: auto;
            margin-right: auto;
        } */

		.regular-text-smaller,
		.regular-text-title,
		.regular-text {
			max-width: 90%;
		}

		.padding-small-screen {
			padding: 1rem 0;
		}

		button,
		a {
			min-width: 200px;
		}
	}

	@media (max-width: 576px) {
		.steps-vertical .step {
			gap: 0;
		}
		.button-first-section {
			min-width: 180px;
		}

		button,
		a {
			min-width: auto;
		}
	}

	@media (max-width: 426px) {
		.title_milketh {
			font-size: 2rem;
		}

		.subtitle_milketh {
			font-size: 1.4rem;
		}

		/* .stroke-current > path {
            min-width: 24px;
            min-height: 24px;
        } */

		.button-first-section {
			min-width: 40%;
		}
	}

	.hero-image-main {
		/* background-image: url("web/static/skyscrapers-4168483.jpg"); */
		background-size: cover;
		background-image: url('backgroundLanding.jpg');
		background-repeat: no-repeat;
	}

	.hero-content > div {
		background: rgba(255, 255, 255, 0.03);
		border-radius: 16px;
		box-shadow: 0 4px 30px rgb(0 0 0 / 10%);
		backdrop-filter: blur(6.9px);
		-webkit-backdrop-filter: blur(6.9px);
		border: 1px solid rgba(255, 255, 255, 0.25);
		margin-left: 1rem;
		margin-right: 1rem;
		padding: 3rem 0.5rem;
	}

	.hero-content {
		width: 100% !important;
	}

	.hero {
		padding: 3rem 0.5rem;
	}

	.hero-image-main * {
		color: white !important;
	}

	.hero-image-main > div > div {
		padding-left: 3rem;
		padding-right: 3rem;
	}

	.background-gradient {
		-webkit-text-size-adjust: 100%;
		tab-size: 4;
		font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
			Helvetica Neue, Arial, Noto Sans, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
			Segoe UI Symbol, 'Noto Color Emoji';
		-webkit-tap-highlight-color: transparent;
		--p: 262 80% 50%;
		--pf: 262 80% 40%;
		--sf: 316 70% 40%;
		--af: 175 70% 33%;
		--in: 198 93% 60%;
		--su: 158 64% 52%;
		--wa: 43 96% 56%;
		--er: 0 91% 71%;
		--inc: 198 100% 12%;
		--suc: 158 100% 10%;
		--wac: 43 100% 11%;
		--erc: 0 100% 14%;
		--rounded-box: 1rem;
		--rounded-btn: 0.5rem;
		--rounded-badge: 1.9rem;
		--animation-btn: 0.25s;
		--animation-input: 0.2s;
		--btn-text-case: uppercase;
		--btn-focus-scale: 0.95;
		--border-btn: 1px;
		--tab-border: 1px;
		--tab-radius: 0.5rem;
		--pc: 0 0% 100%;
		--s: 316 70% 50%;
		--sc: 0 0% 100%;
		--a: 175 70% 41%;
		--ac: 0 0% 100%;
		--n: 218 18% 12%;
		--nf: 223 17% 8%;
		--nc: 220 13% 69%;
		--b1: 220 18% 20%;
		--b2: 220 17% 17%;
		--b3: 219 18% 15%;
		--bc: 220 13% 69%;
		line-height: inherit;
		box-sizing: border-box;
		border-width: 0;
		border-style: solid;
		border-color: #e5e7eb;
		--tw-translate-x: 0;
		--tw-translate-y: 0;
		--tw-rotate: 0;
		--tw-skew-x: 0;
		--tw-skew-y: 0;
		--tw-scale-x: 1;
		--tw-scale-y: 1;
		--tw-scroll-snap-strictness: proximity;
		--tw-ring-offset-width: 0px;
		--tw-ring-offset-color: #fff;
		--tw-ring-color: rgb(59 130 246 / 0.5);
		--tw-ring-offset-shadow: 0 0 #0000;
		--tw-ring-shadow: 0 0 #0000;
		--tw-shadow: 0 0 #0000;
		--tw-shadow-colored: 0 0 #0000;
		display: grid;
		width: 100%;
		place-items: center;
		background-size: cover;
		background-position: center;
		min-height: 100vh;
		background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
		--tw-gradient-from: hsl(var(--p));
		--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, hsl(var(--p) / 0));
		--tw-gradient-to: hsl(var(--a));
		--tw-text-opacity: 1;
		color: hsl(var(--pc) / var(--tw-text-opacity));
		background: rgb(214, 123, 90);
		background: linear-gradient(
			180deg,
			rgba(42, 48, 60, 1) 0%,
			rgba(22, 56, 97, 1) 25%,
			/* rgba(214, 123, 90, 1) 30%, */ rgba(22, 56, 97, 1) 75%,
			rgba(42, 48, 60, 1) 100%
		);
	}

	.background-regular {
		-webkit-text-size-adjust: 100%;
		tab-size: 4;
		font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
			Helvetica Neue, Arial, Noto Sans, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
			Segoe UI Symbol, 'Noto Color Emoji';
		-webkit-tap-highlight-color: transparent;
		--p: 262 80% 50%;
		--pf: 262 80% 40%;
		--sf: 316 70% 40%;
		--af: 175 70% 33%;
		--in: 198 93% 60%;
		--su: 158 64% 52%;
		--wa: 43 96% 56%;
		--er: 0 91% 71%;
		--inc: 198 100% 12%;
		--suc: 158 100% 10%;
		--wac: 43 100% 11%;
		--erc: 0 100% 14%;
		--rounded-box: 1rem;
		--rounded-btn: 0.5rem;
		--rounded-badge: 1.9rem;
		--animation-btn: 0.25s;
		--animation-input: 0.2s;
		--btn-text-case: uppercase;
		--btn-focus-scale: 0.95;
		--border-btn: 1px;
		--tab-border: 1px;
		--tab-radius: 0.5rem;
		--pc: 0 0% 100%;
		--s: 316 70% 50%;
		--sc: 0 0% 100%;
		--a: 175 70% 41%;
		--ac: 0 0% 100%;
		--n: 218 18% 12%;
		--nf: 223 17% 8%;
		--nc: 220 13% 69%;
		--b1: 220 18% 20%;
		--b2: 220 17% 17%;
		--b3: 219 18% 15%;
		--bc: 220 13% 69%;
		line-height: inherit;
		box-sizing: border-box;
		border-width: 0;
		border-style: solid;
		border-color: #e5e7eb;
		--tw-translate-x: 0;
		--tw-translate-y: 0;
		--tw-rotate: 0;
		--tw-skew-x: 0;
		--tw-skew-y: 0;
		--tw-scale-x: 1;
		--tw-scale-y: 1;
		--tw-scroll-snap-strictness: proximity;
		--tw-ring-offset-width: 0px;
		--tw-ring-offset-color: #fff;
		--tw-ring-color: rgb(59 130 246 / 0.5);
		--tw-ring-offset-shadow: 0 0 #0000;
		--tw-ring-shadow: 0 0 #0000;
		--tw-shadow: 0 0 #0000;
		--tw-shadow-colored: 0 0 #0000;
		display: grid;
		width: 100%;
		place-items: center;
		background-size: cover;
		background-position: center;
		margin-left: auto;
		margin-right: auto;
		min-height: 100vh;
		--tw-bg-opacity: 1;
		background-color: hsl(var(--b1) / var(--tw-bg-opacity));
		--tw-text-opacity: 1;
		color: hsl(var(--bc) / var(--tw-text-opacity));
		max-width: 100%;

		padding: 3rem 0.5rem;
	}

	.btn-fix {
		-webkit-text-size-adjust: 100%;
		tab-size: 4;
		font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
			Helvetica Neue, Arial, Noto Sans, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
			Segoe UI Symbol, 'Noto Color Emoji';
		-webkit-tap-highlight-color: transparent;
		--p: 262 80% 50%;
		--pf: 262 80% 40%;
		--sf: 316 70% 40%;
		--af: 175 70% 33%;
		--in: 198 93% 60%;
		--su: 158 64% 52%;
		--wa: 43 96% 56%;
		--er: 0 91% 71%;
		--inc: 198 100% 12%;
		--suc: 158 100% 10%;
		--wac: 43 100% 11%;
		--erc: 0 100% 14%;
		--rounded-box: 1rem;
		--rounded-btn: 0.5rem;
		--rounded-badge: 1.9rem;
		--animation-btn: 0.25s;
		--animation-input: 0.2s;
		--btn-text-case: uppercase;
		--btn-focus-scale: 0.95;
		--border-btn: 1px;
		--tab-border: 1px;
		--tab-radius: 0.5rem;
		--pc: 0 0% 100%;
		--s: 316 70% 50%;
		--sc: 0 0% 100%;
		--a: 175 70% 41%;
		--ac: 0 0% 100%;
		--n: 218 18% 12%;
		--nf: 223 17% 8%;
		--nc: 220 13% 69%;
		--b1: 220 18% 20%;
		--b2: 220 17% 17%;
		--b3: 219 18% 15%;
		--bc: 220 13% 69%;
		--tw-gradient-from: hsl(var(--p));
		--tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, hsl(var(--p) / 0));
		--tw-gradient-to: hsl(var(--a));
		box-sizing: border-box;
		border-style: solid;
		--tw-translate-x: 0;
		--tw-translate-y: 0;
		--tw-rotate: 0;
		--tw-skew-x: 0;
		--tw-skew-y: 0;
		--tw-scale-x: 1;
		--tw-scale-y: 1;
		--tw-pan-x: ;
		--tw-pan-y: ;
		--tw-pinch-zoom: ;
		--tw-scroll-snap-strictness: proximity;
		--tw-ordinal: ;
		--tw-slashed-zero: ;
		--tw-numeric-figure: ;
		--tw-numeric-spacing: ;
		--tw-numeric-fraction: ;
		--tw-ring-inset: ;
		--tw-ring-offset-width: 0px;
		--tw-ring-offset-color: #fff;
		--tw-ring-color: rgb(59 130 246 / 0.5);
		--tw-ring-offset-shadow: 0 0 #0000;
		--tw-ring-shadow: 0 0 #0000;
		--tw-shadow: 0 0 #0000;
		--tw-shadow-colored: 0 0 #0000;
		--tw-blur: ;
		--tw-brightness: ;
		--tw-contrast: ;
		--tw-grayscale: ;
		--tw-hue-rotate: ;
		--tw-invert: ;
		--tw-saturate: ;
		--tw-sepia: ;
		--tw-drop-shadow: ;
		--tw-backdrop-blur: ;
		--tw-backdrop-brightness: ;
		--tw-backdrop-contrast: ;
		--tw-backdrop-grayscale: ;
		--tw-backdrop-hue-rotate: ;
		--tw-backdrop-invert: ;
		--tw-backdrop-opacity: ;
		--tw-backdrop-saturate: ;
		--tw-backdrop-sepia: ;
		text-decoration: inherit;
		display: inline-flex;
		flex-shrink: 0;
		cursor: pointer;
		user-select: none;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		text-align: center;
		transition-property: color, background-color, border-color, text-decoration-color, fill, stroke,
			opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color,
			-webkit-backdrop-filter;
		transition-duration: 0.2s;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		height: 3rem;
		padding-left: 1rem;
		padding-right: 1rem;
		font-size: 0.875rem;
		line-height: 1em;
		min-height: 3rem;
		font-weight: 600;
		text-transform: var(--btn-text-case, uppercase);
		text-decoration-line: none;
		border-width: var(--border-btn, 1px);
		animation: button-pop var(--animation-btn, 0.25s) ease-out;
		--tw-border-opacity: 1;
		border-color: hsl(var(--p) / var(--tw-border-opacity));
		--tw-bg-opacity: 1;
		background-color: hsl(var(--p) / var(--tw-bg-opacity));
		--tw-text-opacity: 1;
		color: hsl(var(--pc) / var(--tw-text-opacity));
		border-radius: 9999px;
		width: 50%;
	}

	.btn-primary {
		background-color: var(--primary) !important;
		border-color: var(--primary) !important;
	}

	.btn-primary:hover {
		background-color: var(--primary-hover) !important;
		border-color: var(--primary-hover) !important;
		color: var(--white-hover) !important;
	}

	.btn-secondary {
		background-color: var(--secondary) !important;
		border-color: var(--secondary) !important;
	}

	.btn-secondary:hover {
		background-color: var(--secondary-hover) !important;
		border-color: var(--secondary-hover) !important;
		color: var(--white-hover) !important;
	}

	.btn-tertiary {
		background-color: var(--tertiary) !important;
		border-color: var(--tertiary) !important;
	}

	.btn-tertiary:hover {
		background-color: var(--tertiary-hover) !important;
		border-color: var(--tertiary-hover) !important;
		color: var(--white-hover) !important;
	}

	.btn-custom-arrow {
		position: relative;
		transition: background-color 300ms ease-out;
		background: linear-gradient(-45deg, var(--primary), var(--secondary), var(--primary));
		background-size: 400%;
		background-position: 90% 0;
		color: #fff;
		transition: background 0.8s;
		border: none;
	}

	.btn-custom-arrow:hover {
		background-position: 185% 50%;
	}
	.btn-custom-arrow span {
		display: inline-block;
		position: relative;
		transition: all 300ms ease-out;
		will-change: transform;
	}
	.btn-custom-arrow:hover span {
		transform: translate3d(-1rem, 0, 0);
	}
	.btn-custom-arrow svg {
		position: absolute;
		width: 1.1em;
		right: 0px;
		right: 0rem;
		opacity: 0;
		top: 50%;
		transform: translateY(-50%);
		transition: all 300ms ease-out;
		will-change: right, opacity;
	}
	.btn-custom-arrow svg * {
		stroke-width: 5;
		stroke-color: transparent;
	}
	.btn-custom-arrow:hover svg {
		opacity: 1;
		right: -2rem;
	}

	.button-charming {
		height: 3rem;
		/* border-radius: 0.rem; */
		padding: 0 2rem;
		background: linear-gradient(-45deg, var(--primary), var(--secondary), var(--primary));
		background-size: 400%;
		background-position: 90% 0;
		color: #fff;
		transition: background 0.8s;
		border: none;
	}

	.button-charming:hover {
		background-position: 185% 50%;
	}

	.btn {
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 8px;
		border: 1px solid transparent;
		min-height: 3rem;
		transition: 0.5s ease;
		max-width: 350px;
		text-align: center;
		justify-content: center;

		min-width: 250px;
	}

	.btn-ghost {
		background-color: var(--secondary-light);
		border-color: var(--secondary);
	}

	.btn-ghost:hover {
		background-color: var(--secondary);
		border-color: var(--secondary);
	}

	.btn-outline {
		background-color: transparent !important;
		border-color: #fff !important;
	}

	h2 {
		color: #fff;
	}

	#how {
		margin-top: 4rem !important;
		margin-bottom: 4rem !important;
		display: flex;
		flex-direction: column;
		justify-content: center;
		text-align: center;
	}

	#how > h2 {
		margin-top: 2rem !important;
	}

	.second-box-content {
		margin-bottom: 3rem;
	}

	.btn-what-is-a-transaction {
		margin-top: 1.5rem;
	}

	.centered-buttons-small {
		margin-left: auto;
		margin-right: auto;
	}

	.button-first-section {
		margin-left: initial;
		margin-right: initial;
	}

	.btn-first-tx {
		max-width: none;
	}

	@media (max-width: 768px) {
		.btn {
			padding-left: 1rem;
			padding-right: 1rem;
			margin-left: auto;
			margin-right: auto;
		}
	}
</style>
