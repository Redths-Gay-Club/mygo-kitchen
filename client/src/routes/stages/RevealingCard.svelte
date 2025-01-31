<script lang="ts">
    import type { RevealingCardStage } from "../../scripts/game.svelte";

    const { sentence, cards }: RevealingCardStage = $props();
</script>

<div id="main">
    <h1>{sentence}</h1>
    <div id="cards">
        {#each cards as card}
            <button type="button">
                {#if card}
                    <img src={card} alt="card" />
                {:else}
                    Open me
                {/if}
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
