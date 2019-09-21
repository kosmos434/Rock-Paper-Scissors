let possibleChoices = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;
const scoreBlurb = document.createElement('div');
const scoreTally = document.createElement('div');
document.body.appendChild(scoreBlurb);
document.body.appendChild(scoreTally);

function computerPlay() {
  return possibleChoices[Math.floor(Math.random() * 3)]
}

function singleRound(playerChoice) {
  let computerChoice = computerPlay();
  if (playerChoice === computerChoice) {
    draw();
  }
  else if (playerChoice === 'Rock' && computerChoice === 'Scissors'|| playerChoice === 'Paper' && computerChoice === 'Rock' || playerChoice === 'Scissors' && computerChoice === 'Paper') {
    playerScore += 1;
    point();
  }
  else if (playerChoice === 'Rock' && computerChoice === 'Paper'|| playerChoice === 'Paper' && computerChoice === 'Scissors' || playerChoice === 'Scissors' && computerChoice === 'Rock') {
    computerScore += 1;
    loss();
  }
}


function point() {
  if (computerScore < 5 && playerScore < 5) {
    scoreBlurb.innerText = ("You won this round!")
    scoreTally.innerText = (`The current score is Human: ${playerScore} to Computer: ${computerScore}`)
  }
  else if (playerScore == 5 && computerScore < 5) {
    scoreBlurb.innerText = ("YOU WIN!")
    scoreTally.innerText = (`The current score is Human: 👑${playerScore} to Computer: ${computerScore}`)
  }
  }


function loss() {
  if (computerScore < 5 && playerScore < 5) {
    scoreBlurb.innerText = ("You lost this round!")
    scoreTally.innerText = (`The current score is Human: ${playerScore} to Computer: ${computerScore}`)
  }
  else if (computerScore === 5 && playerScore < 5) {
    scoreBlurb.innerText = ("YOU LOSE")
    scoreTally.innerText = (`The current score is Human: ${playerScore} to Computer: 👑${computerScore}`)
  }
}

function draw() {
  scoreBlurb.innerText = ("Draw!")
  scoreTally.innerText = (`The current score is Human: ${playerScore} to Computer: ${computerScore}`)
}
