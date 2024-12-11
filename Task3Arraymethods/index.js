var arr = [
  17,
  2,
  3,
  44,
  5,
  6,
  7,
  8,
  96,
  "jnana",
  "sai",
  ["subba", "vignesh", "bhavya"],
];

//Write a code snippet to find the length of an array.

console.log(arr.length);

// How do you add an element to the end of an array?
arr.push("palakollu");
console.log(arr);

// How do you remove the last element from an array?
arr.pop();
console.log(arr);

// How do you add an element to the beginning of an array?
arr.unshift("palakollu");
console.log(arr);

// How can you remove the first element from an array?
arr.shift();
console.log(arr);

// How do you reverse the elements in an array?
arr.reverse();
console.log(arr);

// How can you find the index of a specific value in an array?
console.log(arr.indexOf("jnana"));

// How can you check if a certain value exists in an array?
console.log(arr.includes("jnana"));
console.log(arr.includes("jnan"));

// How can you sort the elements of an array in ascending order?
console.log(arr.sort());
//we cant sort nested array and multiple datatyped array .it returna the same list

// How can you convert an array to a string using commas as separators?
console.log(arr.join(","));

arr1 = ["west godavari", "andhra Pradesh"];
console.log(arr.concat(arr1));

var str = "prasanthi";
console.log(str.split(""));
console.log(arr.concat(str.split("")));
var sli = arr.slice(7, 11);
console.log(sli);

//Write a code snippet that adds an element to the end of an array, then removes the first element.
console.log(arr.push("kphb"));
console.log(arr);

console.log(arr.shift());

//How can you reverse an array and then join the elements into a string?
console.log(arr.reverse().join());
//Write a code that first sorts an array in ascending order, then removes the last element.
var array = [1, 28, 31, 4, 54, 6, 75, 8];
array.sort();
console.log(array);

console.log(array.pop());

//How do you add two elements at the beginning of an array, then remove the first element and find the length of the array?
arr.unshift("jnana", "sai");
console.log(arr);

//How do you combine two arrays, sort the combined array, and then remove the last element?
var array1 = [1, 7, 3, 9, 3];
var array2 = [9, 6, 28, 13, 45];
var array3 = array1.concat(array2);
array3.sort();
array3.pop();
console.log(array3);

// Question 1: Manage a Guest List
// You are managing a guest list for an event.
// Start with an array: ["Alice", "Bob", "Charlie", "David"].
// Add a new guest at the beginning of the list.
// Remove the last guest from the list.
// Check if "Bob" is still in the list after modifications.
// What does the final list look like?
var guest = ["Alice", "Bob", "Charlie", "David"];
guest.unshift("jnana");
guest.pop();
console.log(guest.includes("Bob"));
console.log(guest);

// Question 2: Generate a Sentence
// Given a string: "Learn,Practice,Improve",
// Convert the string into an array of words.
// Reverse the order of the words.
// Join the reversed array into a single string with spaces between words.
// What is the final output?
var sentence = "Learn,Practice,Improve";
console.log(sentence.split(",").reverse().join(" "));

// Question 3: Create a Playlist
// You have two arrays of songs:
// ["Song1", "Song2", "Song3"] and ["Song4", "Song5"].
// Combine these two arrays into one playlist.
// Remove the first song from the playlist.
// Add a new song, "Song6", to the end of the playlist.
// What does the final playlist look like?
var songs1 = ["Song1", "Song2", "Song3"];
var songs2 = ["Song4", "Song5"];
var songs = songs1.concat(songs2);
songs.shift();
songs.push("song6");
console.log(songs);

// Question 5: Extract Favorite Movies
// You have a list of movies:
// ["Inception", "Titanic", "Avatar", "Interstellar", "Gladiator"].
// Extract the middle three movies into a new array.
// Combine this new array with another array: ["The Matrix", "The Godfather"].
// Reverse the order of the combined list.
// What is the final list?

var movies = ["Inception", "Titanic", "Avatar", "Interstellar", "Gladiator"];
var movies1 = movies.slice(1, 4);
var movies2 = ["The Matrix", "The Godfather"];
var movies3 = movies1.concat(movies2);
movies3.reverse();
console.log(movies3);

// Question 7: String Operations on Names
// Given a string: "John,Doe,Jane,Smith",
// Split the string into an array.
// Check if the array includes "Jane".
// Reverse the array and join the names with a space.
// What is the final output?
var string = "John,Doe,Jane,Smith";
console.log(string.includes("Jane"));
console.log(string.split(",").reverse().join(" "));

// Question 8: Length-Based Manipulation
// You have an array of numbers: [1, 2, 3, 4, 5].
// Remove the first element from the array.
// Add the numbers 6 and 7 to the end.
// Calculate the final length of the array.
// What are the final array and its length?
var array = [1, 2, 3, 4, 5];
console.log(array.shift());
array.push(6, 7);
console.log(array, array.length);

// Question 9: Shopping Cart Operations
// You have a shopping cart array:
// ["Milk", "Bread", "Eggs", "Butter"].
// Check if "Eggs" are in the cart.
// Remove "Butter" from the cart.
// Add "Cheese" and "Juice" to the end of the cart.
// What does the final shopping cart look like?
var cart = ["Milk", "Bread", "Eggs", "Butter"];
cart.includes("Eggs");
delete cart[3];
cart.push("Cheese", "juice");
console.log(cart);

// Question 10: Rearrange and Combine Names
// You have two arrays of names:
// ["Alice", "Bob", "Charlie"] and ["David", "Eve"].
// Reverse the first array.
// Combine the reversed array with the second array.
// Add "Frank" to the beginning of the combined list.
// What is the final list?
var array1 = ["Alice", "Bob", "Charlie"];
var array2 = ["David", "Eve"];
array1.reverse();
array2 = array2.concat(array1);
array2.unshift("Frank");
console.log(array2);

// Question 11: Shopping Cart Operations
// You have a shopping cart:
// ["Milk", "Bread", "Eggs", "Butter"].
// Find the index of "Eggs" in the cart.
// Remove "Eggs" and replace it with "Cheese"
// Add "Juice" to the beginning of the cart.
// What does the final shopping cart look like?
var cart1 = ["Milk", "Bread", "Eggs", "Butter"];
console.log(cart1.indexOf("Eggs"));
delete cart1[2];
cart1[2] = "cheese";
console.log(cart1);
cart1.unshift("juice");
console.log(cart1);
