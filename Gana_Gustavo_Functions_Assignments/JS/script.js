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

        multi2 = prompt("Please do not leave blank and only number \nWhat number would you like to multiply?");
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
while(age==="" || isNaN(age)){
    age = prompt("Don't you have an age? and letters do not count, \nnumbers only")
}
if (age <= 45){
    console.log("You're still young");
    alert("Your still young");
}else{
    console.log("You had better days")
    alert("You had better days");
}
function ageTotal(time){
    var ageTotal = time * 31556926;
    console.log("You would be " + ageTotal + " years old if you traveled that distanced \nbut you would have to be immortal");
        alert("You would be " + ageTotal + " years old if you traveled that distanced \nbut you would have to be immortal");
}
ageTotal(age);
ageTotal(1);
ageTotal(100);

var fuel = function (gas, distance) {
    var totalfuel = gas * distance;
    return totalfuel;
};
var gasUsage = fuel(answerM, 1000 );
    console.log("You will consume " + gasUsage + " gallons of fuel on this trip");