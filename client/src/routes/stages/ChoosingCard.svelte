<script lang="ts">
    import { sendPacket } from "../../scripts/game.svelte";
    import type { ChoosingCardStage } from "../../scripts/schema";

    const { sentence, cards }: ChoosingCardStage = $props();

    function choose(card: string) {
        sendPacket({
            action: "choose_card",
            card,
        });
    }
</script>

<div id="main">
    <h1>{sentence}</h1>
    <h1>Choose a Card</h1>
    <div id="cards">
        {#each cards as card}
            <button type="button" onclick={() => choose(card)}>
                <img src={card} alt="card" />
            </button>
        {/each}
    </div>
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
