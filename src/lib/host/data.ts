import cards from "./data/cards.json";
import sentences from "./data/sentences.json";
import type { Card } from "../schema";

export function generateCards(players: number, cardsPerPlayer: number): Card[][] {
    const indexes = new Set<number>();
    const playersCards: Card[][] = [];
    for (let i = 0; i < players; i++) {
        const cardOfEachPlayer: Card[] = [];
        for (let j = 0; j < cardsPerPlayer; j++) {
            while (true) {
                const randomNum = random(0, cards.length);
                if (indexes.has(randomNum)) continue;
                indexes.add(randomNum);
                const card = cards[randomNum];
                cardOfEachPlayer.push(card);
                break;
            }
        }
        playersCards.push(cardOfEachPlayer);
    }
    return playersCards;
}

export function generateSentences(count: number): string[] {
    const indexes = new Set<number>();
    while (indexes.size < count) {
        const index = random(0, sentences.length);
        indexes.add(index);
    }
    return indexes.values().map(i => sentences[i].sentence).toArray();
}

export function random(fromInclusive: number, toExclusive: number): number {
    return Math.floor(Math.random() * (toExclusive - fromInclusive)) + fromInclusive;
}