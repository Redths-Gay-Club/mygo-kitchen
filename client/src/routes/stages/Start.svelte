<script lang="ts">
    import { sendPacket } from "../../scripts/game.svelte";
    import type { GameData } from "../../scripts/schema";

    const gameData: GameData = $props();
    const disabled = $derived(
        !(gameData.judge === gameData.username &&gameData.players.length >= 2)
    );

    function onclick() {
        sendPacket({ action: "start" });
    }
</script>

<div>
    <h1>MyGo Kitchen</h1>
    <button type="button" {disabled} {onclick}>START</button>
    <h1>Room {gameData.id}</h1>
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
    }

    button {
        background-color: var(--accent);
        font-size: 4rem;
        padding: 1rem;
        border: none;
        border-radius: 0.5rem;
        cursor: pointer;
    }
</style>
