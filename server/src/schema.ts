import z from "zod"

// TODO: share with client
//stages

const StartStageSchema = z.object({
    name: z.literal("start")
});

const ChoosingSentenceStageSchema = z.object({
    name: z.literal("choosing_sentence"),
    sentences: z.array(z.string())
});
export type ChoosingSentenceData = z.infer<typeof ChoosingSentenceStageSchema>

const WaitingForSentenceStageSchema = z.object({
    name: z.literal("waiting_for_sentence")
});

const ChoosingCardStageSchema = z.object({
    name: z.literal("choosing_card"),
    sentence: z.string(),
    cards: z.array(z.string())
});
export type ChoosingCardStage = z.infer<typeof ChoosingCardStageSchema>

const WaitingForCardStageSchema = z.object({
    name: z.literal("waiting_for_card"),
    progress: z.string(),
});
export type WaitingForCardStage = z.infer<typeof WaitingForCardStageSchema>

const RevealingCardStageSchema = z.object({
    name: z.literal("revealing_card"),
    sentence: z.string(),
    cards: z.array(z.object({
        revealed: z.boolean(),
        img: z.string(),
    }))
});
export type RevealingCardStage = z.infer<typeof RevealingCardStageSchema>

const WaitingForBestCardStageSchema = z.object({
    name: z.literal("waiting_for_best_card"),
    sentence: z.string(),
    cards: z.array(z.object({
        revealed: z.boolean(),
        img: z.string(),
    })),
    selected: z.number(),
});
export type WaitingForBestCardStage = z.infer<typeof WaitingForBestCardStageSchema>

const EndStageSchema = z.object({
    name: z.literal("end"),
    sentence: z.string(),
    bestCard: z.object({
        img: z.string(),
        owner: z.string(),
    }),
});
export type EndStage = z.infer<typeof EndStageSchema>

const StageDataSchema = z.union([
    StartStageSchema,
    ChoosingSentenceStageSchema,
    WaitingForSentenceStageSchema,
    ChoosingCardStageSchema,
    WaitingForCardStageSchema,
    RevealingCardStageSchema,
    WaitingForBestCardStageSchema,
    EndStageSchema
]);
export type StageData = z.infer<typeof StageDataSchema>


// game data

const PlayerProfileSchema = z.object({ name: z.string() });
export type PlayerProfile = z.infer<typeof PlayerProfileSchema>;

const GameDataSchema = z.object({
    id: z.string(),
    judge: z.string(),
    username: z.string(),
    players: z.array(PlayerProfileSchema),
    stage: StageDataSchema,
});
// export type GameData = z.infer<typeof GameDataSchema>;

export type GameData = {
    id: string,
    judge: string,
    username: string,
    players: PlayerProfile[],
    stage: StageData,
    ws: WebSocket,
}


// packet

const S2CRoomInfoSchema = z.object({
    action: z.literal("room_info"),
    id: z.string(),
    judge: z.string(),
    username: z.string(),
    players: z.array(PlayerProfileSchema),
});
export type S2CRoomInfo = z.infer<typeof S2CRoomInfoSchema>;

const S2CChangeStageSchema = z.object({
    action: z.literal("change_stage"),
    stageData: StageDataSchema,
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


export const S2CPacketSchema = z.union([S2CRoomInfoSchema, S2CChangeStageSchema, S2CAddPlayerSchema, S2CRemovePlayerSchema, S2CChangeJudgeSchema]);
export type S2CPacket = z.infer<typeof S2CPacketSchema>;


const C2SStartSchema = z.object({
    action: z.literal("start")
});
export type C2SStart = z.infer<typeof C2SStartSchema>;

const C2SChooseSentenceSchema = z.object({
    action: z.literal("choose_sentence"),
    sentence: z.string(),
});
export type C2SChooseSentence = z.infer<typeof C2SChooseSentenceSchema>;

const C2SChooseCardSchema = z.object({
    action: z.literal("choose_card"),
    card: z.string(),
});
export type C2SChooseCard = z.infer<typeof C2SChooseCardSchema>;

const C2SRevealCardSchema = z.object({
    action: z.literal("reveal_card"),
    index: z.number(),
});
export type C2SRevealCard = z.infer<typeof C2SRevealCardSchema>;

const C2SSelectCardSchema = z.object({
    action: z.literal("select_card"),
    index: z.number(),
});
export type C2SSelectCard = z.infer<typeof C2SSelectCardSchema>;

const C2SChooseBestCardSchema = z.object({
    action: z.literal("choose_best_card"),
    index: z.number(),
});
export type C2SChooseBestCard = z.infer<typeof C2SChooseBestCardSchema>;

export const C2SPacketSchema = z.union([C2SStartSchema, C2SChooseSentenceSchema, C2SChooseCardSchema, C2SRevealCardSchema, C2SSelectCardSchema, C2SChooseBestCardSchema]);
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
