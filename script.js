let choice;
const score = document.querySelector("#score");
const result = document.querySelector("#result");
const winner = document.querySelector("#winner");
let humanScore = 0;
let computerScore = 0;
function getComputerChoice() {
  let x;

  x = Math.floor(Math.random() * 3);
  if (x == 0) {
    return "rock";
  } else if (x == 1) {
    return "paper";
  } else {
    return "scissors";
  }
}
function playRound(humanChoice, computerChoice) {
  if (humanChoice == computerChoice) {
    result.textContent = "it's a tie";
  } else if (
    (humanChoice == "rock" && computerChoice == "scissors") ||
    (humanChoice == "paper" && computerChoice == "rock") ||
    (humanChoice == "scissors" && computerChoice == "paper")
  ) {
    result.textContent = "You Won, " + humanChoice + " beats " + computerChoice;
    humanScore++;
  } else {
    result.textContent =
      "You lost, " + computerChoice + " beats " + humanChoice;
    computerScore++;
  }
}

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", function(event) {
    let humanChoice = event.target.id; 
    const computerChoice = getComputerChoice();

    playRound(humanChoice, computerChoice);
    getWinner();
    updateScore();
    resetScore();
  });
});




function getWinner() {
  if(humanScore == 5 || computerScore == 5){
    if (humanScore > computerScore) {
      winner.textContent = "Congrats You Won!";
        
  } else if (humanScore < computerScore) {
    winner.textContent = "You have lost !";

        
  } else {
    winner.textContent = "it's a tie ";

        
  }
  }
  else;
}
function resetScore(){
  if (humanScore == 5 || computerScore ==5){
    humanScore = 0;
    computerScore =0;
}
}

function updateScore() {
  const playerScorePara = document.getElementById("playerScore");
  const computerScorePara = document.getElementById("computerScore");

  playerScorePara.textContent = `Player: ${humanScore}`;
  computerScorePara.textContent = `Computer: ${computerScore}`;
}
