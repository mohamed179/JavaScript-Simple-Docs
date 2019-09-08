/**
  * For loop :
  *
  * for (initialization; condition; final-expression) {
  *   ... (code that will be executed while condition is true)
  * }
  */

// example:

for (i = 0; i < 10; i++) {
  console.log(i + 1);
}
// this will count from 1 to 10




/**
  * While loop :
  *
  * while (condition) {
  *   ... (code that will be executed while condition is true)
  * }
  */

// example:

let x = 10, i = 0;
while (i < 10) {
  console.log(i++ + 1);
}
// this will count from 1 to 10

console.log(i);
// 10




/**
  * Do...While loop :
  *
  * do {
  *   ... (code that will be executed once and re-executed while condition is true)
  * } while (condition);
  */

// example:

let x = 10, i = 0;
do {
  console.log(i++ + 1);
} while (i < 10);
// this will count from 1 to 10

console.log(i);
// 10
