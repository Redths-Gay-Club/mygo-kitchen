<script>
    let { children } = $props();
</script>

<div id="outer">
    <div id="inner">
        {@render children()}
    </div>
</div>

<style>
    @font-face {
        font-family: Unifont;
        src: url("/unifont-15.1.05.otf");
        font-weight: normal;
        font-style: normal;
    }

    :root {
        font-size: min(1.5vw, 2vh);
        --text: #0f0b19;
        --background: #faf9fd;
        --primary: #a2d2e9;
        --secondary: #609bd5;
        --accent: #0b4072;
        --backgroundHalf: #bfcbda;
        --font-family: Unifont, sans-serif;
        font-family: var(--font-family);
        color: var(--text);
    }

    #outer {
        display: flex;
        height: 100vh;
        justify-content: center;
        align-items: center;
        background-color: var(--primary);
        overflow: hidden;
    }

    #inner {
        display: flex;
        width: 64rem;
        height: 48rem;
        justify-content: center;
        align-items: center;
        background-color: var(--background);
        border-radius: 1rem;
    }

    :global {
        button {
            font-family: var(--font-family);
            font-size: 2rem;
            background-color: var(--accent);
            color: var(--background);
            padding: 1rem;
            border: none;
            border-radius: 0.5rem;
            cursor: pointer;

            transition-property: transform background-color;
            transition-duration: 0.1s;
        }
        button:disabled {
            background-color: var(--primary);
            cursor: default;
        }
        button:hover:not(:disabled) {
            transform: scale(1.2);
            background-color: var(--secondary);
        }
    }
</style>
