<script lang="ts">
    import yomifuda from '../assets/readData.json';

    let showName: boolean =$state(true);
    let showRFC: boolean =$state(true);
    let showPort: boolean =$state(true);
    let showDesc: boolean =$state(true);

    let clicked: boolean[] = $state([...Array(36)].map(() => false));

    const order = [...Array(36)].map((_, i) => i).slice().sort(() => Math.random() - Math.random());
</script>

<div class="p-4">
    <details class="settings_mobile">
        <summary>表示設定</summary>
        <label class="switch">
            プロトコル名の表示
            <input type="checkbox" onclick={() => showName = !showName} checked={showName}>
            <div class="base">
                <span class="slider"></span>
            </div>
        </label>
        <label class="switch">
            RFCの表示
            <input type="checkbox" onclick={() => showRFC = !showRFC} checked={showRFC}>
            <div class="base">
                <span class="slider"></span>
            </div>
        </label>
        <label class="switch">
            ポート番号の表示
            <input type="checkbox" onclick={() => showPort = !showPort} checked={showPort}>
            <div class="base">
                <span class="slider"></span>
            </div>
        </label>
        <label class="switch">
            説明の表示
            <input type="checkbox" onclick={() => showDesc = !showDesc} checked={showDesc}>
            <div class="base">
                <span class="slider"></span>
            </div>
        </label>
    </details>

    <div class="settings_pc">
        <label class="switch">
            プロトコル名の表示
            <input type="checkbox" onclick={() => showName = !showName} checked={showName}>
            <div class="base">
                <span class="slider"></span>
            </div>
        </label>
        <label class="switch">
            RFCの表示
            <input type="checkbox" onclick={() => showRFC = !showRFC} checked={showRFC}>
            <div class="base">
                <span class="slider"></span>
            </div>
        </label>
        <label class="switch">
            ポート番号の表示
            <input type="checkbox" onclick={() => showPort = !showPort} checked={showPort}>
            <div class="base">
                <span class="slider"></span>
            </div>
        </label>
        <label class="switch">
            説明の表示
            <input type="checkbox" onclick={() => showDesc = !showDesc} checked={showDesc}>
            <div class="base">
                <span class="slider"></span>
            </div>
        </label>
    </div>
    
    <div class="flex justify-center flex-wrap gap-4 mt-4">
        {#each order as o}
            <button onclick={() => {clicked[o] = !clicked[o]}}
                    class="p-4 bg-gray-100 shadow-md rounded-lg max-w-lg w-full text-lg text-left flex flex-col min-h-72 md:min-h-64">
                {#if !clicked[o]}
                    <div class="front">
                        <div class={[showName||showRFC||showPort ? 'pb-2' : '', 'grid grid-cols-[max-content_auto_auto] gap-2']}>
                            {#if showName}
                                <p class="font-bold">プロトコル名:</p>
                                <p class="col-span-2">{yomifuda[o].name}</p>
                            {/if}
                            {#if showRFC}
                                <p class="font-bold">RFC:</p>
                                <p class="col-span-2">{yomifuda[o].rfc}</p>
                            {/if}
                            {#if showPort}
                                <p class="font-bold">ポート番号:</p>
                                <p class="col-span-2">{yomifuda[o].protocol}</p>
                            {/if}
                        </div>
                        {#if showDesc}
                            <p class="font-bold">説明:</p>
                            <p>{yomifuda[o].description}</p>
                        {/if}
                    </div>
                {:else}
                    <div class="back">
                        <h1 class="font-bold text-4xl">{yomifuda[o].name}</h1>
                        <h3 class="text-2xl">{yomifuda[o].protocol}</h3>
                    </div>
                {/if}
            </button>
        {/each}
    </div>
</div>

<style lang="scss">
    .settings {
        @apply justify-around items-center mb-2 sticky top-0 z-10 p-2 bg-gray-300
               shadow-sm;
        >label {
            @apply cursor-pointer relative flex items-center;
            input[type='checkbox'] {
                @apply hidden;
            }
        }
    }

    .settings_mobile {
        @extend .settings;
        @apply w-svw flex flex-col open:gap-2 -mx-4 md:hidden;
        >label { @apply gap-2 mb-2; }
    }

    .settings_pc {
        @extend .settings;
        @apply hidden w-full flex-row mx-auto md:flex;
        >label { @apply gap-1 flex-col; }
    }

    .base {
        @apply rounded-full relative bg-gray-500 transition delay-200 ease-linear w-12 h-8 flex justify-evenly;
    }

    .slider {
        @apply rounded-full absolute top-0.5 left-0.5 w-7 h-7 bg-white transition-transform duration-300 ease-out;
    }

    .switch {
        @apply w-52 justify-between;
        input[type="checkbox"]:checked {
            +.base {
                @apply bg-green-500;
                .slider {
                    @apply translate-x-4;
                }
            }
        }
    }

    .back {
        @apply flex justify-center items-center flex-col gap-2 h-full mx-auto my-0;
    }
</style>