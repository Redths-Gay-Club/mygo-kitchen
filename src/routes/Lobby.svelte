<script lang="ts">
    import {
        findRoom,
        joinGame as joinGame,
        storage,
    } from "$lib/client.svelte";
    import { openServer } from "$lib/host/server";
    import type { S2CResponse } from "$lib/schema";
    import { onMount } from "svelte";

    onMount(() => {
        storage.game = undefined;
    });

    let name = $state("");
    let roomId = $state("");
    let status: S2CResponse["type"] | "" = $state("");

    $effect(() => {
        if (name.length === 0) return;
        if (roomId.length !== 3) return;
        findRoom(name, roomId).then((r) => {
            if (r) status = r.type;
        });
    });

    function create() {
        if (name.length === 0) return;
        openServer(name);
    }

    function join() {
        if (name.length === 0) return;
        if (status !== "valid") return;
        joinGame(name, roomId);
    }

    function onEnter(event: KeyboardEvent) {
        if (event.key === "Enter") {
            event.preventDefault();
            join();
        }
    }
</script>

{#snippet statusText(showOnStatus: typeof status, text: string, color: string)}
    <span style="color:{color}" class:hide={status !== showOnStatus}
        >{text}</span
    >
{/snippet}

<div class="grid">
    <div class="title wide">
        <img src="/logo.svg" alt="MyGo" />
        <h1 class="">MyGo 廚房</h1>
    </div>

    <p class="wide">
        名稱
        {@render statusText("name_taken", "已存在", "red")}
    </p>
    <input
        class="wide"
        bind:value={name}
        maxlength="32"
        placeholder="User1234"
    />
    <hr class="spacer" />
    <p>
        房號
        {@render statusText("room_not_found", "不存在", "red")}
        {@render statusText("valid", "存在", "green")}
    </p>
    <button class="tall" type="button" onclick={create}>創建房間</button>
    <hr class="tall" />
    <input
        class="room-id"
        bind:value={roomId}
        placeholder="168"
        onkeypress={onEnter}
    />
    <button type="button" onclick={join} disabled={status !== "valid"}
        >加入</button
    >
</div>

<style>
    .grid {
        display: grid;
        grid-template-columns: 12rem 4rem 12rem;
        grid-template-rows: 8rem 1rem 4rem 1rem 4rem 4rem;
        gap: 1rem;
    }

    .title {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2rem;
    }

    h1 {
        font-size: 4.5rem;
    }

    img {
        width: 5rem;
        height: 5rem;
    }

    p {
        display: inline-block;
        align-self: center;
        font-size: 1.5rem;
    }

    input {
        font-family: var(--font-family);
        font-size: 2rem;
        padding: 1rem;
        border-width: 0.2rem;
        border-style: solid;
        border-color: var(--secondary);
        outline: none;
        border-radius: 0.5rem;

        transition-property: border-color;
        transition-duration: 0.2s;
    }

    input:focus {
        border-color: var(--accent);
    }

    .wide {
        grid-column: 1/4;
    }

    .tall {
        grid-row: 5/7;
    }

    .spacer {
        grid-column: 1/3;
        visibility: hidden;
    }

    .hide {
        display: none;
    }
</style>
