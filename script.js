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
x=Math.floor((Math.random() * 3))
/*
* now we make if statment so we make the function return one of the 3 choices based on the number generated
* from the math.random method
*/
if(x==0){
 return "rock"
}
else if (x==1){
 return "paper"
}
else{
 return "scissors"
}
}
