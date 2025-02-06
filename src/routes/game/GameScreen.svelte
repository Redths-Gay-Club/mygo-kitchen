<script lang="ts">
    import Main from "./Main.svelte";
    import PlayerList from "./PlayerList.svelte";
    import type { Game } from "$lib/client.svelte";

    let { game }: { game: Game } = $props();
</script>

<div class="main">
    <div class="sidebar">
        <PlayerList {game} />
    </div>
    <Main {game} />
</div>

<style>
    .main {
        display: grid;
        grid-template-columns: 1fr 3fr;
        width: 100%;
        height: 100%;
    }

    .sidebar {
        background-color: var(--accent);
        display: flex;
        flex-direction: column;
        /* width: 100%; */
        flex: 1;
        overflow-x: hidden;
        overflow-y: auto;

        padding: 1rem;
    }

    @media screen and (max-aspect-ratio: 1/1) {
        .main {
            grid-template-columns: 1fr;
            /* grid-template-rows: unset; */
            grid-template-rows: 40rem auto;
            height: unset;
            /* height: 100%; */
            flex: 1;
            /* min-height: 100%; */
        }
        .sidebar {
            order: 1;
            height: auto;
            /* min-height: 100%; */
        }
    }
</style>
