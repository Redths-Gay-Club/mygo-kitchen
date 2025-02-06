// import cards from "./data/cards.json";
import classified from "./data/word-classified.json";
import sentences from "./data/sentences.json";
import type { Card } from "../schema";

function generateTwoCardOfClass(word_class: keyof typeof classified) {
    const cards = classified[word_class];
    const first = random(0, cards.length);
    let second = random(0, cards.length);
    while (first === second) {
        second = random(0, cards.length);
    }
    return [cards[first], cards[second]];
}
function generateCardsOfAllClasses() {
    const keys = ["noun", "verb", "sentence", "adj", "adv"] as const;
    return keys.flatMap(wc => generateTwoCardOfClass(wc));
}

export function generateCards(players: number): Card[][] {
    const playersCards: Card[][] = [];
    for (let i = 0; i < players; i++) {
        playersCards.push(generateCardsOfAllClasses());
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