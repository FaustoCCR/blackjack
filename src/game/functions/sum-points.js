import { cardValue } from "./card-value";

/**
 * Accumulates the points of player in turn
 * @param {string} card - card taken
 * @param {number} playerPoints - current player points
 * @return {number} - points
 */
export function sumPoints(card, playerPoints) {
  return playerPoints + cardValue(card);
}
