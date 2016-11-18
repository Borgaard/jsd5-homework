/*
Optional bonus work on conditionals and functions:

    Write a script that can generate random addresses
    As a first step, create arrays that contain dummy data for each of the following: street number, street name, city name, state name, and zip code
    Your script should randomly select one item from each of these arrays and then use them to construct a random address
    Each time you load or reload the page in a browser, your program should print a new randomly-generated address to the terminal. For example:
    
    34578 Dolphin Street, Wonka NY, 44506
*/

var strNum = [4801 , 4858 , 21 , 77, 666 , 1];
var strName = ["California" , "Noriega" , "Washington", "Ortega", "Lambard" , "Union",];
var cityName = ["San Francisco" , "Boston" , "Philadelphia" , "New York City", "Little Rock", "Seattle"];
var stateName = ["California" , "New York", "Washington", "Arkansas" ,"Hawaii" ,"Florida"];
var zipCode = [94118, 24667,85009,11225,66321,70998];


 var randomNumIndex = Math.ceil(Math.random() * 5 );

 console.log(strNum[randomNumIndex] + " " + strName[randomNumIndex] + " "  + "street," + " " + cityName[randomNumIndex] + "," + " " +  stateName[randomNumIndex] + "," + " " + zipCode[randomNumIndex] );