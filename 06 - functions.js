/**
  * Functions :
  * 
  * function function-name (set of parameters) {
  *   ... (function body)	
  * }
  */

// examples:

function printSum (x, y) {
  console.log(x + y);
}


function canWork (diss) {
  if (diss)
  	console.log('Yes, we can work');
  else
  	console.log('No, we can\'t work');
}




/**
  * Anonymous Functions :
  * 
  * const variable-name = function (param1, param2, ...) {
  *   ... (function body)	
  * }
  */

// examples:

const printSum = function (x, y) {
  console.log(x + y);
}


const canWork = function (diss) {
  if (diss)
  	console.log('Yes, we can work');
  else
  	console.log('No, we can\'t work');
}




/**
  * Shorthand Anonymous Functions :
  * 
  * const variable-name = (param1, param2, ...) => {
  *   ... (function body)	
  * }
  *
  * const variable-name = (param1, param2, ....) => (statement with the variable/value that will be returned)
  *
  * const variable-name = param => {
  *	  ... (function body)
  * }
  *
  * const variable-name = param => (statement with the variable/value will be returned)
  */

// examples:

const printSum = (x, y) => {
  let z = x + y;
  console.log(z);
}


const concatenateStrings = (str1, str2) => str1 + str2;


const numToString = num => {
	let str = '' + num;
	return str;
}


const canWork = diss => console.log((diss ? 'Yes, we can work' : 'No, we can\'t work'));




/**
  * Function Call (Invoke) :
  * 
  * function-name(argument1, argument2, ....)
  */

// examples:

const printSum = (x, y) => {
  let z = x + y;
  console.log(z);
}
printSum(5, 10);
// 15


const concatenateStrings = (str1, str2) => str1 + str2;
let str = concatenateStrings('Hello', ' World!');
console.log(str);
// 'Hello World!'




/**
  * Default Parameters :
  *
  * We can initialize parameters with default values if no value or undefined is passed.
  * 
  * function (..., param = defaultValue)
  *
  * note: default parameters must be last parameters else it will be a SyntaxError
  */

// example:

function printIt (str = 'No string to print!') {
	console.log(str);
}

printIt('Hello World!');
// 'Hello World'

printIt();
// 'No string to print!'




/**
  * Pass by value & Pass by reference :
  * 
  * Pass by value: the value of the arguments are sent to parameters 
  * When changing the value of parameters, arguments value not affected
  * Primitive data types variables passed by value to parameters (numbers, strings, booleans, symbols)
  *
  * Pass by reference: the parameters will point to the arguments place in the memory
  * When changing the value of parameters, arguments value also being changed (the same change)
  * Non-primitive data types variables passed by reference to parameters (arrays, functions, objects)
  */

// pass by value example:

function changeThenPrint (str, num) {
  str = '943ntbp09yi45$#%39n45'; // Yes, it is random string
  num = 484.752;                 // Yes, it is a random number
  console.log(`str = ${str}, num = ${num}`);
}
let num = 10;
let str = 'Hello World!';
changeThenPrint(str, num);
console.log(`str = ${str}, num = ${num}`);
// 'str = Hello World!, num = 10'


// pass by reference example:

function add_1_to_array_elements (arr) {
  for (int i = 0; i < arr.length; i++)
    arr[i]++;  
}
let numArray = [5, 3, 7, 0];
add_1_to_array_elements(numArray);
console.log(numArray);
// [6, 4, 8, 1]




/**
  * Functions as variables :
  *
  * Functions are variables (objects)
  * We can assign functions to new variables
  * We can pass functions to another functions as arguments
  */

// examples:

const fun1 = function () {
  console.log('This is fun1');
}
const fun2 = fun1;
fun2();
// 'This is fun1'


function printManipulated (num, fun) {
  num = fun(num);
  console.log(num);
}
let x = 10;
const add_1 = num => num + 1;
printManipulated(x, add_1);
// 11
