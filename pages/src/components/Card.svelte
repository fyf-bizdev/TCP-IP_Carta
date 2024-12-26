<script lang="ts">
    let showName: boolean =$state(true);
    let showRFC: boolean =$state(true);
    let showPort: boolean =$state(true);
    let showDesc: boolean =$state(true);
</script>

<div class="settings">
    <label class="switch">
        プロトコル名の表示
        <input type="checkbox" onclick={() => showName = !showName} checked={showName}>
        <div class="base round">
            <span class="slider round"></span>
        </div>
    </label>
    <label class="switch">
        RFCの表示
        <input type="checkbox" onclick={() => showRFC = !showRFC} checked={showRFC}>
        <div class="base round">
            <span class="slider round"></span>
        </div>
    </label>
    <label class="switch">
        ポート番号の表示
        <input type="checkbox" onclick={() => showPort = !showPort} checked={showPort}>
        <div class="base round">
            <span class="slider round"></span>
        </div>
    </label>
    <label class="switch">
        説明の表示
        <input type="checkbox" onclick={() => showDesc = !showDesc} checked={showDesc}>
        <div class="base round">
            <span class="slider round"></span>
        </div>
    </label>
</div>

<style>
    .settings {
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: row;
        margin-bottom: 10px;

        --button-width: 50px;
        --button-height: 30px;
    }

    .switch{
        cursor: pointer;
        position: relative;
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .switch input[type="checkbox"] {
        display: none;
    }

    .base {
        position: relative;
        background-color: lightgray;
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

    .round {
        border-radius: calc(infinity * 1px);
    }

    .switch input[type="checkbox"]:checked + .base .slider {
        transform: translateX(calc(var(--button-width) - var(--button-height)));
    }

    .switch input[type="checkbox"]:checked + .base {
        background-color: #12b936;
    }
</style>