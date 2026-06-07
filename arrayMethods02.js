//! 1. Using map()
const numbers = [2, 4, 6, 8];
//* Create a new array where each number is squared.

console.log(numbers.map((numbers) => numbers * numbers));

//! 2. Using filter()
const words = ["apple", "banana", "kiwi", "mango", "grape"];
//* Return words that have more than 5 letters.

console.log(words.filter((words) => words.length == 6));

//! 3. Using reduce()
const numberz = [5, 10, 15];
//* Find the product (multiplication) of all numbers.

console.log(numberz.reduce((total, numb) => total * numb, 1));

//! 4. Using find()
const employees = [
  { id: 101, name: "Alice", salary: 4000 },
  { id: 102, name: "Bob", salary: 6000 },
  { id: 103, name: "Charlie", salary: 5000 },
];
//* Find the employee whose salary is 6000.

console.log(employees.find((employees) => employees.salary == 6000));

//! 5. Using some()
const temperatures = [22, 25, 19, 30, 28];
//* Check if any temperature is above 29.

console.log(temperatures.some((temperatures) => temperatures >= 29));

//! 6. Using every()
const ages = [18, 21, 25, 30];
//* Check if all people are adults (age >= 18).

console.log(ages.every((ages) => ages >= 18));

//! 7. Using sort()
const names = ["Shon", "Alice", "Bob", "David"];
//* Sort the names alphabetically.

console.log(names.sort());

//! 8. Using includes()
const roles = ["admin", "editor", "user"];
//* Check if "moderator" exists in the array.

console.log(roles.includes("moderator"));

//! 9. Filter + Map
const students = [
  { name: "John", marks: 80 },
  { name: "Jane", marks: 45 },
  { name: "Jack", marks: 90 },
  { name: "Jill", marks: 35 },
];
//* Get names of students who scored more than 50.

console.log(
  students
    .filter((students) => students.marks > 50)
    .map((students) => students.name),
);

//! 10. Reduce (Real-World Example)
const cart = [
  { item: "Shirt", price: 500, quantity: 2 },
  { item: "Shoes", price: 2000, quantity: 1 },
  { item: "Hat", price: 300, quantity: 3 },
];
//* Calculate the total cost of the cart.

console.log(
  cart.reduce((total, product) => total + product.price * product.quantity, 0),
);

//! 11. Find + Condition
const users = [
  { username: "john123", active: false },
  { username: "jane456", active: true },
  { username: "jack789", active: false },
];
//* Find the first active user.

console.log(users.find((users) => users.active));

//! 12. Challenge Problem (Advanced Thinking)
const number = [1, 2, 3, 4, 5, 6];
//* Return a new array containing only even numbers multiplied by 3.

console.log(
  number.filter((number) => number % 2 === 0).map((number) => number * 3),
);

//! 13. Revision class (home work)
let array = [5, 11, 6, 3];
/* console.log(array.sort()); */
console.log(array.sort((a, b) => b - a));

let num = [1, 2, 3];
let result = num.reduce((acc, curV) => acc + curV, 0);
console.log(result);
