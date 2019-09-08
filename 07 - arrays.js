/**
  * Create an Array :
  *
  * var/let/const array-name = [element1, element2, ...];
  */

// examples:

let names = [
  'Mohamed',
  'Kamal',
  'Zaki',
  'John'
];
console.log(names);
// ['Mohamed', 'Kamal', 'Zaki', 'John']


const arr_of_numbers = [1, 50.2, 7];
console.log(arr_of_numbers);
// [1, 50.2, 7]


var arr = ['string', 1, true, undefined];
console.log(arr);
// ['string', 1, true, undefined]




/**
  * Accessing array elements :
  *
  * array-name[element-index]
  */

// example:

const arr = ['str1', 'str2', 'str3', 'str4'];

arr[0];
// 'str1'

arr[2] + ', str3';
// 'str3, str3'




/**
  * Modifing Array Elements :
  *
  * array-name[element-index] = new-value;
  *
  * Note:
  * const array can't be re-assigned new array
  * but its elements are still modifiable
  */

// example:

const names = ['Mohamed', 'Kamal', 'Zaki', 'John'];

arr[3] = 'Harry';
console.log(arr[3]);
// 'Harry'




/**
  * Array size :
  *
  * arra-name.length
  */

// example:

const arr = ['str1', 'str2', 'str3', 'str4'];

console.log(names.length);
// 4
// 'Harry'




/**
  * Array Methods :
  *
  * join()     : Join all elements of an array into a string.
  * push()     : Add an element to the end of an array.
  * pop()      : Remove the last element from an array and return its value.
  * shift()    : Remove the first element from an array and return its value.
  * unshift()  : Add an element to the front of an array.
  * reverse()  : Reverse the order of an array elements.
  * sort()     : Sort the elements of an array in place and return the sorted array (sort as array of strings).
  * toString() : Returns a string representing an array and its elements.
  */




/**
  * Array Iteration Methods :
  *
  * forEach()     : Calls a function for each element in the array and return undeined.
  * filter()      : Creates a new array with all of the elements of this array for which the provided filtering function returns true.
  * map()         : Creates a new array with the results of calling a provided function on every element in this array.
  * every()       : Returns true if every element in this array satisfies the provided testing function.
  * some()        : Returns true if at least one element in this array satisfies the provided testing function.
  * find()        : Returns the found value in the array, if an element in the array satisfies the provided testing function or undefined if not found.
  * findIndex()   : Returns the found index in the array, if an element in the array satisfies the provided testing function or -1 if not found.
  * reduce()      : Apply a function against an accumulator and each value of the array (from left-to-right) as to reduce it to a single value.
  * reduceRight() : Apply a function against an accumulator and each value of the array (from right-to-left) as to reduce it to a single value.
  */

// example :

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arr.forEach(function (element) {
  console.log(element);
});
// 1
// 2
// 3
// ...

console.log(arr.every(function (element) {
  return element > 0;
}));
// true

console.log(arr.filter(function (element) {
  return element % 2 === 1;
}));
// [1, 3, 5, 7, 9]

console.log(arr.reduce(function (accumulator, element) {
  return accumulator + element;
}));
// 55
