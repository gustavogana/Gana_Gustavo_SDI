/**Conditional Logic
 * Created by GustavoGana on 6/13/15.
 */
var kidHeight = 52;
var minHeaight = 48;
var wParentHeaight  = 45;

//if child is old enough, print to console "you can ride!"
//if the kid is over 48 inches in height
if(kidHeight > minHeaight){
    //code performed if condition is false
    console.log("you can ride the coaster!");
}else if( kidHeight > wParentHeaight ){
    //yu can ride with a parent present
    console.log("You can ride, but only with a parent!");
}else{
    //sorry you have growing to do
    console.log("Sorry kid, you've got some growing to do first!");
}
var budget = 300;
var iPhonePrice = 199.99;
var paycheck = 200;

if(iPhonePrice){
    console.log("we can by the phone!");
}else{
    console.log("no phone for you!!");
}