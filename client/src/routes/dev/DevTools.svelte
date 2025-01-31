<script lang="ts">
    import { parsePacket, type StageData } from "../../scripts/game.svelte";
    import DevButton from "./DevButton.svelte";

    function w(stageData: StageData) {
        return () => parsePacket(stageData);
    }
</script>

<div>
    <DevButton stage="start" />
    <DevButton
        stage="choosing_sentence"
        sentences={["what the hell", "what u doing ", "realest moment"]}
    />
    <DevButton stage="waiting_for_sentence" />
    <DevButton
        stage="choosing_card"
        sentence="gay"
        cards={[
            "https://drive.miyago9267.com/d/file/img/mygo/%E5%A6%B3%E6%98%AF%E4%BE%86%E6%89%BE%E6%88%91%E5%90%B5%E6%9E%B6%E7%9A%84%E5%97%8E.jpg",
            "https://drive.miyago9267.com/d/file/img/mygo/%E5%B7%AE%E5%8B%81.jpg",
            "https://drive.miyago9267.com/d/file/img/mygo/%E6%88%91%E6%83%B3%E6%87%89%E8%A9%B2%E4%B8%8D%E6%98%AF.jpg",
        ]}
    />
    <DevButton stage="waiting_for_card" progress="6/7" />
    <DevButton
        stage="revealing_card"
        sentence="sentence real"
        cards={["https://drive.miyago9267.com/d/file/img/mygo/%E5%B7%AE%E5%8B%81.jpg", undefined, undefined]}
    />
</div>

<style>
    div {
        position: fixed;
        bottom: 1rem;
        right: 1rem;
    }
</style>
