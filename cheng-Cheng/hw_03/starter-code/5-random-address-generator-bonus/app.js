/*
Optional bonus work on conditionals and functions:

    Write a script that can generate random addresses
    As a first step, create arrays that contain dummy data for each of the following: street number, street name, city name, state name, and zip code
    Your script should randomly select one item from each of these arrays and then use them to construct a random address
    Each time you load or reload the page in a browser, your program should print a new randomly-generated address to the terminal. For example:

    34578 Dolphin Street, Wonka NY, 44506
*/

var streetNumber = [1234, 2345, 3456, 4567, 5678, 6789]
var streetName = ["Elm", "Oak", "Maple", "Pine", "Sandlewood", "Cedar"]
var streetType = ["Lane", "Street", "Grove", "Loop", "Court", "Avenue"]
var city = ["Kappatown", "Pogchampville", "Notlikethisberg", "PJSaltland", "New Biblethump", "Los Minglee"]
var state = ["CA", "NY", "OR", "WA", "CO", "IL"]
var zip = ["31337", "91210", "94111", "14343", "42134", "97104"]

//console.log(streetNumber);
//console.log(streetName);
//console.log(city);
//console.log(state);
//console.log(zip);

var randomSNu = Math.floor(Math.random() * 6)
var randomSNa = Math.floor(Math.random() * 6)
var randomSTy = Math.floor(Math.random() * 6)
var randomCi = Math.floor(Math.random() * 6)
var randomSt = Math.floor(Math.random() * 6)
var randomZi = Math.floor(Math.random() * 6)

//console.log(randomSNu);
//console.log(randomSNa);
//console.log(randomSTy);
//console.log(randomCi);
//console.log(randomSt);
//console.log(randomZi);

console.log(streetNumber[randomSNu]+ " " + streetName[randomSNa]
+ " " + streetType[randomSTy] + ", " + city[randomCi] + " "
+ state[randomSt] + ", " + zip[randomZi]
)
document.write(streetNumber[randomSNu]+ " " + streetName[randomSNa]
+ " " + streetType[randomSTy] + ", " + city[randomCi] + " "
+ state[randomSt] + ", " + zip[randomZi])
