function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  const arrayOfChoices = ["rock", "paper", "scissors"];
  console.log(arrayOfChoices[choice]);
  return arrayOfChoices[choice];
}

function getUserChoice() {
  let userChoice = prompt(
    "Enter your choice between: rock, paper and scissors"
  );

  if (userChoice.toLowerCase() === "rock") {
    console.log("rock");
    return "rock";
  } else if (userChoice.toLowerCase() === "paper") {
    console.log("paper");
    return "paper";
  } else if (userChoice.toLowerCase() === "scissors") {
    console.log("scissors");
    return "scissors";
  } else {
    console.log("The biggest error you have ever made");
  }
}
playerSelection = getUserChoice();
computerSelection = getComputerChoice();

console.log("the player selection is: ", playerSelection);
console.log("the computer selection is: ", computerSelection);

function playRound(playerSelection, computerSelection) {}
playRound();
