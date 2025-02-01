import { generateCards } from "./data";
import cards from "../data/card.json"

function generate(players: number, cardsPerPlayer: number): string[][] {
    const indexes = new Set<number>();
    const playersCards: string[][] = [];
    console.log("? loop");
    for (let i = 0; i < players; i++) {
        console.log("i loop");
        const c: string[] = [];
        for (let j = 0; j < cardsPerPlayer; j++) {
            console.log("j loop");
            while (true) {
                const randomNum: number = Math.floor(Math.random() * cards.length);
                console.log("spawn number", randomNum);
                if (indexes.has(randomNum)) continue;
                indexes.add(randomNum);
                c.push((cards[i]));
                break;
            }
        }
        playersCards.push(c)
    }
    return playersCards;
}

console.log(generate(3, 5));