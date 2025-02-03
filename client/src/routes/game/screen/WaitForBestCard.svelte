<script lang="ts">
    import { type Game } from "$lib/client.svelte";
    import type { ScreenWaitForBestCard } from "$lib/schema";
    import Carousel from "../../util/Carousel.svelte";

    let {game, stage}: {game: Game, stage: ScreenWaitForBestCard} = $props()
</script>

<div id="main">
    <h1>{stage.sentence}</h1>
    <Carousel bind:selectedIndex={stage.selected} images={stage.cards.map(c => c.image)} controllable={false}  />
    <h1>等待關主作出選擇...</h1>
</div>

<style>
    #main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
    }
</style>
