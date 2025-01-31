<script lang="ts">
    import type { WaitingForCardStage } from "../../scripts/game.svelte";

    const { progress }: WaitingForCardStage = $props();
</script>

<div>
    <h1>Players are choosing cards...</h1>
    <h1>{progress}</h1>
</div>

<style>
    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>
