<script>
	// import Synapse from './+page.svelte';
	import Synapse from '$lib/widget.svelte';
	import SynapseLogo from '$lib/svg/Synapse.svelte';

	function toggleShowSynapse() {
		var element = document.getElementById('widgetSynapse');
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
	}
</script>

<button class="btn btn-circle btn-logo" style="z-index:9100;" on:click={toggleShowSynapse}>
	<SynapseLogo />
</button>
<div style="z-index:9999" id="widgetSynapse" class="dp-none Widget">
	<Synapse />
</div>

<style>
	.Widget {
		position: absolute !important;
		right: 0;
		max-width: 700px !important;
		top: 0;

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

	.dp-none {
		position: absolute;
		right: -700px;
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
