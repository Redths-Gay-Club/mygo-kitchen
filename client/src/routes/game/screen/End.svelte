<script lang="ts">
    import type { ScreenEnd } from "$lib/schema";
    import type { Game } from "$lib/client.svelte";

    let {game, stage}: {game: Game, stage: ScreenEnd} = $props()

</script>

<div>
    <h1>Winner: {stage.winner}</h1>
    <h1>{stage.sentence}</h1>
    <img src={stage.bestCard.image} alt="card" />

</div>

<style>
    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    
    img {
        width: 33%;
        height: auto;
    }
</style>
