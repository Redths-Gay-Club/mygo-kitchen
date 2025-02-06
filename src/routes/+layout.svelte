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
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: var(--background);
        border-radius: 1rem;
        overflow: hidden;
    }

    @media screen and (max-aspect-ratio: 1/1) {
        :root {
            font-size: min(3vw, 2.25vh);
        }
        #outer {
            overflow: visible;
            /* height: 100%; */
            height: unset;
            min-height: 100vh;
            /* padding: 2rem; */
        }
        #inner {
            width: 100%;
            height: unset;
            /* height: 100%; */
            min-height: calc(100vh - 2rem);
            margin: 1rem;
            overflow: hidden;
            /* width: 48rem; */
            /* height: 64rem; */
        }
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

        ::-webkit-scrollbar {
            width: 0.5rem;
            background-color: var(--accent);
        }
        ::-webkit-scrollbar-thumb {
            background-color: var(--secondary);
            border-radius: 0.2rem;
        }
    }
</style>
