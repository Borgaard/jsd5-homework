/*
Optional bonus work on conditionals and functions:

    Write a script that can generate random addresses
    As a first step, create arrays that contain dummy data for each of the following: street number, street name, city name, state name, and zip code
    Your script should randomly select one item from each of these arrays and then use them to construct a random address
    Each time you load or reload the page in a browser, your program should print a new randomly-generated address to the terminal. For example:
    
    34578 Dolphin Street, Wonka NY, 44506
*/

(function getAddress(num) {
	var addressArray = []; //Array to be returned and static data
	var streetName = ['Warren', 'Bank', 'Valley', 'View', 'Highland', 'Route', 'Buttonwood', 'York', 'Liberty', 'Front', 'Maple',
					'Riverside', 'Locust', 'Route', 'College', 'John', 'Willow', 'Adams', 'Grant', 'Garfield', 'Franklin', 'Laurel',
					'West', 'Carriage', 'Market', 'Deerfield ', 'River', 'Cemetery' ,'Clinton', 'Surrey', 'Sherwood', 'Delaware', 
					'Madison', 'Grove', 'George', 'Ivy','9th', 'Homestead'];
	var streetType = ['Street', 'Road', 'Way', 'Court', 'Drive', 'lane', 'Alley', 'Avenue', ];
	var states = ['AL','AK','AZ','AR','CA','CO','CT','DE','DC','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MT',
				'NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','MD','MA','MI','MN','MS','MO','PA','RI','SC','SD','TN','TX',
				'UT','VT','VA','WA','WV','WI','WY'];
	
	function createRandomAddress(single) { //adds a randomized, formated address string to the array

		function randNum(min, max){	// used to select the value at that array index
			return Math.round(Math.random()* (max - min) + min); 
		}
		//randomize, combine, and push an address
		var streetNumber = Math.round(Math.random() * 10000);
		var randomStreet = streetName[randNum(0,streetName.length-1)];
		var randomType = streetType[randNum(0,streetType.length-1)];
		var randomState = states[randNum(0,states.length-1)];
		var zip = Math.round(Math.random()* (99999 - 10000) + 10000);
		var address = streetNumber + ' ' + randomStreet + ' ' + randomType + ', ' + randomState + ', ' + zip;
			
		addressArray.push(address);

	}
	
	if (num) { //if called with a parameter, return that many addresses
		for (var i = 0; i < num; i++) { 
			createRandomAddress(); 
		}
	} else createRandomAddress();

	return addressArray
})();
