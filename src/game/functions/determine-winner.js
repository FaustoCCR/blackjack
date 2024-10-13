import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

export function determineWinner(playerPoints, computerPoints) {
  const message = (playerPoints > 21) ? "Computer wins" :
    (computerPoints > 21) ? "Player wins" :
      (computerPoints === playerPoints) ? "It's a tie" :
        (playerPoints > computerPoints) ? "Player wins" : "Computer wins"
  Toastify({
    text: message,
    duration: 3000
  }).showToast();
}
