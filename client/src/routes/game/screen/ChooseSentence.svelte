<script lang="ts">
    import { type ScreenChooseSentence } from "$lib/schema";
    import { type Game } from "$lib/client.svelte";

    let { game, stage }: { game: Game; stage: ScreenChooseSentence } = $props();

    function chooseSentence(index: number) {
        game.sendPacket({
            action: "choose_sentence",
            sentenceIndex: index,
        });
    }
</script>

<div>
    <h1>選一個句子</h1>
    {#each stage.sentences as sentence, index}
        <button type="button" onclick={() => chooseSentence(index)}
            >{sentence}</button
        >
    {/each}
</div>

<style>
    h1 {
        font-size: 3rem;
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    button {
        font-size: 2rem;
        margin: 0.5rem;
        width: 90%;
    }
</style>
