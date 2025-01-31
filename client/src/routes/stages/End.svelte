<script lang="ts">
    import type { EndStage } from "../../scripts/schema";

    const { sentence, bestCard }: EndStage = $props();
</script>

<div>
    <h1>Winner: {bestCard.owner}</h1>
    <h1>{sentence}</h1>
    <img src={bestCard.img} alt="card" />

</div>

<style>
    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    
    img {
        width: 33%;
        height: auto;
    }
</style>
