<script lang="ts">
    import { type Game } from "$lib/client.svelte";
    import type { ScreenWaitForBestCard } from "$lib/schema";
    import Carousel from "../../util/Carousel.svelte";
    import Countdown from "../../util/Countdown.svelte";

    let { game, stage }: { game: Game; stage: ScreenWaitForBestCard } =
        $props();
    let [left, right] = $derived(stage.sentence.split("{}"));
    let selectedCardText = $derived(stage.cards[stage.selected].text);
</script>

<div id="main">
    <Countdown seconds=60s/>
    <h1 class="sentence">{left}<span>{selectedCardText}</span>{right}</h1>
    <Carousel
        bind:selectedIndex={stage.selected}
        images={stage.cards.map((c) => c.image)}
        controllable={false}
    />
    <h1>等待關主作出選擇...</h1>
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
