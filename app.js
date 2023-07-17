let userRock = document.getElementById("rock");
let userPaper = document.getElementById("paper");
let userScissors = document.getElementById("scissors");
let humanScoreElement = document.querySelector(".htmlhumanscore");
let computerScoreElement = document.querySelector(".htmlcomputerscore");
let roundsCounter = document.querySelector(".rounds");
let winnerTxt = document.querySelector(".winner");
let notifications = document.querySelector(".notifications");
let finalwinner = document.querySelector(".finalwinner");
let computerSelection;
let playerSelection;
let humanScore = 0;
let computerScore = 0;
let roundsPlayed = 0;
const maxRounds = 5;
// first we define an array of all available choices; so rock stands for 0 in all the below code; paper for 1 and scissors for 2
const arrayOfChoices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  return choice;
}
userRock.addEventListener("click", function () {
  playerSelection = 0;
  playRound();
});
userPaper.addEventListener("click", function () {
  playerSelection = 1;
  playRound();
});
userScissors.addEventListener("click", function () {
  playerSelection = 2;
  playRound();
});

function playRound() {
  computerSelection = getComputerChoice();
  if (playerSelection == computerSelection) {
    winnerTxt.textContent = "The Values are equal play again";
  } else if (playerSelection == 0 && computerSelection == 1) {
    winnerTxt.textContent = "The computer wins because paper covers rock";
    computerScore++;
  } else if (playerSelection == 0 && computerSelection == 2) {
    winnerTxt.textContent = "The Human wins because rock crushes scissors";
    humanScore++;
  } else if (playerSelection == 1 && computerSelection == 0) {
    winnerTxt.textContent = "The human wins because paper covers rock";
    humanScore++;
  } else if (playerSelection == 1 && computerSelection == 2) {
    winnerTxt.textContent = "the computer wins because scissors cut paper";
    computerScore++;
  } else if (playerSelection == 2 && computerSelection == 1) {
    winnerTxt.textContent = "the human wins because scissors cut paper";
    humanScore++;
  } else if (playerSelection == 2 && computerSelection == 1) {
    winnerTxt.textContent = "computer wins because rock crushes scissors";
    computerScore++;
  } else {
    winnerTxt.textContent = "there is an error!";
  }
  roundsPlayed++;
  console.log("the computer selection is: ", arrayOfChoices[computerSelection]);
  console.log("the player selection is: ", arrayOfChoices[playerSelection]);
  humanScoreElement.textContent = humanScore;
  computerScoreElement.textContent = computerScore;
  roundsCounter.textContent = roundsPlayed;
  if (roundsPlayed === maxRounds) {
    notifications.innerHTML =
      "The computer score is: " +
      computerScore +
      "<br>The human score is: " +
      humanScore;

    endGame();
  }
}
function endGame() {
  if (humanScore > computerScore) {
    finalwinner.innerHTML =
      "The human wins the game! with: " + humanScore + " points";
  } else if (humanScore < computerScore) {
    finalwinner.innerHTML =
      "The computer wins the game! with: " + computerScore + " points";
  } else {
    finalwinner.innerHTML = "It's a tie!";
  }
}
