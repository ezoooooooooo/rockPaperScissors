/*
*first function to get the computer choice
 */
function getComputerChoice(){
 /*
 * variable intiated to save the given value
  */
 let x;
 /*
 * We have used Math.random function to get random number and multiply it by 3 so we keep it around 3
 * choices as we just need 3 and we used math.floor so we round the number down and return the int less
 * or equal to the given number so we keep it between 0,1 and 2 and we keep this value in a variable
 */
 x = Math.floor((Math.random() * 3));
/*
* now we make if statment so we make the function return one of the 3 choices based on the number generated
* from the math.random method
*/
if(x==0){
 return "rock";
}
else if (x==1){
 return "paper";
}
else{
 return "scissors";
}
}
/*
* function to get human choice
*/
function getHumanChoice(){
 /*
  * first we prompt a messeage to the user so he input his choice and we assign it to a variable
  */
 y = prompt('Enter your choice');
 /*
 * we make sure its all lower case so we don't have a equality problem 
 */
 y = y.toLowerCase();
/*
 * we make a loop with while the condition is true using if statements if y 
 * is equal to any of the correct choices it breaks the loop else the loop
 * continue with the message to the user to enter valid choice
*/
 while (true){
  if (y == "rock" || y == "paper" || y == "scissors"){
   break;
  }
  else{
   y = prompt('Not Valid Choice, please enter a valid one (rock or paper or sicssors')
  }
 }
 /*
  * we return the y value so we can use it further in the game
 */
 return y;

}

