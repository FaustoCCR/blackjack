/**
 * Display card into card div containers
 * @param {string} card 
 * @param {HTMLElement} cardContainer
 */
export function displayCard(card, cardContainer) {
  const cardImage = document.createElement('img');
  cardImage.src = `assets/cards/${card}.png`;
  cardImage.classList.add('card-item');
  cardContainer.append(cardImage);
}