<script lang="ts">
    import { stageData } from "../scripts/game.svelte";
    import ChoosingCard from "./stages/ChoosingCard.svelte";
    import ChoosingSentence from "./stages/ChoosingSentence.svelte";
    import WaitingForSentence from "./stages/WaitingForSentence.svelte";
    import Start from "./stages/Start.svelte";
    import WaitingForCard from "./stages/WaitingForCard.svelte";
    import RevealingCard from "./stages/RevealingCard.svelte";
</script>

{#if stageData.data.stage === "start"}
    <Start />
{:else if stageData.data.stage === "choosing_sentence"}
    <ChoosingSentence {...stageData.data} />
{:else if stageData.data.stage === "waiting_for_sentence"}
    <WaitingForSentence />
{:else if stageData.data.stage === "choosing_card"}
    <ChoosingCard {...stageData.data} />
{:else if stageData.data.stage === "waiting_for_card"}
    <WaitingForCard {...stageData.data} />
{:else if stageData.data.stage === "revealing_card"}
    <RevealingCard {...stageData.data} />
{:else if stageData.data.stage === "end"}
    <Start />
{/if}
