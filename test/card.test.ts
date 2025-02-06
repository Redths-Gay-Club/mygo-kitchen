import { expect, test } from 'vitest'
import { generateCards } from "../src/lib/host/data"


test('generate cards count', () => {
    const cards = generateCards(3);
    console.log(cards);
    expect(cards.length).toBe(3);
    expect(cards[0].length).toBe(10);
})