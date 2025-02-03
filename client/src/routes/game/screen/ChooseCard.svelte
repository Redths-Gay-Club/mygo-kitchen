<script lang="ts">
    import { type Game } from "$lib/client.svelte";
    import type { ScreenChoosingCard } from "$lib/schema";
    import Carousel from "../../util/Carousel.svelte";

    let {game, stage}: {game: Game, stage: ScreenChoosingCard} = $props()

    let selectedIndex: number = $state(0);

    function submit() {
        game.sendPacket({
            action: "choose_card",
            cardPoolIndex: selectedIndex,
        });
    }
</script>

<div id="main">
    <h1>{stage.sentence}</h1>
    <Carousel bind:selectedIndex={selectedIndex} images={stage.cards.map(c => c.image)}  />
    <button type="button" onclick={submit}>提交</button>
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
