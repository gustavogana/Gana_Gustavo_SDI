//Gana_Gustavo_Conditionals_Assignment
//06/17/2015
var oldEnough = prompt("How old are you?");
console.log(" your age is " + oldEnough);
var minAge = 18;
if(oldEnough >= minAge){
    console.log("Welcome to military");
}else{
    console.log("Try again when your old enough");
}
(oldEnough > 25) ? console.log("You can apply for captain") : console.log("Wait a few more years");
var height = prompt("How tall are you in inches?");
var minHeight = 70;
console.log("You are " + height + " inches tall");
if(height >= minHeight){
    console.log("You can be an infantry man");
}else{
    console.log("Desk job for you");
}

var weight = prompt("How much do you weigh?");
var maxWeight = 185;
console.log("You weigh "+ weight + " lbs");
if(weight <= maxWeight){
    console.log("You can fly planes");
}else{
    console.log("The plane will not fly!!");
}
var armor = 1200;
var gun = 800;
var bonus = prompt("How much is your bonus to purchase equipment?");
if(bonus > armor && gun){
    console.log("you can buy equipment");
}else{
    console.log("Need more money");
}