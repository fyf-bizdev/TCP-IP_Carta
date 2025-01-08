<script lang="ts">
  let isOpen: boolean = $state(false);
</script>

<header>
  <div class="flex flex-col justify-between
              w-full max-w-7xl
              md:flex-row">
    <div class="flex justify-between w-full bg-gray-900
                md:w-fit">
      <a href="/TCP-IP_Carta" class="text-4xl font-mono font-bold
                                     md:text-5xl">TCP/IP Carta</a>
      <button
        onclick={() => {isOpen = !isOpen}}
        class={[
          isOpen && 'bg-slate-700',
          "flex flex-col justify-center items-center transition-colors duration-300 md:hidden"
        ]}
        aria-label="メニュー">
        <div class={[isOpen && 'translate-y-3 rotate-45', "bar"]}></div>
        <div class={[isOpen && 'opacity-0', "bar"]}></div>
        <div class={[isOpen && '-translate-y-3 -rotate-45', "bar"]}></div>
      </button>
    </div>
    <div class="relative">
      <div class="absolute z-50
                  w-full max-w-7xl mx-auto my-0
                  bg-slate-800
                  md:flex md:relative md:gap-6
                  md:w-fit md:h-full
                  md:bg-transparent"
           class:hidden={!isOpen}>
        <a href="/TCP-IP_Carta#rule"
           class="shadow-sm">遊び方</a>
        <a href="/TCP-IP_Carta/yomifuda"
           class="shadow-sm">読み札リスト</a>
      </div>
    </div>
  </div>
</header>

<style lang="scss">
  header {
    @apply bg-gray-900 xl:flex xl:justify-center;
    a {
      @apply flex items-center 
             px-4 py-4
             text-zinc-100 no-underline
             hover:bg-slate-700;
    }
  }
  
  .bar {
    @apply w-9 h-1 mx-4 my-1
           bg-zinc-100
           rounded-sm
           transition duration-300 origin-center;
  }
</style>