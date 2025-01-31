<script lang="ts">
    import DevTools from "./dev/DevTools.svelte";
    import Main from "./Main.svelte";
    import PlayerList from "./player_list/PlayerList.svelte";
</script>


<div>
    <PlayerList />
    <Main />
    <DevTools />
</div>

<style>
    :root {
        font-size: 175%;
        --text: #0f0b19;
        --background: #faf9fd;
        --primary: #81f295;
        --secondary: #70d663;
        --secondary30: #70d66350;
        --accent: #4acc57;
    }

    * {
        font-family: Verdana, sans-serif;
        color: var(--text);
    }

    div {
        display: grid;
        grid-template-columns: 1fr 3fr;
        height: 100vh;
    }
</style>
