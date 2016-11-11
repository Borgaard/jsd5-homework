// function speak(){
//   console.log("hello")
// }
// speak();

// function helloErnie(){
//   console.log("hello, Ernie")
// }
//
// function helloBert(){
//   console.log("hello, Bert")
// }

function sayHello(name){
  console.log("Hello " + name + "!");
}
sayHello(Brady)
sayHello("Katie")
sayHello("Bob")
sayHello()


// function sum(x, y, z){
//   // console.log(x+y+z);
//   // return "Done!"
//   return(x+y+z);
// }
// sum(4,5,6);

function sum(x,y){
  return x+y
}
function double(z){
  return z*2;
}

var num = double(sum(3,4))
console.log(double(num))
