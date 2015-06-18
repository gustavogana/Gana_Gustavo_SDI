//Gana_Gustavo_Conditionals_Assignment
//06/17/2015
var oldEnough = prompt("How old are you?");//prompt with age input
console.log(" your age is " + oldEnough);//display age on console
var minAge = 18;//min age fot math
if(oldEnough >= minAge){//if old enough vs min age
    console.log("Welcome to military");//display message in console
}else{
    console.log("Try again when your old enough");//display message stating negative response
}
var height = prompt("How tall are you in inches?");//prompt asking for height
var minHeight = 70;// var with min height
var capAge = 25;
console.log("You are " + height + " inches tall");//display console text about height
(oldEnough >= capAge) ? console.log("You can apply for captain") : console.log("Wait a few more years");// ternary displaying two different messages depending on user inout
if(height >= minHeight){// going to see if tall enough
    console.log("You can be an infantry man");//console display
}else{
    console.log("Desk job for you");//console display
}
var weight = prompt("How much do you weigh?");//prompt asking user to input weight
var maxWeight = 185;//var with max weight
console.log("You weigh "+ weight + " lbs");//console display weight
if(weight <= maxWeight){//decision to make based on user input
    console.log("You can fly planes");//console display
}else{
    console.log("The plane will not fly!!");//console display
}
var armor = 1200;//var for armor cost
console.log("A single piece of armor cost " + armor + " dollars");//console display single price
var gun = 800;//var for gun cost
console.log("A single gun cost " + gun + " dollars");//console display single price
var bonus = prompt("How much is your bonus to purchase equipment?");//user input for desired bonus
if(bonus > armor && gun){//decision if enough money to purchase items
    console.log("you can buy equipment");//console display based on user input
}else{
    console.log("Need more money");//console display based on user input
}
var armorCount = bonus / armor;//divided armor and bonus to see how many i can buy
console.log("You can buy " + armorCount + "  pieces of armor with your bonus");//console display amount of each
var gunCount = bonus / gun;//how many guns depending on bonus
console.log("You can buy " + gunCount + " guns with your bonus");//console display how many gunbs
var equipment = armorCount + gunCount;//add guns and armor to see total amount
console.log("You can buy a total of " + equipment + " combined equipment");//console display of total equipment
if(oldEnough == capAge){//determine free gear based on rank
    console.log("Captains get free equipment");//console display if true
}else{
    console.log("You tried to get free stuff");//console display if true
}