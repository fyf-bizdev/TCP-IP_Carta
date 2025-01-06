<script lang="ts">
    import { preprocess } from 'svelte/compiler';
    import yomifuda from '../assets/readData.json';

    let showName: boolean =$state(true);
    let showRFC: boolean =$state(true);
    let showPort: boolean =$state(true);
    let showDesc: boolean =$state(true);

    const order = [...Array(36)].map((_, i) => i).slice().sort(() => Math.random() - Math.random());
</script>

<div class="p-4">
    <div class="settings">
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
    
    {#each order as i}
        <div class="card">
            <p>{i+1}: </p>
            {#if showName}
                <p>プロトコル名: {yomifuda[i].name}</p>
            {/if}
            {#if showRFC}
                <p>RFC: {yomifuda[i].rfc}</p>
            {/if}
            {#if showPort}
                <p>ポート番号: {yomifuda[i].protocol}</p>
            {/if}
            {#if showDesc}
                <p>説明: {yomifuda[i].description}</p>
            {/if}
        </div>
        <hr class="my-2 bg-gray-400 border-0 h-px">
    {/each}
</div>

<style lang="scss">
    .settings {
        @apply w-2/3 md:w-4/5 flex justify-around items-center flex-col md:flex-row gap-2 mx-auto mb-2;
        >label {
            @apply cursor-pointer relative flex items-center gap-2 md:flex-col md:gap-1;
            input[type='checkbox'] {
                @apply hidden;
            }
        }
    }

    .base {
        @apply rounded-full relative bg-gray-500 transition delay-200 ease-linear w-12 h-8 flex justify-evenly;
    }

    .slider {
        @apply rounded-full absolute top-0.5 left-0.5 w-7 h-7 bg-white transition-transform duration-300 ease-out;
    }

    .switch {
        input[type="checkbox"]:checked {
            +.base {
                @apply bg-green-500;
                .slider {
                    @apply translate-x-4;
                }
            }
        }
    }
</style>