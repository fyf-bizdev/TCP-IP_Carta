<script lang="ts">
    import yomifuda from '../assets/readData.json';

    let showName: boolean =$state(true);
    let showRFC: boolean =$state(true);
    let showPort: boolean =$state(true);
    let showDesc: boolean =$state(true);

    const order = [...Array(36)].map((_, i) => i).slice().sort(() => Math.random() - Math.random());
</script>

<div class="p-4">
    <div class="w-2/3 md:w-4/5 flex justify-around items-center flex-col md:flex-row gap-2 mx-auto mb-2 settings
                [&>label]:cursor-pointer [&>label]:relative [&>label]:flex [&>label]:items-center [&>label]:gap-2
                [&>label]:md:flex-col [&>label]:md:gap-1
                [&>label_input[type='checkbox']]:hidden">
        <label class="switch">
            プロトコル名の表示
            <input type="checkbox" onclick={() => showName = !showName} checked={showName}>
            <div class="base rounded-full">
                <span class="slider rounded-full"></span>
            </div>
        </label>
        <label class="switch">
            RFCの表示
            <input type="checkbox" onclick={() => showRFC = !showRFC} checked={showRFC}>
            <div class="base rounded-full">
                <span class="slider rounded-full"></span>
            </div>
        </label>
        <label class="switch">
            ポート番号の表示
            <input type="checkbox" onclick={() => showPort = !showPort} checked={showPort}>
            <div class="base rounded-full">
                <span class="slider rounded-full"></span>
            </div>
        </label>
        <label class="switch">
            説明の表示
            <input type="checkbox" onclick={() => showDesc = !showDesc} checked={showDesc}>
            <div class="base rounded-full">
                <span class="slider rounded-full"></span>
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

<style>
    .settings {
        --button-width: 50px;
        --button-height: 30px;
    }

    .base {
        position: relative;
        background-color: gray;
        transition: background-color 0.2s ease;
        width: var(--button-width);
        height: var(--button-height);

        display: flex;
        justify-content: space-evenly;
    }

    .slider {
        position: absolute;
        top: 2px;
        left: 2px;
        width: calc(var(--button-height) - 4px);
        height: calc(var(--button-height) - 4px);
        background-color: white;
        transition: transform 0.3s ease;
    }

    .switch input[type="checkbox"]:checked + .base .slider {
        transform: translateX(calc(var(--button-width) - var(--button-height)));
    }

    .switch input[type="checkbox"]:checked + .base {
        background-color: #12b936;
    }
</style>