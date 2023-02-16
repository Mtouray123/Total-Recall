// Example of What your JS File in VS Code should look like


/*
	Remember!!! Once you’ve completed a problem,
	COMMENT OUT YOUR WORK before moving on to the next one.
	This makes it easier to read and debug the current 
	Solution you are working on.
*/


// I. Variables & Data Types
// A. Q + A
// B. Strings
// C. Booleans
// D. The Farm
// E. Driver's Ed
//_____________________________________________________________






// II. Loops
// A. The Basics
// B. Get even
// C. Give me Five
// D. Savings account
//_____________________________________________________________








// III. Arrays & Control Flow
// A. Talk about it:
// B. Easy Does It
// C. Accessing elements
// D. Change values
// E. Mix It Up
// F. Biggie Smalls
// G. Monkey in the Middle
// H. What's in Your Closet?
//_____________________________________________________________








// IV. Functions
// A.
// B.
// C.
// D.
// E.
// F.
// G.
// H.
//_____________________________________________________________






// V. Objects
// A.
// B.
// C.
// D.
// E.
// F.
// G.
//_____________________________________________________________


// Extra


// Section I (Variables & Datatypes)

// Part A. Q + A
1. // The (=) operator is used to assign a value to a variable
2. 
3. // After a value is assigned to one variable, assign the value of that variable to another using the assignment operator (=)
4. // Declare is specifying a variable but not giving it a value. Assign is giving a var a value. Declare is combination of both
5. // Pseudocode is a detailed step in the process of developing a program. It allows designers and programmers to express the design in great deatil and provides programmers a detailed template for the following steps of writing code.
6. // 50-55% should be spent thinking about solving a problem and 45-50% typing/editing the code.



// Part B. Strings
// let firstVariable = "Hello World";
// firstVariable = 26;
// let secondVariable = firstVariable;
// secondVariable = "Software";

// console.log(firstVariable);
// console.log(secondVariable)
// // firstVariable = 26
 
// let yourName = "Mahamadou"
// console.log(`Hello, my name is ${yourName}`);


// Part C. Booleans

// const a = 4;
// const b = 53;
// const c = 57;
// const d = 16;
// const e = 'Kevin';

// console.log(a < b);
// console.log(c > d);
// console.log('Name'=== 'Name');
// // For the next two, use only && or ||
// console.log(true || false);
// console.log(false && false && false && false && false || true);
// console.log(false === false);
// console.log(e === 'Kevin');
// console.log(a < b && c); // note: a < b < c is Not Correct 
// console.log(a*a === d);
// console.log(48 == "48");


// Part D. The farm
// let animal = "cow";
// if (animal === "cow") {
// 	console.log("mooooo");
// } else {
// 	console.log("Hey! You're not a cow.");
// }

// console.log(animal);


// Part E. Driver's Ed
// let personAge = prompt("personAge");
// if (personAge >= "16") {
// 	console.log("Here are the keys!");
// } else {
// 	console.log("Sorry, you're too young");
// }

// console.log(personAge);





// SECTION II (LOOPS)

// Part A. The basics
// for (let i = 0; i <= 10; i++) {
// 	console.log(i);
// }

// for (let i = 10; i >= 400; i++) {
// 	console.log(i);
// }

// for (let i = 12; i <= 4000; i = i + 3) {
// 	console.log(i);
// }



// Part B. Get Even
// for (let i = 1; i <= 100; i++) {
// 	if(i % 2 === 0);
// console.log(`${i} is an even number`);
// } else {
// 	console.log(i);
// }


// Part C. Give me Five
// for (let i = 1; i <= 100; i++) {
// 	if(i % 5 === 0 && i % 3 === 0) {
// 		console.log("I found a " + i + ". High five!");
// 		console.log("I found a " + i + ". Three is a crowd");
// 	} else if (i % 5 === 0) {
// 		console.log("I found a " + i + ". High five!");
// 	} else if (i % 3 === 0) {
// 		console.log("I found a " + i + ". Three is a crowd");
// 	}
// };


// Part D. Savings account 
// let bank_account = 0;

// for (let i = 0; i <= 10; i++) {
// 	bank_account += i;
// } console.log(bank_account);

// bank_account = 0;

// for (let j = 0; j <= 100; j++) {
// 	bank_account += j*2;
// } console.log(bank_account);




// SECTION 3 (ARRAYS)

// Part A. Talk About it 
// The things inside of array are elements
// No arrays do not guarantee those elements will be in order
// Egg cartons, chess/ checkerboards, muffin tray, etc all model arrays


// Part B. Easy Does It
// const quotes = ["To be or not to be", "Fake it to You Make It.", "Survival of the Fittest"];
// console.log(quotes);

// // Part C. Accessing elements
// const randomThings = [1, 10, "Hello", true];
// console.log(randomThings[0]); // Access 1st element in the array

// randomThings[2] = "World"; // Change "Hello" to "World"
// console.log(randomThings);


// // Part D. Change Values
// const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
// console.log(ourClass[2]); // To access 3rd element 
// ourClass[4] = "Octocat"; // Change value of Github to Octocat
// ourClass.push("Cloud City"); // Add new element to end of array
// console.log(ourClass);

// // Part E. Mix it Up
// const myArray = [5, 10, 500, 20];
// myArray.push("Aegon");
// myArray.shift(); // Remove element from beginning of array
// myArray.unshift("Bob Marley"); // Add string to beginning of array
// myArray.pop(); // Remove element from end of Array
// Array.prototype.reverse();

// console.log(myArray);




// Part F. Biggie Smalls
// let inTeger = ;
// if (inTeger < 100) {
// 	console.log("little number");
// } else (inTeger >= 100) {
// 	console.log("big number");
// } 
// console.log(inTeger);


// Part G. Monkey in the Middle 
// let monkeyNumber = prompt("Enet a number");
// if (monkeyNumber < 5) {
// 	console.log("little number");
// } else if (monkeyNumber > 10) {
// 	console.log("big number");
// } else {
// 	console.log("number");
// }



// Part H. What's in Your Closet? 
// Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.

// const kristynsCloset = [
//   "left shoe",
//   "cowboy boots",
//   "right sock",
//   "GA hoodie",
//   "green pants",
//   "yellow knit hat",
//   "marshmallow peeps"
// ]; 
// console.log ("Kristyn is rocking that " + kristynsCloset[2] + " today!");
// kristynsCloset.splice(6, 0, "raybans"); 
// kristynsCloset[5] = "stained knit hat";
// console.log(kristynsCloset);


// Thom's closet is more complicated. Check out this nested data structure!!

// const thomsCloset = [
//   [
//     // These are Thom's shirts
//     "grey button-up",
//     "dark grey button-up",
//     "light blue button-up",
//     "blue button-up",
//   ],[
//     // These are Thom's pants
//     "grey jeans",
//     "jeans",
//     "PJs"
//   ],[
//     // Thom's accessories
//     "wool mittens",
//     "wool scarf",
//     "raybans"
//   ]
// ];
// console.log(thomsCloset[0][0]);
// console.log(thomsCloset[1][1]);
// console.log(thomsCloset[2][2]);

// console.log("Thom is looking fierce in a " + thomsCloset[0][0] + ", " + thomsCloset[1][1] + " and " + thomsCloset[2][2] + "!");
// thomsCloset[1][2] = "Footie Pajamas";



// SECTION 4 (FUNCTIONS)

// Part A. PrintGreeting

// const printGreeting = (name) => {
// 	return "Hello there, " + name + "!";
// };
// console.log(printGreeting("Slimer"));

// Part B. PrintCool

// const printCool = (argument) => {
// 	return argument + " is cool";
// };
// console.log(printCool("Captain Reynolds"));


// Part C. CalculateCube

// const calculateCube = (singleNumber) => {
// 	return singleNumber * singleNumber * singleNumber;
// }
// console.log(calculateCube(5));

// Part D. isVowel 

// const isAVowel = (character) => {
// 	if (character === "a" || character === "A" || character === "e" || character === "E" || character === "i" || character === "I" || character === "o" || character === "O" || character === "u" || character === "U"){
// 		return true;
// 	} else {
// 		return false;
// 	}
// };
// console.log(isAVowel("a"));


// Part E. getMultipleLengths

// const getMultipleLengths = (strArr) => {
// 	const multipleLengthArray = [];
// 	for (f = 0; f < strArr.length; f++){
// 		multipleLengthArray.push(strArr[f].length);
// 	};
// 	return multipleLengthArray;
// };
// console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));


// Part G. maxofThree

// const maxOfThree = (number1, number2, number3) => {
// 	const threeNumArray = [number1, number2, number3];
// 	threeNumArray.sort(function(a, b){return a - b});
// 	return threeNumArray[2];
// };
// console.log(maxOfThree(6, 9, 1));


// Part H. printLongestWord

// const printLongestWord = (strArray) => {
// 	let longestWord = '';
// 	for (let g = 0; g < strArray.length; g++){
// 		if (strArray[g].length > longestWord.length){
// 			longestWord = strArray[g];
// 		}
// 	};
// 	return longestWord;
// };
// console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));




// SECTION 4 (OBJECTS)

// Part A. Make a user object

// const user = {
// 	name: "Mahamadou",
// 	email: "mahamadou12",
// 	age: 26,
// 	purchased: [],
// }; 

// // Part B. Update the user
// user.email = "mtouray12"
// user.age++;
// console.log(user);

// // Part C. Adding keys and values 
// user.location = "East Orange"

// // Part D. Shopaholic!

// user.purchased.push("carbohydrates");
// user.purchased.push("peace of mind");
// user.purchased.push("Merino jodhpurs");

// console.log(user.purchased[2]);


// Part E.

// user.friend = {
// 	name: "Grace Hopper",
// 	age: 85,
// 	location: "East Orange",
// 	purchased: [], 
// }; 
// console.log(user.friend.name);
// console.log(user.friend.location);
// user.friend.age -= 30;
// console.log(user.friend.age);
// user.friend.purchased.push("The One Ring");
// user.friend.purchased.push("A latte");
// // console.log(user.friend.purchased);
// console.log(user.friend.purchased[1]);


// // Part F. Loops

// for (let i = 0; i < user.purchased.length; i++) {
// 	console.log(user.purchased[i]);
// }

// for (let i = 0; i < user.friend.purchased.length; i++) {
// 	console.log(user.friend.purchased[i]);
// }




// Part G. Functions can operate on objects

// function updateUser() {
// 	user.age++,
// 	user.name.toupperCase();
// }
// function oldAndLoud(person) {
// 	person.age++;
// 	person.name = person.name.toupperCase();
// }
// oldAndLoud(user);
// console.log(user);




// SECTION 5 (CAT COMBINATOR);

// Part 1: Mama Cat

const cat1 = {
	name: "Cat",
	breed: "Tiger",
	age: 50,
};

console.log(cat1.name);
console.log(cat1.breed);

const cat2 = {
	name: "Cat",
	breed: "Lion",
	age: 50,
}

function combineCats(mama, papa) {
	
}
