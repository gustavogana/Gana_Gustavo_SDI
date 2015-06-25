/*
 * Created by GustavoGana on 6/24/15.
 */
var multiplication = prompt("Enter a number to multiply by");//asking for a number to multiply by
    console.log("you choose " + multiplication + " to multiply");//console display number
while(multiplication==="" || isNaN(multiplication)){//endless loop until number is filled in

        multiplication = prompt("Please do not leave blank and only use numbers \nWhat number would you like to multiply?");//prompt displaying number must be entered
}
var multi2 = prompt("Please enter second number to multiply by");//second number required
    console.log("by " + multi2);//console display of number
while(multi2==="" || isNaN(multi2)){//endless loop asking for second number

        multi2 = prompt("Please do not leave blank and only number \nWhat number would you like to multiply?");//prompt asking for second number
    }
var answerM = multiplication * multi2;//multiplication of both number
    console.log("Your answer is " + answerM);//console display of math total
alert("Your answer is " + answerM);//alert with answer

function lightYears(distance){//calculating light years based on numbers multiplied
    var lightYears = distance * 31556926;//not an accurate formula for this calculation. but there really isn't any i believe
    console.log("You traveled " + lightYears + " light years")//console display with years traveled
}
lightYears(answerM);//parameters

var age = prompt("How old are you?");//prompt asking for age
    console.log("You are " + age + " years old");//console display age entered
while(age==="" || isNaN(age)){//endless loop until age is entered
    age = prompt("Don't you have an age? and letters do not count, \nnumbers only")//prompt asking for age. will pop up until age is entered
}
if (age <= 45){//if age entered is older tha 45 will get a response. if age is younger will get different response.
    console.log("You're still young");//console display with one response
    alert("Your still young");//alert with one response
}else{
    console.log("You had better days")//console display with different response
    alert("You had better days");//alert with different response
}
function ageTotal(time){//age calculation
    var ageTotal = time * 31556926;//mltiply time by seconds in a year
    console.log("You would be " + ageTotal + " years old if you traveled that distanced \nbut you would have to be immortal");// console display total age
        alert("You would be " + ageTotal + " years old if you traveled that distanced \nbut you would have to be immortal");//alert display total age
}
ageTotal(age);//prompt age
ageTotal(1);//is only 1 year old
ageTotal(100);//if one hundrd years old

var fuel = function (gas, distance) {//fuel consumption
    var totalfuel = gas * distance;//calculations for fuel consumption
    return totalfuel;//return value
};
var gasUsage = fuel(answerM, 1000 );//multiplication answer and 1000 mile a gallon
    console.log("You will consume " + gasUsage + " gallons of fuel on this trip");//console display gas usage message