function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  const arrayOfChoices = ["rock", "paper", "scissors"];
  //   console.log(arrayOfChoices[choice]);
  return arrayOfChoices[choice];
}

function getUserChoice() {
  let userChoice = prompt(
    "Enter your choice between: rock, paper and scissors"
  );

  if (userChoice.toLowerCase() === "rock") {
    // console.log("rock");
    return "rock";
  } else if (userChoice.toLowerCase() === "paper") {
    // console.log("paper");
    return "paper";
  } else if (userChoice.toLowerCase() === "scissors") {
    // console.log("scissors");
    return "scissors";
  } else {
    console.log("The biggest error you have ever made");
  }
}
let playerSelection = getUserChoice();
let computerSelection = getComputerChoice();

console.log("the player selection is: ", playerSelection);
console.log("the computer selection is: ", computerSelection);

function playRound() {
  if (playerSelection === computerSelection) {
    console.log("Oops Equal Values Play again");
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    console.log("The computer wins because the paper covers the rock");
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log("The human wins because the rock crushes scissors");
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log("The human wins because the paper covers the rock");
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    console.log("The computer wins because scissors cuts the paper");
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log("The human wins because scissors cuts the paper");
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    console.log("The computer wins because the rock crushes the scissors");
  } else {
    console.log("there was some king of error");
  }
}
playRound();
