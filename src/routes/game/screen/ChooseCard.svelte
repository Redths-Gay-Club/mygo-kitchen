<script lang="ts">
    import ChooseCardChoose from "./ChooseCardChoose.svelte";

    import { type Game } from "$lib/client.svelte";
    import type { ScreenChoosingCard, ScreenWaitForCard } from "$lib/schema";
    import Countdown from "../../util/Countdown.svelte";

    let {
        game,
        stage,
    }: {
        game: Game;
        stage: ScreenChoosingCard | ScreenWaitForCard;
    } = $props();
</script>

<div class="main">
    <Countdown seconds="60s" />
    <!-- ^ to remain countdown -->
    {#if stage.name === "choose_card"}
        <ChooseCardChoose {game} {stage} />
    {:else}
        <h2>等待玩家選擇圖片...</h2>
        <h1>{stage.progress}</h1>
    {/if}
</div>

<style>
    .main {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
    }

    h1 {
        font-size: 5rem;
        margin: 1rem;
    }

    h2 {
        font-size: 3rem;
        margin: 1rem;
    }
</style>
