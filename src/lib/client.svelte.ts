import { goto } from "$app/navigation";
import { S2CPacketSchema, type S2CPacket, type S2CRoomInfo, type C2SPacket, type PlayerProfile, type Screen, rawParseString, type S2CResponse } from "./schema";
import { addAnswer, deleteOfferSignal, getOffer, getRoomIDs, getRoomKey, listenForAnswer, signalOffer } from "./firestore";
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

    const roomKey = await getRoomKey(roomId);

    if (!roomKey) {
        console.log("No such room ", roomId);
        return;
    }

    const connectionToServer = new Peer({ initiator: true });

    const unsubAnswerListener = listenForAnswer(roomKey, roomId, signal => {
        console.log("server signal recv, proc...", signal);
        connectionToServer.signal(signal);
    });

    connectionToServer.on("signal", data => {
        console.log("client signal output, sending...", data);
        signalOffer(roomKey, JSON.stringify(data));
    });

    const sendPacket = (packet: C2SPacket) => connectionToServer.send(JSON.stringify(packet));
    connectionToServer.on('connect', () => {
        deleteOfferSignal(roomKey);
        unsubAnswerListener();
        console.log("connected to server, unsubbed answer listener");
        sendPacket({ action: "join", name: username });
    });
    let errored = false;
    connectionToServer.on('data', data => {
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
    connectionToServer.on("close", () => {
        if (errored) return;
        console.log("bro server closed");
        goto("/error?name=server_closed");
    });
    connectionToServer.on("error", () => {
        if (errored) return;
        console.log("bro server crashed");
        goto("/error?name=server_closed");
    });
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