import { generateCards, generateSentences, random } from "./data";
import type { C2SChooseBestCard, C2SChooseCard, C2SChooseSentence, C2SPacket, C2SSelectCard, Card, PlayerProfile, S2CPacket, Screen } from "../schema";
import { getRoomIDs } from "../firestore";

type OwnedCard = {
    readonly image: string,
    readonly text: string,
    readonly owner: string,
};
type ServerReady = {
    readonly name: "ready",
};
type ServerWaitForSentence = {
    readonly name: "wait_for_sentence",
    readonly sentences: string[],
};
type ServerWaitForCard = {
    readonly name: "wait_for_card",
    readonly sentence: string,
    waitFor: string[],
    chosenCards: OwnedCard[];
};
type ServerWaitForBestCard = {
    readonly name: "wait_for_best_card",
    readonly sentence: string,
    readonly cards: OwnedCard[],
    readonly anonymousCards: Card[],
    selected: number,
};
type ServerEnd = {
    readonly name: "end",
    readonly sentence: string,
    readonly bestCard: OwnedCard,
};

type ServerStage =
    | ServerReady
    | ServerWaitForSentence
    | ServerWaitForCard
    | ServerWaitForBestCard
    | ServerEnd;

export type Room = {
    readonly id: string,
    readonly host: string,
    judge: string,
    players: Player[],
    stage: ServerStage,
};

export type Player = {
    readonly profile: PlayerProfile,
    cardPool: Card[],
    sendPacket(packet: S2CPacket): void,
};

async function generateNewRoomId() {
    const ids = await getRoomIDs();
    while (true) {
        const roomId = random(100, 1000).toString();
        if (!ids.includes(roomId)) return roomId;
    }
}

export async function createRoom(host: string) {
    const id = await generateNewRoomId();
    const room: Room = {
        id,
        host,
        judge: host,
        players: [],
        stage: { name: "ready" },
    };
    return room;
}

export function joinRoom(player: Player, room: Room) {
    broadcastPacket({
        action: "add_player",
        player: player.profile,
    }, room);
    room.players.push(player);
    player.sendPacket({
        action: "room_info",
        id: room.id,
        host: room.host,
        judge: room.judge,
        username: player.profile.name,
        screen: screenForNewJoinPlayer(room),
        players: room.players.map(p => p.profile),
    });

    // TODO! mid join players
}

function screenForNewJoinPlayer(room: Room): Screen {
    switch (room.stage.name) {
        case "ready":
            return { name: "start" };
        case "wait_for_sentence":
            return { name: "wait_for_sentence" };
        case "wait_for_card":
            return { name: "wait_for_card", progress: `${room.stage.waitFor.length}` };
        case "wait_for_best_card":
            return {
                name: "wait_for_best_card",
                sentence: room.stage.sentence,
                cards: room.stage.anonymousCards,
                selected: room.stage.selected,
            };
        case "end":
            return {
                name: "end",
                sentence: room.stage.sentence,
                bestCard: room.stage.bestCard,
                winner: room.stage.bestCard.owner,
            };
    }
}

export function leaveRoom(player: Player, room: Room) {
    let nextJudge = (room.stage.name !== "end") && isJudge(player, room) && findNextJudge(room);

    room.players = room.players.filter(p => p.profile.name !== player.profile.name);

    if (room.players.length === 1) {
        nextJudge = room.players[0].profile.name;
    } else if (room.players.length === 0) {
        // allOpenedRooms.delete(room.id);
        // TODO: leave all
        return;
    }

    broadcastPacket({
        action: "remove_player",
        player: player.profile.name,
    }, room);

    if (room.stage.name === "wait_for_card") {
        room.stage.waitFor = room.stage.waitFor.filter(p => p !== player.profile.name);
        updateChoseCard(room, room.stage);
    }

    if (nextJudge) {
        startAgain(room, nextJudge);
    }
}


type PacketHanlderObjectTypeMap<A> = {
    [S in ServerStage["name"]]: {
        stage: S,
        forJudge: boolean,
        handler(player: Player, room: Room, packet: Extract<C2SPacket, { action: A; }>, stage: Extract<ServerStage, { name: S; }>): void;
    }
};
type PacketHanlderObject<A> = PacketHanlderObjectTypeMap<A>[ServerStage["name"]];

type PacketHandlerMap = {
    [A in C2SPacket["action"]]?: PacketHanlderObject<A>;
};

const packetHanlderMap: PacketHandlerMap = {
    start: {
        stage: "ready",
        forJudge: true,
        handler: letJudgeChooseSentence,
    },
    choose_sentence: {
        stage: "wait_for_sentence",
        forJudge: true,
        handler: judgeChoseSentence,
    },
    choose_card: {
        stage: "wait_for_card",
        forJudge: false,
        handler: playerChoseCard,
    },
    judge_select_card: {
        stage: "wait_for_best_card",
        forJudge: true,
        handler: judgeSelectedCard,
    },
    choose_best_card: {
        stage: "wait_for_best_card",
        forJudge: true,
        handler: judgeChoseBestCard
    }
};

export function processC2SPacket(room: Room, player: Player, packet: C2SPacket) {
    if (packet.action === "join") return;
    const hanlderAndChecks = packetHanlderMap[packet.action]!;
    if (room.stage.name !== hanlderAndChecks.stage) return;
    if (isJudge(player, room) !== hanlderAndChecks.forJudge) return;
    // @ts-ignore
    hanlderAndChecks.handler(player, room, packet, room.stage);
}

function broadcastPacket(packet: S2CPacket, room: Room, skip?: (p: Player) => boolean) {
    for (const p of room.players) {
        if (skip && skip(p)) continue;
        p.sendPacket(packet);
    }
}

function isJudge(player: Player, room: Room) {
    return room.judge === player.profile.name;
}

function letJudgeChooseSentence(judge: Player, room: Room) {
    if (room.players.length < 2) return;
    const generatedSentences = generateSentences(3);
    judge.sendPacket({
        action: "show_screen",
        screenData: {
            name: "choose_sentence",
            sentences: generatedSentences,
        }
    });
    room.stage = {
        name: "wait_for_sentence",
        sentences: generatedSentences,
    };
    broadcastPacket({
        action: "show_screen",
        screenData: { name: "wait_for_sentence" },
    }, room, p => p === judge);
}

function judgeChoseSentence(judge: Player, room: Room, packet: C2SChooseSentence, stage: ServerWaitForSentence) {
    const sentence = stage.sentences[packet.sentenceIndex];
    const waitFor: string[] = [];
    const generatedCards = generateCards(room.players.length - 1, 6); // TODO! no cards

    for (const p of room.players) {
        if (p === judge) continue;
        waitFor.push(p.profile.name);
        const cards = generatedCards.pop() || [];
        p.cardPool = cards;
        p.sendPacket({
            action: "show_screen",
            screenData: {
                name: "choose_card",
                sentence,
                cards,
            }
        });
    }

    room.stage = {
        name: "wait_for_card",
        sentence,
        waitFor,
        chosenCards: [],
    };
    updateProgress(room, room.stage);
}

function updateProgress(room: Room, stage: ServerWaitForCard) {
    const finishedPlayers = stage.chosenCards.map(c => c.owner);
    finishedPlayers.push(room.judge);
    console.log("update progress", finishedPlayers);

    broadcastPacket({
        action: "show_screen",
        screenData: {
            name: "wait_for_card",
            progress: `${stage.waitFor.length}`
        }
    }, room, p => stage.waitFor.includes(p.profile.name));
}

function playerChoseCard(player: Player, room: Room, packet: C2SChooseCard, stage: ServerWaitForCard) {
    const card = player.cardPool[packet.cardPoolIndex];
    stage.chosenCards.push({
        ...card,
        owner: player.profile.name,
    });
    stage.waitFor = stage.waitFor.filter(p => p !== player.profile.name);
    updateChoseCard(room, stage);
}

function updateChoseCard(room: Room, stage: ServerWaitForCard) {
    if (stage.waitFor.length > 0) {
        updateProgress(room, stage);
        return;
    }

    if (stage.chosenCards.length === 0) {
        startAgain(room);
        return;
    }

    const anonymousCards = stage.chosenCards.map(o => ({
        image: o.image,
        text: o.text,
    }));
    room.stage = {
        name: "wait_for_best_card",
        sentence: stage.sentence,
        cards: stage.chosenCards,
        anonymousCards,
        selected: 0,
    };
    const judge = room.players.find(p => isJudge(p, room));
    if (!judge) return;

    judge.sendPacket({
        action: "show_screen",
        screenData: {
            name: "choose_best_card",
            sentence: stage.sentence,
            cards: anonymousCards,
        }
    });
    broadcastPacket({
        action: "show_screen",
        screenData: {
            name: "wait_for_best_card",
            sentence: stage.sentence,
            cards: anonymousCards,
            selected: 0,
        }
    }, room, p => p === judge);
}

function judgeSelectedCard(judge: Player, room: Room, packet: C2SSelectCard, stage: ServerWaitForBestCard) {
    stage.selected = packet.cardIndex;
    broadcastPacket(packet, room, p => p === judge);
}

function judgeChoseBestCard(judge: Player, room: Room, packet: C2SChooseBestCard, stage: ServerWaitForBestCard) {
    const index = packet.cardIndex;
    const card = stage.cards.at(index);
    if (!card) return;

    room.stage = {
        name: "end",
        sentence: stage.sentence,
        bestCard: card,
    };

    broadcastPacket({
        action: "show_screen",
        screenData: {
            name: "end",
            sentence: stage.sentence,
            bestCard: card,
            winner: card.owner,
        }
    }, room);

    const winner = room.players.find(p => p.profile.name === card.owner);
    if (winner) {
        winner.profile.score += 1;
        broadcastPacket({
            action: "update_score",
            player: winner.profile.name,
            score: winner.profile.score,
        }, room);
    }
    
    setTimeout(() => {
        if (room.players.length === 0) return;
        startAgain(room, findNextJudge(room));
    }, 5000);
}

function startAgain(room: Room, nextJudge?: string) {
    if (nextJudge) {
        room.judge = nextJudge;
        broadcastPacket({
            action: "change_judge",
            judge: nextJudge
        }, room);
    }
    broadcastPacket({
        action: "show_screen",
        screenData: { name: "start" }
    }, room);
    room.stage = { name: "ready" };
}

function findNextJudge(room: Room): string | undefined {
    if (room.players.length === 0) return;
    const lastJudgeIndex = room.players.findIndex(p => p.profile.name === room.judge);
    const nextJudgeIndex = (lastJudgeIndex + 1) % room.players.length;
    return room.players[nextJudgeIndex].profile.name;
}
