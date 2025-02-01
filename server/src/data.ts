import cards from "../data/card.json"
import sentences from "../data/sentence.json"

export function generateCards(players: number, cardsPerPlayer: number): string[][] {
    const indexes = new Set<number>();
    const playersCards: string[][] = [];
    for (let i = 0; i < players; i++) {
        const c: string[] = [];
        for (let j = 0; j < cardsPerPlayer; j++) {
            while (true) {
                const randomNum: number = Math.floor(Math.random() * cards.length);
                if (indexes.has(randomNum)) continue;
                indexes.add(randomNum);
                c.push(getURL(cards[randomNum]));
                break;
            }
        }
        playersCards.push(c)
    }
    return playersCards;
}

function getURL(filename: string) {
    return `https://media.githubusercontent.com/media/jeffpeng3/MyPicDB/assets/images/${filename}.jpg`;
}


export function generateSentences(count: number): string[] {
    const indexes = new Set<number>();
    while (indexes.size < 3) {
        const index = Math.floor(Math.random() * sentences.length);
        indexes.add(index);
    }
    return indexes.values().map(i => sentences[i]).toArray();
}
