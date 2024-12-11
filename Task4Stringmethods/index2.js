// Create an object person with properties firstName, lastName, and age. Then:
// Access and print the firstName property.
// Add a new property city with the value "New York" and print the updated object.
var person = {
  firstName: "jnanasai",
  lastName: "ande",
  age: "21",
};
console.log(person.firstName);
person.city = "New York";
console.log(person);

// Create an object product with properties name, price, and inStock. Then:
// Modify the price property to a new value.
// Delete the inStock property from the object and print the updated object.
var product = {
  name: "mobile",
  price: 1200,
  inStock: "21",
};
product.price = 1500;
delete product.inStock;
console.log(product);

// 3.Create an object library with nested objects for different genres. Each genre has a list of books. Then:
// Add a new genre scienceFiction with a list of two books.
// Access and print the first book in the fantasy genre.
// Delete the mystery genre from the object.
var library = {
  Comedy: ["brahmi", "venumadhavan", "ms narayana"],
  Acting: ["NTR", "Nagarjuna", "Allu Arjun"],
  Fighting: ["Prabhas", "Bhalayya", "chiranjivi"],
};
library.scienceFiction = ["Stranger Things", "Open heimer"];
console.log(library.Comedy[0]);
delete library.Fighting;
console.log(library);

// 4.Create an object user with properties username, email, and an address object that contains city, state, and zip. Then:
// Freeze the user object using Object.freeze().
// Try to change the email property and check if the object is frozen using Object.isFrozen().
// Add a new property phone to the user object and observe the result.
var user = {
  username: "jnanasai",
  email: "jnana@gmail.com",
  address: {
    city: "palakollu",
    state: "andhra",
    zip: "534256",
  },
};
Object.freeze(user);
user.email = "jnanasai@gmail.com";
console.log(Object.isFrozen(user));
user.phone = "realme";
console.log(user);

// 5.Create an object car with properties make, model, and price. Then:
// Seal the object using Object.seal().
// Try to delete the make property and check if the object is sealed using Object.isSealed().
var car = {
  make: "hyundai",
  model: "I20",
  price: 1200000,
};
Object.seal(car);
delete car.make;
console.log(Object.isSealed(car));
