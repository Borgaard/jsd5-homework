if(1 > 0){
  console.log("hi");
}else{
  console.log("bye");
}

var weather = "rain"

if(weather === "sunny"){
  console.log("nice day")
}else if (weather === "rain") {
  console.log("get umbrella")
}else{
  console.log("not sunny or rainy")
}


var name = "poo"

if (name === "puppies") {
  name += "!"
}else if (name === "kittens") {
  name += "!!"
}else {
  name = "!" + name;
}
console.log(name);

//Ternary operator (expression) ? trueCode : falseCode;
var test = (name == "puppies") ? console.log("true") : console.log("false");

var age = 12;
var allowed = (age > 18 ) ? "yes" : "no";
console.log(allowed)


var cost = 124.49;
var shipping = 8.23;

if ( (cost > 100) || (shipping < 5)) {
  console.log("your shipping is free")
  console.log("your total is $" + cost);
}else {
  console.log("your total is $" + (cost + shipping));
}



var lastName = "sammons";
var fistname = "brady";
var name = fistname && lastName;
console.log(name);
