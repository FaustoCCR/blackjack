/**
 * Gets the points of selected card
 * @param {string} card
 * @return {number} card value 
 */
export function cardValue(card) {
  const value = card.substring(0, card.length - 1);
  return isNaN(value) ? (value === "A" ? 11 : 10) : parseInt(value);
}
