<script lang="ts">
    import type { PageProps } from "./$types";
    import GameScreen from "./GameScreen.svelte";

    let { data }: PageProps = $props();
</script>

<GameScreen game={data.game} />

<style>
</style>
