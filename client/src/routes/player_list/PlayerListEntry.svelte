<script lang="ts">
    let { name } : {name: string} = $props();
</script>

<style>
    #sidebar-entry {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        width: 20rem;
        background-color: #f0f0f0;
        padding: 20px;
    }
</style>

<div id="sidebar-entry">
    {name}
</div>