<script lang="ts">
    import type { Game } from "$lib/client.svelte";
    import TooltipIcon from "../util/TooltipIcon.svelte";
    import { scale } from "svelte/transition";
    import type { PlayerProfile } from "$lib/schema";
    let { game, player }: { game: Game; player: PlayerProfile } = $props();

</script>

{#if player.name === game.judge}
    <TooltipIcon
        image="/crown.svg"
        tooltip="關主"
        description="選出最滿意的回答"
        size="1.5rem"
        popDirection="right"
    />
{/if}
<span class="name" class:you={player.name === game.username}>
    {player.name}
</span>
{#key player.score}
    <span class="score" transition:scale={{ duration: 3000, start: 2 }}>
        {player.score}
    </span>
{/key}

<style>
    .name {
        width: 100%;
        font-size: 1.5rem;
        margin-left: 0.2rem;
        text-wrap-mode: nowrap;
    }

    .you {
        font-weight: bold;
    }

    .score {
        position: absolute;

        font-weight: bold;
        top: 0.95rem;
        right: 1rem;
        font-size: 2rem;
        color: var(--accent);
    }
</style>
