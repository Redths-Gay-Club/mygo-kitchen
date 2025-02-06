<script lang="ts">
    import { goto } from "$app/navigation";
    import type { PageProps } from "./$types";

    let { data }: PageProps = $props();

    setTimeout(() => {
        goto("/");
    }, 3000);
</script>
<div>
    <h1>{data.error}</h1>
    <h2>3秒後回到主頁</h2>
</div>

<style>
    h1 {
        font-size: 5rem;
        margin: 0;
    }
    h2 {
        font-size: 3rem;
        margin: 0;
    }
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 3rem;
    }
</style>
