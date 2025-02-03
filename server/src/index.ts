import z from "zod";
import { type Room, createRoom, joinRoom, leaveRoom, processPacket, rooms } from "./room";
import type { ServerWebSocket } from "bun";
import { C2SPacketSchema, type PlayerProfile, type S2CPacket as S2CPacket, type S2CResponse } from "./schema"

type PlayerData = {
    profile: PlayerProfile,
    room: Room,
}
export type Player = ServerWebSocket<PlayerData>

export function sendPacket(player: Player, packet: S2CPacket) {
    player.send(JSON.stringify(packet));
}

function response(type: S2CResponse["type"], status: number) {
    return new Response(JSON.stringify({ type }), { status, headers: { 
        "Access-Control-Allow-Origin" : "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS"
    } });
}

Bun.serve({
    port: 3000,
    fetch(req, server) {
        const url = new URL(req.url);
        if (url.pathname === "/check") {
            const id = url.searchParams.get("room_id");
            const name = url.searchParams.get("name");
            if (!id || !name) return response("bad_request", 400);
            const room = rooms.get(id);
            if (!room) return response("room_not_found", 404);
            if (room.players.some(p => p.data.profile.name === name)) return response("name_taken", 400);
            return response("valid", 200);
        } else if (url.pathname === "/ws") {
            const name = url.searchParams.get("name");
            if (!name) return response("bad_request", 400);
            const roomId = url.searchParams.get("room_id");
            const room = roomId ? rooms.get(roomId) : createRoom(name)
            if (!room) return response("room_not_found", 404);
            if (server.upgrade<PlayerData>(req, { data: { profile: { name }, room } })) return;
            return new Response("Upgrade failed", { status: 500 });
        }
    },
    websocket: {
        open(player: Player) {
            console.log(`${player.data.profile.name} joined room ${player.data.room.id}`);
            joinRoom(player, player.data.room);
        },
        message(player, message) {
            try {
                console.log(message);
                const str = z.string().safeParse(message);
                if (!str.success) return;
                const json = JSON.parse(str.data);
                const parsed = C2SPacketSchema.safeParse(json);
                if (!parsed.success) return;
                processPacket(player, parsed.data);
            } catch (e) {
                console.error(e);
            }
        },
        close(player, code, message) {
            console.log("closed: ", code, message);
            leaveRoom(player, player.data.room);
        },
    },
});
console.log("Server started on port 3000");
