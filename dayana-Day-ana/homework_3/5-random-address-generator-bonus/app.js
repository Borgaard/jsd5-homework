/*
Optional bonus work on conditionals and functions:

    Write a script that can generate random addresses
    As a first step, create arrays that contain dummy data for each of the following: street number, street name, city name, state name, and zip code
    Your script should randomly select one item from each of these arrays and then use them to construct a random address
    Each time you load or reload the page in a browser, your program should print a new randomly-generated address to the terminal. For example:
    
    34578 Dolphin Street, Wonka NY, 44506
*/

var addressObj = {
	street: ["Main", "Oak","Market","Dolores", "Castro", "Embarcadero"],
	city: ["Miami", "Atlanta", "New York", 'Oakland', 'San Francisco', 'San jose', 'Palo Alto'],
	state: ["FL", "NY", "CA"]
}
var btn = document.getElementById('gen-address');
var content = document.getElementById('contents');
var randomness;
var addy;

var getData = function(){
	
	for(key in addressObj){
		
		//Lets get a random value from the Arrays
		var randomness = addressObj[key][Math.floor(Math.random()*addressObj[key].length)];

		//Then a random Number
		var num = Math.floor(Math.random() * 99999)

		//Conditional Concatenation 
		if(key == "street"){
			randomizeAddy(num + " "+ randomness + " Street, ");
		}
		else if (key == "city"){
			randomizeAddy(randomness + ", ");
		}
		else if(key == "state"){
			randomizeAddy(randomness);
		}
	}

}
var randomizeAddy = function(str){
	
	if(!undefined){
			addy += str ;
	}
};

btn.onclick = function(){
	//reset previous Address
	addy = " "
	
	// pick apart object
	getData();

	//Display Address
	content.innerHTML = addy;
};