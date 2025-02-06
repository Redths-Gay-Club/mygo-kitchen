<script lang="ts">
    import type { ScreenWaitForCard } from "$lib/schema";
    import type { Game } from "$lib/client.svelte";

    let {game, stage}: {game: Game, stage: ScreenWaitForCard} = $props()

    // const { progress }: WaitingForCardStage = $props();
</script>

<div>
    <h2>等待玩家選擇圖片...</h2>
    <h1>{stage.progress}</h1>
</div>

<style>
    h1 {
        font-size: 5rem;
        margin: 1rem;
    }

    h2 {
        font-size: 3rem;
        margin: 1rem;
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>
