<script lang="ts">
    import { type Game } from "$lib/client.svelte";
    import type { ScreenChooseBestCard } from "$lib/schema";
    import Carousel from "../../util/Carousel.svelte";
    import Countdown from "../../util/Countdown.svelte";

    let { game, stage }: { game: Game; stage: ScreenChooseBestCard } = $props();

    let selectedIndex = $state(0);
    let [left, right] = $derived(stage.sentence.split("{}"));
    let selectedCardText = $derived(stage.cards[selectedIndex].text);

    $effect(() => {
        game.sendPacket({
            action: "judge_select_card",
            cardIndex: selectedIndex,
        });
    });

    function submit() {
        game.sendPacket({
            action: "choose_best_card",
            cardIndex: selectedIndex,
        });
    }
</script>

<div id="main">
    <Countdown seconds=60s/>
    <h1 class="sentence">{left}<span>{selectedCardText}</span>{right}</h1>
    <Carousel bind:selectedIndex images={stage.cards.map((c) => c.image)} />
    <button type="button" onclick={submit}>提交</button>
</div>

<style>
    .sentence {
        width: 90%;
        text-align: center;
    }

    span {
        color: var(--secondary);
    }

    #main {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
    }
</style>
