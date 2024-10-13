import { shuffleDeck } from "./shuffle-deck"
/**
 * Creates a deck of cards with the specified suits and special cards
 * @param {string[]} suits - An array of suits (e.g., 'H', 'D', 'C', 'S')
 * @param {string[]} faceCards - An array of face cards (e.g., 'A', 'J', 'Q', 'K')
 * @returns {string[]} The deck generated
 */
const createDeck = (suits, faceCards) => {
  const deck = [];
  // number cards
  /*   for (let i = 2; i <= 10; i++) {
      for (const cardType of suits) {
        deck.push(i + cardType);
      }
    }
  
    // letter cards
    for (const cardType of suits) {
      for (const specialCard of faceCards) {
        deck.push(specialCard + cardType)
      }
    } */

  const numericCards = Array.from({ length: 9 }, (_, i) => (i + 2).toString());

  const allCards = [...numericCards, ...faceCards];
  suits.forEach((suit) => {
    allCards.forEach((value) => {
      deck.push(value + suit);
    })
  })
  return shuffleDeck(deck)
}

export default createDeck;