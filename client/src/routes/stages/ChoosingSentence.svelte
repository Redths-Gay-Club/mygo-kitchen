<script lang="ts">
    import { sendPacket } from "../../scripts/game.svelte";
    import type { ChoosingSentenceData } from "../../scripts/schema";

    const { sentences }: ChoosingSentenceData = $props();

    function choose(sentence: string) {
        sendPacket({
            type: "choose_sentence",
            sentence,
        });
    }
</script>

<div>
    <h1>Choose a sentence</h1>
    {#each sentences as sentence}
        <button type="button" onclick={() => choose(sentence)}>{sentence}</button>
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
