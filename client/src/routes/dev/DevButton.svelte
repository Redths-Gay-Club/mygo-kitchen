<script lang="ts">
    import { parsePacket, type StageData } from "../../scripts/game.svelte";
    const stageData: StageData = $props();
    function onclick() {
        parsePacket(stageData);
    }
</script>

<button type="button" {onclick}>{stageData.stage}</button>
