<script lang="ts">
    import type { ScreenStart } from "$lib/schema";
    import { type Game } from "$lib/client.svelte";

    let { game }: { game: Game; stage: ScreenStart; } = $props();

    const disabled = $derived(
        !(
            game.judge === game.username &&
            game.players.length >= 2
        ),
    );

    function onclick() {
        game.sendPacket({ action: "start" });
    }
</script>

<div>
    <h1>MyGo 廚房</h1>
    <button type="button" {disabled} {onclick}>開始遊戲</button>
</div>

<style>
    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    h1 {
        font-size: 5rem;
        margin-top: 0;
    }

    button {
        font-size: 4rem;
        /* padding: 1rem; */
    }
</style>
