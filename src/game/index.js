import { createDeck, requestCard, cardValue, computerTurn, sumPoints, displayCard } from './functions'

let deck = [];
const cardTypes = ["C", "D", "H", "S"], specialCards = ["A", "J", "Q", "K"];
// let playerPoints = 0, computerPoints = 0;
const playersPoints = []


// * HTML references
const btnRequestCard = document.querySelector('#btn-request-card'),
  btnStopGame = document.querySelector('#btn-stop-game'),
  btnNewGame = document.querySelector('#btn-new-game'),
  cardsContainers = document.querySelectorAll('.cards-container'),
  pointBadges = document.querySelectorAll('.badge');

/**
 * @param {number} playersNum 
 */
const initializeGame = (playersNum = 2) => {
  deck = createDeck(cardTypes, specialCards);

  playersPoints.length = playersNum;
  playersPoints.fill(0);


  pointBadges.forEach((element) => element.innerText = 0);
  cardsContainers.forEach((element) => element.innerHTML = '');

  disableGameButtons(false)
}

/**
 * changes the deactivation status of the buttons
 * @param {boolean} disable 
 */
function disableGameButtons(disable = true) {
  btnRequestCard.disabled = disable;
  btnStopGame.disabled = disable;
}

// * Events
btnRequestCard.addEventListener('click', function () {
  const card = requestCard(deck);
  playersPoints[0] = sumPoints(card, playersPoints[0]);
  const playerPoints = playersPoints[0];
  pointBadges[0].innerText = playerPoints;

  displayCard(card, cardsContainers[0])

  if (playerPoints >= 21) {
    disableGameButtons();
    computerTurn(deck, playerPoints, cardsContainers[1], pointBadges[1]);
  }
});

btnStopGame.addEventListener('click', function () {
  disableGameButtons();
  computerTurn(deck, playersPoints[0], cardsContainers[1], pointBadges[1]);
})


btnNewGame.addEventListener('click', () => {
  initializeGame();
})