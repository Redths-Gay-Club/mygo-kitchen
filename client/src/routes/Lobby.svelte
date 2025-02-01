<script lang="ts">
    import { connectToWebsocket } from "../scripts/game.svelte";

    let name = "";
    let roomId: string | undefined;

    function onclick() {
        if (!name) return;
        connectToWebsocket(name, roomId);
    }
</script>

<div>
    <h1>MyGo Kitchen</h1>
    <input bind:value={name} placeholder="Name"/>
    <button type="button" {onclick}>{roomId ? "Join" : "Create"}</button>
    <input bind:value={roomId} placeholder="or enter a room id"/>
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
        font-size: 2rem;
        padding: 1rem;
        border: none;
        border-radius: 0.5rem;
        cursor: pointer;
    }
    
    input {
        font-size: 2rem;
        padding: 1rem;
        border: none;
        border-radius: 0.5rem;
        cursor: pointer;
    }
</style>
