/////////////////////////////////////////////////////////////

///////////////////////// Challenge /////////////////////////

/////////////////////////////////////////////////////////////

// Write your answers inside this file, at the places where it's indicated by the comments.


// 1. Suppose that we wanted to create a browser-based calendar program for keeping track of things. In comments, list at least three reasonable abstractions that you might use to build this program; for each abstraction, list out at least two properties and behaviors that it would make sense for that abstraction to have. Below is an example - please write your answer in the same format.
  // 'Car'
  // Description: Our app manages car sales.
  // Every 'car' has
  // - a make
  // - a model
  // - a year
  // Every 'car' can
  // - drive
  // - brake
  // - park

// Answer Starts Here
// 'Events'
// Description: Our app helps people track appointments
// Every 'Event' has
// - a date
// - a start time
// - an end time
// Every 'Event' can
// - notify a 'User'
// - block a time window
// - hold a 'Room' reservation

// 'User'
// Every 'User' has
// - a name
// - a user id
// - a password
// - a role
// Every 'User' can
// - create an 'Event'
// - delete an 'Event'
// - invite other 'User's to an 'Event'
// - add a 'Room' to an 'Event'

// 'Room'
// Every 'Room' has
// - a name
// - a location
// - a size (measured by how many people fit)
// Every 'Room' can
// - Reject an invite if it is previously booked
// - Restrict users from booking based on role

// Answer Ends Here


// 2. Create an Object literal that lines up with the following description. Store it in the variable 'pet_owner', below. Be sure to give it reasonable values for each of its properties.

  // 'Owner'
  // Description: We are making an app for a veterinary clinic - it manages pets' vaccinations.
  // Every 'owner' has:
  // - a name
  // - an address



// Answer Starts Here
var pet_owner = {
  name: "Caitlin",
  address: "421 South St",
}
// Answer Ends Here


// 3. Create an Object literal that lines up with the following description. Store it in the variable `some_pet`, below.

  // Pet
  // Description: We are making an app for a veterinary clinic - it manages pets' vaccinations.
  // Every 'pet' has:
  // - a name
  // - a species
  // - a breed
  // - a noise that it can make (e.g. 'bark', 'meow', etc.)
  // Every pet can:
  // - make noise (each pet makes its own unique noise, as specified by `noise`.



// Answer Starts Here
var some_pet = {
  name: "Gertrude",
  species: "Rotweiler",
  breed: "Dog",
  noise: function() {
    console.log("Bark!")
  }
}
// Answer Ends Here

/////////////////////////////////////////////////////////////

// You're done! 

/////////////////////////////////////////////////////////////
