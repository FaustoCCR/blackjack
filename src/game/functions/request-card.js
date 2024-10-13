/**
 * Gets the last element of the card deck
 * @param {string[]} deck - card deck
 * @return {string} a card
 */
export function requestCard(deck) {
  if (!deck || deck.length === 0) {
    throw "There is no cards in the deck";
  }
  return deck.pop()
}