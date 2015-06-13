/**
 * Created by GustavoGana on 6/11/15. SDI section 2
 */
//Gana_Gustavo_Expressions_Worksheet//
    // I added alerts for fun//
var height = prompt("Please enter your height in inches");//collect height info
var weight = prompt("Please enter weight in pounds");//collect weight info
var bmi = weight / (height * height) * 703;//multiply the height by height then multiply by 703. divide by weight
console.log("Your BMI is " + bmi);//diplay user bmi
alert("Your BMI is " + bmi);//shows bmi to user
var afterFive = height - 60;// subtracted 60 inches from height
var extraPounds = afterFive * 6;// multiplied inches after 5 feet by 6
console.log("You have " + extraPounds + " Extra pounds");
var idealWeight = weight - extraPounds;// subtracted weight with extra weight
console.log("Your ideal weight for your height is " + idealWeight);// result is ideal weight
alert("Your ideal weight for your height is " + idealWeight +"lbs");//alert displaying ideal weight
var weightLose  = prompt("How many pounds would you like to loose?");//pop up asking how many pounds to lose
var calories = 3500;//calories to burn to loose 1 pound
var poundsLoose = calories * weightLose;//multiply calories and desired pounds to loose
console.log("You have to burn a total of " + poundsLoose + " calories");//text diplaying total calories need to burn
alert("You have to burn a total of " + poundsLoose + " calories");//alert displaying calories needed to burn
var exersise = prompt("How many hours per week will you excersice?");//asking how many hours per week the user will excersise
var dayPerweek = prompt("For how many weeks?");// prompt asking how many weeks
var averageCal = poundsLoose / exersise / dayPerweek;// calculation to determine how many calories per day
alert("That's an average of " + averageCal + " calories to burn per day");// alert displaying how many calories needed to burn per day
console.log("That's an average of " + averageCal + " calories to burn per day");//text diplaying calories per day to burn
var exercises = [255, 400, 388];// three different excersise calories burn in 3 hours
var totalExercises = exercises[0] += exercises[1] += exercises[2];//added all the exercises
alert("Helpfull tip \ntotal calories burned doing three different excersises for 3 hours is " + totalExercises);//alert with tip for user
console.log("total calories burned doing three different excersises for 3 hours is " + totalExercises);//text display tip for user