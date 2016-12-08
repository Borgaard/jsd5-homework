/*var a = "this is the global scope";
function myFunction () {
	var b = "this variable is defined in the local scope"; 
	console.log(b);
}
myFunction();*/


/*var a = 1;

function getScore() {
	var b = 2;
	var c = 3;

	function add () {
		return a + b + c;
	}

	return add();
}

getScore();*/


/*function letTest() {
	let x = 1;
	if (true) {
		let x = 2;
		console.log(x);
	}
	console.log(x);
}
letTest();*/


/*console.log(x);
console.log(y);
foo();
bar();

var x = 15;
var foo = function() {};
function bar() {}*/


/*function sayHello(name) {
	var text = 'Hello ' + name;
	var say = function() {
		console.log(text);
	};
	say();
}*/


/*function sayHello2(name) {
	var text = 'Hello ' + name;
	var say = function() {
		console.log(text);
	};
	return say;
}
var say2 = sayHello2('Bob');
say2();*/


function sayNumber() {
	var num = 42;
	var say = function() {
		console.log(num);
	};
	num++;
	return say;
}
var sayIt = sayNumber();
sayIt();


