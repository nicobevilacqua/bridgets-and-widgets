<script>
	import Hop from './+page.svelte';
	import HopLogo from '$lib/svg/Hop.svelte';

	function toggleShowHops() {
		var element = document.getElementById('widgetHops');
		if (element != null) {
			if (
				element.classList != null &&
				element.classList.length > 0 &&
				element.classList.contains('dp-none')
			) {
				element.classList.remove('dp-none');
				window.scrollTo({ top: 0, behavior: 'smooth' });
			} else element.classList.add('dp-none');
		} else console.log('Error: not included Synapse');
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
</script>

<button class="btn btn-circle btn-logo" style="z-index:9100;  " on:click={toggleShowHops}>
	<HopLogo />
</button>
<div style="z-index:9999" id="widgetHops" class="dp-none Widget">
	<Hop />
</div>

<style>
	.Widget {
		position: absolute !important;
		right: 0;
		max-width: 700px !important;
		top: 0;
		width:100%;

		/* for chrome and safari*/
		-webkit-animation-duration: 1s;
		-webkit-animation-name: slidein_side;

		/*for firefox*/
		-moz-animation-duration: 1s;
		-moz-animation-name: slidein_side;

		/* for opera*/
		-o-animation-duration: 1s;
		-o-animation-name: slidein_side;

		/* Standard syntax*/
		animation-duration: 1s;
		animation-name: slidein_side;
		transition: all 0.3s ease-in-out;
	}
	.dp-none {
		position: absolute;
		right: -700px;
	}

	.btn-logo {
		z-index: 9100;
		top: 80%;
		position: fixed;
		left: 1rem;

		cursor: pointer;
		background: #cccccc38;
		border-radius: 50px;
		padding: 0.2rem;
	}

	@media (min-width: 800px) {
		.Widget {
			max-width: 700px !important;
		}
		.dp-none {
			position: absolute;
			right: -700px;
		}
	}

	@media (min-width: 1200px) {
		.Widget {
			max-width: 1100px !important;
		}
		.dp-none {
			position: absolute;
			right: -1100px;
		}
	}
	@-webkit-keyframes slidein_side {
		from {
			left: 100%;
			width: 300%;
		}

		to {
			left: 0%;
			width: 100%;
		}
	}

	@-moz-keyframes slidein_side {
		from {
			left: 100%;
			width: 300%;
		}

		to {
			left: 0%;
			width: 100%;
		}
	}
	@-o-keyframes slidein_side {
		from {
			left: 100%;
			width: 300%;
		}

		to {
			left: 0%;
			width: 100%;
		}
	}
	@keyframes slidein_side {
		from {
			left: 100%;
			width: 300%;
		}

		to {
			margin-left: 0%;
			width: 100%;
		}
	}
</style>
