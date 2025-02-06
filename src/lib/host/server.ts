import { deleteOffer, nextAnswer, setOffer } from "../firestore";
import { createRoom, joinRoom, leaveRoom, processC2SPacket, type Player, type Room } from "./room";
import { C2SPacketSchema, rawParseString, type C2SPacket, type S2CError } from "../schema";
import { processS2CPacket } from "../client.svelte";
import Peer from "simple-peer";

export async function openServer(name: string) {
    const room = await createRoom(name);
    openOffer(room);
    window.addEventListener("beforeunload", () => {
        deleteOffer(room.id);
    });

    // add self (skip sending c2sjoin)
    const sendBackC2S: (packet: C2SPacket) => void = (packet) => processC2SPacket(room, selfPlayer, packet);
    const selfPlayer: Player = {
        profile: { name, score: 0 },
        cardPool: [],
        sendPacket(packet) {
            processS2CPacket(sendBackC2S, packet);
        },
    };
    joinRoom(selfPlayer, room);
}

async function openOffer(room: Room) {
    const connectionToClient = new Peer({ initiator: true });

    connectionToClient.on('connect', () => {
        // wait for 'connect' event before using the data channel
        console.log("connected to something");
    });

    let answeredPlayer: Player | undefined;
    connectionToClient.on('data', data => {
        const message: string = data.toString();
        console.log("server received:", message);
        const parsed = rawParseString(C2SPacketSchema, message);
        if (!parsed) return;
        if (parsed.action === "join") {
            if (room.players.some(p => p.profile.name === parsed.name)) {
                // name taken
                const error: S2CError = { action: "error", message: "name_taken" };
                connectionToClient.send(JSON.stringify(error))
                connectionToClient.destroy();
                return;
            }
            answeredPlayer = {
                profile: { name: parsed.name, score: 0 },
                cardPool: [],
                sendPacket(packet) {
                    connectionToClient.send(JSON.stringify(packet));
                },
            };
            joinRoom(answeredPlayer, room);
        } else if (answeredPlayer) {
            processC2SPacket(room, answeredPlayer, parsed);
        }
    });

    connectionToClient.on('close', () => {
        if (!answeredPlayer) return;
        leaveRoom(answeredPlayer, room);
    });

    connectionToClient.on('error', () => {
        if (!answeredPlayer) return;
        leaveRoom(answeredPlayer, room);
    });


    let offer: string | undefined;
    let candidate: string | undefined;

    // generate connection keys
    connectionToClient.on('signal', data => {
        if (offer && candidate) return;

        if (data.type === "offer") {
            offer = JSON.stringify(data);
        } else if (data.type === "candidate") {
            candidate = JSON.stringify(data);
        }

        if (offer && candidate) {
            setOffer(room.id, { offer, candidate });
        }
    });

    const answer = await nextAnswer(room.id);
    connectionToClient.signal(answer.answer);
    connectionToClient.signal(answer.candidate);
    openOffer(room); // dont await or it will be recursive
}