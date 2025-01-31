import z from "zod";

const StartStageSchema = z.object({
    stage: z.literal("start")
});

const ChoosingSentenceStageSchema = z.object({
    stage: z.literal("choosing_sentence"),
    sentences: z.array(z.string())
});
export type ChoosingSentenceData = z.infer<typeof ChoosingSentenceStageSchema>

const WaitingForSentenceStageSchema = z.object({
    stage: z.literal("waiting_for_sentence")
});

const ChoosingCardStageSchema = z.object({
    stage: z.literal("choosing_card"),
    sentence: z.string(),
    cards: z.array(z.string())
});
export type ChoosingCardStage = z.infer<typeof ChoosingCardStageSchema>

const WaitingForCardStageSchema = z.object({
    stage: z.literal("waiting_for_card"),
    progress: z.string(),
});
export type WaitingForCardStage = z.infer<typeof WaitingForCardStageSchema>

const RevealingCardStageSchema = z.object({
    stage: z.literal("revealing_card"),
    sentence: z.string(),
    cards: z.array(z.string().optional())
});
export type RevealingCardStage = z.infer<typeof RevealingCardStageSchema>

const EndStageSchema = z.object({
    stage: z.literal("end")
});

const StageDataSchema = z.union([
    StartStageSchema,
    ChoosingSentenceStageSchema,
    WaitingForSentenceStageSchema,
    ChoosingCardStageSchema,
    WaitingForCardStageSchema,
    RevealingCardStageSchema,
    EndStageSchema
]);

export type StageData = z.infer<typeof StageDataSchema>

export let stageData: {data: StageData} = $state({ data: { stage: "start" }});

export function parsePacket(data: any) {
    let parsed = StageDataSchema.safeParse(data);
    if (parsed.success) {
        stageData.data = parsed.data;
    } else {
        console.error(parsed.error.errors);
    }
}
