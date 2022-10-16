<script lang="ts">
	import type { Network, ChainId } from '../utils/types';
	
	export let networks: Record<ChainId, Network>;

	import Close from '$lib/svg/close.svelte';
	import BscLogo from '$lib/images/bsc.jpg';
	import OptimismLogo from '$lib/images/optimism.png';
	
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	
	function buttonClick(network: Network) {
		parentClick(network);
		closeParent();
	}
	function closeParent() {
		dispatch('toggle');
	}

	export let parentClick = (value: Network) => {};
</script>

<div
	class="pt-3 max-w-lg px-1 pb-0 mb-3 transition-all duration-100 transform rounded-xl bg-bgBase md:px-6 lg:px-6"
>
	<div>
		<div
			class="origin-bottom absolute w-full h-full md:w-[95%] md:h-[95%] -ml-0 md:-ml-3 md:mt-3 bg-bgBase z-20 rounded-3xl"
		>
			<div class="max-h-full pb-4 -mt-3 overflow-auto scrollbar-hide rounded-3xl FixBackground">
				<div class="absolute z-10 w-full px-6 pt-3 bg-bgLight rounded-t-xl">
					<div class="flex items-center float-right mb-2 font-medium sm:float-none">
						<div
							class="
    flex items-center justify-center
    w-8 h-8
    float-right
    group
    hover:cursor-pointer
    rounded-full
    bg-white bg-opacity-10
    undefined
  "
						>
							<div on:click={closeParent}>
								<Close />
							</div>
						</div>
					</div>
				</div>
				<div class="px-3 pt-20 pb-8 space-y-4 bg-bgLighter md:px-6 rounded-xl BackgroundModal">
					{#if networks}
						{#each Object.values(networks) as network}
							<button
								on:click={() => buttonClick(network)}
								tabindex="0"
								class="
									flex items-center
									transition-all duration-75
									w-full rounded-xl
									px-2 py-3
									cursor-pointer
									border border-transparent
									hover:!bg-[#5170ad] hover:!bg-opacity-20
									hover:!border-[#5170ad]
									hover:bg-[#3f4f8c] active:bg-[#314367] 
									border-[#5170ad] dark:border-[#5170ad] 
									bg-opacity-50
								"
								class:bg-[#5170ad]={network.chainId === 1}
							>
								<img src={network.icon} alt={network.name} class="w-10 h-10 ml-2 mr-4 rounded-full" />
								<div class="flex-col text-left">
									<div class="text-lg font-medium text-white">{network.name}</div>
									<div class="text-sm text-white opacity-50">{network?.parent?.type === 'L2' ? 'Layer 2' : 'Layer 1'}</div>
								</div>
							</button>
						{/each}
					{/if}

					

				</div>
			</div>
		</div>
		<div class="grid grid-cols-1 gap-10  py-1 place-content-center ">
			<div class="mt-2">
				<div
					class="
    text-left px-2 sm:px-4 pt-2 pb-4 rounded-xl
    bg-bgLight
  "
				>
					<div>
						<div class="pt-1 pb-3">
							<div class="flex items-center justify-center md:justify-between">
								<div class="text-gray-400 text-sm undefined hidden md:block lg:block text-sm mr-2">
									Origin
								</div>
								<div class="flex items-center space-x-4 md:space-x-3">
									<div
										class="
    px-1
    flex items-center
    bg-bgLight
    text-white
    border border-[#5170ad] dark:border-[#5170ad]
    rounded-full
  "
									>
										<img
											src="data:image/jpeg;base64,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"
											class="w-5 h-5 my-1 mr-0 rounded-full md:mr-1 opacity-80"
										/>
										<div class="hidden md:inline-block lg:inline-block">
											<div class="mr-2 text-sm text-white">Ethereum</div>
										</div>
									</div>
									<button
										class=" w-7 h-7 md:w-7 px-0.5 py-0.5 border border-gray-500 rounded-full "
										tabindex="0"
										><div class="inline-block undefined">
											<img
												src="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABGAAD/4QMuaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA2LjAtYzAwNSA3OS4xNjQ1OTAsIDIwMjAvMTIvMDktMTE6NTc6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMi4xIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjgzQjc0RTg4OTEwNjExRUI4Njc0QjI1QTcwRjM1MEUwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjgzQjc0RTg5OTEwNjExRUI4Njc0QjI1QTcwRjM1MEUwIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Q0FCODhFQTk5MEZDMTFFQjg2NzRCMjVBNzBGMzUwRTAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Q0FCODhFQUE5MEZDMTFFQjg2NzRCMjVBNzBGMzUwRTAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAEAwMDAwMEAwMEBgQDBAYH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"
												class="duration-300 rounded-full hover:scale-125"
												alt="Arbitrum"
											/>
										</div>
										<div class="overflow-visible">
											<div
												class="
        bg-black
        border-0 mt-3 z-50 font-normal leading-normal
        text-sm max-w-xs text-left no-underline break-words rounded-lg
        hidden
      "
												style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate3d(254.4px, 63.2px, 0px);"
												data-popper-placement="bottom"
											>
												<div><div class="p-3 font-light text-white">Arbitrum</div></div>
											</div>
										</div></button
									><button
										class=" w-7 h-7 md:w-7 px-0.5 py-0.5 border border-gray-500 rounded-full "
										tabindex="0"
										><div class="inline-block undefined">
											<img
												src="data:image/jpeg;base64,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"
												class="duration-300 rounded-full hover:scale-125"
												alt="Avalanche"
											/>
										</div>
										<div class="overflow-visible">
											<div
												class="
        bg-black
        border-0 mt-3 z-50 font-normal leading-normal
        text-sm max-w-xs text-left no-underline break-words rounded-lg
        hidden
      "
												style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate3d(294.4px, 63.2px, 0px);"
												data-popper-placement="bottom"
											>
												<div><div class="p-3 font-light text-white">Avalanche</div></div>
											</div>
										</div></button
									><button
										class=" w-7 h-7 md:w-7 px-0.5 py-0.5 border border-gray-500 rounded-full "
										tabindex="0"
										><div class="inline-block undefined">
											<img
												src={BscLogo}
												class="duration-300 rounded-full hover:scale-125"
												alt="BNB Chain"
											/>
										</div>
										<div class="overflow-visible">
											<div
												class="
        bg-black
        border-0 mt-3 z-50 font-normal leading-normal
        text-sm max-w-xs text-left no-underline break-words rounded-lg
        hidden
      "
												style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate3d(334.4px, 63.2px, 0px);"
												data-popper-placement="bottom"
											>
												<div><div class="p-3 font-light text-white">BNB Chain</div></div>
											</div>
										</div></button
									><button
										class=" w-7 h-7 md:w-7 px-0.5 py-0.5 border border-gray-500 rounded-full "
										tabindex="0"
										><div class="inline-block undefined">
											<img
												src={OptimismLogo}
												class="duration-300 rounded-full hover:scale-125"
												alt="Optimism"
											/>
										</div>
										<div class="overflow-visible">
											<div
												class="
        bg-black
        border-0 mt-3 z-50 font-normal leading-normal
        text-sm max-w-xs text-left no-underline break-words rounded-lg
        hidden
      "
												style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate3d(374.4px, 63.2px, 0px);"
												data-popper-placement="bottom"
											>
												<div><div class="p-3 font-light text-white">Optimism</div></div>
											</div>
										</div></button
									><button
										class=" w-7 h-7 md:w-7 px-0.5 py-0.5 border border-gray-500 rounded-full "
										tabindex="0"
										><div class="inline-block undefined">
											<img
												src="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABGAAD/4QMuaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA2LjAtYzAwNSA3OS4xNjQ1OTAsIDIwMjAvMTIvMDktMTE6NTc6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMi4xIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkNBQjg4RUEzOTBGQzExRUI4Njc0QjI1QTcwRjM1MEUwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkNBQjg4RUE0OTBGQzExRUI4Njc0QjI1QTcwRjM1MEUwIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Q0FCODhFQTE5MEZDMTFFQjg2NzRCMjVBNzBGMzUwRTAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Q0FCODhFQTI5MEZDMTFFQjg2NzRCMjVBNzBGMzUwRTAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAEAwMDAwMEAwMEBgQDBAYH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"
												class="duration-300 rounded-full hover:scale-125"
												alt="Polygon"
											/>
										</div>
										<div class="overflow-visible">
											<div
												class="
        bg-black
        border-0 mt-3 z-50 font-normal leading-normal
        text-sm max-w-xs text-left no-underline break-words rounded-lg
        hidden
      "
												style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate3d(414.4px, 63.2px, 0px);"
												data-popper-placement="bottom"
											>
												<div><div class="p-3 font-light text-white">Polygon</div></div>
											</div>
										</div></button
									><button
										tabindex="0"
										class="w-8 h-8 px-1.5 py-1.5 bg-[#C4C4C4] bg-opacity-10 rounded-full hover:cursor-pointer group"
										><svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											aria-hidden="true"
											class="text-gray-300 transition transform-gpu group-hover:opacity-50 group-active:rotate-180"
											><path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M19 9l-7 7-7-7"
											/></svg
										></button
									>
								</div>
							</div>
						</div>
					</div>
					<div class="flex h-16 mb-4 space-x-2">
						<div
							class="
        flex flex-grow items-center
        pl-3 sm:pl-4
        w-full h-20
        rounded-xl
        border border-white border-opacity-20
         transform-gpu transition-all duration-75 hover:border-opacity-30
      "
						>
							<button
								class="sm:mt-[-1px] flex-shrink-0 mr-[-1px] w-[35%] cursor-pointer focus:outline-none"
								><div
									class="
      group rounded-xl
      -ml-2
      bg-white bg-opacity-10
    "
								>
									<div
										class="
        flex justify-center md:justify-start 
        bg-[#49444c] bg-opacity-100
        transform-gpu transition-all duration-100
        hover:bg-blue-100 dark:hover:bg-opacity-20 dark:hover:bg-blue-700
        border border-transparent
        hover:border-blue-300
        items-center 
        rounded-lg
        py-1.5 pl-2 h-14
      "
									>
										<div class="self-center flex-shrink-0 hidden mr-1 sm:block">
											<div class="relative flex p-1 rounded-full">
												<img
													class="rounded-md w-7 h-7"
													src="/static/media/usdc.749d24656d41116c14f7b673ca219092.svg"
												/>
											</div>
										</div>
										<div class="text-left cursor-pointer">
											<h4 class="text-lg font-medium text-white">
												<span>USDC</span><svg
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
													aria-hidden="true"
													class="inline w-4 ml-2 -mt-1 transition-all transform focus:rotate-180"
													><path
														stroke-linecap="round"
														stroke-linejoin="round"
														stroke-width="2"
														d="M19 9l-7 7-7-7"
													/></svg
												>
											</h4>
										</div>
									</div>
								</div></button
							><input
								pattern="[0-9.]+"
								class="
          ml-4
          -mt-0
          focus:outline-none
          bg-transparent
          pr-4
          w-2/3
         placeholder:text-[#88818C] 
         text-white text-opacity-80 text-lg md:text-2xl lg:text-2xl font-medium
        "
								placeholder="0.0000"
								name="inputRow"
								value=""
							/>
						</div>
					</div>
				</div>
			</div>
			<div
				class="
    text-left px-2 sm:px-4 pt-2 pb-4 rounded-xl
    bg-bgLight
  "
			>
				<div>
					<div class="pt-1 pb-3">
						<div class="absolute">
							<div class="-mt-12">
								<div
									class="
    rounded-full p-2 -mr-2 -ml-2 hover:cursor-pointer select-none
    undefined
  "
								>
									<div
										class="
      group rounded-full inline-block p-2 
      bg-bgLighter 
      transform-gpu transition-all duration-100
      active:rotate-90

      undefined
      undefined
    "
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											aria-hidden="true"
											class="
        w-6 h-6 transition-all
        text-white group-hover:text-opacity-50
      "
											><path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
											/></svg
										>
									</div>
								</div>
							</div>
						</div>
						<div class="flex items-center justify-center md:justify-between">
							<div class="text-gray-400 text-sm undefined hidden md:block lg:block text-sm mr-2">
								Dest.
							</div>
							<div class="flex items-center space-x-4 md:space-x-3">
								<button
									class=" w-7 h-7 md:w-7 px-0.5 py-0.5 border border-gray-500 rounded-full "
									tabindex="0"
									><div class="inline-block undefined">
										<img
											src="data:image/jpeg;base64,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"
											class="duration-300 rounded-full hover:scale-125"
											alt="Ethereum"
										/>
									</div>
									<div class="overflow-visible">
										<div
											class="
        bg-black
        border-0 mt-3 z-50 font-normal leading-normal
        text-sm max-w-xs text-left no-underline break-words rounded-lg
        hidden
      "
										>
											<div><div class="p-3 font-light text-white">Ethereum</div></div>
										</div>
									</div></button
								>
								<div
									class="
    px-1
    flex items-center
    bg-bgLight
    text-white
    border border-gray-500 dark:border-gray-500
    rounded-full
  "
								>
									<img
										src="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABGAAD/4QMuaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA2LjAtYzAwNSA3OS4xNjQ1OTAsIDIwMjAvMTIvMDktMTE6NTc6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMi4xIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjgzQjc0RTg4OTEwNjExRUI4Njc0QjI1QTcwRjM1MEUwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjgzQjc0RTg5OTEwNjExRUI4Njc0QjI1QTcwRjM1MEUwIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Q0FCODhFQTk5MEZDMTFFQjg2NzRCMjVBNzBGMzUwRTAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Q0FCODhFQUE5MEZDMTFFQjg2NzRCMjVBNzBGMzUwRTAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAEAwMDAwMEAwMEBgQDBAYH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"
										class="w-5 h-5 my-1 mr-0 rounded-full md:mr-1 opacity-80"
									/>
									<div class="hidden md:inline-block lg:inline-block">
										<div class="mr-2 text-sm text-white">Arbitrum</div>
									</div>
								</div>
								<button
									class=" w-7 h-7 md:w-7 px-0.5 py-0.5 border border-gray-500 rounded-full "
									tabindex="0"
									><div class="inline-block undefined">
										<img
											src="data:image/jpeg;base64,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"
											class="duration-300 rounded-full hover:scale-125"
											alt="Avalanche"
										/>
									</div>
									<div class="overflow-visible">
										<div
											class="
        bg-black
        border-0 mt-3 z-50 font-normal leading-normal
        text-sm max-w-xs text-left no-underline break-words rounded-lg
        hidden
      "
										>
											<div><div class="p-3 font-light text-white">Avalanche</div></div>
										</div>
									</div></button
								><button
									class=" w-7 h-7 md:w-7 px-0.5 py-0.5 border border-gray-500 rounded-full "
									tabindex="0"
									><div class="inline-block undefined">
										<img
											src={BscLogo}
											class="duration-300 rounded-full hover:scale-125"
											alt="BNB Chain"
										/>
									</div>
									<div class="overflow-visible">
										<div
											class="
        bg-black
        border-0 mt-3 z-50 font-normal leading-normal
        text-sm max-w-xs text-left no-underline break-words rounded-lg
        hidden
      "
										>
											<div><div class="p-3 font-light text-white">BNB Chain</div></div>
										</div>
									</div></button
								><button
									class=" w-7 h-7 md:w-7 px-0.5 py-0.5 border border-gray-500 rounded-full "
									tabindex="0"
									><div class="inline-block undefined">
										<img
											src={OptimismLogo}
											class="duration-300 rounded-full hover:scale-125"
											alt="Optimism"
										/>
									</div>
									<div class="overflow-visible">
										<div
											class="
        bg-black
        border-0 mt-3 z-50 font-normal leading-normal
        text-sm max-w-xs text-left no-underline break-words rounded-lg
        hidden
      "
										>
											<div><div class="p-3 font-light text-white">Optimism</div></div>
										</div>
									</div></button
								><button
									class=" w-7 h-7 md:w-7 px-0.5 py-0.5 border border-gray-500 rounded-full "
									tabindex="0"
									><div class="inline-block undefined">
										<img
											src="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABGAAD/4QMuaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA2LjAtYzAwNSA3OS4xNjQ1OTAsIDIwMjAvMTIvMDktMTE6NTc6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMi4xIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkNBQjg4RUEzOTBGQzExRUI4Njc0QjI1QTcwRjM1MEUwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkNBQjg4RUE0OTBGQzExRUI4Njc0QjI1QTcwRjM1MEUwIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Q0FCODhFQTE5MEZDMTFFQjg2NzRCMjVBNzBGMzUwRTAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Q0FCODhFQTI5MEZDMTFFQjg2NzRCMjVBNzBGMzUwRTAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAEAwMDAwMEAwMEBgQDBAYH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"
											class="duration-300 rounded-full hover:scale-125"
											alt="Polygon"
										/>
									</div>
									<div class="overflow-visible">
										<div
											class="
        bg-black
        border-0 mt-3 z-50 font-normal leading-normal
        text-sm max-w-xs text-left no-underline break-words rounded-lg
        hidden
      "
											style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate3d(414.4px, 255.2px, 0px);"
											data-popper-placement="bottom"
										>
											<div><div class="p-3 font-light text-white">Polygon</div></div>
										</div>
									</div></button
								><button
									tabindex="0"
									class="w-8 h-8 px-1.5 py-1.5 bg-[#C4C4C4] bg-opacity-10 rounded-full hover:cursor-pointer group"
									><svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
										class="text-gray-300 transition transform-gpu group-hover:opacity-50 group-active:rotate-180"
										><path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M19 9l-7 7-7-7"
										/></svg
									></button
								>
							</div>
						</div>
					</div>
				</div>
				<div class="flex h-16 mb-4 space-x-2">
					<div
						class="
        flex flex-grow items-center
        pl-3 sm:pl-4
        w-full h-20
        rounded-xl
        border border-white border-opacity-20
        false
      "
					>
						<button
							class="sm:mt-[-1px] flex-shrink-0 mr-[-1px] w-[35%] cursor-pointer focus:outline-none"
							><div
								class="
      group rounded-xl
      -ml-2
      bg-white bg-opacity-10
    "
							>
								<div
									class="
        flex justify-center md:justify-start 
        bg-[#49444c] bg-opacity-100
        transform-gpu transition-all duration-100
        hover:bg-blue-100 dark:hover:bg-opacity-20 dark:hover:bg-blue-700
        border border-transparent
        hover:border-blue-300
        items-center 
        rounded-lg
        py-1.5 pl-2 h-14
      "
								>
									<div class="self-center flex-shrink-0 hidden mr-1 sm:block">
										<div class="relative flex p-1 rounded-full">
											<img
												class="rounded-md w-7 h-7"
												src="/static/media/usdc.749d24656d41116c14f7b673ca219092.svg"
											/>
										</div>
									</div>
									<div class="text-left cursor-pointer">
										<h4 class="text-lg font-medium text-white">
											<span>USDC</span><svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
												aria-hidden="true"
												class="inline w-4 ml-2 -mt-1 transition-all transform focus:rotate-180"
												><path
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													d="M19 9l-7 7-7-7"
												/></svg
											>
										</h4>
									</div>
								</div>
							</div></button
						><input
							pattern="[0-9.]+"
							disabled=""
							class="
          ml-4
          -mt-0
          focus:outline-none
          bg-transparent
          pr-4
          w-2/3
         placeholder:text-[#88818C] 
         text-white text-opacity-80 text-lg md:text-2xl lg:text-2xl font-medium
        "
							placeholder="0.0000"
							name="inputRow"
							value=""
						/>
					</div>
				</div>
			</div>
		</div>
		<div class="py-3.5 px-1 space-y-2 text-xs md:text-base lg:text-base">
			<div class="flex items-center justify-between">
				<div class="flex justify-between text-[#88818C]">
					<span class="text-[#88818C]">Will also receive 0.0030 </span>
					<span class="ml-1 font-medium text-white"
						>ETH<span class="text-[#88818C] font-normal"> ($3.86)</span></span
					>
				</div>
			</div>
			<div class="flex justify-between">
				<div class="flex space-x-2 text-[#88818C]">
					<p>Expected Price on</p>
					<span class="flex items-center space-x-1"
						><img
							src="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABGAAD/4QMuaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA2LjAtYzAwNSA3OS4xNjQ1OTAsIDIwMjAvMTIvMDktMTE6NTc6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMi4xIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjgzQjc0RTg4OTEwNjExRUI4Njc0QjI1QTcwRjM1MEUwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjgzQjc0RTg5OTEwNjExRUI4Njc0QjI1QTcwRjM1MEUwIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Q0FCODhFQTk5MEZDMTFFQjg2NzRCMjVBNzBGMzUwRTAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Q0FCODhFQUE5MEZDMTFFQjg2NzRCMjVBNzBGMzUwRTAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAEAwMDAwMEAwMEBgQDBAYH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"
							class="w-4 h-4 rounded-full"
						/><span class="text-white">Arbitrum</span></span
					>
				</div>
				<span class="text-[#88818C]">—</span>
			</div>
			<div class="flex justify-between">
				<p class="text-[#88818C] ">Slippage</p>
				<span class="text-[#88818C]">—</span>
			</div>
		</div>
		<div class="origin-top -mx-0 md:-mx-6" hidden="" style="display: none;">
			<div>
				<div class="w-[30%]">
					<div
						class="flex items-center justify-center  h-[26px] -mt-4 p-2 absolute ml-5 md:ml-10 text-sm text-[#D8D1DC] rounded-md bg-bgLight"
					>
						Withdraw to...
					</div>
				</div>
				<div class="h-16 px-2 pb-4 mt-4 space-x-2 text-left sm:px-5">
					<div
						class="
      h-14 flex flex-grow items-center
      bg-transparent
      border border-bgLight hover:border-bgLightest focus-within:border-bgLightest
      pl-3 sm:pl-4
      py-0.5 rounded-xl
    "
					>
						<input
							class="
          focus:outline-none
          bg-transparent
          w-[300px]
          sm:min-w-[300px]
          max-w-[calc(100%-92px)]
          sm:w-full
          text-white text-opacity-80 text-xl
          placeholder:text-[#88818C]
        "
							placeholder="Enter Arbitrum address..."
							value=""
						/>
					</div>
				</div>
			</div>
		</div>
		<div class="px-2 py-2 -mt-2 md:px-0 md:py-4">
			<button
				class="group cursor-pointer outline-none focus:outline-none active:outline-none ring-none duration-100 transform-gpu w-full rounded-lg my-2 px-4 py-3 text-white text-opacity-100 transition-all hover:opacity-80 disabled:opacity-100 disabled:text-[#88818C] disabled:from-bgLight disabled:to-bgLight bg-gradient-to-r from-[#CF52FE] to-[#AC8FFF] undefined false"
				disabled=""
				type="button"><span>Choose your network</span></button
			>
		</div>
		<div class="" />
	</div>
</div>

<style>
	.FixBackground,
	.BackgroundModal {
		background-color: #353038;
	}
</style>
