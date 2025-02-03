import { goto } from "$app/navigation";
import { S2CPacketSchema, type S2CPacket, type S2CRoomInfo, type C2SPacket, S2CResponseSchema, type PlayerProfile, type Screen, rawParse } from "$lib/schema";

const WS_URL = "ws://localhost:5173/ws";
const API_URL = "http://localhost:5173/check";

export type Game = {
    username: string,
    id: string,
    judge: string,
    players: PlayerProfile[],
    screen: Screen,
    sendPacket(packet: C2SPacket): void,
}
export const storage: { game?: Game } = $state({});

export async function apiCheck(username: string, roomId: string) {
    const url = new URL(API_URL);
    url.searchParams.set("name", username);
    url.searchParams.set("room_id", roomId);
    try {
        const response = await fetch(url);
        const json = await response.json();
        return S2CResponseSchema.parse(json);
    } catch (e) {
        console.error(e);
    }
}

export function joinGame(username: string, roomId?: string) {
    const url = new URL(WS_URL);
    url.searchParams.set("name", username);
    if (roomId) url.searchParams.set("room_id", roomId);
    openWebSocket(url);
}

function openWebSocket(url: URL) {
    const ws = new WebSocket(url);
    ws.onopen = () => {
        console.log("Connected to server");
    };
    ws.onmessage = (event) => {
        console.log("received:", event.data);
        const parsed = rawParse(S2CPacketSchema, event.data);
        if (parsed) processPacket(ws, parsed);
    };
    ws.onclose = (ev) => {
        console.log("Connection closed: ", ev);
    };
}

type PacketHandlerMap = {
    [A in S2CPacket["action"]]?: (game: Game, packet: Extract<S2CPacket, { action: A }>) => void;
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
    }
}

function processPacket(ws: WebSocket, packet: S2CPacket) {
    if (packet.action === "room_info") {
        handleRoomInfo(ws, packet);
        return;
    }
    if (!storage.game) return;
    const handler = packetHandlerMap[packet.action];
    if (!handler) return;
    // @ts-ignore
    handler(storage.game, packet);
}

function handleRoomInfo(ws: WebSocket, packet: S2CRoomInfo) {
    if (storage.game) return;
    storage.game = {
        ...packet,
        sendPacket(packet) {
            ws.send(JSON.stringify(packet));
        },
    };
    goto("/game");
}