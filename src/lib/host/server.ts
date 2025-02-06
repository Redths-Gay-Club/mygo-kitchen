import { deleteOffer, sendKeyListenForOffer, nextAnswer, setOffer, signalAnswer, deleteFSRoom, deleteAnswerSignal } from "../firestore";
import { createRoom, joinRoom, leaveRoom, processC2SPacket, type Player, type Room } from "./room";
import { C2SPacketSchema, rawParseString, type C2SPacket, type S2CError } from "../schema";
import { processS2CPacket } from "../client.svelte";
import Peer from "simple-peer";
import { random } from "./data";

export async function openServer(name: string) {
    const room = await createRoom(name);
    lookingForOffer(room);
    // openOffer(room);
    window.addEventListener("beforeunload", () => {
        deleteFSRoom(room.id);
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

function lookingForOffer(room: Room) {
    const key = random(0, 999999);

    const connectionToClient = new Peer();

    let hasOffer = false;
    const unsubOfferListener = sendKeyListenForOffer(key, room.id, signal => { 
        console.log("recv signal from client, proc...", signal);
        connectionToClient.signal(signal);
        if (!hasOffer) {
            lookingForOffer(room); // open new channel
            hasOffer = true;
        }
    });

    connectionToClient.on('signal', data => {
        console.log("server signal output, sending...", data);
        signalAnswer(key, JSON.stringify(data));
    });
    
    connectionToClient.on('connect', () => {
        deleteAnswerSignal(key);
        unsubOfferListener();
        console.log("connected to client, unsubbed offer listener");
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
                connectionToClient.send(JSON.stringify(error));
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
        answeredPlayer = undefined;
    });
    connectionToClient.on('error', () => {
        if (!answeredPlayer) return;
        leaveRoom(answeredPlayer, room);
        answeredPlayer = undefined;
    });

}

// async function openOffer(room: Room) {
//     const connectionToClient = new Peer({ initiator: true });

//     connectionToClient.on('connect', () => {
//         // wait for 'connect' event before using the data channel
//         console.log("connected to something");
//     });

//     let answeredPlayer: Player | undefined;
//     connectionToClient.on('data', data => {
//         const message: string = data.toString();
//         console.log("server received:", message);
//         const parsed = rawParseString(C2SPacketSchema, message);
//         if (!parsed) return;
//         if (parsed.action === "join") {
//             if (room.players.some(p => p.profile.name === parsed.name)) {
//                 // name taken
//                 const error: S2CError = { action: "error", message: "name_taken" };
//                 connectionToClient.send(JSON.stringify(error));
//                 connectionToClient.destroy();
//                 return;
//             }
//             answeredPlayer = {
//                 profile: { name: parsed.name, score: 0 },
//                 cardPool: [],
//                 sendPacket(packet) {
//                     connectionToClient.send(JSON.stringify(packet));
//                 },
//             };
//             joinRoom(answeredPlayer, room);
//         } else if (answeredPlayer) {
//             processC2SPacket(room, answeredPlayer, parsed);
//         }
//     });

//     connectionToClient.on('close', () => {
//         if (!answeredPlayer) return;
//         leaveRoom(answeredPlayer, room);
//         answeredPlayer = undefined;
//     });

//     connectionToClient.on('error', () => {
//         if (!answeredPlayer) return;
//         leaveRoom(answeredPlayer, room);
//         answeredPlayer = undefined;
//     });


//     let offer: string | undefined;
//     let candidate: string | undefined;

//     // generate connection keys
//     connectionToClient.on('signal', data => {
//         console.log("server signal recv", data);
//         if (offer && candidate) return;

//         if (data.type === "offer") {
//             offer = JSON.stringify(data);
//         } else if (data.type === "candidate") {
//             candidate = JSON.stringify(data);
//         }

//         if (offer && candidate) {

//             console.log("server signal full. sending...", data);
//             setOffer(room.id, { offer, candidate });
//         }
//     });

//     const answer = await nextAnswer(room.id);
//     connectionToClient.signal(answer.answer);
//     connectionToClient.signal(answer.candidate);
//     openOffer(room); // dont await or it will be recursive
// }