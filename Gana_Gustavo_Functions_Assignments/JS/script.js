/**
 * Created by GustavoGana on 6/24/15.
 */
var multiplication = prompt("Enter a number to multiply by");
    console.log("you choose " + multiplication + " to multiply");
while(multiplication==="" || isNaN(multiplication)) {
    if(multiplication===""){
        multiplication = prompt("Please do not leave blank and only use numbers \nWhat number would you like to multiply?");
        multiplication = parseInt(multiplication);
}
var multi2 = prompt("Please enter second number to multiply by");
    console.log("by " + multi2);
while(multi2==="" || isNaN(multi2)){
    if (multi2 === ""){}
}
        multi2 = prompt("PLease do not leave blank and only number \nWhat number would you like to multiply?");
        multi2 = parseInt(multi2);
    }
var answerM = multiplication * multi2;
    console.log(answerM);