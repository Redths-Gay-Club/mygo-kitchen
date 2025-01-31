<script lang="ts">
    import type { GameData } from "../scripts/schema";
    import Main from "./Main.svelte";
    import PlayerList from "./player_list/PlayerList.svelte";

    let gameData: GameData = $props()
</script>

<div>
    <PlayerList {...gameData}/>
    <Main {...gameData} />
</div>

<style>
    div {
        display: grid;
        grid-template-columns: 1fr 3fr;
        height: 100vh;
    }
</style>
