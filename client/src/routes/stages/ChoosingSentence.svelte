<script lang="ts">
    import type { ChoosingSentenceData } from "../../scripts/game.svelte";

    const { sentences }: ChoosingSentenceData = $props();
</script>

<div>
    <h1>Choose a sentence</h1>
    {#each sentences as sentence}
        <button type="button">{sentence}</button>
    {/each}
</div>

<style>
    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
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
</style>
