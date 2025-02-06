<script lang="ts">
    import Start from "./screen/Start.svelte";
    import ChooseSentence from "./screen/ChooseSentence.svelte";
    import WaitForSentence from "./screen/WaitForSentence.svelte";
    import ChooseCard from "./screen/ChooseCard.svelte";
    import ChooseBestCard from "./screen/ChooseBestCard.svelte";
    import End from "./screen/End.svelte";
    import WaitForBestCard from "./screen/WaitForBestCard.svelte";
    import type { Game } from "$lib/client.svelte";

    let { game }: { game: Game } = $props();

    const componentMap = {
        start: Start,
        choose_sentence: ChooseSentence,
        wait_for_sentence: WaitForSentence,
        choose_card: ChooseCard,
        wait_for_card: ChooseCard,
        choose_best_card: ChooseBestCard,
        wait_for_best_card: WaitForBestCard,
        end: End,
    };

    let Component = $derived(componentMap[game.screen.name]);
</script>

<Component {game} stage={game.screen as never} />
<!--                        @ts-ignore ^^^^^ -->
