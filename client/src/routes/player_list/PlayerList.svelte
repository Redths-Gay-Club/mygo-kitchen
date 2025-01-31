<script>
    let users = [
        "Redth",
        "Redth",
        "Redth",
        "Redth",
        "Redth",
        "Redth",
        "Redth",
        "Redth",
        "Redth",
        "Redth",
        "Redth",
        "Redth",
        "Redth",
        "Redth",
    ];
</script>


<div class="sidebar">
    {#each users as user}
        <div class="player-card">
            <div class="user-icon"></div>
            <span>{user}</span>
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
