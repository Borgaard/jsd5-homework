/* var a = 1;

function getScore() {
	var b = 2;
	var c = 3;

	function add() {
		return a + b + c;
	}

	return add();
}

getScore();

*/

function varTest() {
	var x = 1;
	if(true) {
		var x = 2;
		console.log(x);
	}
	console.log(x);
}

varTest();

function varTest() {
	let x = 1;
	if(true) {
		let x = 2;
		console.log(x);
	}
	console.log(x);
}

varTest();

(function fizzBuzz() {
    for (var i = 1; i <= 100; i++) {                             
        var output = '';                                                      

        if (i % 3 === 0) output = 'Fizz';                 
        if (i % 5 === 0) output += 'Buzz';               
       console.log(output || i);                                   
    }
})();

console.log(x);
console.log(y);
foo();
bar();

var x = 15;
var foo = function() {};
function bar() {};

