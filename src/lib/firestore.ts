import { initializeApp } from "firebase/app";
import { getFirestore, collection, setDoc, doc, onSnapshot, getDocs, getDoc, deleteDoc } from "firebase/firestore";
import { AnswerSchema, OfferSchema, rawParseObj, type Answer, type Offer } from "./schema";

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

async function setOffer(roomId: string, offer: Offer) {
    await setDoc(doc(offers, roomId), offer);
}

async function getOffer(roomId: string) {
    const docRef = await getDoc(doc(offers, roomId));
    const data = docRef.data();
    const parsed = rawParseObj(OfferSchema, data);
    return parsed;
}

async function deleteOffer(roomId: string) {
    await deleteDoc(doc(offers, roomId));
}

async function getRoomIDs() {
    const snapshot = await getDocs(offers);
    const ids = snapshot.docs.map(doc => doc.id);
    return ids;
}

async function addAnswer(answer: Answer) {
    await setDoc(doc(answers), answer);
}

function nextAnswer(roomId: string): Promise<Answer> {
    registerListener();
    return new Promise(resolve => {
        listener = { roomId, callback: resolve };
    });
}

export { getRoomIDs, setOffer, addAnswer, nextAnswer, getOffer, deleteOffer };