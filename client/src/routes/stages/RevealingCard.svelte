<script lang="ts">
    import { sendPacket, storage } from "../../scripts/game.svelte";
    import type { RevealingCardStage } from "../../scripts/schema";

    const { sentence, cards }: RevealingCardStage = $props();
    // let cards = $derived(storage.gameData?.stage.name === "revealing_card" ? storage.gameData.stage.cards : []);
    let selected = $state(-1);
    let allRevealed = $derived(
        cards.every((c) => c.revealed) && selected !== -1,
    );

    function reveal(index: number) {
        if (!cards[index].revealed) {
            sendPacket({
                type: "reveal_card",
                index,
            });
        } else {
            selected = index;
        }
    }

    function submitBest() {
        sendPacket({
            type: "choose_best_card",
            index: selected,
        });
    }
</script>

<div id="main">
    <h1>{sentence}</h1>
    <div id="cards">
        {#each cards as card, index (card.img)}
            <button
                type="button"
                onclick={() => reveal(index)}
                class={index === selected ? "glow" : ""}
            >
                {#if card.revealed}
                    <img src={card.img} alt="card" />
                {:else}
                    Reveal
                {/if}
            </button>
        {/each}
    </div>
    <button type="button" disabled={!allRevealed} onclick={submitBest}>
        Submit best
    </button>
</div>

<style>
    #main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    #cards {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr;
    }

    .glow {
        border: 0.1rem solid gold;
    }

    button {
        background-color: var(--secondary30);
        font-size: 1rem;
        padding: 1rem;
        margin: 0.5rem;
        border: none;
        border-radius: 0.5rem;
        cursor: pointer;
    }

    img {
        width: 100%;
        height: auto;
    }
</style>
