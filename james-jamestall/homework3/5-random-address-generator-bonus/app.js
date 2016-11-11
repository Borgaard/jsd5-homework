/*
Optional bonus work on conditionals and functions:

    Write a script that can generate random addresses
    As a first step, create arrays that contain dummy data for each of the following: street number, street name, city name, state name, and zip code
    Your script should randomly select one item from each of these arrays and then use them to construct a random address
    Each time you load or reload the page in a browser, your program should print a new randomly-generated address to the terminal. For example:
    
    34578 Dolphin Street, Wonka NY, 44506
*/

// Psuedocode
// Create empty arrays for "street number", "state name", "zip code"
// Build a script to generate random street numbers and zip code, and figure out how to convert numbers to letters to randomly generate state name
// Create arrays with 10 entries of dummy data for "street name" and "city name"
// Compile a new random address using a function
// figure out how to call the function on page load
// Print a random address


// Program


// Create empty arrays for "street number", "state name", "zip code"

var streetNumber = [];

var stateName = [];

var zipCode = [];

// Build a script to generate random street numbers and zip code, and figure out how to convert numbers to letters to randomly generate state name
function newStreetNumber() {
	return Math.ceil(Math.random() * 20000);
}

for (var i = 0; i <= 10; i++) {
	// Create an address number
	streetNumber[i] = newStreetNumber();
	// Make up a silly State Name
	stateName[i] = (String.fromCharCode((Math.floor(Math.random() * 26)) + 65))+(String.fromCharCode((Math.floor(Math.random() * 26)) + 65));
	// Create a zip code (little tricky because you need 5 digits, yet 00032 is valid)
	zipCode[i] = ((Math.floor(Math.random() * 9)).toString() + (Math.floor(Math.random() * 9)).toString() + (Math.floor(Math.random() * 9)).toString() + (Math.floor(Math.random() * 9)).toString() + (Math.floor(Math.random() * 9)).toString());
}

// Create arrays with 10 entries of dummy data for "street name" and "city name"

var streetName = ["Second Street", "Third Street", "First Street", "Fourth Street", "Park Street", "Fifth Street", "Main Street", "Sixth Street", "Oak Street", "Seventh Street"];

var cityName = ["New York", "Los Angeles", "Chicago", "Houston", "Philadelphia", "Phoenix", "San Antonio", "San Diego", "Dallas", "San Jose"];

// Compile a new random address using a function

var randomNumber = function() {
	i = Math.floor(Math.random()* 10);
	return i;
}

console.log(randomNumber());
console.log(randomNumber());

var generateAddress = function()  {
	console.log(streetNumber[randomNumber()] + " " + streetName[randomNumber()] + ", " + cityName[randomNumber()] + " " + stateName[randomNumber()] + ", " + zipCode[randomNumber()]);
}
// figure out how to call the function on page load
generateAddress();
// Print a random address