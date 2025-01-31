import { sendPacket, type Player } from ".";
import type { C2SChooseBestCard, C2SChooseCard, C2SChooseSentence, C2SPacket, C2SRevealCard } from "./schema";

export const rooms = new Map<string, Room>();

type Card = {
    img: string,
    revealed: boolean,
    owner: string,
}

type GameData = {
    sentence: string,
    cards: Card[]
}

export type Room = {
    id: string,
    judge: string,
    players: Player[],
    gameData?: GameData,
}

function generate4RandomChar(): string {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456790";
    let result = "";
    for (let i = 0; i < 4; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}
function generateNewRoomId(): string {
    while (true) {
        const roomId = generate4RandomChar();
        if (!rooms.has(roomId)) return roomId;
    }
}

export function createRoom(host: string): Room {
    const id = generateNewRoomId();
    const room = {
        id,
        host,
        judge: host,
        players: []
    };
    rooms.set(id, room);
    return room;
}

export function joinRoom(player: Player, room: Room) {
    for (const p of room.players) {
        sendPacket(p, {
            type: "add_player",
            player: player.data.profile,
        });
    }
    room.players.push(player);
    sendPacket(player, {
        type: "room_info",
        id: room.id,
        judge: room.judge,
        username: player.data.profile.name,
        players: room.players.map(p => p.data.profile),
    });

    // TODO! mid join players
}

export function leaveRoom(player: Player, room: Room) {
    room.players.filter(p => p.data.profile.name !== player.data.profile.name);
    for (const p of room.players) {
        sendPacket(p, {
            type: "remove_player",
            player: player.data.profile.name,
        });
    }
    // TODO! when judge quit / remove chosen card
}

export function processPacket(player: Player, packet: C2SPacket) {
    const room = player.data.room;
    switch (packet.type) {
        case "start":
            if (!isJudge(player, room)) return;
            if (room.players.length < 2) return;
            letJudgeChooseSentence(player, room);
            break;
        case "choose_sentence":
            if (!isJudge(player, room)) return;
            judgeChoseSentence(player, room, packet);
            break;
        case "choose_card":
            if (isJudge(player, room)) return;
            playerChoseCard(player, room, packet);
            break;
        case "reveal_card":
            if (!isJudge(player, room)) return;
            judgeRevealCard(player, room, packet);
            break;
        case "choose_best_card":
            if (!isJudge(player, room)) return;
            judgeChoseBestCard(player, room, packet);
            break;
    }
}

function isJudge(player: Player, room: Room) {
    return room.judge === player.data.profile.name;
}

function letJudgeChooseSentence(judge: Player, room: Room) {
    sendPacket(judge, {
        type: "change_stage",
        stageData: {
            name: "choosing_sentence",
            sentences: ["i dont know", "what to say", "about this"]
        }
    });
    for (const p of room.players) {
        if (p === judge) continue;
        sendPacket(p, {
            type: "change_stage",
            stageData: {
                name: "waiting_for_sentence"
            }
        });
    }
}

function judgeChoseSentence(judge: Player, room: Room, packet: C2SChooseSentence) {
    const sentence = packet.sentence;
    room.gameData = {
        sentence,
        cards: []
    };
    updateProgress(room);
    for (const p of room.players) {
        if (p === judge) continue;
        sendPacket(p, {
            type: "change_stage",
            stageData: {
                name: "choosing_card",
                sentence,
                cards: [
                    "https://drive.miyago9267.com/d/file/img/mygo/%E5%A6%B3%E6%98%AF%E4%BE%86%E6%89%BE%E6%88%91%E5%90%B5%E6%9E%B6%E7%9A%84%E5%97%8E.jpg",
                    "https://drive.miyago9267.com/d/file/img/mygo/%E5%B7%AE%E5%8B%81.jpg",
                    "https://drive.miyago9267.com/d/file/img/mygo/%E6%88%91%E6%83%B3%E6%87%89%E8%A9%B2%E4%B8%8D%E6%98%AF.jpg",
                ]
            }
        });
    }
}

function updateProgress(room: Room) {
    const finishedPlayers = room.gameData?.cards?.map(c => c.owner) || [];
    finishedPlayers.push(room.judge);
    console.log("update progress", finishedPlayers)
    for (const p of room.players) {
        if (finishedPlayers.includes(p.data.profile.name)) {
            sendPacket(p, {
                type: "change_stage",
                stageData: {
                    name: "waiting_for_card",
                    progress: `${finishedPlayers.length - 1}/${room.players.length - 1}`
                }
            });
        }
    }
}


function playerChoseCard(player: Player, room: Room, packet: C2SChooseCard) {
    const card = packet.card;
    if (!room.gameData) return; // bro sent choose card before sentence
    room.gameData.cards.push({
        img: card,
        owner: player.data.profile.name,
        revealed: false,
    });
    if (room.gameData.cards.length < room.players.length - 1) {
        updateProgress(room);
        return;
    }

    // reveal time
    updateRevealedCard(room);
}

function updateRevealedCard(room: Room) {
    if (!room.gameData) return;

    for (const p of room.players) {
        sendPacket(p, {
            type: "change_stage",
            stageData: {
                name: "revealing_card",
                sentence: room.gameData.sentence,
                cards: room.gameData.cards
            }
        });
    }
}

function judgeRevealCard(judge: Player, room: Room, packet: C2SRevealCard) {
    const index = packet.index;
    if (!room.gameData) return; // bro sent reveal card before chosen

    const card = room.gameData.cards.at(index)
    if (!card) return;
    card.revealed = true;

    updateRevealedCard(room);
}

function judgeChoseBestCard(judge: Player, room: Room, packet: C2SChooseBestCard) {
    const index = packet.index;
    if (!room.gameData) return; // bro sent best card before chosen

    const card = room.gameData.cards.at(index)
    if (!card) return;

    for (const p of room.players) {
        sendPacket(p, {
            type: "change_stage",
            stageData: {
                name: "end",
                sentence: room.gameData.sentence,
                bestCard: card
            }
        });
    }

    setTimeout(() => startAgain(room), 10000);
}

function startAgain(room: Room) {
    const lastJudgeIndex = room.players.findIndex(p => p.data.profile.name === room.judge);
    const nextJudgeIndex = (lastJudgeIndex + 1) % room.players.length
    const nextJudge = room.players[nextJudgeIndex].data.profile.name;
    room.judge = nextJudge;
    for (const p of room.players.values()) {
        sendPacket(p, {
            type: "change_judge",
            judge: nextJudge
        });
        sendPacket(p, {
            type: "change_stage",
            stageData: {
                name: "start"
            }
        });
    }
}
