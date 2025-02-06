import { initializeApp } from "firebase/app";
import { getFirestore, collection, setDoc, doc, onSnapshot, getDocs, getDoc, deleteDoc, addDoc } from "firebase/firestore";
import { AnswerSchema, asString, FSRoomSchema, OfferSchema, rawParseObj, SignalSchema, type Answer, type FSRoom, type Offer } from "./schema";
import { random } from "./host/data";

const firebaseConfig = {
    apiKey: "AIzaSyAozsrYtU92CXfVG7T9Xnkwb5zvm_VtrDk",
    authDomain: "mygo-kitchen.firebaseapp.com",
    projectId: "mygo-kitchen",
    storageBucket: "mygo-kitchen.firebasestorage.app",
    messagingSenderId: "947449925426",
    appId: "1:947449925426:web:7764e0504ddc85c042112b",
    measurementId: "G-33BZ03PQEX",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const rooms = collection(db, "rooms");
const offers = collection(db, "offers");
const answers = collection(db, "answers");

let listener: {
    roomId: string,
    callback(answer: Answer): void,
} | undefined;

let unsub: any;

function registerListener() {
    if (unsub) return;
    unsub = onSnapshot(answers, (doc) => {
        if (!listener) return;
        for (const change of doc.docChanges()) {
            console.log("listened changes");
            if (change.type !== "added") continue;
            const answer = change.doc.data();
            console.log("listened answer", answer);
            const parsed = rawParseObj(AnswerSchema, answer);
            if (!parsed) continue;
            if (listener.roomId === parsed.roomId) {
                listener.callback(parsed);
                listener = undefined;
                deleteDoc(change.doc.ref);
                break;
            }
        }
    });
}

export async function getRoomKey(roomId: string) {
    const docRef = await getDoc(doc(rooms, roomId));
    const data = docRef.data();
    const parsed = rawParseObj(FSRoomSchema, data);
    return parsed?.key;
}
export async function deleteFSRoom(roomId: string) {
    await deleteDoc(doc(rooms, roomId));
}
export function sendKeyListenForOffer(key: number, roomId: string, onSignal: (singal: string) => void) {
    console.log("started listeneing");
    const fsRoom: FSRoom = { key };
    setDoc(doc(rooms, roomId), fsRoom);
    return onSnapshot(collection(db, "o" + key), (doc) => {
        for (const change of doc.docChanges()) {
            console.log("listened changes");
            if (change.type !== "added") continue;
            const signal = change.doc.data();
            console.log("listened answer", signal);
            const parsed = rawParseObj(SignalSchema, signal);
            deleteDoc(change.doc.ref);
            if (!parsed) return;
            onSignal(parsed.data);
        }
    });
}
export function signalAnswer(key: number, signal: string) {
    addDoc(collection(db, "a"+key), { data: signal });
}
export function signalOffer(key: number, signal: string) {
    addDoc(collection(db, "o"+key), { data: signal });
}
export async function deleteOfferSignal(key: number) {
    const col = collection(db, "o"+key);
    const snapshot = await getDocs(col);
    for (const doc of snapshot.docs) {
        await deleteDoc(doc.ref);
    }
}
export async function deleteAnswerSignal(key: number) {
    const col = collection(db, "a"+key);
    const snapshot = await getDocs(col);
    for (const doc of snapshot.docs) {
        await deleteDoc(doc.ref);
    }
}
export function listenForAnswer(key: number, roomId: string, onSignal: (singal: string) => void) {
    return onSnapshot(collection(db, "a" + key), (doc) => {
        for (const change of doc.docChanges()) {
            console.log("listened changes");
            if (change.type !== "added") continue;
            const signal = change.doc.data();
            console.log("listened answer", signal);
            const parsed = rawParseObj(SignalSchema, signal);
            deleteDoc(change.doc.ref);
            if (!parsed) return;
            onSignal(parsed.data);
        }
    });
}

export async function setOffer(roomId: string, offer: Offer) {
    await setDoc(doc(offers, roomId), offer);
}

export async function getOffer(roomId: string) {
    const docRef = await getDoc(doc(offers, roomId));
    const data = docRef.data();
    const parsed = rawParseObj(OfferSchema, data);
    return parsed;
}

export async function deleteOffer(roomId: string) {
    await deleteDoc(doc(offers, roomId));
}

export async function getRoomIDs() {
    const snapshot = await getDocs(rooms);
    const ids = snapshot.docs.map(doc => doc.id);
    return ids;
}

export async function addAnswer(answer: Answer) {
    await setDoc(doc(answers), answer);
}

export function nextAnswer(roomId: string): Promise<Answer> {
    registerListener();
    return new Promise(resolve => {
        listener = { roomId, callback: resolve };
    });
}
