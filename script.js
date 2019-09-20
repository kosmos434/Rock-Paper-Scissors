let possibleChoices = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  return possibleChoices[Math.floor(Math.random() * 3)]
}

function roundOne(playerSelection, computerSelection) {
  if ((playerSelection.toLowerCase() == "rock") && (computerSelection == "Rock")) {
    // "Draw!"
  }
  else if ((playerSelection.toLowerCase() == "rock") && (computerSelection == "Paper")) {
    // "Lose!"
    computerScore += 1;
  }
  else if ((playerSelection.toLowerCase() == "rock") && (computerSelection == "Scissors")) {
    // "Win!"
    playerScore += 1;
  }
  else if ((playerSelection.toLowerCase() == "paper") && (computerSelection == "Rock")) {
    // "Win!"
    playerScore += 1;
  }
  else if ((playerSelection.toLowerCase() == "paper") && (computerSelection == "Paper")) {
    // "Draw!"
  }
  else if ((playerSelection.toLowerCase() == "paper") && (computerSelection == "Scissors")) {
    // "Lose!"
    computerScore += 1;
  }
  else if ((playerSelection.toLowerCase() == "scissors") && (computerSelection == "Rock")) {
    // "Lose!"
    computerScore += 1;
  }
  else if ((playerSelection.toLowerCase() == "scissors") && (computerSelection == "Paper")) {
    // "Win!"
    playerScore += 1;
  }
  else if ((playerSelection.toLowerCase() == "scissors") && (computerSelection == "Scissors")) {
    // "Draw!"
  }
  else {
    return "I AM ERROR."
  }
}

function game() {
    const rockBtn = document.getElementById("rock");
    const paperBtn = document.getElementById("paper");
    const scissorsBtn = document.getElementById("scissors");
    rockBtn.addEventListener("click", roundOne("rock", computerPlay()));
    paperBtn.addEventListener("click", roundOne("paper", computerPlay()));
    scissorsBtn.addEventListener("click", roundOne("scissors", computerPlay()));
  }
  if (playerScore > computerScore) {
    alert("You win with a score of: " + playerScore);
  }
  else if (playerScore < computerScore) {
    alert("You LOSE with a score of: " + playerScore + " vs the computer's " + computerScore);
  }
  else {
    alert("It's a draw! Wow!")
  }
// game()