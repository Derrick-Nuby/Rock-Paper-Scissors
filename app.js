let userRock = document.getElementById("rock");
let userPaper = document.getElementById("paper");
let userScissors = document.getElementById("scissors");
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
    console.log("The Values are equal play again");
  } else if (playerSelection == 0 && computerSelection == 1) {
    console.log("The computer wins because paper covers rock");
    computerScore++;
  } else if (playerSelection == 0 && computerSelection == 2) {
    console.log("The Human wins because rock crushes scissors");
    humanScore++;
  } else if (playerSelection == 1 && computerSelection == 0) {
    console.log("The human wins because paper covers rock");
    humanScore++;
  } else if (playerSelection == 1 && computerSelection == 2) {
    console.log("the computer wins because scissors cut paper");
    computerScore++;
  } else if (playerSelection == 2 && computerSelection == 1) {
    console.log("the human wins because scissors cut paper");
    humanScore++;
  } else if (playerSelection == 2 && computerSelection == 1) {
    console.log("computer wins because rock crushes scissors");
    computerScore++;
  } else {
    console.log("there is an error!");
  }
  roundsPlayed++;
  console.log("the computer selection is: ", arrayOfChoices[computerSelection]);
  console.log("the player selection is: ", arrayOfChoices[playerSelection]);
  console.log("The computer score is: ", computerScore);
  console.log("The human score is: ", humanScore);
  if (roundsPlayed === maxRounds) {
    endGame();
  }
}
function endGame() {
  if (humanScore > computerScore) {
    console.log("The human wins the game!", humanScore);
  } else if (humanScore < computerScore) {
    console.log("The computer wins the game!", computerScore);
  } else {
    console.log("It's a tie!");
  }
}
