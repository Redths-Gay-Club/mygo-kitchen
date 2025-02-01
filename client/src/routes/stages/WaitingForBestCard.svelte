<script lang="ts">
    import type { WaitingForBestCardStage } from "../../scripts/schema";

    const { sentence, cards, selected }: WaitingForBestCardStage = $props();
</script>

<div id="main">
    <h1>{sentence}</h1>
    <div id="cards">
        {#each cards as card, index (card.img)}
            <span class:glow={selected === index}>
                {#if card.revealed}
                    <img src={card.img} alt="card" />
                {:else}
                    Reveal
                {/if}
            </span>
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

    .glow {
        border: 0.1rem solid gold;
    }

    img {
        width: 100%;
        height: auto;
    }
    
    span {
        background-color: var(--secondary30);
        font-size: 1rem;
        padding: 1rem;
        margin: 0.5rem;
        border: none;
        border-radius: 0.5rem;
    }
</style>
