// GLOBAL VARIABLES
let playerScore = 0;
let computerScore = 0;


// Computer Choice

function getRandomValueInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  

function getComputerChoice() {
  let randomNumber =  getRandomValueInRange(0, 2);

  if (randomNumber === 0) {
    return "paper";
  } else if (randomNumber === 1) {
    return "scissors";
  } else {
    return "rock";
  }
}

// Playground

function playRound(playerSelection, computerSelection) {
 // Convert the parameters to lower case
 var playerOption = playerSelection.toLowerCase();
 // Perform the comparisons when player choose Paper
 if (playerOption == "paper" && computerSelection == "rock") {
    playerScore++;
    return "You Win! Paper beats Rock"
 } else if (playerOption == "paper" && computerSelection == "scissors") {
    computerScore++;
    return "You Lose! Scissors beats Paper"
 } else if (playerOption == computerSelection) {
    return "Draw! Try Again"
 }
 // Perform the comparisons when player choose Rock
 if (playerOption == "rock" && computerSelection == "paper") {
    computerScore++;
    return "You Lose! Paper beats Rock"
 } else if (playerOption == "rock" && computerSelection == "scissors") {
    playerScore++;
    return "You Win! Rock beats Scissors"
 } else if (playerOption == computerSelection) {
    return "Draw! Try Again"
 }
 // Perform the comparisons when player choose Scissors
 if (playerOption == "scissors" && computerSelection == "paper") {
    playerScore++;
    return "You Win! Scissors beats Paper"
 } else if (playerOption == "scissors" && computerSelection == "rock") {
    computerScore++;
    return "You Lose! Rock beats Scissors"
 } else if (playerOption == computerSelection) {
    return "Draw! Try Again"
 }
}

// GAME FUNCTION

function game() {
// -- Loop x5 --
    for (let i = 0 ; i < 5; i++ ) {
    // Get Player Option 
    var playerSelection = window.prompt("Enter your choice (rock, paper, or scissors):");
    // Get Computer Option
    const computerSelection = getComputerChoice();
    // Perfom the Game
    console.log(playRound(playerSelection, computerSelection));
    // To display the scores
    console.log("Player score:", playerScore);
    console.log("Computer score:", computerScore);
    }
// -- Report Winner & Losser
if (playerScore > computerScore) {
    return "Congratulations for your victory!"
} else if (playerScore < computerScore) {
    return alert("You lost your game. Try Again!")
} else {
    return alert("No winner for this game. Try Again!")
}
    
}


console.log(game())