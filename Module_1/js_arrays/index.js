

// Literal Array
//     index     0, 1,  2,  3
const numbers = [2, 5, 8, 11];

console.log(numbers);
console.log(numbers.length);
// Access the index
console.log(number[0]);

// Example
const movies = ['Logan', 'Rush Hour', 'Scarface'];
console.log(movies);

const favMovie = movies[1];
console.log(favMovie);

// Updating a value inside of an array
movies[2] = "Transformers"; // Takes Scarface place since they share same index
movies[3] = "Mr. Robot" // add a new movie using square brackets

// add elements to end of the array
movies.push('Trading Places', 'Antitrust');

// add elements to start of array
movies.unshift("Star Wars"); // All elements move over an index and Star Wars goes to index 0

// remove an element from the end of the array
const removedMovie = movies.pop()
console.log(movies);

//array.splice(start, deleteCount, newItem1, newItem2...)
movies.splice(3, 2, "Four Brother", "Black Hawk Down")
movies.splice(0, 3)

console.log(movies);

function sayHello() {

}

movies.forEach( function(movie, idx) {
    // console.log(idx, movie);
} )


// // for of loop
// for (let movie of movies) {
//     //console.log(movie)
// }

// For Loop
for (let i = 0; i < movies.length; i++) {
    console.log(movies[i]);
}

const lastTwoMovies = movies.slice(0, 2)

console.log(movies);
console.log(lastTwoMovies);

// Spread Operator
const moviesCopy = [...movies, "Contact"]

moviesCopy.push("Up");

console.log(movies);
console.log(moviesCopy);

const movieStr = moviesCopy.join(", ")