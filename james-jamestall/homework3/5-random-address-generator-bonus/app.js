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

var streetNumber, stateName, zipCode = [];

// Build a script to generate random street numbers and zip code, and figure out how to convert numbers to letters to randomly generate state name

for (var i = 0; i <= 5; i++) {
	streetNumber[i] = Math.ceil(Math.random() * 20000);
	console.log(streetNumber[i]);
}

// Create arrays with 10 entries of dummy data for "street name" and "city name"
// Compile a new random address using a function
// figure out how to call the function on page load
// Print a random address