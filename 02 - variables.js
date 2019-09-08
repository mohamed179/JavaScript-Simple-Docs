/**
  * Variable Types :
  *
  * undeined
  * null
  * number ex(5, 5.3)
  * boolean ex(true, false)
  * string ex('Hello World!', "Hello World!", '8')
  * symbol
  * object (object, array, function)
  */




/**
  * We must declare variables before we can use them
  *
  * Variables in JavaScript can change thier types
  *
  * Variable names must start with a charcter or under_score (no leading digits or symbols)
  */




/**
  * Variables can be created by :
  *
  * var
  * let
  * const   ----------> its value can't be changed (can't be re-assigned by = operator)
  */

// examples :

let x = 1.3;

var myName = 'Mohamed Kamal';

const weLoveJavaScript = ture;


// notes :

let _var = 0;
// this will work
// _var = 0

cost x;
// this will throw SyntaxError <Missing initializer in const declaration>

const pi = 22/7;
pi = 3.142857142857143;
// this will throw TypeError <Assignment to constant variable>

let 0number = 0;
// this will throw SyntaxError <Invalid or unexpected token>
