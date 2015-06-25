/*
 * Created by GustavoGana on 6/24/15.
 */
var multiplication = prompt("Enter a number to multiply by");
    console.log("you choose " + multiplication + " to multiply");
while(multiplication==="" || isNaN(multiplication)){

        multiplication = prompt("Please do not leave blank and only use numbers \nWhat number would you like to multiply?");
}
var multi2 = prompt("Please enter second number to multiply by");
    console.log("by " + multi2);
while(multi2==="" || isNaN(multi2)){

        multi2 = prompt("PLease do not leave blank and only number \nWhat number would you like to multiply?");
    }
var answerM = multiplication * multi2;
    console.log("Your answer is " + answerM);
alert("Your answer is " + answerM);

function lightYears(distance){
    var lightYears = distance * 31556926;
    console.log("You traveled " + lightYears + " light years")
}
lightYears(answerM);

var age = prompt("How old are you?");
    console.log("You are " + age + " years old");
if( )