import { S2CPacketSchema, type GameData, type S2CPacket, type S2CChangeStage, type S2CRoomInfo, type S2CAddPlayer, type S2CRemovePlayer, type S2CChangeJudge, type C2SPacket } from "./schema";

export const storage: { gameData?: GameData } = $state({});

const WS_URL = "ws://localhost:3000";

export function connectToWebsocket(username: string, roomId?: string) {
    const url = new URL(`${WS_URL}/ws`);
    url.searchParams.set("name", username);
    if (roomId) url.searchParams.set("room_id", roomId);
    const ws = new WebSocket(url);
    ws.onopen = () => {
        console.log("Connected to server");
    };
    ws.onmessage = (event) => {
        console.log(event.data);
        try {
            let parsed = S2CPacketSchema.safeParse(JSON.parse(event.data));
            if (parsed.success) {
                processPacket(ws, parsed.data);
            } else {
                console.error(parsed.error.errors);
            }
        } catch (e) {
            console.error(e);
        }
    };
    ws.onclose = () => {
        console.log("Connection closed");
    };
    ws.onerror = (ev) => {
        console.error(ev);
    }
}

type PacketHandlerMap = {
    [A in S2CPacket["action"]]?: (game: GameData, packet: Extract<S2CPacket, { action: A }>) => void;
};

const packetHandlerMap: PacketHandlerMap = {
    change_stage(game, packet) {
        game.stage = packet.stageData;
    },
    add_player(game, packet) {
        game.players.push(packet.player);
        game.players = game.players; // trigger $state
    },
    remove_player(game, packet) {
        game.players.filter(p => p.name !== packet.player);
        game.players = game.players; // trigger $state
    },
    change_judge(game, packet) {
        game.judge = packet.judge;
    }
}

function processPacket(ws: WebSocket, packet: S2CPacket) {
    if (packet.action === "room_info") {
        handleRoomInfo(ws, packet);
        return;
    }

    if (!storage.gameData) return;
    const handler = packetHandlerMap[packet.action];
    if (!handler) return;
    // @ts-ignore
    handler(storage.gameData, packet);
}

export function sendPacket(packet: C2SPacket) {
    if (!storage.gameData) return;
    storage.gameData.ws.send(JSON.stringify(packet));
}

function handleRoomInfo(ws: WebSocket, packet: S2CRoomInfo) {
    if (storage.gameData) return;
    storage.gameData = {
        stage: { name: "start" },
        ws,
        ...packet,
    }
}
