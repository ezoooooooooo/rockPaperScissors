/*
 *first function to get the computer choice
 */
function getComputerChoice() {
  /*
   * variable intiated to save the given value
   */
  let x;
  /*
   * We have used Math.random function to get random number and multiply it by 3 so we keep it around 3
   * choices as we just need 3 and we used math.floor so we round the number down and return the int less
   * or equal to the given number so we keep it between 0,1 and 2 and we keep this value in a variable
   */
  x = Math.floor(Math.random() * 3);
  /*
   * now we make if statment so we make the function return one of the 3 choices based on the number generated
   * from the math.random method
   */
  if (x == 0) {
    return "rock";
  } else if (x == 1) {
    return "paper";
  } else {
    return "scissors";
  }
}
/*
 * function to get human choice
 */
function getHumanChoice() {
  /*
   * first we prompt a messeage to the user so he input his choice and we assign it to a variable
   */
  y = prompt("Enter your choice");
  /*
   * we make sure its all lower case so we don't have a equality problem
   */
  y = y.toLowerCase();
  /*
   * we make a loop with while the condition is true using if statements if y
   * is equal to any of the correct choices it breaks the loop else the loop
   * continue with the message to the user to enter valid choice
   */
  while (true) {
    if (y == "rock" || y == "paper" || y == "scissors") {
      break;
    } else {
      y = prompt(
        "Not Valid Choice, please enter a valid one (rock or paper or sicssors"
      );
    }
  }
  /*
   * we return the y value so we can use it further in the game
   */
  return y;
}

function playGame() {
  function playRound(humanChoice, computerChoice) {
    /*
     * we made and if statement to compare between choices we used all human possible choices to win
     * if his choice wasn't around those he will lose and computer wins and accroding to the winner
     * we generate a messeage to the winner and increment winner score
     * if it's a tie it prints it's a tie
     */
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
  /*
   * two variables to hold scores
   */
  let humanScore = 0;
  let computerScore = 0;
  /*
   * this for loop so i can pkay the game in 5 rounds i made the other functions recalled multiple times
    * not just the playround function so we get different choices each round
  */
  for (let i = 5; i > 0; i--) {
    /*
    * variables to hold the choices from functions
    */
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  }
  /*
  * in order to display a winner accroding to the score we made an if statement to compare and display
  * a winner according to the highest score
  */
  if (humanScore > computerScore){
    console.log('Congrats You Won!')
    console.log("Scores  \nYour Score : "+humanScore+"\nComputer Score : "+ computerScore)
  }
  else if (humanScore < computerScore){
    console.log('You lost!')
    console.log("Scores  \nYour Score : "+humanScore+"\nComputer Score : "+ computerScore)
  }
  else{
    console.log("it's a tie ")
    console.log("Scores  \nYour Score : "+humanScore+"\nComputer Score : "+ computerScore)
  }
  
}
/*
* we calling the function so ecverything starts
*/
playGame();
