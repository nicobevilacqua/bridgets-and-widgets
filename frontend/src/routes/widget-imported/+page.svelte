<svelte:head>
  <script src="/widget/index.js"></script>
</svelte:head>

<script>
  import { onMount } from 'svelte';
  onMount(() => {
    new Widget({
      target: document.getElementById("widget"),
      props: {
        name: 'world'
      }
    });
  });
</script>

<div id="widget"></div>