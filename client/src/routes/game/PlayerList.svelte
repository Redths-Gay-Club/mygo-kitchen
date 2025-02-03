<script lang="ts">
    import type { Game } from "$lib/client.svelte";
    import CopyButton from "../util/CopyButton.svelte";
    let { game }: { game: Game } = $props();

</script>

<div class="sidebar">
    <h1>房號 {game.id}<CopyButton content={game.id} /></h1>
    <hr />
    <div class="list">
        {#each game.players as player (player.name)}
            <div class="player-card">
                <div class="user-icon"></div>
                <span>{player.name}</span>
                {#if game.judge === player.name}
                    <span>[Judge]</span>
                {/if}
            </div>
        {/each}
    </div>
</div>

<style>
    h1 {
        display: flex;
        font-size: 2rem;
        margin: 0.5rem;
        justify-content: space-evenly;
        align-items: center;
        color: var(--background);
    }


    hr {
        width: 100%;
        height: 0.1rem;
        background-color: var(--backgroundHalf);
        border: none;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }

    .sidebar {
        background-color: var(--accent);
        display: flex;
        flex-direction: column;

        padding: 1rem;
        border-top-left-radius: 1rem;
        border-bottom-left-radius: 1rem;
    }

    .list {
        display: grid;
        grid-auto-rows: 5rem;
        width: 100%;
        /* background-color: var(--accent); */
        overflow-y: auto;
    }

    .player-card {
        display: flex;
        align-items: center;
        padding: 1rem;
        margin-bottom: 1rem;
        background-color: var(--background);
        border-radius: 0.5rem;
    }
</style>
