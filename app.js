const arrayOfChoices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  //   console.log(arrayOfChoices[choice]);
  return choice;
}

function getUserChoice() {
  let userChoice = prompt(
    "Enter your choice between: rock, paper and scissors"
  );

  if (userChoice.toLowerCase() === "rock") {
    // console.log("rock");
    return 0;
  } else if (userChoice.toLowerCase() === "paper") {
    // console.log("paper");
    return 1;
  } else if (userChoice.toLowerCase() === "scissors") {
    // console.log("scissors");
    return 2;
  } else {
    console.log("The biggest error you have ever made");
  }
}
let computerSelection = getComputerChoice();
let playerSelection = getUserChoice();
function playRound() {
  if (playerSelection == computerSelection) {
    console.log("The Values are equal play again");
  } else if (playerSelection == 0 && computerSelection == 1) {
    console.log("The computer wins because paper covers rock");
  } else if (playerSelection == 0 && computerSelection == 2) {
    console.log("The Human wins because rock crushes scissors");
  } else if (playerSelection == 1 && computerSelection == 0) {
    console.log("The human wins because paper covers rock");
  } else if (playerSelection == 1 && computerSelection == 2) {
    console.log("the computer wins because scissors cut paper");
  } else if (playerSelection == 2 && computerSelection == 1) {
    console.log("the human wins because scissors cut paper");
  } else if (playerSelection == 2 && computerSelection == 1) {
    console.log("computer wins because rock crushes scissors");
  } else {
    console.log("there is an error!");
  }
}

// console.log(computerSelection);
// console.log(playerSelection);

console.log("the computer selection is: ", arrayOfChoices[computerSelection]);
console.log("the player selection is: ", arrayOfChoices[playerSelection]);

playRound();
