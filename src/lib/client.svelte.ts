import { goto } from "$app/navigation";
import { S2CPacketSchema, type S2CPacket, type S2CRoomInfo, type C2SPacket, type PlayerProfile, type Screen, rawParseString, type S2CResponse } from "./schema";
import { addAnswer, getOffer, getRoomIDs } from "./firestore";
import Peer from "simple-peer";

export type Game = {
    readonly username: string,
    readonly id: string,
    readonly host: string,
    judge: string,
    players: PlayerProfile[],
    screen: Screen,
    sendPacket(packet: C2SPacket): void,
};

export const storage: { game?: Game; } = $state({});

export async function findRoom(username: string, roomId: string): Promise<S2CResponse> {
    const ids = await getRoomIDs();
    if (ids.includes(roomId)) return { type: "valid" };
    return { type: "room_not_found" };
}

export async function joinGame(username: string, roomId: string) {
    const offer = await getOffer(roomId);

    if (!offer) {
        console.log("No such room ", roomId);
        return;
    }

    console.log("Offer data:", offer);

    const join = new Peer();
    const sendPacket = (packet: C2SPacket) => join.send(JSON.stringify(packet));
    join.on('connect', () => {
        sendPacket({ action: "join", name: username });
    });
    let errored = false;
    join.on('data', data => {
        const message: string = data.toString();
        console.log("received:", message);
        const parsed = rawParseString(S2CPacketSchema, message);
        if (!parsed) return;
        if (parsed.action === "error") {
            errored = true;
            console.log("bro server crashed");
            goto(`/error?name=${parsed.message}`);
            return;
        }
        processS2CPacket(sendPacket, parsed);
    });
    join.on("close", () => {
        if (errored) return;
        console.log("bro server closed");
        goto("/error?name=server_closed");
        // TODO: host quit;
    });
    join.on("error", () => {
        if (errored) return;
        console.log("bro server crashed");
        goto("/error?name=server_closed");
        // TODO: host quit;
    });

    let answerPacket: string | undefined;
    let candidatePacket: string | undefined;
    join.on('signal', data => {
        if (answerPacket && candidatePacket) return;

        if (data.type === "answer") {
            console.log("join gen answer: ", data);
            answerPacket = JSON.stringify(data);
        } else if (data.type === "candidate") {
            console.log("join gen candidate: ", data);
            candidatePacket = JSON.stringify(data);
        }

        if (answerPacket && candidatePacket) {
            console.log("join signal full, writing to answers");
            addAnswer({
                roomId,
                answer: answerPacket,
                candidate: candidatePacket
            });
        }
    });

    // connect to server thru offer
    join.signal(offer.offer);
    join.signal(offer.candidate);
}

type PacketHandlerMap = {
    [A in S2CPacket["action"]]?: (game: Game, packet: Extract<S2CPacket, { action: A; }>) => void;
};

const packetHandlerMap: PacketHandlerMap = {
    show_screen(game, packet) {
        game.screen = packet.screenData;
    },
    add_player(game, packet) {
        game.players.push(packet.player);
        game.players = game.players; // trigger $state
    },
    remove_player(game, packet) {
        game.players = game.players.filter(p => p.name !== packet.player);
    },
    change_judge(game, packet) {
        game.judge = packet.judge;
    },
    judge_select_card(game, packet) {
        if (game.screen.name !== "wait_for_best_card") return;
        game.screen.selected = packet.cardIndex;
    },
    update_score(game, packet) {
        const winner = game.players.find(p => p.name === packet.player);
        if (winner) {
            winner.score += 1;
            game.players = game.players; // update $state
        }
    }
};

export function processS2CPacket(sendPacket: (packet: C2SPacket) => void, packet: S2CPacket) {
    if (packet.action === "room_info") {
        handleRoomInfo(sendPacket, packet);
        return;
    }
    if (!storage.game) return;
    const handler = packetHandlerMap[packet.action];
    if (!handler) return;
    // @ts-ignore
    handler(storage.game, packet);
}

function handleRoomInfo(sendPacket: (packet: C2SPacket) => void, packet: S2CRoomInfo) {
    if (storage.game) return;
    storage.game = {
        ...packet,
        sendPacket,
    };
    goto("/game");
}