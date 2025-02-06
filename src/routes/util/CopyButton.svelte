<script lang="ts">
    let { content }: { content: string } = $props();

    let clicked = $state(false);

    function copyID() {
        clicked = false;
        navigator.clipboard.writeText(content);
        setTimeout(() => (clicked = true), 1);
    }
</script>

<button onclick={copyID}>
    <img class:animate-copy={clicked} alt="Copy" src="/copy.svg" />
    <img
        class="check"
        class:animate-check={clicked}
        alt="Check"
        src="/check.svg"
    />
</button>

<style>
    button {
        display: flex;
        position: relative;

        width: 2.5rem;
        height: 2.5rem;
        padding: 0.5rem;
    }

    img {
        position: absolute;
        width: 1.5rem;
        height: 1.5rem;
    }

    .animate-copy {
        animation-name: copy;
        animation-duration: 1s;
    }

    .animate-check {
        animation-name: check;
        animation-duration: 1s;
    }

    .check {
        transform: scale(0);
    }

    @keyframes copy {
        0% {
            transform: scale(1);
        }
        20% {
            transform: scale(0);
        }
        80% {
            transform: scale(0);
        }
        100% {
            transform: scale(1);
        }
    }

    @keyframes check {
        0% {
            transform: scale(0);
        }
        30% {
            transform: scale(1);
        }
        70% {
            transform: scale(1);
        }
        100% {
            transform: scale(0);
        }
    }
</style>
