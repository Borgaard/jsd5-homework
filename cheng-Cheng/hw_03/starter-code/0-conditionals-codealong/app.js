/* if(1 > 0){
    console.log("hi")
} else {
  console.log("bye")
}

var name = "kittens";
if(name === "puppies") {
  name += "!"
} else if(name === "kittens") {
  name += "!!"
} else {
  name = "!" + name;
}
console.log(name)

var age = 12;
var allowed = age > 18 ? console.log("yes") : console.log("no");

Ternary operator
(expression) ? trueCode : falseCode;
var name = (expression) ? trueCode : falseCode;

var cost = 24.49;
var shipping = 8.23;

if ((cost > 100)||(shipping < 5)){
  console.log("Your shipping is free");
  console.log("Your total is $" + cost)
} else {
console.log("Your total is $" + (cost + shipping) +'\n' + "(Shipping cost of" + " " + shipping + ")")
}
*/
firstName = "false"
var fName = firstName || "Jane Doe";
