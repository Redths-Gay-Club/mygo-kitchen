<script lang="ts">
    import { type Game } from "$lib/client.svelte";
    import type { ScreenChoosingCard } from "$lib/schema";
    import Carousel from "../../util/Carousel.svelte";

    let { game, stage }: { game: Game; stage: ScreenChoosingCard } = $props();

    let selectedIndex = $state(0);
    let [left, right] = $derived(stage.sentence.split("{}"));
    let selectedCardText = $derived(stage.cards[selectedIndex].text);

    function submit() {
        game.sendPacket({
            action: "choose_card",
            cardPoolIndex: selectedIndex,
        });
    }
</script>

<h1 class="sentence">{left}<span>{selectedCardText}</span>{right}</h1>
<Carousel bind:selectedIndex images={stage.cards.map((c) => c.image)} />
<button type="button" onclick={submit}>提交</button>

<style>
    h1 {
        width: 90%;
        text-align: center;
    }

    span {
        color: var(--secondary);
    }
</style>
