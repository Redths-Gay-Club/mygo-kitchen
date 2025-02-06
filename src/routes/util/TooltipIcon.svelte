<script lang="ts">
    let {
        image,
        tooltip,
        description,
        size,
        popDirection,
    }: {
        image: string;
        tooltip: string;
        description: string;
        size: string,
        popDirection: "left" | "right";
    } = $props();
</script>

<div>
    <img src={image} alt={tooltip} style:width={size} style:height={size}/>
    <span class={popDirection}>
        <h1>{tooltip}</h1>
        {description}
    </span>
</div>

<style>
    div {
        position: relative;
        display: flex;
        height: 100%;
        justify-content: center;
        align-items: center;
    }

    h1 {
        font-size: 1rem;
        margin: 0;
    }

    span {
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-wrap-mode: nowrap;

        font-size: 0.7rem;
        padding: 0.5rem;
        gap: 0.2rem;
        border-radius: 0.5rem;
        background-color: var(--secondary);
        color: var(--background);

        opacity: 0;
        visibility: hidden;
        transition: all 0.2s;

        z-index: 1;
    }

    .left {
        right: 0;
    }

    div:hover .left {
        opacity: 1;
        visibility: visible;
        right: 120%;
    }

    .right {
        left: 0;
    }

    div:hover .right {
        opacity: 1;
        visibility: visible;
        left: 120%;
    }
</style>
