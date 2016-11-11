// speak();

// var function speak() {
// 	console.log('hello');
// };

// var speak = function() {
// 	console.log("hello!");
// };

// speak();



// say hello to everyone in the database...
// This approach is really labor intensive
// function helloErnie() {
// 	console.log("Hello, Ernie");
// }

// function helloBert() {
// 	console.log("Hello, Bert");
// }

// function sayHello(name) {
// 	console.log("Hello, " + name);
// }

// sayHello("Sasha");

// sayHello("Ernie");

// sayHello("Bert");

// function sum(x, y, z) {
// 	console.log(x + y + z);
// 	return "Done!";

// }


function sum (x,y) {
	console.log("sum() ran");
	return x + y;
}

function double(z) {
	return z * 2;
	console.log("double() ran")
}

var newNum = double(sum(3,4));

