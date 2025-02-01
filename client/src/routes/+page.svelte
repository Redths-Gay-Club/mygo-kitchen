<script>
    import { storage } from "../scripts/game.svelte";
    import Game from "./Game.svelte";
    import Lobby from "./Lobby.svelte";
</script>

{#if storage.gameData}
    <Game {...storage.gameData} />
{:else}
    <Lobby />
{/if}

<style>
    :root {
        font-size: 175%;
        --text: #0f0b19;
        --background: #faf9fd;
        --primary: #a2d2e9;
        --secondary: #609bd5;
        --accent: #0b4072;

        font-family: Unifont, sans-serif;
        color: var(--text);
    }
</style>
