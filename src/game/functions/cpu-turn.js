import { requestCard, sumPoints, displayCard, determineWinner } from "./";

/**
 * Trigger once player finish the game
 * @param {string[]} deck 
 * @param {number} minimumPoints 
 * @param {HTMLElement} cardContainer
 * @param {HTMLElement} pointBadge
 */
export const computerTurn = (deck, minimumPoints, cardContainer, pointBadge) => {
  let computerPoints = 0;
  do {
    const card = requestCard(deck);
    computerPoints = sumPoints(card, computerPoints);
    pointBadge.innerText = computerPoints;
    displayCard(card, cardContainer)

  } while ((computerPoints < minimumPoints) && (minimumPoints <= 21));

  determineWinner(minimumPoints, computerPoints);
}