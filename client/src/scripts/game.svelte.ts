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

export function processPacket(ws: WebSocket, packet: S2CPacket) {
    switch (packet.type) {
        case "room_info":
            handleRoomInfo(ws, packet);
            break;
        case "change_stage":
            handleChangeStage(packet);
            break;
        case "add_player":
            handleAddPlayer(packet);
            break;
        case "remove_player":
            handleRemovePlayer(packet);
            break;
        case "change_judge":
            handleChangeJudge(packet);
            break;
    }
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

function handleChangeStage(packet: S2CChangeStage) {
    if (!storage.gameData) return;
    storage.gameData.stage = packet.stageData;
}

function handleAddPlayer(packet: S2CAddPlayer) {
    if (!storage.gameData) return;
    storage.gameData.players.push(packet.player);
}

function handleRemovePlayer(packet: S2CRemovePlayer) {
    if (!storage.gameData) return;
    storage.gameData.players.filter(p => p.name !== packet.player);
}

function handleChangeJudge(packet: S2CChangeJudge) {
    if (!storage.gameData) return;
    storage.gameData.judge = packet.judge;
}