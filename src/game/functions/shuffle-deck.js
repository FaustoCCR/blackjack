/**
 * Shuffles the elements of an array using the Fisher-Yates algorithm.
 * @param {string[]} deck - The array to be shuffled.
 * @returns {string[]} The shuffled array.
 */
export function shuffleDeck(deck) {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}