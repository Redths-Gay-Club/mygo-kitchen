<script lang="ts">
    import { type Game } from "$lib/client.svelte";
    import type { ScreenChooseBestCard } from "$lib/schema";
    import Carousel from "../../util/Carousel.svelte";

    let {game, stage}: {game: Game, stage: ScreenChooseBestCard} = $props()

    let selectedIndex: number = $state(0);

    $effect(() => {
        game.sendPacket({
            action: "judge_select_card",
            cardIndex: selectedIndex,
        });
    })

    function submit() {
        game.sendPacket({
            action: "choose_best_card",
            cardIndex: selectedIndex,
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
