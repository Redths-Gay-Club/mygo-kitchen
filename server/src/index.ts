import { WebSocketServer, WebSocket, type RawData, type Server } from "ws";
import z from "zod";
import Room from "./room";
import Player from "./player";
const wss = new WebSocketServer({ port: 8080 });

let rooms = new Map<string, Room>();


const Start = z.object({
    name: z.string(),
    action: z.literal("start"),
    key: z.string(),
    room: z.string(),
});

const Join = z.object({
    name: z.string(),
    action: z.literal("join"),
    room: z.string().optional(),
});


const Packets = z.union([Start, Join]);

function handlePacket(ws: WebSocket, packet: RawData) {
    const parsed = Packets.parse(packet);
    const player = new Player(parsed.name);
    const room = parsed.room && rooms.get(parsed.room) || new Room(Math.floor(Math.random() * 500).toString(), player);
    switch (parsed.action) {
        case "start":
            console.log(parsed.key);
            break;
        case "join":
            if (!room.players.includes(player)) {
                room.players.push(player);
                ws.send(room.id);
            } else {
                rooms.set(room.id, room);
                room.players.push(player);
            }
    }
}


wss.on('connection', function connection(ws) {
    ws.on('error', console.error);

    ws.on('message', function message(data) {
        handlePacket(ws, data);
    });

    ws.send('something');
});
