import z from "zod"

// card
export const CardSchema = z.object({
    image: z.string(),
    text: z.string(),
});
export type Card = z.infer<typeof CardSchema>;

//stages

const ScreenStartSchema = z.object({
    name: z.literal("start")
});
export type ScreenStart = z.infer<typeof ScreenStartSchema>

const ScreenChooseSentenceSchema = z.object({
    name: z.literal("choose_sentence"),
    sentences: z.array(z.string())
});
export type ScreenChooseSentence = z.infer<typeof ScreenChooseSentenceSchema>

const ScreenWaitForSentenceSchema = z.object({
    name: z.literal("wait_for_sentence")
});
export type ScreenWaitForSentence = z.infer<typeof ScreenWaitForSentenceSchema>

const ScreenChooseCardSchema = z.object({
    name: z.literal("choose_card"),
    sentence: z.string(),
    cards: z.array(CardSchema)
});
export type ScreenChoosingCard = z.infer<typeof ScreenChooseCardSchema>

const ScreenWaitForCardSchema = z.object({
    name: z.literal("wait_for_card"),
    progress: z.string(),
});
export type ScreenWaitForCard = z.infer<typeof ScreenWaitForCardSchema>

const ScreenChooseBestCardSchema = z.object({
    name: z.literal("choose_best_card"),
    sentence: z.string(),
    cards: z.array(CardSchema),
});
export type ScreenChooseBestCard = z.infer<typeof ScreenChooseBestCardSchema>

const ScreenWaitForBestCardSchema = z.object({
    name: z.literal("wait_for_best_card"),
    sentence: z.string(),
    cards: z.array(CardSchema),
    selected: z.number(),
});
export type ScreenWaitForBestCard = z.infer<typeof ScreenWaitForBestCardSchema>

const ScreenEndSchema = z.object({
    name: z.literal("end"),
    sentence: z.string(),
    bestCard: CardSchema,
    winner: z.string(),
});
export type ScreenEnd = z.infer<typeof ScreenEndSchema>

const ScreenSchema = z.union([
    ScreenStartSchema,
    ScreenChooseSentenceSchema,
    ScreenWaitForSentenceSchema,
    ScreenChooseCardSchema,
    ScreenWaitForCardSchema,
    ScreenChooseBestCardSchema,
    ScreenWaitForBestCardSchema,
    ScreenEndSchema
]);
export type Screen = z.infer<typeof ScreenSchema>

// game data

const PlayerProfileSchema = z.object({ name: z.string() });
export type PlayerProfile = z.infer<typeof PlayerProfileSchema>;

// packet

const S2CRoomInfoSchema = z.object({
    action: z.literal("room_info"),
    id: z.string(),
    judge: z.string(),
    username: z.string(),
    screen: ScreenSchema,
    players: z.array(PlayerProfileSchema),
});
export type S2CRoomInfo = z.infer<typeof S2CRoomInfoSchema>;

const S2CChangeStageSchema = z.object({
    action: z.literal("show_screen"),
    screenData: ScreenSchema,
});
export type S2CChangeStage = z.infer<typeof S2CChangeStageSchema>;

const S2CAddPlayerSchema = z.object({
    action: z.literal("add_player"),
    player: PlayerProfileSchema,
});
export type S2CAddPlayer = z.infer<typeof S2CAddPlayerSchema>;

const S2CRemovePlayerSchema = z.object({
    action: z.literal("remove_player"),
    player: z.string(),
});
export type S2CRemovePlayer = z.infer<typeof S2CRemovePlayerSchema>;

const S2CChangeJudgeSchema = z.object({
    action: z.literal("change_judge"),
    judge: z.string(),
});
export type S2CChangeJudge = z.infer<typeof S2CChangeJudgeSchema>;

const S2CJudgeSelectCardSchema = z.object({
    action: z.literal("judge_select_card"),
    cardIndex: z.number(),
});
export type S2CJudgeSelectCard = z.infer<typeof S2CJudgeSelectCardSchema>;

export const S2CPacketSchema = z.union([S2CRoomInfoSchema, S2CChangeStageSchema, S2CAddPlayerSchema, S2CRemovePlayerSchema, S2CChangeJudgeSchema, S2CJudgeSelectCardSchema]);
export type S2CPacket = z.infer<typeof S2CPacketSchema>;

const C2SStartSchema = z.object({
    action: z.literal("start")
});
export type C2SStart = z.infer<typeof C2SStartSchema>;

const C2SChooseSentenceSchema = z.object({
    action: z.literal("choose_sentence"),
    sentenceIndex: z.number(),
});
export type C2SChooseSentence = z.infer<typeof C2SChooseSentenceSchema>;

const C2SChooseCardSchema = z.object({
    action: z.literal("choose_card"),
    cardPoolIndex: z.number(),
});
export type C2SChooseCard = z.infer<typeof C2SChooseCardSchema>;

const C2SSelectCardSchema = S2CJudgeSelectCardSchema;
export type C2SSelectCard = z.infer<typeof C2SSelectCardSchema>;

const C2SChooseBestCardSchema = z.object({
    action: z.literal("choose_best_card"),
    cardIndex: z.number(),
});
export type C2SChooseBestCard = z.infer<typeof C2SChooseBestCardSchema>;

export const C2SPacketSchema = z.union([C2SStartSchema, C2SChooseSentenceSchema, C2SChooseCardSchema, C2SSelectCardSchema, C2SChooseBestCardSchema]);
export type C2SPacket = z.infer<typeof C2SPacketSchema>;


// api
export const S2CResponseSchema = z.object({
    type: z.union([
        z.literal("bad_request"),
        z.literal("room_not_found"),
        z.literal("name_taken"),
        z.literal("valid")
    ]),
});
export type S2CResponse = z.infer<typeof S2CResponseSchema>;

export function rawParse<T, U extends z.ZodTypeDef, V>(schema: z.ZodType<T, U, V>, input: any) {
    try {
        return schema.parse(JSON.parse(input));
    } catch (e) {
        console.error(e);
    }
}
