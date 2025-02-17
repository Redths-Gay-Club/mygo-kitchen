<script lang="ts">
    let {
        selectedIndex = $bindable(0),
        images,
        controllable = true,
    }: {
        selectedIndex?: number;
        images: string[];
        controllable?: boolean;
    } = $props();

    let mask: HTMLElement;
    let list: HTMLElement;

    let translateX = 0;

    if (!controllable) {
        $effect(() => update());
    }

    function updateTranslation(n: number) {
        selectedIndex = n;
        update();
    }

    function update() {
        const halfWidth = mask.getBoundingClientRect().width / 2;
        const currentC = list.children[selectedIndex]
            .firstChild! as HTMLElement;
        const halfImageWidth = currentC.getBoundingClientRect().width / 2;
        const listX = list.getBoundingClientRect().x;
        const currentX = currentC.getBoundingClientRect().x;
        translateX = listX - currentX + halfWidth - halfImageWidth;
        list.style.transform = `translateX(${translateX}px)`;
    }

    function onload(index: number) {
        if (index !== 0) return;
        updateTranslation(0);
    }

    function changeBy(delta: number) {
        const max = list.children.length;
        updateTranslation((selectedIndex + delta + max) % max);
    }

    let topSlide: HTMLElement;
    let swiping = $state(false);
    let startTouchX = $state(0);
    let lastTouchX = $state(0);

    function ontouchstart(event: TouchEvent) {
        startTouchX = event.touches[0].pageX;
    }

    function ontouchmove(event: TouchEvent) {
        swiping = true;
        lastTouchX = event.touches[0].pageX;
    }

    function ontouchend() {
        if (!swiping) return;
        swiping = false;
        topSlide.style.transform = "";
        const deltaX = lastTouchX - startTouchX;
        if (deltaX > 0) {
            changeBy(-1);
        } else if (deltaX < 0) {
            changeBy(1);
        }
        startTouchX = 0;
        lastTouchX = 0;
    }
</script>

<div class="carousel">
    <div class="upper" {ontouchstart} {ontouchmove} {ontouchend}>
        <div
            class="top-slide"
            bind:this={topSlide}
            class:animate-left={!swiping}
            style:left={`calc(${lastTouchX - startTouchX}px - ${selectedIndex}00%)`}
        >
            {#each images as image, index (image)}
                <div class="upper-container">
                    <img class="large" src={image} alt="card" />
                </div>
            {/each}
        </div>
        {#if controllable}
            <button class="left-arrow" onclick={() => changeBy(-1)}>
                {"<"}
            </button>
            <button class="right-arrow" onclick={() => changeBy(1)}>
                {">"}
            </button>
        {/if}
    </div>
    <div class="mask" bind:this={mask}>
        <div class="list" bind:this={list}>
            {#each images as image, index (image)}
                <button
                    class="image"
                    disabled={!controllable}
                    type="button"
                    onclick={() => updateTranslation(index)}
                >
                    <img
                        class="small"
                        class:not-selected={selectedIndex !== index}
                        onload={() => onload(index)}
                        src={image}
                        alt="gay"
                    />
                </button>
            {/each}
        </div>
    </div>
</div>

<style>
    .carousel {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        width: 30rem;
        padding: 1rem 1rem 0.5rem 1rem;

        background-color: var(--accent);
        border-radius: 0.5rem;
    }

    .upper {
        display: flex;
        position: relative;
        overflow: hidden;
        width: 30rem;
        height: 18rem;
    }

    .upper-container {
        width: 30rem;
        height: 18rem;
        overflow: visible;
    }

    .top-slide {
        display: flex;
        position: absolute;

        /* width: 100%;
        height: 100%; */

        /* gap: 1rem; */
        /* transition: transform 0.1s; */
    }

    .animate-left {
        transition: left 0.5s;
    }

    .left-arrow {
        position: absolute;
        background: none;
        height: 100%;
    }

    .right-arrow {
        position: absolute;
        background: none;
        height: 100%;
        right: 0;
    }

    .left-arrow:hover,
    .right-arrow:hover {
        background: none;
        color: var(--accent);
    }

    .large {
        height: 100%;
        width: 100%;
        object-fit: contain;
    }

    .mask {
        display: flex;
        overflow: hidden;
        width: 100%;
        height: 5rem;
    }

    .image {
        display: flex;
        padding: 0.5rem;
        height: 100%;
        background: none;
    }

    .image:hover {
        background: none;
    }

    .not-selected {
        opacity: 50%;
    }

    .small {
        width: auto;
        height: 100%;
    }

    .list {
        display: flex;
        transition-property: transform;
        transition-duration: 0.5s;
    }

    @media screen and (max-aspect-ratio: 1/1) {
        .carousel {
            width: 26rem;
        }
        .upper,
        .upper-container {
            width: 26rem;
            height: 15rem;
        }

        .left-arrow, .right-arrow {
            display: none;
        }
    }
</style>
