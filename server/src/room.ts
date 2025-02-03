import { sendPacket, type Player } from ".";
import { generateCards, generateSentences } from "./data";
import type { C2SChooseBestCard, C2SChooseCard, C2SChooseSentence, C2SPacket, C2SRevealCard, C2SSelectCard, S2CPacket } from "./schema";

export const rooms = new Map<string, Room>();

type Card = {
    img: string,
    revealed: boolean,
    owner: string,
}

type StageReady = {
    name: "ready",
};
type StageWaitingForSentence = {
    name: "waiting_for_sentence",
};
type StageWaitingForCards = {
    name: "waiting_for_cards",
    sentence: string,
    cards: Card[],
};
type StageRevealingCards = {
    name: "revealing_card",
    sentence: string,
    cards: Card[],
};
type StageWaitingForBestCard = {
    name: "waiting_for_best_card",
    sentence: string,
    cards: Card[],
};
type StageEnd = {
    name: "end",
    sentence: string,
    bestCard: Card,
};

type ServerStage =
    | StageReady
    | StageWaitingForSentence
    | StageWaitingForCards
    | StageRevealingCards
    | StageWaitingForBestCard
    | StageEnd;

export type Room = {
    id: string,
    judge: string,
    players: Player[],
    stage: ServerStage,
}



function random(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function generateNewRoomId(): string {
    while (true) {
        const roomId = random(100, 999).toString();
        if (!rooms.has(roomId)) return roomId;
    }
}

export function createRoom(judge: string): Room {
    const id = generateNewRoomId();
    const room: Room = {
        id,
        judge,
        players: [],
        stage: { name: "ready" },
    };
    rooms.set(id, room);
    return room;
}

export function joinRoom(player: Player, room: Room) {
    broadcastPacket({
        action: "add_player",
        player: player.data.profile,
    }, room);
    room.players.push(player);
    sendPacket(player, {
        action: "room_info",
        id: room.id,
        judge: room.judge,
        username: player.data.profile.name,
        players: room.players.map(p => p.data.profile),
    });

    // TODO! mid join players
}

export function leaveRoom(player: Player, room: Room) {
    room.players.filter(p => p.data.profile.name !== player.data.profile.name);
    broadcastPacket({
        action: "remove_player",
        player: player.data.profile.name,
    }, room);
    // TODO! when judge quit / remove chosen card
}


type PacketHanlderObjectTypeMap<A> = {
    [S in ServerStage["name"]]: {
        stage: S,
        forJudge: boolean,
        handler(player: Player, room: Room, packet: Extract<C2SPacket, { action: A }>, stage: Extract<ServerStage, { name: S }>): void
    }
}
type PacketHanlderObject<A> = PacketHanlderObjectTypeMap<A>[ServerStage["name"]];

type PacketHandlerMap = {
    [A in C2SPacket["action"]]: PacketHanlderObject<A>;
};

const packetHanlderMap: PacketHandlerMap = {
    start: {
        stage: "ready",
        forJudge: true,
        handler: letJudgeChooseSentence,
    },
    choose_sentence: {
        stage: "waiting_for_sentence",
        forJudge: true,
        handler: judgeChoseSentence,
    },
    choose_card: {
        stage: "waiting_for_cards",
        forJudge: false,
        handler: playerChoseCard,
    },
    reveal_card: {
        stage: "revealing_card",
        forJudge: true,
        handler: judgeRevealCard,
    },
    select_card: {
        stage: "waiting_for_best_card",
        forJudge: true,
        handler: judgeSelectedCard,
    },
    choose_best_card: {
        stage: "waiting_for_best_card",
        forJudge: true,
        handler: judgeChoseBestCard
    }
}

export function processPacket(player: Player, packet: C2SPacket) {
    const room = player.data.room;
    const hanlderAndChecks = packetHanlderMap[packet.action];
    if (room.stage.name !== hanlderAndChecks.stage) return;
    if (isJudge(player, room) !== hanlderAndChecks.forJudge) return;
    // @ts-ignore
    hanlderAndChecks.handler(player, room, packet, room.stage);
}

function broadcastPacket(packet: S2CPacket, room: Room, skip?: (p: Player) => boolean) {
    for (const p of room.players) {
        if (skip && skip(p)) continue;
        sendPacket(p, packet);
    }
}

function isJudge(player: Player, room: Room) {
    return room.judge === player.data.profile.name;
}

function letJudgeChooseSentence(judge: Player, room: Room) {
    if (room.players.length < 2) return;
    sendPacket(judge, {
        action: "change_stage",
        stageData: {
            name: "choosing_sentence",
            sentences: generateSentences(3),
        }
    });
    room.stage = { name: "waiting_for_sentence" };
    broadcastPacket({
        action: "change_stage",
        stageData: room.stage,
    }, room, p => p === judge);
}

function judgeChoseSentence(judge: Player, room: Room, packet: C2SChooseSentence) {
    const sentence = packet.sentence;
    room.stage = {
        name: "waiting_for_cards",
        sentence,
        cards: [],
    };
    updateProgress(room, room.stage);
    const generatedCards = generateCards(room.players.length - 1, 6);
    console.log(generatedCards);
    for (const p of room.players) {
        if (p === judge) continue;
        sendPacket(p, {
            action: "change_stage",
            stageData: {
                name: "choosing_card",
                sentence,
                cards: generatedCards.pop() || [], // TODO! no cards
            }
        });
    }
}

function updateProgress(room: Room, stage: StageWaitingForCards) {
    const finishedPlayers = stage.cards.map(c => c.owner);
    finishedPlayers.push(room.judge);
    console.log("update progress", finishedPlayers)

    broadcastPacket({
        action: "change_stage",
        stageData: {
            name: "waiting_for_card",
            progress: `${finishedPlayers.length - 1}/${room.players.length - 1}`
        }
    }, room, p => !finishedPlayers.includes(p.data.profile.name))
}

function playerChoseCard(player: Player, room: Room, packet: C2SChooseCard, stage: StageWaitingForCards) {
    const card = packet.card;
    stage.cards.push({
        img: card,
        owner: player.data.profile.name,
        revealed: false,
    });
    if (stage.cards.length < room.players.length - 1) {
        updateProgress(room, stage);
        return;
    }

    // reveal time
    room.stage = {
        name: "revealing_card",
        sentence: stage.sentence,
        cards: stage.cards,
    }
    updateRevealedCard(room, room.stage);
}

function updateRevealedCard(room: Room, stage: StageRevealingCards) {
    const judge = room.players.find(p => isJudge(p, room));
    if (!judge) return; // TODO: handle judge
    sendPacket(judge, {
        action: "change_stage",
        stageData: stage
    });
    broadcastPacket({
        action: "change_stage",
        stageData: {
            name: "waiting_for_best_card",
            sentence: stage.sentence,
            cards: stage.cards,
            selected: -1,
        }
    }, room, p => p === judge);

    if (stage.cards.every(c => c.revealed)) {
        room.stage = {
            name: "waiting_for_best_card",
            sentence: stage.sentence,
            cards: stage.cards,
        };
    }
}

function judgeRevealCard(judge: Player, room: Room, packet: C2SRevealCard, stage: StageRevealingCards) {
    const index = packet.index;
    const card = stage.cards.at(index)
    if (!card) return;
    if (card.revealed) return;

    card.revealed = true;
    updateRevealedCard(room, stage);
}

function judgeSelectedCard(judge: Player, room: Room, packet: C2SSelectCard, stage: StageWaitingForBestCard) {
    broadcastPacket({
        action: "change_stage",
        stageData: {
            name: "waiting_for_best_card",
            sentence: stage.sentence,
            cards: stage.cards,
            selected: packet.index,
        }
    }, room, p => p === judge);
}

function judgeChoseBestCard(judge: Player, room: Room, packet: C2SChooseBestCard, stage: StageWaitingForBestCard) {
    const index = packet.index;
    const card = stage.cards.at(index)
    if (!card) return;

    room.stage = {
        name: "end",
        sentence: stage.sentence,
        bestCard: card,
    };

    for (const p of room.players) {
        sendPacket(p, {
            action: "change_stage",
            stageData: room.stage,
        });
    }

    setTimeout(() => startAgain(room), 10000);
}

function startAgain(room: Room) {
    const lastJudgeIndex = room.players.findIndex(p => p.data.profile.name === room.judge);
    const nextJudgeIndex = (lastJudgeIndex + 1) % room.players.length
    const nextJudge = room.players[nextJudgeIndex].data.profile.name;
    room.judge = nextJudge;
    broadcastPacket({
        action: "change_judge",
        judge: nextJudge
    }, room);
    broadcastPacket({
        action: "change_stage",
        stageData: { name: "start" }
    }, room);
    room.stage = { name: "ready" };
}
