/*  1. Create variables to store your name, age, and nationality. Combine them into a sentence that introduces you. */

// Create variables to store personal information
let name = "Silvernus"; // My name
let age = 30; // My age
let nationality = "Nigerian"; // My nationality

// Combine the variables into a sentence
let introduction = `Hello, my name is ${name}, I am ${age} years old, and I am ${nationality}.`;

// Log the introduction to the console
console.log(introduction);

// create a line-break to differentiate question
console.log(
  "======================================================================="
);
/* 2. Make a variable with your favorite quote or lyric. Change the entire text to uppercase and lowercase in separate steps. */

// Create a variable with a favorite quote
let favoriteQuote = "When push comes to shove, you shove hard";

// Change the quote to uppercase
let upperCaseQuote = favoriteQuote.toUpperCase();
console.log(upperCaseQuote); // Log the uppercase version

// Change the quote to lowercase
let lowerCaseQuote = favoriteQuote.toLowerCase();
console.log(lowerCaseQuote); // Log the lowercase version

// create a line-break to differentiate question
console.log(
  "======================================================================="
);
/*
3.Take a word and rearrange it in reverse order, then log the reversed word.
*/

// Create a variable with a word
let word = "JavaScript";

// Reverse the word
let reversedWord = word.split("").reverse().join(""); // Split the word into an array, reverse it, and join it back into a string

// Log the reversed word to the console
console.log(reversedWord);

// create a line-break to differentiate question
console.log(
  "======================================================================="
);
/*
4.Store the price of 3 items in 3 different variables. Calculate the total and display it with a message.
*/

// Store the price of 3 items in different variables
let item1Price = 10; // Price of item 1
let item2Price = 15; // Price of item 2
let item3Price = 7; // Price of item 3

// Calculate the total price
let totalPrice = item1Price + item2Price + item3Price;

// Display the total price with a message
console.log(`The total price of the items is #${totalPrice}.`); // Output

// create a line-break to differentiate question
console.log(
  "======================================================================="
);
/*
5.Find the average of 5 test scores stored in variables. Display the average with a message.
  */

// Store 5 test scores in variables
let testScore1 = 85;
let testScore2 = 90;
let testScore3 = 78;
let testScore4 = 88;
let testScore5 = 92;

// Calculate the average score
let averageScore =
  (testScore1 + testScore2 + testScore3 + testScore4 + testScore5) / 5;

// Display the average score with a message
console.log(`The average score is ${averageScore}.`);

// create a line-break to differentiate question
console.log(
  "======================================================================="
);
/*
6.Create an array of your 5 favorite foods. Display the first and last items in the array.
    */

// Create an array of favorite foods
let favoriteFoods = ["Fish", "Beef", "Chocolate", "Chicken", "Pasta"];

// Display the first and last items in the array
console.log(
  `My first favorite food is ${favoriteFoods[0]} and my last favorite food is ${
    favoriteFoods[favoriteFoods.length - 1]
  }.`
);

// create a line-break to differentiate question
console.log(
  "======================================================================="
);
/*
  7.Add two more food items to the list: one at the beginning and one at the end. Display the new list.
      */

favoriteFoods.push("Noodles"); //Add to the end of the Array
favoriteFoods.unshift("Rice"); //Add to the beginning of the Array
console.log(favoriteFoods);

// create a line-break to differentiate question
console.log(
  "======================================================================="
);
/*
  8.Create three arrays:

        a.jssOne

        b.jssTwo

        c.jssThree
      */

// Create three arrays of student names
let jssOne = [
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "Eva",
  "Frank",
  "Grace",
  "Hannah",
  "Ian",
  "Jack",
];
let jssTwo = [
  "Kathy",
  "Liam",
  "Mia",
  "Noah",
  "Olivia",
  "Paul",
  "Quinn",
  "Rita",
  "Sam",
  "Tina",
];
let jssThree = [
  "Uma",
  "Victor",
  "Wendy",
  "Xander",
  "Yara",
  "Zane",
  "Ava",
  "Ben",
  "Cleo",
  "Derek",
];

// Log the arrays to the console
console.log("JSS One Students:", jssOne);
console.log("JSS Two Students:", jssTwo);
console.log("JSS Three Students:", jssThree);
