<script lang="ts">
    import type { ScreenWaitForSentence } from "$lib/schema";
    import type { Game } from "$lib/client.svelte";

    let {game, stage}: {game: Game, stage: ScreenWaitForSentence} = $props()
</script>

<div>
    <h1>等待關主選擇句子...</h1>
</div>

<style>
    h1 {
        font-size: 3rem;
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>
