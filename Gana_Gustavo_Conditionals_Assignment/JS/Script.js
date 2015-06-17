//Gana_Gustavo_Conditionals_Assignment
//06/17/2015
var age = prompt("PLease enter age");
console.log("You are  " + age + " year's old ");
var minAge = 21;
if (age > minAge){
    console.log("Congratulations!! You are old enough to board the ship");
    alert("Congratulations!! You are old enough to board th ship!");
}else{
    alert("Sorry pal, not old enough yet");
    console.log("Sorry pal, not old enough yet");
}
var height = prompt("PLease enter height in inches");
console.log("you are " + height + " inches tall ");
var minHeight = 65;
if (height > minHeight){
    console.log("Congratulations!! you are tall enough to pilot the ship");
    alert("Congratulations!! you are tall enough to pilot the ship")
}else{
    console.log("Sorry pal, you need to grow some more to pilot the ship!!");
    alert("Sorry pal, you need to grow some more to pilot the ship!!")
}
var weight = prompt("PLease enter weight");
console.log(weight);
var minWeight = 180;
if (weight < minWeight){
    console.log("You meet the weight restrictions to pilot one of our fighter crafts!!");
    alert("You meet the weight restrictions to pilot one of our fighter crafts!!")
}else{
    console.log("You will cause the engine to over heat, please head over to our gym");
    alert("You will cause the engine to over heat, please head over to our gym")
}
var sex = prompt("Please enter sex");