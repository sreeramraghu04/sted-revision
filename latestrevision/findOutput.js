//! 1
// let x = 10;
// let y = 20;
// {
//   console.log(x + " " + y);
// }
// {
//   x = 20;
//   console.log(x + " " + y);
// }
// console.log(x + " " + y);

//? output
// 10 20
// 20 20
// 20 20

//! 2
// let a = 5,
//   b = 6;
// if (a++ == --b) {
//   console.log("5==5");
// } else {
//   console.log("None");
// }

//? output
// 5==5

//! 3
// let x = 15;
// if (x > 10) {
//   x++;
//   if (x == 16) {
//     console.log("updated");
//   } else if (x == 15) {
//     console.log("no change");
//   }
// } else {
//   console.log("yes");
// }

//? output
// updated

//! 4
// let x = 10;
// if (x >= 10) {
//   console.log("yes");
// } else if (x > 5) {
//   console.log("no");
// }

//? output
// yes

//! 5
// console.log(10 + 20 + "Wakeup" + 3 + 2);

//? output
// 30Wakeup32

//! 6
// let a = 10;
// let b = 10;
// if (++a >= 12 && ++b > 12) {
//   console.log("hello");
// }
// console.log(a + b);

//? output
// 21

//! 7
// let num = 12;
// num /= 3;
// console.log(num);

//? output
// 4

//! 7
// let score = 100;
// score = 75;
// score = 50;
// score = 25;
// console.log(score);

//? output
// 25

//! 8
// let a = 22;
// let b = 15;
// console.log((a = b));

//? output
// 15

//! 9
/* let x = false;
let y = "0";
let z = 0;
console.log(x == y);
console.log(x == z); */

//? output
// true
// true

//! 10
// let arr = [10, 20, 30, 40, 50];
// arr = [1, 2, 3, 4, 5];
// let output = arr[3] + arr[4];
// console.log(output);

//? output
// 9

//! 11
// let a = 10;
// let b = 10;
// if (++a >= 12 || ++b > 12) {
//   console.log("hello");
// }
// console.log(a + b);

//? output
// 22

//! 12
// let arr = [1, 2, 3, 4];
// let result = arr.forEach((item) => item * 2);

//? output
// undefined

//! 13
// const x = 10;
// {
//   const x = 20;
// }
// console.log(x);

//? output
// 10

//! 14
// let nums = [2, 4, 6];
// let result = nums.map((n) => n * 2);
// console.log(result);

//? output
// [4, 8, 12]

//! 15
// console.log("5" == 5);

//? output
// true

//! 16
// let arr = [10, 20, 30];
// console.log(arr.length);

//? output
// 3

//! 17
// let x = 5;
// function test() {
//   console.log(x);
// }

//? output
// nothing

//! 18
// console.log(typeof []);

//? output
// object