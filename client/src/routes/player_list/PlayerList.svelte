<script lang="ts">
    import type { GameData } from "../../scripts/schema";
    let { players, judge }: GameData = $props()
</script>


<div class="sidebar">
    {#each players as player}
        <div class="player-card">
            <div class="user-icon"></div>
            <span>{player.name}</span>
            {#if judge === player.name}
                <span>[Judge]</span>
            {/if}
        </div>
    {/each}
</div>

<style>
    .sidebar {
        display: grid;
        grid-auto-rows: 5rem;
        /* height: 100%; */
        padding: 1rem;
        overflow-y: auto;
        background-color: var(--secondary30);
    }

    .player-card {
        display: flex;
        align-items: center;
        padding: 1rem;
        margin-bottom: 1rem;
        background-color: var(--secondary30);
        border-radius: 0.5rem;
    }
</style>
