
/*
function speak() {
  console.log("Hello")
}

speak();

function sayHello(name){
  console.log("Hello, " + name);
}
sayHello("Bert");

function sum(x, y, z){
  console.log(x + y + z);
  return "Done!"
}
sum(1,2,3)
sum(3,4,5)
*/

function sum(x,y) {
    console.log("Sum() ran")
    return x + y;
}
function double(z) {
  return z * 2;
  console.log("Double() ran")
}

console.log(double(sum(3,4)))
