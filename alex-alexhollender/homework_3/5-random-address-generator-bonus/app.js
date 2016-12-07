/*
Optional bonus work on conditionals and functions:

    Write a script that can generate random addresses
    As a first step, create arrays that contain dummy data for each of the following: street number, street name, city name, state name, and zip code
    Your script should randomly select one item from each of these arrays and then use them to construct a random address
    Each time you load or reload the page in a browser, your program should print a new randomly-generated address to the terminal. For example:
    
    34578 Dolphin Street, Wonka NY, 44506
*/

//This was my first attempt

/*
var streetName = ["Birch", "Butternut", "Cherry", "Chestnut", "Aspen", "Gray Birch", "Great Elm", "Fir", "Maple", "Oak", "Pine", "Spruce", "Walnut", "Black Willow", "Sycamore", "White Spruce", "Red Spruce", 
"Yellowwood", "Poplar", "Cottonwood", "Hickory"];
var streetType = ["Lane", "Road", "Street", "Way", "Terrace", "Court", "Avenue"];
var cityName = ["Los Angeles", "San Diego", "San Jose", "San Francisco", "Fresno", "Sacramento", "Long Beach", "Oakland", "Baskersfield", "Anaheim", "Santa Ana", "Riverside", "Stockton", "Irvine", "Fremont", "Berkley", "Marin", "Stinson Beach", "Modesto"];
var state = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "LA", "MD", "ME", "MN", "NV", "NH", "NY", "VT", "OR", "PA", "VA", "WA"];

function randomAddress() {
	var ranStreetNumber = Math.ceil(Math.random() * 1000)

	var streetNameI = Math.ceil(Math.random() * (streetName.length - 1));
	var ranStreetName = streetName[streetNameI];

	var streetTypeI = Math.ceil(Math.random() * (streetType.length - 1));
	var ranStreetType = streetType[streetTypeI];

	var cityNameI = Math.ceil(Math.random() * (cityName.length - 1));
	var ranCityName = cityName[cityNameI];

	var stateI = Math.ceil(Math.random() * (state.length - 1));
	var ranState = state[stateI];

	var ranZip = '';
	var i = 0;
	while(i <= 4) {
		ranZip += (Math.floor(Math.random() * 10));
		i++;
	};

	console.log(ranStreetNumber + " " + ranStreetName + " " + ranStreetType + ", " + ranCityName + " " + ranState + ", " + ranZip)
}

randomAddress();
*/

//For my second try my goal was to basically DRY out my code as much as possible. I also ended up getting some city name array from github. 

var addressData = {
	streetName: ["Birch", "Butternut", "Cherry", "Chestnut", "Aspen", "Gray Birch", "Great Elm", "Fir", "Maple", "Oak", "Pine", "Spruce", "Walnut", "Black Willow", "Sycamore", "White Spruce", "Red Spruce", 
"Yellowwood", "Poplar", "Cottonwood", "Hickory"],
	streetType: ["Lane", "Road", "Street", "Way", "Terrace", "Court", "Avenue"],
	city: ["Aberdeen", "Abilene", "Akron", "Albany", "Albuquerque", "Alexandria", "Allentown", "Amarillo", "Anaheim", "Anchorage", "Ann Arbor", "Antioch", "Apple Valley", "Appleton", "Arlington", "Arvada", "Asheville", "Athens", "Atlanta", "Atlantic City", "Augusta", "Aurora", "Austin", "Bakersfield", "Baltimore", "Barnstable", "Baton Rouge", "Beaumont", "Bel Air", "Bellevue", "Berkeley", "Bethlehem", "Billings", "Birmingham", "Bloomington", "Boise", "Boise City", "Bonita Springs", "Boston", "Boulder", "Bradenton", "Bremerton", "Bridgeport", "Brighton", "Brownsville", "Bryan", "Buffalo", "Burbank", "Burlington", "Cambridge", "Canton", "Cape Coral", "Carrollton", "Cary", "Cathedral City", "Cedar Rapids", "Champaign", "Chandler", "Charleston", "Charlotte", "Chattanooga", "Chesapeake", "Chicago", "Chula Vista", "Cincinnati", "Clarke County", "Clarksville", "Clearwater", "Cleveland", "College Station", "Colorado Springs", "Columbia", "Columbus", "Concord", "Coral Springs", "Corona", "Corpus Christi", "Costa Mesa", "Dallas", "Daly City", "Danbury", "Davenport", "Davidson County", "Dayton", "Daytona Beach", "Deltona", "Denton", "Denver", "Des Moines", "Detroit", "Downey", "Duluth", "Durham", "El Monte", "El Paso", "Elizabeth", "Elk Grove", "Elkhart", "Erie", "Escondido", "Eugene", "Evansville", "Fairfield", "Fargo", "Fayetteville", "Fitchburg", "Flint", "Fontana", "Fort Collins", "Fort Lauderdale", "Fort Smith", "Fort Walton Beach", "Fort Wayne", "Fort Worth", "Frederick", "Fremont", "Fresno", "Fullerton", "Gainesville", "Garden Grove", "Garland", "Gastonia", "Gilbert", "Glendale", "Grand Prairie", "Grand Rapids", "Grayslake", "Green Bay", "GreenBay", "Greensboro", "Greenville", "Gulfport-Biloxi", "Hagerstown", "Hampton", "Harlingen", "Harrisburg", "Hartford", "Havre de Grace", "Hayward", "Hemet", "Henderson", "Hesperia", "Hialeah", "Hickory", "High Point", "Hollywood", "Honolulu", "Houma", "Houston", "Howell", "Huntington", "Huntington Beach", "Huntsville", "Independence", "Indianapolis", "Inglewood", "Irvine", "Irving", "Jackson", "Jacksonville", "Jefferson", "Jersey City", "Johnson City", "Joliet", "Kailua", "Kalamazoo", "Kaneohe", "Kansas City", "Kennewick", "Kenosha", "Killeen", "Kissimmee", "Knoxville", "Lacey", "Lafayette", "Lake Charles", "Lakeland", "Lakewood", "Lancaster", "Lansing", "Laredo", "Las Cruces", "Las Vegas", "Layton", "Leominster", "Lewisville", "Lexington", "Lincoln", "Little Rock", "Long Beach", "Lorain", "Los Angeles", "Louisville", "Lowell", "Lubbock", "Macon", "Madison", "Manchester", "Marina", "Marysville", "McAllen", "McHenry", "Medford", "Melbourne", "Memphis", "Merced", "Mesa", "Mesquite", "Miami", "Milwaukee", "Minneapolis", "Miramar", "Mission Viejo", "Mobile", "Modesto", "Monroe", "Monterey", "Montgomery", "Moreno Valley", "Murfreesboro", "Murrieta", "Muskegon", "Myrtle Beach", "Naperville", "Naples", "Nashua", "Nashville", "New Bedford", "New Haven", "New London", "New Orleans", "New York", "New York City", "Newark", "Newburgh", "Newport News", "Norfolk", "Normal", "Norman", "North Charleston", "North Las Vegas", "North Port", "Norwalk", "Norwich", "Oakland", "Ocala", "Oceanside", "Odessa", "Ogden", "Oklahoma City", "Olathe", "Olympia", "Omaha", "Ontario", "Orange", "Orem", "Orlando", "Overland Park", "Oxnard", "Palm Bay", "Palm Springs", "Palmdale", "Panama City", "Pasadena", "Paterson", "Pembroke Pines", "Pensacola", "Peoria", "Philadelphia", "Phoenix", "Pittsburgh", "Plano", "Pomona", "Pompano Beach", "Port Arthur", "Port Orange", "Port Saint Lucie", "Port St. Lucie", "Portland", "Portsmouth", "Poughkeepsie", "Providence", "Provo", "Pueblo", "Punta Gorda", "Racine", "Raleigh", "Rancho Cucamonga", "Reading", "Redding", "Reno", "Richland", "Richmond", "Richmond County", "Riverside", "Roanoke", "Rochester", "Rockford", "Roseville", "Round Lake Beach", "Sacramento", "Saginaw", "Saint Louis", "Saint Paul", "Saint Petersburg", "Salem", "Salinas", "Salt Lake City", "San Antonio", "San Bernardino", "San Buenaventura", "San Diego", "San Francisco", "San Jose", "Santa Ana", "Santa Barbara", "Santa Clara", "Santa Clarita", "Santa Cruz", "Santa Maria", "Santa Rosa", "Sarasota", "Savannah", "Scottsdale", "Scranton", "Seaside", "Seattle", "Sebastian", "Shreveport", "Simi Valley", "Sioux City", "Sioux Falls", "South Bend", "South Lyon", "Spartanburg", "Spokane", "Springdale", "Springfield", "St. Louis", "St. Paul", "St. Petersburg", "Stamford", "Sterling Heights", "Stockton", "Sunnyvale", "Syracuse", "Tacoma", "Tallahassee", "Tampa", "Temecula", "Tempe", "Thornton", "Thousand Oaks", "Toledo", "Topeka", "Torrance", "Trenton", "Tucson", "Tulsa", "Tuscaloosa", "Tyler", "Utica", "Vallejo", "Vancouver", "Vero Beach", "Victorville", "Virginia Beach", "Visalia", "Waco", "Warren", "Washington", "Waterbury", "Waterloo", "West Covina", "West Valley City", "Westminster", "Wichita", "Wilmington", "Winston", "Winter Haven", "Worcester", "Yakima", "Yonkers", "York", "Youngstown"],
	state: [ "AL", "AK", "AS", "AZ", "AR", "CA", "CO", "CT", "DE", "DC", "FM", "FL", "GA", "GU", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MH", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "MP", "OH", "OK", "OR", "PW", "PA", "PR", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VI", "VA", "WA", "WV", "WI", "WY" ]
}

function randomOne(x) {
	return x[(Math.ceil(Math.random() * ((x).length - 1)))];
}

function gimmeAddress() {
	var ranStreetNumber = Math.ceil( (Math.random() * 1000) / (Math.ceil(Math.random() * 3)) );
	var ranZip = '';
		var i = 0;
		while(i <= 4) {
			ranZip += (Math.floor(Math.random() * 10));
			i++;
		};

	return (ranStreetNumber + " " + randomOne(addressData.streetName) + " " + randomOne(addressData.streetType) + ", " + randomOne(addressData.city) + " " + randomOne(addressData.state) + ", " + ranZip);
}

gimmeAddress();

/*
Additional things I'd like to do:
-Nested objects so that states can have their own list of cities
-Smaller functions so that I don't repeat the math for getting a random number
-Import data from github or just put them in separate files
-Build a frontend
*/ 




