<script lang="ts">
    import { type ScreenChooseSentence } from "$lib/schema";
    import { type Game } from "$lib/client.svelte";
    import Countdown from "../../util/Countdown.svelte";

    let { game, stage }: { game: Game; stage: ScreenChooseSentence } = $props();

    function chooseSentence(index: number) {
        game.sendPacket({
            action: "choose_sentence",
            sentenceIndex: index,
        });
    }
</script>

<div>
    <Countdown seconds=20s/>
    <h1>選一個句子</h1>
    {#each stage.sentences as sentence, index}
        <button type="button" onclick={() => chooseSentence(index)}
            >{sentence.replace("{}", "____")}</button
        >
    {/each}
</div>

<style>
    h1 {
        font-size: 3rem;
    }

    div {
        display: flex;
        position: relative;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    button {
        font-size: 2rem;
        margin: 0.5rem;
        width: 80%;
    }
</style>
