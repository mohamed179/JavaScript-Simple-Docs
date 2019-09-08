/**
  * If Statement :
  *
  * if (condition) {
  *	  ... (code that will run if the codition is true)
  * }
  */

// examples :

let x = 5;
if (x === 5) {
	console.log('Yes x === 5');
}


let str = 'This is a short string';
if (typeof str === 'string' && str.length < 10) {
	console.log('This line will not be executed');
}




/**
  * IfElse Statement :
  *
  * if (condition) {
  *	  ... (code that will run if the codition is true)
  * } else {
  *   ... (code that will run if the codition is false)
  * }
  */

// examples :

let x = 5;
if (x > 10) {
	console.log('Yes x is greater than 10');
} else {
	console.log('No x is not greater than 10');
}


let str = 'This is a short string';
if (typeof str === 'string' && str.length < 10) {
	console.log('This line will not be executed');
} else {
	console.log('This line will be executed');
}




/**
  * ElseIf Statement :
  *
  * if ( condition1 ) {
  *	  ... (code that will run if the condition1 is true)
  * } elseif ( condition2 ) {
  *   ... (code that will run if the condition2 is true)
  * } else {
  *   ... (code that will run if all conditions are false)
  * }
  */

// example :

let x = 5;
if (x === 0) {
	console.log('x === 0');
} elseif (x > 0) {
	console.log('x > 0');
} else {
	console.log('x < 0');
}




/**
  * Switch Statement :
  *
  * switch (variable) {
  *   case value1:
  *     ... (code that will be executed if variable === value1)
  *     break;
  *   case value1:
  *     ... (code that will be executed if variable === value1)
  *     break;
  *   ...
  *   default:
  *     ... (code that will be executed if variable is not equal to any value)
  *     break;
  * }
  */

// example :

let rule = 'guest';
switch (rule) {
  case 'admin':
    console.log('You can administrate the website!');
    break;
  case 'user':
    console.log('You can chat with another users!');
    break;
  case 'guest':
    console.log('You must signup first!');
    break;
  deault:
    console.log('Some thing went wrong!, Please refresh the page');
}




/**
  * Inline If Statement (Tenary Statement) :
  *
  * condition(s) ? (if true) : (if false);
  */

// examples :

let running = true;
running ? console.log('running ...') : console.log('not running!');
// 'running ...'


let x = 10;
let y = 20;
z = x > 5 && y <= 10 ? x * y : x / y;
// 10 / 20 = 0.5
