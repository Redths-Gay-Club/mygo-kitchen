<script lang="ts">
    let { seconds, ...others }: { seconds: string } = $props();
</script>

<hr style:animation-duration={seconds} {...others}/>

<style>
    hr {
        animation-name: countdown;
        animation-timing-function: linear;
        
        position: absolute;
        margin: 0;
        top: 0;
        left: 0;

        border: none;
        height: 1rem;
        background-color: var(--secondary);
    }

    @keyframes countdown {
        from {
            width: 100%;
        }
        to {
            width: 0%;
        }
    }
</style>
