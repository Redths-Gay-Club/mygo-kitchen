<script lang="ts">
    import Main from "./Main.svelte";
    import PlayerList from "./PlayerList.svelte";
    import type { Game } from "$lib/client.svelte";

    let {game}: {game: Game} = $props()
</script>

<div>
    <PlayerList {game}/>
    <Main {game} />
</div>

<style>
    div {
        display: grid;
        grid-template-columns: 1fr 3fr;
        width: 100%;
        height: 100%;
    }
</style>
