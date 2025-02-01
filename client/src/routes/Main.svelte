<script lang="ts">
    import { type GameData } from "../scripts/schema";
    import ChoosingCard from "./stages/ChoosingCard.svelte";
    import ChoosingSentence from "./stages/ChoosingSentence.svelte";
    import WaitingForSentence from "./stages/WaitingForSentence.svelte";
    import Start from "./stages/Start.svelte";
    import WaitingForCard from "./stages/WaitingForCard.svelte";
    import RevealingCard from "./stages/RevealingCard.svelte";
    import End from "./stages/End.svelte";
    import WaitingForBestCard from "./stages/WaitingForBestCard.svelte";

    let gameData: GameData = $props();
    let stage = $derived(gameData.stage);
</script>

{#if stage.name === "start"}
    <Start {...gameData} />
{:else if stage.name === "choosing_sentence"}
    <ChoosingSentence {...stage} />
{:else if stage.name === "waiting_for_sentence"}
    <WaitingForSentence />
{:else if stage.name === "choosing_card"}
    <ChoosingCard {...stage} />
{:else if stage.name === "waiting_for_card"}
    <WaitingForCard {...stage} />
{:else if stage.name === "revealing_card"}
    <RevealingCard {...stage} />
{:else if stage.name === "waiting_for_best_card"}
    <WaitingForBestCard {...stage} />
{:else if stage.name === "end"}
    <End {...stage} />
{/if}
