<script lang="ts">
    import PlayerCard from "./PlayerCard.svelte";

    import type { Game } from "$lib/client.svelte";
    import { flip } from "svelte/animate";
    import CopyButton from "../util/CopyButton.svelte";
    import TooltipIcon from "../util/TooltipIcon.svelte";
    let { game }: { game: Game } = $props();

    let sortedPlayer = $derived(
        game.players.toSorted((a, b) => b.score - a.score),
    );
</script>

<div class="sidebar">
    <h1>房號 {game.id}<CopyButton content={game.id} /></h1>
    <h3>
        <TooltipIcon
            image="/host.svg"
            tooltip="房主"
            description="架設此房間，退出則房間銷毀"
            size="0.8rem"
            popDirection="right"
        />
        房主 {game.host}
    </h3>
    <hr />
    <div class="list">
        {#each sortedPlayer as player (player.name)}
            <div class="player-card" animate:flip={{ duration: 1000 }}>
                <PlayerCard {game} {player} />
            </div>
        {/each}
    </div>
</div>

<style>
    h1 {
        display: flex;
        font-size: 2rem;
        margin: 0.5rem 0.5rem 0.5rem 0.5rem;
        gap: 0.7rem;
        align-items: center;
        color: var(--background);
    }
    h3 {
        display: flex;
        align-items: center;
        gap: 0.3rem;
        font-size: 0.8rem;
        font-weight: normal;
        color: var(--backgroundHalf);
        margin: 0 0.5rem;
    }

    hr {
        width: 100%;
        height: 0.1rem;
        background-color: var(--backgroundHalf);
        border: none;
        margin-top: 0.8rem;
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
        overflow-y: auto;
    }

    .player-card {
        display: flex;
        position: relative;
        overflow: visible;
        align-items: center;
        justify-content: center;
        padding: 0.7rem;
        gap: 0.3rem;
        margin-bottom: 1rem;
        background-color: var(--background);
        border-radius: 0.5rem;

        transition: transform 0.3s ease-in-out;
    }
</style>
