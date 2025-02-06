<script lang="ts">
    import type { ScreenEnd } from "$lib/schema";
    import type { Game } from "$lib/client.svelte";
    import Countdown from "../../util/Countdown.svelte";

    let {game, stage}: {game: Game, stage: ScreenEnd} = $props()

    let [left, right] = $derived(stage.sentence.split("{}"));
    let selectedCardText = $derived(stage.bestCard.text);

</script>

<div class="main">
    <Countdown seconds=5s/>
    <h1>Winner: {stage.winner}</h1>
    <h1 class="sentence">{left}<span>{selectedCardText}</span>{right}</h1>
    <div class="container">
        <img src={stage.bestCard.image} alt={stage.bestCard.text} />
    </div>

</div>

<style>
    .sentence {
        width: 90%;
        text-align: center;
    }

    span {
        color: var(--secondary)
    }

    .main {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    
    .container {
        display: flex;
        position: relative;
        width: 30rem;
        height: 18rem;
    }
    
    img {
        height: 100%;
        width: 100%;
        object-fit: contain;
    }
    
    @media screen and (max-aspect-ratio: 1/1) {
        .container {
            width: 26rem;
            height: 15rem;
        }
    }
</style>
