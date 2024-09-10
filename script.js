let choice;
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
    console.log("It's a tie");
  } else if (
    (humanChoice == "rock" && computerChoice == "scissors") ||
    (humanChoice == "paper" && computerChoice == "rock") ||
    (humanChoice == "scissors" && computerChoice == "paper")
  ) {
    console.log("You Won, " + humanChoice + " beats " + computerChoice);
    humanScore++;
  } else {
    console.log("You lost, " + computerChoice + " beats " + humanChoice);
    computerScore++;
  }
}

const paperbtn = document.querySelector(".paperbtn");
const rockbtn = document.querySelector(".rockbtn");
const scissorsbtn = document.querySelector(".scissorsbtn");
paperbtn.addEventListener("click", function () {
  choice = "paper";
  let humanChoice = choice;
  const computerChoice = getComputerChoice();
  
  playRound(humanChoice, computerChoice);
});
rockbtn.addEventListener("click", function () {
  choice = "rock";
  let humanChoice = choice;
  const computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
});
scissorsbtn.addEventListener("click", function () {
  choice = "scissors";
  let humanChoice = choice;
  const computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
});






let humanScore = 0;
let computerScore = 0;

// playRound(humanChoice, computerChoice);

// if (humanScore > computerScore){
//   console.log('Congrats You Won!')
//   console.log("Scores  \nYour Score : "+humanScore+"\nComputer Score : "+ computerScore)
// }
// else if (humanScore < computerScore){
//   console.log('You lost!')
//   console.log("Scores  \nYour Score : "+humanScore+"\nComputer Score : "+ computerScore)
// }
// else{
//   console.log("it's a tie ")
//   console.log("Scores  \nYour Score : "+humanScore+"\nComputer Score : "+ computerScore)
// }
