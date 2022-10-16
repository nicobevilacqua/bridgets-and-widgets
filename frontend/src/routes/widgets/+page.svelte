<script>
	import Hop from '$lib/svg/Hop.svelte';
	import Synapse from '$lib/svg/Synapse.svelte';
	import WidgetHop from './../Hop/WidgetHop.svelte';
	import WidgetSynapse from './../Synapse/WidgetSynapse.svelte';
	var option0 = false;
</script>

{#if option0}
	<div
		on:click={() => {
			option0 = !option0;
		}}
	>
		<WidgetSynapse />
		<Hop />
	</div>
{:else}
	<div
		on:click={() => {
			option0 = !option0;
		}}
	>
		<Synapse />
		<WidgetHop />
	</div>
{/if}
