<script lang="ts">
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
    
    <div class="flex justify-center flex-wrap gap-4 mt-4">
        {#each order as i}
            <div class="p-4 bg-white shadow-md rounded-lg max-w-lg w-full text-lg">
                <div class="pb-2 grid grid-cols-[max-content_auto_auto] gap-2">
                    {#if showName}
                        <p class="font-bold">プロトコル名:</p>
                        <p class="col-span-2">{yomifuda[i].name}</p>
                    {/if}
                    {#if showRFC}
                        <p class="font-bold">RFC:</p>
                        <p class="col-span-2">{yomifuda[i].rfc}</p>
                    {/if}
                    {#if showPort}
                        <p class="font-bold">ポート番号:</p>
                        <p class="col-span-2">{yomifuda[i].protocol}</p>
                    {/if}
                </div>
                {#if showDesc}
                    <p class="font-bold">説明:</p>
                    <p>{yomifuda[i].description}</p>
                {/if}
            </div>
        {/each}
    </div>
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
</style>