<script>
	import Logo from '$lib/svg/logo.svelte';

	function iframeRef(frameRef) {
		return frameRef.contentWindow ? frameRef.contentWindow.document : frameRef.contentDocument;
	}
	let inside;
	function setFrame() {
		var inside = iframeRef(document.getElementById('iframe'));
	}

	console.log(inside);
</script>

<svelte:head>
	<script async src="//cdn.embedly.com/widgets/platform.js" charset="UTF-8"></script>
</svelte:head>

<div class="index" style="background-color:#2A303C">
	<div
		class="from-primary to-secondary text-primary-content -mt-[4rem] grid place-items-center items-end bg-gradient-to-br hero-image-main"
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
						<h2 class=" mb-12 text-4xl font-extrabold md:text-6xl pt-8">Leaderboard of Bridges</h2>
						<!-- <iframe
							src="https://analytics.synapseprotocol.com/bridge"
							height="500px"
							width="100%"
							title="chart 1"
							id="iframe"
						/> -->

						<div class="flex flex-col">
							<div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
								<div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
									<div class="overflow-hidden border-b border-gray-900 shadow sm:rounded-lg">
										<table class="min-w-full divide-y divide-gray-900">
											<thead class="bg-gray-800"
												><tr
													><th
														scope="col"
														class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-100 uppercase"
														>Name</th
													><th
														scope="col"
														class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-100 uppercase"
														>More used bridges</th
													></tr
												></thead
											><tbody class="bg-gray-700 divide-y divide-gray-900"
												><tr
													><td class="px-6 py-4 whitespace-nowrap"
														><div class="flex items-center">
															<div class="flex-shrink-0 w-6 h-6">
																<div class="relative w-6 h-6 rounded-full">
																	<img
																		src="/static/media/eth.328597820c3259f6c4149556e9c912f8.svg"
																		alt=""
																		layout="fill"
																		objectfit="contain"
																	/>
																</div>
															</div>
															<div class="ml-4">
																<div class="text-base font-medium text-gray-100">Ethereum</div>
															</div>
														</div></td
													><td class="px-6 py-4 whitespace-nowrap"
														><div class="text-base text-gray-100">$3.398B</div></td
													></tr
												><tr
													><td class="px-6 py-4 whitespace-nowrap"
														><div class="flex items-center">
															<div class="flex-shrink-0 w-6 h-6">
																<div class="relative w-6 h-6 rounded-full">
																	<img
																		src="/static/media/arbitrum.027ef64d9714dcf85e82c5adfc81c583.svg"
																		alt=""
																		layout="fill"
																		objectfit="contain"
																	/>
																</div>
															</div>
															<div class="ml-4">
																<div class="text-base font-medium text-gray-100">Arbitrum</div>
															</div>
														</div></td
													><td class="px-6 py-4 whitespace-nowrap"
														><div class="text-base text-gray-100">$1.59B</div></td
													></tr
												><tr
													><td class="px-6 py-4 whitespace-nowrap"
														><div class="flex items-center">
															<div class="flex-shrink-0 w-6 h-6">
																<div class="relative w-6 h-6 rounded-full">
																	<img
																		src="/static/media/avalanche.6df7e20aaed05413292e9b6e328e4223.svg"
																		alt=""
																		layout="fill"
																		objectfit="contain"
																	/>
																</div>
															</div>
															<div class="ml-4">
																<div class="text-base font-medium text-gray-100">Avalanche</div>
															</div>
														</div></td
													><td class="px-6 py-4 whitespace-nowrap"
														><div class="text-base text-gray-100">$1.414B</div></td
													></tr
												>
												<tr
													><td class="px-6 py-4 whitespace-nowrap"
														><div class="flex items-center">
															<div class="flex-shrink-0 w-6 h-6">
																<div class="relative w-6 h-6 rounded-full">
																	<img
																		src="/static/media/fantom.9248a2ffc8ffd648deb33b2ae9f8a95a.svg"
																		alt=""
																		layout="fill"
																		objectfit="contain"
																	/>
																</div>
															</div>
															<div class="ml-4">
																<div class="text-base font-medium text-gray-100">Fantom</div>
															</div>
														</div></td
													><td class="px-6 py-4 whitespace-nowrap"
														><div class="text-base text-gray-100">$1.1B</div></td
													>
												</tr>

												<tr
													><td class="px-6 py-4 whitespace-nowrap"
														><div class="flex items-center">
															<div class="flex-shrink-0 w-6 h-6">
																<div class="relative w-6 h-6 rounded-full">
																	<img
																		src="/static/media/binance.d8250e092577800dda318cd88dfe7c70.svg"
																		alt=""
																		layout="fill"
																		objectfit="contain"
																	/>
																</div>
															</div>
															<div class="ml-4">
																<div class="text-base font-medium text-gray-100">BSC</div>
															</div>
														</div></td
													><td class="px-6 py-4 whitespace-nowrap"
														><div class="text-base text-gray-100">$959.53M</div></td
													></tr
												>

												<tr
													><td class="px-6 py-4 whitespace-nowrap"
														><div class="flex items-center">
															<div class="flex-shrink-0 w-6 h-6">
																<div class="relative w-6 h-6 rounded-full">
																	<img
																		src="/static/media/harmonyone.5890f004f7c3d7f906dab6ac9203fc57.svg"
																		alt=""
																		layout="fill"
																		objectfit="contain"
																	/>
																</div>
															</div>
															<div class="ml-4">
																<div class="text-base font-medium text-gray-100">Harmony</div>
															</div>
														</div></td
													><td class="px-6 py-4 whitespace-nowrap"
														><div class="text-base text-gray-100">$743.46M</div></td
													></tr
												>
												<tr
													><td class="px-6 py-4 whitespace-nowrap"
														><div class="flex items-center">
															<div class="flex-shrink-0 w-6 h-6">
																<div class="relative w-6 h-6 rounded-full">
																	<img
																		src="/static/media/dfk.b835964b71a810c11cdaa4b88e47beb8.svg"
																		alt=""
																		layout="fill"
																		objectfit="contain"
																	/>
																</div>
															</div>
															<div class="ml-4">
																<div class="text-base font-medium text-gray-100">DFK</div>
															</div>
														</div></td
													><td class="px-6 py-4 whitespace-nowrap"
														><div class="text-base text-gray-100">$678.55M</div></td
													></tr
												>
												<tr
													><td class="px-6 py-4 whitespace-nowrap"
														><div class="flex items-center">
															<div class="flex-shrink-0 w-6 h-6">
																<div class="relative w-6 h-6 rounded-full">
																	<img
																		src="/static/media/polygon.49c728fd68de61ac611a454a5c6ceb2d.svg"
																		alt=""
																		layout="fill"
																		objectfit="contain"
																	/>
																</div>
															</div>
															<div class="ml-4">
																<div class="text-base font-medium text-gray-100">Polygon</div>
															</div>
														</div></td
													><td class="px-6 py-4 whitespace-nowrap"
														><div class="text-base text-gray-100">$498.84M</div></td
													></tr
												>

												<tr
													><td class="px-6 py-4 whitespace-nowrap"
														><div class="flex items-center">
															<div class="flex-shrink-0 w-6 h-6">
																<div class="relative w-6 h-6 rounded-full">
																	<img
																		src="/static/media/metis.13e5d8fe40311f7122402f3e5a53398a.svg"
																		alt=""
																		layout="fill"
																		objectfit="contain"
																	/>
																</div>
															</div>
															<div class="ml-4">
																<div class="text-base font-medium text-gray-100">Metis</div>
															</div>
														</div></td
													><td class="px-6 py-4 whitespace-nowrap"
														><div class="text-base text-gray-100">$261.25M</div></td
													></tr
												><tr
													><td class="px-6 py-4 whitespace-nowrap"
														><div class="flex items-center">
															<div class="flex-shrink-0 w-6 h-6">
																<div class="relative w-6 h-6 rounded-full">
																	<img
																		src="/static/media/aurora.fa6b9e2ad1385def9ed26fc2105e7fad.svg"
																		alt=""
																		layout="fill"
																		objectfit="contain"
																	/>
																</div>
															</div>
															<div class="ml-4">
																<div class="text-base font-medium text-gray-100">Aurora</div>
															</div>
														</div></td
													><td class="px-6 py-4 whitespace-nowrap"
														><div class="text-base text-gray-100">$259.62M</div></td
													></tr
												>

												<tr
													><td class="px-6 py-4 whitespace-nowrap"
														><div class="flex items-center">
															<div class="flex-shrink-0 w-6 h-6">
																<div class="relative w-6 h-6 rounded-full">
																	<img
																		src="/static/media/optimism.6c6547955a6a5b8f24179eb9041cf591.svg"
																		alt=""
																		layout="fill"
																		objectfit="contain"
																	/>
																</div>
															</div>
															<div class="ml-4">
																<div class="text-base font-medium text-gray-100">Optimism</div>
															</div>
														</div></td
													><td class="px-6 py-4 whitespace-nowrap"
														><div class="text-base text-gray-100">$214.33M</div></td
													></tr
												>

												<tr
													><td class="px-6 py-4 whitespace-nowrap"
														><div class="flex items-center">
															<div class="flex-shrink-0 w-6 h-6">
																<div class="relative w-6 h-6 rounded-full">
																	<img
																		src="/static/media/boba.834bef0e6102f659de098f61fbbaa96a.svg"
																		alt=""
																		layout="fill"
																		objectfit="contain"
																	/>
																</div>
															</div>
															<div class="ml-4">
																<div class="text-base font-medium text-gray-100">Boba</div>
															</div>
														</div></td
													><td class="px-6 py-4 whitespace-nowrap"
														><div class="text-base text-gray-100">$150.48M</div></td
													></tr
												>
												<tr
													><td class="px-6 py-4 whitespace-nowrap"
														><div class="flex items-center">
															<div class="flex-shrink-0 w-6 h-6">
																<div class="relative w-6 h-6 rounded-full">
																	<img
																		src="/static/media/klaytn.106404fc426fcb492f4a124ef12a2451.svg"
																		alt=""
																		layout="fill"
																		objectfit="contain"
																	/>
																</div>
															</div>
															<div class="ml-4">
																<div class="text-base font-medium text-gray-100">Klaytn</div>
															</div>
														</div></td
													><td class="px-6 py-4 whitespace-nowrap"
														><div class="text-base text-gray-100">$91.87M</div></td
													></tr
												><tr
													><td class="px-6 py-4 whitespace-nowrap"
														><div class="flex items-center">
															<div class="flex-shrink-0 w-6 h-6">
																<div class="relative w-6 h-6 rounded-full">
																	<img
																		src="data:image/jpeg;base64,/9j/7gAhQWRvYmUAZEAAAAABAwAQAwIDBgAAAAAAAAAAAAAAAP/bAIQAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQICAgICAgICAgICAwMDAwMDAwMDAwEBAQEBAQEBAQEBAgIBAgIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMD/8IAEQgAgACAAwERAAIRAQMRAf/EAOQAAQACAwEBAQEAAAAAAAAAAAQICQAFBwYKAwIBAAEEAwEBAQEAAAAAAAAAAAIAAQMGBAcICQoFCxAAAgEEAgIBAwEFCQAAAAAAAQMABAUGBwIIEQkgEDA4GFAhKBkpMRITFBUWFyc3EQAABQMDAgQEAwcDBQAAAAABAgMEBQDwBhEhB2ESEFHhEzFBkQgiIxQgcYEyZBUWobS1QmJDY7YSAAIBAgQCBgUHCQcFAAAAAAECAxEEABIFBiFhEDFBIhMHIFFxMhQwgUKyI3MIkbFSYnJjs7QVocGCojNTFpKTJCW1/9oADAMBAQIRAxEAAACEntlvcZuM3EaETikIRoJuE3BI4TfXyOE3BIgGQJFMSo4YzcRoROKQhGgm4TcEjhN9fI4TcEiAZAkQJCmPUMIRoROKQhGgm/Tedv2pSee9x0v7ccLfSamcx3DgAkQDIEiBIQDUyahhCJxSEI1+GOdy/wAve9rSfADbqMI8S0dpgpC+n3R9QX0G6lBIgSEA0CQpl07BFIQjQTe2T5yN0XF/M3vDEsSxLEsdfNt9lXOdanshrwBoEhBNTMp+GI0E3/LDP6vv54fY3ttWZ+JYliWJYlETv+p/Jv8Ad/y4CQgmgSPM6nYQTcJv0LQP6/1F/Ax1nXd6i678rcMaefm3fO8c6/vYliXlbpi/Et/SM47FK4JHCbzOp2EE3BI6aqVhvB/GOk29rTXFNv65HIfw59R7TvDPpn0lYyKu/XbWfzYfZ/z7rciUJuE3mdTsIEjhN/R1yl9l1FoLrmJTXhhxftm3ZG6s0I78+LSt+17J6NVN196B8vt14CbgN5nU/CCb6+Rwm9pnJ3nJ/UWP+BIcsvKrJeIx2PaXn8jO6VBWIDdD9ahNwG4ZHmdTsLXyOE3BIrCuYuFPe/k1FAYsXrtuSvbf/X1xfKvnRijivd9w159J9iANwyOE3mZT8IJuCRAMtJCIMfHt+5W856bOwvSUk73BcgecP5u1KfYnpCOcgyOE3FI8y6dhAkQDIEiBIQDVu/IPm9TX2L6RgkftGrdNcHu+zdJZP2wyOE3FI4jeZNPwQGQJECQgGgSF1rWWnuEbU3EE3CbgNwyOE3FI4jcRKY9QwwSIEhANAkIJoEjhNwm4DcMjhNxSOI3ESGbzEqOECQgGgSEE0CRwm4TcBuGRwm4pHEbiJDNxm/8A/9oACAECAAEFAAPEA8QCAQCAQDzAIBAIBAIBAIBAIB4gEAgEAgHmAQCAQCAQCAQCAQCAQCAQCAeYBN2duOtfXThkXvT6U2Sqw73gdHMnq9Rb90rvq0AQCAQCAQCAQCAQDzK6uobXQ9/PctleVXO5XK43iv8AphecZlrnJPXJ7huG07wBAIBAIBAIBAPMAnu77rXGy8fiCQfTv3auHZjTQEAgEA8wCAeYBLpcqGy2zd+0rzu3cHy9YG6KzSHdwCAQDzAIB5gEAnbKsqrb1X15rPYO2slwD0n9wMtosk9F3aG2Ue9upvYXrZV/XW9ZV27YnD9/EDzAIBAIBAJn2K2vOcF1HgekerOL8aLdWQA4luCimSXy51do7benz/Uk5vrnYGtLvQW+vutZ0V9WfYfaex0ngxQEAgEAgEAmY2HjkuNa/suC2PJMYyi7t3djGTXmt3n/ALjx3MM0yHVuTYXc2bWVzRQ7O1zjvFx2btLlg+P8MXxYCAQCAQCAQCY2T+ojFPP6hsN/ITBvP6gsOu9+uW7rPk1nyjYGL3bD7zmuA51WXbZ4EAgEAgEAgEAmP4/eU76xWndx7D4aP4hsUwa82/ciLVTorNbfv39q3/3vX+C3qz7dAgEAgEAgEAgE4UNPwqFWalVccO4+OxHFKxzA8zWw/wC/9WcT/wA+cUr48gIBAIBAIBAIBAIBMPH8RQHmATHtbW6y51QY1bqC7AQCAQCAQCAQCAQCAS1a4tluz0CAQCAQCAQCAQDzAIBAIBAIB5gEAgEAgEAgEAgHmAeYBAIBAIB5gEAgEAgEAgEAgHmAeYBP/9oACAEDAAEFAP2Na8dvd5idVZM3jU6uyhHG4Wi52ln2uHDkzliOtaen4cOHBfD6VNLTVicx11/kF/AD46uxjg357DxnhZbj9APivhyZztdAu1275ZvbeNzxmAfKwcePO+11xobZT1u3MXp+aNw4/wA+Vmyax3/j9a7jx50Q+fGt423luLunVXXIE4V3Mz/jy0d2ws4t/Ynfulbvprsxh2yrLR19FcFc+fBfHL9jWC10CWqer5bEwui2Hhem7XpDXWb4RszMrj21wDP8wuHbyk21iOyNo5v1nzvWV+tPczLcTbdO99hYmpp+yXZl2uMKotdYT88GPnvBrz83Nafmxqf80dXZRnNx7Y4tue057uHA9na6yLaWrt4ZJmG+vsYfgOY0fcPX9DWcO7ms/wA2ME0rl+P9lOFOvg3SX5jaF/MDVOlcwxHsL9gL4/3uFDS8KvW/Ece7I4gGaS/MbQq+f6vwAPt64/Nv6YxpHEcV2ZR47ZKC6/aAll0ph1j2h90D74H3f//aAAgBAQABBQDnzjGRjIxkYyMZGMjGRjIxkYyMZGMjGRjIxkYyMZGMjGRjIxkYyMZGMjGRjIxkYyMZGMjGRjIxkYyMZGMjGTXmitw7c5Wv1ndjrmjJPWt2Zs1PsPVuyNWXBjIxkYyMZGMjGRjIxkYyMZFKqa2p6u+vqyWWjpKOkt9L9MkxjHcws3cj14c8FtrGRjIxkYyMZGMjGRjIxk9cXXakuXL4/wBs9jnWWk0jsdjIxkYyMZGMjGRjJTU9TcKzW2FW/XGAfLvXrSn2f1dYyMZGMjGRjIxkYyaTWmr3XnOwcH1nj+Z+2rrFjtXZfcP1/q6rTPZvRfYCm+ud01PWYRzb54sZGMjGRjIxkYyWO8Xex5AOtW0+wNbWbt9bmpOQ7h9Bsg5W7rN1i3mdVewDN9LZBhuf4NsS1V1fQ2yk7e+yDRmD4lUrfSMYyMZGMjGRjIxkwDZN61Nmm/P1N7x17sDS2sLD0U2vq3XNu6E5F1lzHU+lta959Ybfxi4+s/W+a8leqbYV9qKa+9Eeg1Ltrat73TsNjIxkYzzGMjGRjIxk2Szl/Le2vy8et3cnL+m9vfkR64t84Tqam6D7D6f1uq+ve2esO3MS0VujqPrjVPU1jIxkYzzGMjGRjIxkYyZ5uDWlx6D7Vu1uZ62Nzcv6bGze1Otsy6gCiUmq7NcvHrj7Y8/Hrn3t2x1hszqOxkYzzGMjGRjIxkYyMZOVJSLqilvFu5GHl60OYWObGTs7y8et7to9X8uTn/h8eTGeYxkYyMZGMjGRjIxkYyMZNx8vHrJYyMZMy7R7Zz3T9VfsprbexnmMZGMjGRjIxkYyMZGMjGRjJkHZfbmTaeYyMZGMjGeYxkYyMZGMjGRjIxkYyMZGMjGRjIxkYyMZ5jGRjIxkYyMZOfOMZGMjGRjIxkYyMZGMjGeYxkYyMZGMjGTnzjGT/9oACAECAgY/AOfRU4qcVOKnHLoqcVOKnFTjnjnjn01OKnFTipxy6KnFTipxU4545459FBipxU4qcVOOXQV85vOPRtF1HIGFm0rXGoMpFQ66daJPfMhHU4tyhqO9xGHt9N0rfGsQg8JbPTLREbmBf6lYyU7eMYPKvDEVtrN7uvb0TMB4moaUJI1r2t/S7nUpKDtohPKmH1zyd8z9G3FYooMgs7mOSaCvULm2qLi2Y9i3EUbHgaUIxzxzxz6KDFBipxU4qccsXmqaneRW2mW0TyyyyuscUUUal5JJJHIVERAWd2IVVBJIAJxrnlL+EXV5NK2ZC7w3O4kGW+vyKq40vMK2Nr15LugvZu68JtFX7a81XV7+e61S4kaSWaZ2lllkc1Z5JHLO7sSSzMSxJqST06bvDYO6dQ0bdVm+aG7sp5La4jP6ssTK4B6mWuVlqrAgkY0HyM/FXd2tpv26dINN15VS3ttQmYhY7XUYlCw2t5KxCw3ESx2twxETRW82Rrjn0UGKDoqcVOOXRa/g98udXaGa6torvck0TUfwJaSWWk5gcyiZMt5eLQeJA9pHmMUtxG3ogg8cX/lV5i6s1z5v7JihiaeRqzajpL/Z2l5IzHNLcW7KbS8kNWalrPK7TXTnFBig6OWKnHLo1HWdTnEWm2kEk0rnqSKJC8jnkqqSfZjzK829fdjqm4dZur0qxr4STSs0MC8TRLeHw4IxU5Y41Wpp6fkhrSXZj0XW9SXQr5a0SS31dltE8Q8O5BeNa3deoNbqTwBxQdHLHLHLoqcfiW1GyLC9g2BuGSOnA500m7ZKHsOYCnPFps7yz2bqOubnm4rb2cDzyBQQDI+QERRJUZ5pCkUY4u6jjiC/3PebX20HAJgu72W5uVr2FdOtry2qO0fFCnV7HutA8wtm6jMq18JptQtnbkhfT3iJ+8kjX1sMRw+cfljf6VYSSZIrwBLmwmbiQsd9bNLbGRlGYQtIs4Xi0a0IHTsLULAkX0GtWMkZBofES5iZKHsOYCh9eFPLHLHLHLoqcVON57L11yuiavpV3ZXBBVSILqCSCUgsCoIjdiCwKg8SCOGIfLP8Omw4GmYr492Q0015MoI8W5nAE97LUsV7yW8QOW2jWGiDxp9cNjGepVcQkD1AWyFv+s5vWa48a33rLIw+i1zcNX/DIrIfnpjUdm+dOx7PWtn6hEYbiOeCGSOeNutGXK1rMKd7I6BqgHOpFcah5o/grvBqGiuS8+3LiYLcWxNSV0+5uHHiKB1Wl5IJQFJgurnOkKy6B5ibJ1bQtbQkGC/tJ7SThwJCzohZfUy1UgggkEHFvp+l2M1zqErZUiiRpJHY9SoiAsxPqAJxsPzE8zNsTbQ8rNL1S0vpW1SFor2+jtp45zb29g5SeNZlQI11dCCFI3MsXxJXwjG8bhoyoIINQRTgQRwI9WOWOXRU4qcVONU0OR5FS4RRVDRhldXFK1FKqAwPWtR24u9n20jNuWKPNIzqSXoFZkElMoygglFAHDiWZTTWtvyXjHRQJo1h4ZF8JAVZRTg1VJLdZzEHhSm4NHutRmk0kmeNYSxMSiIDIVjPdUjLxZQCatUmprr3l1LodDAjjxGKskrR5c6mPL3aEnK2ZictaKaYbW9iXUikVrFmFadqgv3JU/dyVPAUznqOkeYOwllr7wplVqcKm3uEdSeYcD1AA4kbanlysFw4oRGtvbBuTGGNiwr2U48sJZNaf0zbbEVUK0aMOwtmPi3B9QqIswB7h440jQY3do7dCKuasSzs5J9QzMcq/RWi9mOXRU4qcVOKnHPGrcePiT/wcav9/dfwzjWx+/u/qnG5B+9vPz43jpOo3lzLpIWcCJ2YxIqPGISqHup3fdZQCwYmpzGu4Nif0Yxx2YkpKXDiRoXVHBjKjKCWJUhm4DiBXhr2zdPsZItQsfErJkjVHMTrHKFKnMMrtwqO8ATw4A7t2dLYW66ZZ+OImUN4lbeZIasxYhs4YsRlFDQDtry6KnFTipxU454541bVJdOlXTayuJSp8Mh4gqhX90tU0Kg1FDUcMa1WJhlkuGPDqVo+63sOZaHmMa4P3139U41/ck4j/pUhmZCGqzGUii5esZeNSeHAUrXhLepXxXHHG8v277+OuN8feah/NLjeG47wR/0y4+JMZDVZvHnWUArSoygENXtplqOIxU4qeipxzxzxzw10sf256ziTUkUfEMKE0FaeqvXTGtgf7139Q4LhBnPWccsby/bvv4643x3TwfUD83xS0/OMGQIAx7cVOKno5Y545459FBigxrg/fXX1Mcscsa1vKES/FXYeoLAoDIwZyqhQ1WK1NWYCpAA7L3WYLeNbycd9gih2/acDM1OypNMVOKno5Y5Y5459FBig6NS3rGknxk4brYGMFgAzKtKhmA41YjiaAVxyxy6KnFT0cscscsc+igxQdHLHLHLoqcVPRyxyxy6aDFB0cscscuipxU9HLHLHLo54/9oACAEDAgY/AOnl8vy+X5ej/wCt02WVK+9SiezO1F+atcVeS1jPqaRif8iMP7cFo1t5j6kkoT/3FQf248LUrGWF+zMpAP7Le63zE+ny9BY41LOxAAHEknqAH5hiLUNxRiS5NCsJ9xPvP0m/V90dRzdixxoFjUUAAoAB2ADgB0vb3cCSQMOKsAwPzHEuqaCrNaLUvFxLIO1kJ4so7QasvXUj3fkW3Hex1CsVgB6qjg0nzHur6jmPWAfTS+s48un3JJoOpJOtlHqB95R2d4DgvyCRoKuxAHtPAYsdOhHchiVfaQOJ9pNSeZ9PU48tZIk8VeRj7xp7VzL8/wAhoiN7pvIQfYZFBw13qF3HDbj6TkAV9Qr1k9gFSewYZLaO5uKfSRAq/lkZW/y4C3Gn3kY9eVGA9tHB/IDgnStRSVwKlOKuPajANTnSnP0LtH90xOD7CpwPX6a6i0qItuRKWYgKvhnNmYkgBRSpJIAHGuDt7y0087h3M7mNJQsj2qN+hawRUkuSKHvqUjNAwaYEkC91bev9EgfisfxItGVT1AJp0TuCB2SsH/SNcfF6Z5zvcyrx8N9Sv2qeS3ETRH/GVHrxY2/nHtWS507xAFu41jhm4dsNzbf+JKwXvGJgsjfTkSpOIL6DV454OCtKopJE5H+ndwe9E/A0YAo/vLVO+RPY3cU0J7UYMPygnDPI4VB1kmgHtJxe2tpdpPeNE4JRh4cQKkF3k92i8TQEnhQ5RxxHNBIrwuoKspBDA8QQRwII4gjr9PXtmahdzwWd9GqtJCQJFySJKtKgggsgDqRR0LKeuuNU8qdrNJL5hQQZri4njzSS0VJHiWcAIuRWVmhjCJw4l5EYjd2zbzXZn2qq3MMdqT9inw8aMjotKLISpLP7zZmBJFAN7bZvtw3cu3R8XCtq0jG3RbdUMZjhJyIwK8XVQzFnzE5mrvLyK1TaPi2ltDKrSzMkkVw0OTxUaAp9nlLExyeI5JTNRDTDb6/D9rE6OtS1mZB4qrWpSNpfs7qDh/oXFX4LQzPTKmleZ/lnPBq6CjPC0lnIacKm2uEbieslZlWvuqARTLpexdSurw8FWe5jjXMeriizsePYFBPVUYisNQsjt7y9dgWBjkghda1BKufib1qcVFRbZwD9keONA2Xp91NPaWMTKJJSC7l5HlcmnADO7ZEHBEyoCQtT0c/R3X+3efyq43b9/qH8DG9Pv9R+pjzB+91P6y480NB1XV9Ql29FHdUt5HkNvHHHLCLVkjP2cdUPcdQpcOxq2did5+UFztMLb6Ys+Wd3WUSvbSJFKGhaMBAWcmMh3NF7wBai7u8s9A2ybXW9JE2acQQRxym3lWCcKU765ZHAXMKOoZu7wB8x/LTUNPs00DTPixAyK4mBs7qO2q7lyriUOzkBFykKFNK16Ofpbr3Tdbduo9tFZ5FujGwt3Wa3RECS0yO+Y0MasXXK2YAKcbxzWzjI17I3A8I5IEyOf1W8RKHqOYevG9Pv9R+pjenmTf8Aw/8Axa6W5eF1kBkdrkoQhjpmXw+/mZqA0GXNm4PMqjxGHE8h1VPKvDHmt+3qv85Fjzf+91n/AOjFjzL8w9V+G/43qHxpt2WTM7m8u4rlQUpVPCVGVy1KtTJmUkjHP08wHew96sCC5ZQpbKMxANQC1KkAkkAmgxvQD/e1A/ljB/vxWnHo81q/p6t/ORY84O4eEmsE8OoHUYqE8jUUPbUevFQMc/kt5/e3/wDCHTubzR05rs69qiyB0eRTAhmdJJmjUIHBkdATnkcLVgoUEAX+t2ek2sWrXQAmmSKNZpgvuiWVVDyBfoh2NOzHP5PWvNezS5/5HfRsrK0gMCM4QSSRpkDh5AvezSOozNlVa8Onn8vz9Ln8jz9Lnjlj/9oACAEBAQY/AB3/AHj51d61e1Xv4Xv0DpV7etXetDv6dA61d6+A735B0q70q70od6v6jV3rV7Ve/he/QOlXt61d60O/p0DrV3r4DvfkHSrvSrvSh3q/qPhe1Xv4Xv0DpV7etXeta8ecf5DkTTvMkaWTbEj4BNUpu06KmQSqrCETXKPxILgDhoO1FVePuNsfUMACLWXyeVWXT1DXQxoHG5tsIgO2yghrSi0a2wXLDkKYwNsfysW66mn/AEJjlEbjaHcb5anCgjeQ8KyPEXSpjEbmmY1w3ZvhIGpxjJICnjpNMnzO3VVKA/PWrvSrvSh3q/qPje/he/QOlXt603Zs267t27XSatGjVJRdy6cuFCpIN26CRTqrLrKnApCFATGMIAAa1G51zywRnMhXTReRvHiwgpCQRTAVVIcnAhuyblQDTvaaiyR3KoC4j+W3YsGrdkyaIpt2rNogk2atkEigRJBu3RKRJFFMgABSlACgAaAHi9x7K4OJyOCkUxSexE0wbSUe5IOunutXaaqQmII6lNp3ENuAgIa1K8o8EN30jirFNZ/k2AKKLyEpjrJMBVXlMccqmVeysK1TATLtlTKO2xCioU6qfcCI71f1Hxu9fC9+gdKvb1q71pfn7LmJXCbF45iuOGblPuR/WtRM3mcq9s5exQ7NYTM2ZtR9tci59AORI4ftNM9w2PKy465NXeukmLZMCM8ay9Ef1MxDIJkKCbWNkUlQeMkw0KX89JMpU0C+N3r4Xv0DpV7etXetNWDNMyzt65QZtUS6dyrhyqVFBImogHcoqcA/jWH4JFlIDPFMei4Up0y9oOV2bVNN4+PsXVaQee4uoOgdyigj8/2+Uo4zcq0ni0IryDBKdoGVbyWFpqTDgW4CA6rPoRJ400+IlciAbiHhd6+A735BV7etXetDv6dA61w60c9v6Z3ytx01cAcNSew5zCGRWAwfMopnHXpTnKuQcrgsPx5oIEVlZ+RbRzYyximMm1biucp3j1YCD7aCJTrKCGhCiO1LMsajuSeQxTMYqcjj+MtIuGW7dQExV8rloGVAoj8B/RCAh/qRCf495ex9BQ4FB+SLxeXaogP/AJHJEMnbvCpgHx9pJY3SlFeKeRITJHzdD9Q9x84uIjKY9EBKRRZ3jcwixmCtU1TdguConbGNsVQ2oa+OZNHgFFo6xXIWzoDgBiC3XiHiS4HKOxi+0YdQ+YUA+YAP1DX6+A735BV7etXetDv6dA61d61AzWPoi5noaciJaEbAkquK8tGSLZ7HIAigYq63uu0CF7SCBza6AOulL85ffByYvikCzQUessSM9YwTTF4ZQ5FAbiSQOeBwiPEPbKchiLv1xDVyYqwdxhicZ42U5PcNfyVXrHEhytssuT8JzmkORJONZLpmMGonaEOgID+ABDSv7fkX21uoNqt+WMgjxfx8kRFP+UTKuMfm0JdIpS/D2iHEPl1Lnv2b8vueOOSscMWYjUIiZm0l4d6Qfyln0LLHbZzj6ajg3tA7QUO2KAmAiSoaFppw799mOOcVmSB7GPc2Q0Yo7xXKmqRipEezbWIbnRKJxMXuexyQpkMcCuWrUxVFBTnMCzHGMzh1SEOSSxedjZ1mAKBqUqi0a5ckSU+QkP2nKICAgAgIUu/knjSPYtUxVcvXzhFo0bpF/mUXcrnTRRTD5iYwBWU8acXzqPL3KGVwsxirBtgbxKSx7Gnc2wcRScpLZQ0K6jXbhgq4E5GLAzpyosmCan6cDe4CjVyiq2ctzmQXbrpnRWRWSHsUSVSUAp01CHKIGKIAICG9DvfkFXt61d60O/p0DrV3r4QHIePxcZNS2NOl3LaMl01FI92V0xdRzginsqJqpqkbPDmSUKPcksBThqJdBg+duUztI/iWRkgRxrDMfkP00XD+44dMWco+hjLKunarxdsoQjxyosvqfQgJIqEKOA5/EYjFtcyXcY9JPMnSRAsu9POST1q7bPXYmE7hgVJUhU0R/An7ZRKAD3CPG+ZMMOx9plSymKyTnJEYxqlOvXE65eJyJHsqRMr141VKsAAiqcyRATIBSh2F048+6TFM/NAzkpIRrhkygknkXKQKEwR8aKeIzST4xX4ukW4FctxQSIUq3YIql7qDh771sViVknAJoteQE4tY8C+cFKKKL6UbRRP7nh86Hds/ju1uPebuK1TAe7/Mvtv+4BIkSuPuM/bds8naoAt+YCbfLMUk2aqaRBDQpFGyiugfiOJgERTNyHz+1Wi2phVOoRpkGRrJIp6icxCTclEt25hTAdTicQJqI6CAbrvsafocy81IoKoM04+QjclyBu8MUSHQM/YJHxfAGwHNoqcQNKewcQArgNSjlPJ+RRcbCSuWPUHa0VEEOVixQZsGcUxbpmUEVF1ysWCfvLG0Mut3qCBRNoF7etXetDvtewVd6+A735B0q70rBD6jqYcVAR8w/wAseBoPTQK4+N/S4H/zylcZm/pOPP8AfrVw+bX4o8a6/wAWr+uDsmisdxFDKZSQxcqk8yaxxJ+SknkTPKZU2dSaJf7hIGTethBdFQ5yoHRIXtL7ZQDjj7iYnkN2i9zdaEBxAxjV1FqxLTJox/LRZ2s4hJGWerJIMQBcgoolA6n4RECan495rzTkZ1kmK5+aF/TwC2QT0i/ikchiXc7j6ztOREWK5XUcyMKoJmEyChiF0NqYxeFub4CRn3GYZybDTz6Ug4ZrRKqWaYlKZQCce1SZIuGZ4o7EiJDCqp7pBMYwdwl7b29au9aHfa9gq718B3vyDpV3pV3pWCYAxzXH3edJyMPHOcPQkmymSMlYnIpJ89cP4YqgyDKPBokByOFEyoqe4QCmETAFcbCm9bHFyph0Y37ViCKsjHz0gL1mQAHUzlqEcuJyfEvtG1+A1xib+k46/wB+sFca8FRATY8hY67x5tPNHEYojGsGWMpSaQv05QTi3eBJe4iKSaepygc3uATtADHclVVNqKhipGOIpJnV7fcOQgjoU6nYGoh8dAr7fB8ycSf64TOV9tptfi04R1668XTI1wdwfjgT3+e4MphSeUNnsWZtGx6WEYZL4ssslJGUFF8Mu5fJLNiogYSo93u+2cAKa71od9r2CrvWh3vyDrQ735B0q70q70od6O8KkAODhoY/Tz0+AVqL14doRZRylHncKmZIuliFTWcpthOKJF1SEKBjAUDCAAAjtXGJx01/T8fF28iSjkgee4gX60ZQpCgcdhOAB3D+8fmPh9vI/wDZxH/8RO19tAgqn+YhwmkTQ5R7lE+LZ33Ey7/iUT9o3cAbh2jr8BoxykKBjfzGAA7h6CPzod9r2CrvWh3vyDrV7etXelXelDvV/UfHjA3/AKcA/wCYd+A735BWFcCZEhjKeCcfuWS8TIsI10hkcknEMn0dCNJd4rJLsFEItlIHIT2Grc6gFIKhjmKImjoOTyzJJTGYNRyrj+MyE1JvIGBVemE7tSHiHDpSPjVHRjCKgopkE4jqbWh32vYKu9aHe/IOtXt6+F3pQ71f1Hxu9axv7f5Y2Pl47xN8i9YvWsc4SySRSaKvVo6LlH5n6rFaPjVXoikCTVBUfbJ7ih+3cd78gq9vWrvWh32vYKu9aHe/IOtXt6+F/UaHer+o+N3r4DvfkFXt61d60O+17BV3rQ735B1q9vXwv6jQ7/vGr+o+N3r4DvfkFXt61d60O+17BV3rQ735B1q9vXwv6jQ7/vGrvWv/2Q=="
																		alt=""
																		layout="fill"
																		objectfit="contain"
																	/>
																</div>
															</div>
															<div class="ml-4">
																<div class="text-base font-medium text-gray-100">Moonriver</div>
															</div>
														</div></td
													><td class="px-6 py-4 whitespace-nowrap"
														><div class="text-base text-gray-100">$70.21M</div></td
													></tr
												><tr
													><td class="px-6 py-4 whitespace-nowrap"
														><div class="flex items-center">
															<div class="flex-shrink-0 w-6 h-6">
																<div class="relative w-6 h-6 rounded-full">
																	<img
																		src="/static/media/cronos.e29bb50231878627f24a578054fcae2f.svg"
																		alt=""
																		layout="fill"
																		objectfit="contain"
																	/>
																</div>
															</div>
															<div class="ml-4">
																<div class="text-base font-medium text-gray-100">Cronos</div>
															</div>
														</div></td
													><td class="px-6 py-4 whitespace-nowrap"
														><div class="text-base text-gray-100">$12.25M</div></td
													></tr
												><tr
													><td class="px-6 py-4 whitespace-nowrap"
														><div class="flex items-center">
															<div class="flex-shrink-0 w-6 h-6">
																<div class="relative w-6 h-6 rounded-full">
																	<img
																		src="data:image/jpeg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAABGAAD/4QMuaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA2LjAtYzAwNSA3OS4xNjQ1OTAsIDIwMjAvMTIvMDktMTE6NTc6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMi4xIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjgzQjc0RThDOTEwNjExRUI4Njc0QjI1QTcwRjM1MEUwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjgzQjc0RThEOTEwNjExRUI4Njc0QjI1QTcwRjM1MEUwIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODNCNzRFOEE5MTA2MTFFQjg2NzRCMjVBNzBGMzUwRTAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6ODNCNzRFOEI5MTA2MTFFQjg2NzRCMjVBNzBGMzUwRTAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/7gAOQWRvYmUAZMAAAAAB/9sAhAAEAwMDAwMEAwMEBgQDBAYHBQQEBQcIBgYHBgYICggJCQkJCAoKDAwMDAwKDAwNDQwMEREREREUFBQUFBQUFBQUAQQFBQgHCA8KCg8UDg4OFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCABmAGYDAREAAhEBAxEB/8QAuAAAAgIDAQEAAAAAAAAAAAAAAwQFBgECBwAIAQEBAAIDAQEAAAAAAAAAAAAAAQIGAwQFBwgQAAEDAgIFBwYJDQAAAAAAAAIAAQMRBDEFIVESIgZBYZHRMhMHcYGS0oMUoeFCUiNTJEUWscFigqJDY5NEFTVVFxEAAQIDAggKBQoHAAAAAAAAAAECEQMEIQUxQVFhElIUBpGhIpLS4hNTkxeB0TIVVfCxQnIjYyRUFgfB4TND0+Nk/9oADAMBAAIRAxEAPwD4nEV7JwhRFUgYQQBRjVAYYkBu0KAz3PMgNXiQGhRIAJRoAJAoARCoAezpQoURVIHAEAyEaoGAiqgGAh5kIFaDmQGe4QGrwcyACcKAAcSFFjjQC5goAOzvIAwCgGowVA3FFVAORwoQaCBASGX5Re5nchZ5fbnc3J9mKNtp/LzNzusmtVywQ61TVSqaWsya5GNTGp0LLPBTN7gBkzS9hsq6XiBnnNvK7Ow/Cu62icuFYHzmt/cKklrCTLdMzryU/ivEhI3HgXG4fZc5fvf4sG7+yVVyLQ5zzJf7j28uRZmf62lF4l8NeJeHIyuZ4GurAdJXVrUxFtZDTaHzsupMp3stXAbtdW9VBeCoxjtB6/RfYvoxLwxzFKkiXXNsE5Y6IUUkBALbO8ygDRiqB2IKoB+GNCD8MOGhATGU5Rc5rfW+XWYbdzcGwA3I1cXfmZtLrJrVcsEOpWVcukkunTFg1iRX5ZVwIfRXDHC+XcL2A2tmDFckze9XTtvyFy6eQdTL3pUpJaQQ/Ml933PvScr5iwanstxNT15VJtcx4B5AYdmdnZ2qz6HZ9LOzoDiHir4fwZYJcR5LE0diZUvrYG3YjJ9Bi3ILvi3I68mqkaPKbgPuW5u8zqr8JULF6JyHayJiXOmXGhyCaNeefUxCUEKKuO+yANEKAfhDBCEjACAk4IsEKdY8IspB577NzGpwiNvC+p5N4nbzMzL0aJkVVx8k/cSuVsqVTovtKrneixOOPAdXXqnxQ8gPIDyAXv7GDM7G4y65FiguoyhkZ8KG1PgxWLmo5IKdmlqX005s1ntMVHJ6D5HzGzOzuri0k7dvIcReUCcfzLXFSCwP1tJmpNltmNwORFT0pEiJhUOYTcfpGQoSFkBIwNghCTtxwQpLW0b6NGOHOggX3hPi644as5rMMv8AeRmk73bcnB2fZYaYPqXak1PZJCETSN4d0Vvac2b2iy9FujDRjjjlTKWYPEq7L7op7V/VXPt66vGax5aL36+H1gn/AEW7/wBS38x/VU29dXjHlovfr4fWAn4l3YfdFfav6qu3rq8Y8tF79fD6wtJ4rXYfc1fal6qbcurxjy0+/Xw+sKn4x3cb/wCCr7YvUV25dXjHlp9+vh9Y5HndzJmGYXeYyQ9y91MczxtXZF5CcqM74rz3OiqrlPqtJSrTSGSrVRjUbFccEgQE7YrE7Ak7b7IDMPIhSVsopJ5QhhHblN6ALYu6qJE56enmVExsqU1XPcsERMak5Z5XfylIAQE5QlsSNoahasVUaqns0m7t41T3slSXOdKXRfgTRXJapYIYM4FoNqAW93akeHLr0rKDuA3Vl2bxsWnVKdPwvsWMx63Kt+S4bSQjLM37cQN0LLSmZDa/em935ZnNT/IMg10/bAGTSmD3pvd+WZzU6YRxlpoYaqaUzIX3pvd+WZzU6YvNJcxNXZCiivemE8q8d6d5LvYj6mSyW1ywRVbjyWPUQmzK7CtBDoTtXHg+ZF6ZJXMXpCEue34YDF6KvauHmRemSVzF6RE5jnl9eW520wxtEVKuI0fRpWKzFU8i9t86+8qdZE5JegqovJbBbLcMVK3OsDRxB+2yAxE6FJO1kOMhOMnCQdIkL0dn5kOSXNfKej2KrXNWKKliouYlrW8u43co7iQHN6m7E+8+t1Yqd+RetZIc50uc9ivWLlRyppLlXKpYIHvC92Z8wr7w1e12eZ1lbZabgyfeblp02+G0feu+z+vk9dhLR2ty2N8xedZQXWNt9yXn8Vb4rukMDBK2NzVILrD3JefxVniu6Rv3J/X/AJE0Xaw9yXp8VZ4rukDO3MtBXDO2p1FYq4VOlV7q1dWiNn3jKmImBHTFX51FJcu2/wCpjbyp2ec839Bf9kjnfzI+5yXcI/fId1nejvq86aGc4Z+43Zy3P2yQuiir7WQqk5LjPmZGTvigEnf6RkBpESFHoTQhYICydns6yy0dvtujsv8Ao6FlYbJLl3VpU+k+ZBf69icnJoZeOzPYTUb8MfImleuNWLqWUGG27Jul30/g6gzGXDzdmU+gupSDCbHul30/g6gRzyzvQ7sieD949H0LFUbHMa5WSLkStltkPmLT/wBxypyk+rYmbFwh+8yb6x+glYMNj2TdLvp/B1AZHkb4yF0ErBg2TdLvp/B1BeR+HX7Up9BdSQYNk3S76fwdQUkbhX5U0reRi6lYMGx7pd9P4OoJ3H4S7s3G4n7yj7LMz48nInIynFPpd1UluVk6fpQWFmPF9BPnKjMS4z5oJuW+yFBRkgHYjQD0UiEHopW0IB6OQtljo+y70YqaK6qoZ6DoRgsMo6LXP1Mnol1KwU7OxVHdv5rvUONdExwn/bydohoY7L7768FY4LDZ5dSxs2netDFJLYPbB32q6zrMOPHwBSzMOXKHf9V+pZ6SaptX6gofhKcH+sVlz2yB3E8qFibFn0P8LJppkOs7eq62rB12S0XOqdAVk4hyxq1yiN/K7dSaaZDBd7Lp+Gy+FOgVe5mEzMhFgYnd2FsGZ3w8y4j5i9yOcqokEVcGTN6BCU0MRVy32QAQJQDUZqgbjlogG45kISUWbXY2wWgmzQRn3oNRqsbacVYrCB67b2qW0zaZHfZsf2iJBPayxw+glG4szf58XofGs+0cbcn7h3zrt5jTP4szf50XofGnaOL5iXzrt5iGr8W5u3yovQ+NO0cPMS+ddvMQh7y/mu5juLgmeU+07NRuhYKqrappF4V86ununzli9+FYQzYEzCEk2Kh0BSSRAKSGhRfa3mUAISUAcDVAwEioDhKgDjMhArT86A279AaPPzoARTIUAcqAXORALmagBbWlQAxqhQo7SpAo7WpAGFz1KgKLyakARnPUhD1T1IDDvJqQAyc9SFBE56kAEtrUoARVUAPTVCn/2Q=="
																		alt=""
																		layout="fill"
																		objectfit="contain"
																	/>
																</div>
															</div>
															<div class="ml-4">
																<div class="text-base font-medium text-gray-100">Moonbeam</div>
															</div>
														</div></td
													><td class="px-6 py-4 whitespace-nowrap"
														><div class="text-base text-gray-100">$4,127.96</div></td
													></tr
												></tbody
											>
										</table>
									</div>
								</div>
							</div>
						</div>
						<!-- <button on:click={() => console.log(document.querySelectorAll('#iframe'))}
							>asdasdas</button
						>
						<button on:click={() => console.log(document.querySelectorAll('#root'))}
							>asdasdas</button
						>
						<button
							on:click={() => {
								setFrame();
								console.log(inside);
							}}>asdasdas</button
						> -->
						<div class="mb-10 pb-10" />
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	/*! CSS Used from: https://analytics.synapseprotocol.com/static/css/main.8592bd43.css */
	.col {
		text-align: center;
		justify-content: center;
	}

	*,
	:after,
	:before {
		border: 0 solid #e5e7eb;
		box-sizing: border-box;
	}
	:after,
	:before {
		--tw-content: '';
	}
	table {
		border-collapse: collapse;
		border-color: inherit;
		text-indent: 0;
	}
	:-moz-focusring {
		outline: auto;
	}
	:disabled {
		cursor: default;
	}
	img {
		display: none;
		vertical-align: middle;
	}
	img {
		height: auto;
		max-width: 100%;
	}
	*,
	:after,
	:before {
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
		--tw-ring-color: rgba(59, 130, 246, 0.5);
		--tw-ring-offset-shadow: 0 0 #0000;
		--tw-ring-shadow: 0 0 #0000;
		--tw-shadow: 0 0 #0000;
		--tw-shadow-colored: 0 0 #0000;
	}
	.relative {
		position: relative;
	}
	.-my-2 {
		margin-bottom: -0.5rem;
		margin-top: -0.5rem;
	}
	.ml-4 {
		margin-left: 1rem;
	}
	.inline-block {
		display: inline-block;
	}
	.flex {
		display: flex;
	}
	.h-6 {
		height: 1.5rem;
	}
	.w-6 {
		width: 1.5rem;
	}
	.min-w-full {
		min-width: 100%;
	}
	.flex-shrink-0 {
		flex-shrink: 0;
	}
	.flex-col {
		flex-direction: column;
	}
	.items-center {
		align-items: center;
	}
	.divide-y > :not([hidden]) ~ :not([hidden]) {
		--tw-divide-y-reverse: 0;
		border-bottom-width: calc(1px * var(--tw-divide-y-reverse));
		border-top-width: calc(1px * (1 - var(--tw-divide-y-reverse)));
	}
	.divide-gray-900 > :not([hidden]) ~ :not([hidden]) {
		--tw-divide-opacity: 1;
		border-color: rgb(17 24 39 / var(--tw-divide-opacity));
	}
	.overflow-hidden {
		overflow: hidden;
	}
	.overflow-x-auto {
		overflow-x: auto;
	}
	.whitespace-nowrap {
		white-space: nowrap;
	}
	.rounded-full {
		border-radius: 9999px;
	}
	.border-b {
		border-bottom-width: 1px;
	}
	.border-gray-900 {
		--tw-border-opacity: 1;
		border-color: rgb(17 24 39 / var(--tw-border-opacity));
	}
	.bg-gray-800 {
		--tw-bg-opacity: 1;
		background-color: rgb(31 41 55 / var(--tw-bg-opacity));
	}
	.bg-gray-700 {
		--tw-bg-opacity: 1;
		background-color: rgb(55 65 81 / var(--tw-bg-opacity));
	}
	.py-2 {
		padding-bottom: 0.5rem;
		padding-top: 0.5rem;
	}
	.px-6 {
		padding-left: 1.5rem;
		padding-right: 1.5rem;
	}
	.py-3 {
		padding-bottom: 0.75rem;
		padding-top: 0.75rem;
	}
	.py-4 {
		padding-bottom: 1rem;
		padding-top: 1rem;
	}
	.text-left {
		text-align: left;
	}
	.align-middle {
		vertical-align: middle;
	}
	.text-base {
		font-size: 1rem;
		line-height: 1.5rem;
	}
	.text-xs {
		font-size: 0.75rem;
		line-height: 1rem;
	}
	.font-medium {
		font-weight: 500;
	}
	.uppercase {
		text-transform: uppercase;
	}
	.tracking-wider {
		letter-spacing: 0.05em;
	}
	.text-gray-100 {
		--tw-text-opacity: 1;
		color: rgb(243 244 246 / var(--tw-text-opacity));
	}
	.shadow {
		--tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
		--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
		box-shadow: 0 0 #0000, 0 0 #0000, var(--tw-shadow);
		box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000),
			var(--tw-shadow);
	}
	@media (min-width: 640px) {
		.sm\:-mx-6 {
			margin-left: -1.5rem;
			margin-right: -1.5rem;
		}
		.sm\:rounded-lg {
			border-radius: 0.5rem;
		}
		.sm\:px-6 {
			padding-left: 1.5rem;
			padding-right: 1.5rem;
		}
	}
	@media (min-width: 1024px) {
		.lg\:-mx-8 {
			margin-left: -2rem;
			margin-right: -2rem;
		}
		.lg\:px-8 {
			padding-left: 2rem;
			padding-right: 2rem;
		}
	}
</style>
