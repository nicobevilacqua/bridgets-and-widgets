<script>
  import { init, login, chainId, wallet, changeNetwork} from "$lib/eth.js";

</script>
<div class="relative bg-white">
  <div class="mx-auto max-w-7xl px-4 sm:px-6">
    <div class="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
      <div class="flex justify-start lg:w-0 lg:flex-1">
        <a href="/">
          <span class="sr-only">StakeTogether</span>
          <img class="h-8 w-auto sm:h-10" src="/stake.png" alt="">
        </a>
      </div>
      <div class="-my-2 -mr-2 md:hidden">
        <button type="button" class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
          <span class="sr-only">Open menu</span>
          <!-- Heroicon name: outline/bars-3 -->
          <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
      <nav class="hidden space-x-10 md:flex">
 
        <a href="/" class="text-base font-medium text-gray-500 hover:text-gray-900">Stake</a>
        <a href="/dashboard" class="text-base font-medium text-gray-500 hover:text-gray-900">Dashboard</a>

      </nav>
      <div class="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
        {#if !$wallet}
          <button on:click={login} class="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
            Connect
          </button>
        {:else if $chainId != 31337}
          <button on:click={changeNetwork} class="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700">
            Wrong network
          </button>
        {:else}
          <span class="text-base font-medium hover:text-gray-900">{$wallet.slice(0,4)}...{$wallet.slice(-4)}</span>
        {/if}

      </div>
    </div>
  </div>

  <!--
    Mobile menu, show/hide based on mobile menu state.

    Entering: "duration-200 ease-out"
      From: "opacity-0 scale-95"
      To: "opacity-100 scale-100"
    Leaving: "duration-100 ease-in"
      From: "opacity-100 scale-100"
      To: "opacity-0 scale-95"
  -->

</div>