<script>
	import '../app.postcss';

	import { init, login, chainId, wallet, changeNetwork} from "$lib/eth.js";

  import { onMount } from 'svelte';
  onMount(() => {
    // init();
  })
</script>

<main>
	<slot />
</main>
