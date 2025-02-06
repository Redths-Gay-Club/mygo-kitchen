<script lang="ts">
    import type { ScreenWaitForSentence } from "$lib/schema";
    import type { Game } from "$lib/client.svelte";
    import Countdown from "../../util/Countdown.svelte";

    let {game, stage}: {game: Game, stage: ScreenWaitForSentence} = $props()
</script>

<div>
    <Countdown seconds=20s/>
    <h1>等待關主選擇句子...</h1>
</div>

<style>
    h1 {
        font-size: 3rem;
    }

    div {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>
