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

computerSelection = getComputerChoice();
playerSelection = getUserChoice();

console.log(typeof arrayOfChoices[computerSelection]);
console.log(typeof arrayOfChoices[playerSelection]);

console.log("the computer selection is: ", arrayOfChoices[computerSelection]);
console.log("the player selection is: ", arrayOfChoices[playerSelection]);

// function playRound(playerSelection, computerSelection) {
//     if
// }
// playRound();
