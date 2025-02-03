import { createRoom, joinRoom, leaveRoom, processPacket, allOpenedRooms, type Player } from "./room";
import { C2SPacketSchema, rawParse, type S2CResponse } from "$lib/schema"
import { type Handle } from "@sveltejs/kit";
import { type WebSocketHandler } from "svelte-adapter-bun"

function responseOf(type: S2CResponse["type"], status: number) {
    return new Response(JSON.stringify({ type }), { status });
}

export const handle: Handle = async ({ event, resolve }) => {
    console.log("server handle");
    const url = new URL(event.url);
    if (url.pathname === "/check") {
        const id = url.searchParams.get("room_id");
        const name = url.searchParams.get("name");
        if (!id || !name) return responseOf("bad_request", 400);
        const room = allOpenedRooms.get(id);
        if (!room) return responseOf("room_not_found", 404);
        if (room.players.some(p => p.profile.name === name)) return responseOf("name_taken", 400);
        return responseOf("valid", 200);
    } else if (url.pathname === "/ws") {
        console.log("server upgrade failed");
        return responseOf("bad_request", 400);
    }

    const response = await resolve(event);
    return response;
};

export const handleWebsocket: WebSocketHandler<Player> = {
    idleTimeout: 3,
    upgrade(request, upgrade) {
        console.log("server upgrade");
        const url = new URL(request.url);
        if (url.pathname.startsWith("/ws")) {
            const name = url.searchParams.get("name");
            if (!name) return false;
            const roomId = url.searchParams.get("room_id");
            const room = roomId ? allOpenedRooms.get(roomId) : createRoom(name)
            if (!room) return false;
            return upgrade(request, {
                data: {
                    profile: { name },
                    room,
                    cardPool: [],
                    sendPacket() { },
                }
            });
        }
        return false;
    },
    open(ws) {
        const player = ws.data;
        player.sendPacket = (packet) => {
            console.log("w sent packet to", player.profile.name, packet);
            ws.send(JSON.stringify(packet));
        }
        console.log(`${player.profile.name} joined room ${player.room.id}`);
        joinRoom(ws.data, player.room);
    },
    message(ws, message) {
        console.log(message);
        const parsed = rawParse(C2SPacketSchema, message)
        if (parsed) processPacket(ws.data, parsed);
    },
    close(ws, code, message) {
        console.log("closed: ", code, message);
        leaveRoom(ws.data, ws.data.room);
    }
};

console.log("WS Server started on port 5173");
