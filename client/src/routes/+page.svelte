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
        --primary: #81f295;
        --secondary: #70d663;
        --secondary30: #70d66350;
        --accent: #4acc57;

        font-family: Verdana, sans-serif;
        color: var(--text);
    }
</style>
