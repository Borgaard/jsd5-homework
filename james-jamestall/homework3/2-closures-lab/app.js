/*
    1) Create a function that accepts a number as a parameter, adds the number to an array, and logs the array value to the console.
    2) Modify your function so it returns another function, using a closure to reference the array created by the first function.
        You should then be able to pass additional values to the returned function and have them added to the original array.
    3) Test your code by creating two different arrays using the main function, assigning each a different variable name.
        You should then be able to call each of these new functions to add values to each of the arrays independently, without affecting each other's values.
*/

function funky(num) {
	var arrayOne = [];
	function funkyOne(num) {
		
		arrayOne.push(num);

		console.log(arrayOne);
	}

	return funkyOne;
}

var mildlyFunky = funky();
var moderatelyFunky = funky();

// Sasha's Example

// function sayNumber() {
//     var num = 42;
//     var say = function() {
//         console.log(num);
//         num++;
//     };
//     return say;
// }
// var sayIt = sayNumber();
// var sayIt2 = sayNumber();