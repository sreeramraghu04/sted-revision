//! 1. Using map()
// Given the following array:
const numbers = [1, 2, 3, 4, 5];
// Task:
//* Create a new array where each number is doubled.

const doubledNumbers = numbers.map((num) => num * 2);

// Output the result
console.log("Original array:", numbers);
console.log("Doubled array:", doubledNumbers);

//! 2. Using filter()
const ages = [12, 18, 25, 10, 30, 16];
// Task:
//* Create a new array containing only ages 18 and above.

const aboveEighteen = ages.filter((ages) => ages >= 18);

// Output the result
console.log("Original array:", ages);
console.log("Above Eighteen array:", aboveEighteen);

//! 3. Using reduce()
const prices = [100, 200, 300, 400];
// Task:
//* Find the total sum of all prices.

const totalPrices = prices.reduce(
  (accumulator, currentvalue) => accumulator + currentvalue,
  0,
);

// Output the result
console.log("Original array:", prices);
console.log("Total Priced array:", totalPrices);

//! 4. Using find()
const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Jack" },
];
// Task:
//* Find the user with id: 2.

const findedUser = users.find((id) => (id = 2));

// Output the result
console.log("Original array:", users);
console.log("Finded User array:", findedUser);

//! 5. Using some() and every()
const scores = [80, 90, 70, 60, 50];
// Tasks:
//* Check if at least one score is below 60.
//* Check if all scores are above 40

//? using some()

const haveScoreBelowSixty = scores.some((scores) => scores < 60);

console.log("Original array:", scores);
console.log("Have Score Below Sixty array:", haveScoreBelowSixty);

//? using every()

const haveScoresAboveForty = scores.every((scores) => scores >= 40);

console.log("Original array:", scores);
console.log("Have Score Above Forty array:", haveScoresAboveForty);

//! 6. Using includes()
const fruits = ["apple", "banana", "mango", "orange"];
// Task:
//* Check if "mango" exists in the array.

console.log("Original array:", fruits);
console.log("Have Mango Included array:", fruits.includes("mango"));

//! 7. Using sort()
const nums = [10, 5, 40, 25, 100];
// Task:
//* Sort the numbers in ascending order.

console.log("Original array:", nums);
console.log(
  "Ascending Order Sorted array:",
  nums.sort((a, b) => a - b),
);

console.log("Original array:", fruits);
console.log("Have Mango Included array:", fruits.includes("mango"));

//! 8. Combination Problem (filter() + map())
const products = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 700 },
  { name: "Monitor", price: 300 },
];
// Task:
//* Get the names of products that cost more than 600

//? using filter()

const moreThanSixHundred = products
  .filter((products) => products.price >= 600)
  .map((products) => products.name);

console.log("Original array:", products);
console.log("Products More Than Six Hundred array:", moreThanSixHundred);
