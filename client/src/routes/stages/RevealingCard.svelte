<script lang="ts">
    import { sendPacket } from "../../scripts/game.svelte";
    import type { RevealingCardStage } from "../../scripts/schema";

    const { sentence, cards }: RevealingCardStage = $props();
    
    let selected = $state(-1);
    let allRevealed = $derived(cards.every((c) => c.revealed));

    function reveal(index: number) {
        if (!cards[index].revealed) {
            sendPacket({
                action: "reveal_card",
                index,
            });
        } else if (allRevealed) {
            selected = index;
            sendPacket({
                action: "select_card",
                index,
            });
        }
    }

    function submitBest() {
        sendPacket({
            action: "choose_best_card",
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
                class:glow={index === selected}
            >
                {#if card.revealed}
                    <img src={card.img} alt="card" />
                {:else}
                    Reveal
                {/if}
            </button>
        {/each}
    </div>
    <button type="button" disabled={selected === -1} onclick={submitBest}>
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
