/**
  * Variable Scopes and Re-declaration :
  *
  * var : variables decleared using var can be globlly scoped or function scoped, and can be re-decleared in its scope
  *
  * let : variables decleared using let are block scoped, and can't be re-decleared in its scope
  *
  * const : variables decleared using const are block scoped, and can't be re-decleared in its scope
  */

// examples :

var x = 0;
for (var i = 1; i <= 10; i++) {
  var x = i;
}
console.log(x);
// 10


let x = 0;
for (var i = 1; i <= 10; i++) {
  let x = i;
}
console.log(x);
// 0


const x = 0;
for (var i = 1; i <= 10; i++) {
  const x = i;
}
console.log(x);
// 0


var a = 5;
a = 7;
var a = 10;
// this will work
// a = 10


let a = 5;
a = 7;
let a = 10;
// this will throw SyntaxError <Identifier 'a' has already been declared>


const a = 5;
const a = 10;
// this will throw SyntaxError <Identifier 'a' has already been declared>




/**
  * Variable Hoisting :
  *
  * var : variables decleared using var are hoisted, and has initialized with value undefined
  *
  * let : variables decleared using let are hoisted, but not initialized
  *
  * const : variables decleared using let are hoisted, but not initialized
  */

// examples :

console.log(x);
var x = 5;
// undefined


console.log(x);
let x = 5;
// this will throw ReferenceError <Cannot access 'x' before initialization>


console.log(x);
const x = 5;
// this will throw ReferenceError <Cannot access 'x' before initialization>


console.log(x);
// this will throw ReferenceError <x is not defined>
