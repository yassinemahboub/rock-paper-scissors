// Get DOM elements
const choiceButtons = document.querySelectorAll('.choice');
const resultText = document.getElementById('result-text');
const playerScoreText = document.getElementById('player-score');
const computerScoreText = document.getElementById('computer-score');
const resetButton = document.getElementById('reset-btn');

// Game variables
let playerScore = 0;
let computerScore = 0;

// Play round function
function playRound(playerChoice) {
  // Generate computer's choice
  const computerChoice = generateComputerChoice();

  // Compare player and computer choices
  if (playerChoice === computerChoice) {
    return "It's a draw!";
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    playerScore++;
    return 'You win!';
  } else {
    computerScore++;
    return 'Computer wins!';
  }
}

// Generate random computer choice
function generateComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Update scores on the page
function updateScores() {
  playerScoreText.textContent = `Player: ${playerScore}`;
  computerScoreText.textContent = `Computer: ${computerScore}`;
}

// Reset the game
function resetGame() {
  playerScore = 0;
  computerScore = 0;
  updateScores();
  resultText.textContent = "";
  choiceButtons.forEach(button => button.disabled = false);
}

// Event listener for choice buttons
choiceButtons.forEach(button => {
  button.addEventListener('click', () => {
    const playerChoice = button.dataset.choice;
    const result = playRound(playerChoice);
    resultText.textContent = result;
    updateScores();

    if (playerScore === 5 || computerScore === 5) {
      endGame();
    }
  });
});

// Event listener for reset button
resetButton.addEventListener('click', resetGame);

// End the game
function endGame() {
  choiceButtons.forEach(button => button.disabled = true);

  if (playerScore > computerScore) {
    resultText.textContent = "Congratulations! You won the game!";
  } else if (playerScore < computerScore) {
    resultText.textContent = "Sorry! You lost the game. Better luck next time!";
  } else {
    resultText.textContent = "It's a tie game!";
  }
}

// Reset the game when the page loads
resetGame();
