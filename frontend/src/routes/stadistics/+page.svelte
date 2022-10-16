<script>
	import Logo from '$lib/svg/logo.svelte';
</script>

<svelte:head>
	<script async src="//cdn.embedly.com/widgets/platform.js" charset="UTF-8"></script>
</svelte:head>

<div class="index" style="background-color:#2A303C">
	<div
		class="from-primary to-secondary text-primary-content -mt-[4rem] grid place-items-center items-end bg-gradient-to-br pt-20 hero-image-main"
	>
		<div
			class="hero-content col-start-1 row-start-1 w-full max-w-7xl flex-col justify-between gap-10 pb-20 lg:flex-row lg:items-end lg:gap-0 xl:gap-20"
		>
			<div
				class="hero from-primary to-accent text-primary-content min-h-screen bg-gradient-to-br background-gradient"
				id="private"
			>
				<div class="hero-content mx-auto max-w-md text-center md:max-w-full">
					<div
						id="transaction"
						class="px-8 mx-4"
						style="background-color:#fff !important; border-radius:12px"
					>
						<a class="pt-4 block" href="/"><Logo /></a>
						<h2 class=" mb-12 text-4xl font-extrabold md:text-6xl pt-8">
							Synapse-Arbitrum Bridge Stats
						</h2>
						<iframe
							src="https://dune.com/embeds/1411481/2395999/d65428c3-0856-4796-af3a-7e6acf36849e"
							height="500px"
							width="100%"
							title="chart 1"
						/>
						<iframe
							src="https://dune.com/embeds/1411481/2396072/22377e90-df32-4b3d-b1e0-15b64a2cc6e2"
							height="500px"
							width="100%"
							title="chart 2"
						/>
						<iframe
							src="https://dune.com/embeds/1411481/2396125/ee44c871-2d55-42d5-9f57-1b4d6bdf2f63"
							height="500px"
							width="100%"
							title="chart 33"
						/>
						<div
							style="    
                        padding-bottom: 2rem;
                        margin-bottom: 2rem;"
						>
							See the whole
							<a
								class="text-decoration: underline !important; "
								href="https://dune.com/deivitto/widgets-and-bridges">dashboard</a
							> at dune
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
