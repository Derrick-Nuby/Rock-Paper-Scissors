// first we define an array of all available choices; so rock stands for 0 in all the below code; paper for 1 and scissors for 2
const arrayOfChoices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  return choice;
}

function getUserChoice() {
  let userChoice = prompt(
    "Enter your choice between: rock, paper and scissors"
  );

  if (userChoice.toLowerCase() === "rock") {
    return 0;
  } else if (userChoice.toLowerCase() === "paper") {
    return 1;
  } else if (userChoice.toLowerCase() === "scissors") {
    return 2;
  } else {
    console.log("The biggest error you have ever made");
  }
}
let computerSelection = getComputerChoice();
let playerSelection = getUserChoice();

function playRound() {
  let humanScore = 0;
  let computerScore = 0;
  if (playerSelection == computerSelection) {
    console.log("The Values are equal play again");
  } else if (playerSelection == 0 && computerSelection == 1) {
    console.log("The computer wins because paper covers rock");
    computerScore = computerScore + 1;
  } else if (playerSelection == 0 && computerSelection == 2) {
    console.log("The Human wins because rock crushes scissors");
    humanScore = humanScore + 1;
  } else if (playerSelection == 1 && computerSelection == 0) {
    console.log("The human wins because paper covers rock");
    humanScore = humanScore + 1;
  } else if (playerSelection == 1 && computerSelection == 2) {
    console.log("the computer wins because scissors cut paper");
    computerScore = computerScore + 1;
  } else if (playerSelection == 2 && computerSelection == 1) {
    console.log("the human wins because scissors cut paper");
    humanScore = humanScore + 1;
  } else if (playerSelection == 2 && computerSelection == 1) {
    console.log("computer wins because rock crushes scissors");
    computerScore = computerScore + 1;
  } else {
    console.log("there is an error!");
  }
  console.log("The computer score is: ", computerScore);
  console.log("The human score is: ", humanScore);
}

console.log("the computer selection is: ", arrayOfChoices[computerSelection]);
console.log("the player selection is: ", arrayOfChoices[playerSelection]);

playRound();
