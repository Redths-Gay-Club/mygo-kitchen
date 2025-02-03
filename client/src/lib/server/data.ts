import cards from "./data/card.json";
import sentences from "./data/sentence.json";
import type { Card } from "$lib/schema";

export function generateCards(players: number, cardsPerPlayer: number): Card[][] {
    const indexes = new Set<number>();
    const playersCards: Card[][] = [];
    for (let i = 0; i < players; i++) {
        const c: Card[] = [];
        for (let j = 0; j < cardsPerPlayer; j++) {
            while (true) {
                const randomNum = random(0, cards.length);
                if (indexes.has(randomNum)) continue;
                indexes.add(randomNum);
                c.push(getCard(cards[randomNum]));
                break;
            }
        }
        playersCards.push(c)
    }
    return playersCards;
}

function getCard(filename: string): Card {
    return { image: `https://mygodata.0m0.uk/images/${filename}.jpg`, text: "later" };
}

export function generateSentences(count: number): string[] {
    const indexes = new Set<number>();
    while (indexes.size < count) {
        const index = random(0, sentences.length);
        indexes.add(index);
    }
    return indexes.values().map(i => sentences[i]).toArray();
}

export function random(fromInclusive: number, toExclusive: number): number {
    return Math.floor(Math.random() * (toExclusive - fromInclusive)) + fromInclusive;
}