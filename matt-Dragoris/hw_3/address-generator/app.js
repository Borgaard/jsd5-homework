/*
Optional bonus work on conditionals and functions:

    Write a script that can generate random addresses
    As a first step, create arrays that contain dummy data for each of the following: street number, street name, city name, state name, and zip code
    Your script should randomly select one item from each of these arrays and then use them to construct a random address
    Each time you load or reload the page in a browser, your program should print a new randomly-generated address to the terminal. For example:
    
    34578 Dolphin Street, Wonka NY, 44506
*/
(function randomAddress() {
	var streetName = ['Warren', 'Bank', 'Valley', 'View', 'Highland', 'Route', 'Buttonwood', 'York', 'Willow', 'Liberty', 'Front', 'Maple', 'Riverside', 'Locust', 'Route', 'College', 'John', 'Willow', 'Adams','Laurel', 'Grant', 'Garfield', 'Franklin'];
	var streetType = ['Street', 'Road', 'Way', 'Court', 'Drive'];
	var streetNumber = Math.round(Math.random() * 10000);
	function randNum(min, max){
		return Math.round(Math.random()* (max - min) + min)
	}
	var randomStreet = streetName[randNum(0,streetName.length-1)];
	var randomType = streetType[randNum(0,streetType.length-1)]
	return streetNumber + ' ' + randomStreet + ' ' + randomType
})();