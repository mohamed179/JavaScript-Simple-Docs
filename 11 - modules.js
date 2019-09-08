/**
  * Modules :
  *
  * Modules are JavaScript feature that allow us to devide code into modules that can be exported and imported when needed
  *
  * Modules are reusable pieces of code that can be exported from one program and imported for use in another program
  *
  * Modules enable to devide code into (modules) separate files which is useful in code reusability and debuging
  *
  * Modules enable to reuse and recycle defined logic in different parts of our application
  *
  * A module keep information and impelementations private and protected from other modules
  *
  * Modules prevent pollution of the global namespace and potential naming collisions, by cautiously selecting variables and behavior we load into a program.
  *
  * there are many ways to create modules:
  *
  * module.export & require()
  * default exports
  * named exports
  */




/**
  * module.exports Object (Node.js modules exports) :
  *
  * Every JavaScript file run in Node has a local module object with an exports property used to define what should be exported from the file
  *
  * module.exports = {
  *   ... (exported variables as object properties)
  *   ... (exported functions as object methods)
  * };
  */

// example:

let Airplane = {
  myAirplane: "StarJet"
};

module.exports = Airplane;




/**
  * require() Function (Node.js modules imports) :
  *
  * To make use of the exported module and the behavior we define within it, we import the module into another file. In Node.js, use the require() function to import modules
  *
  * var/let/const imported_object_name = require('imported_module_path');
  */

// example:

const Airplane = require('./1-airplane.js');

console.log(Airplane.myAirplane);
// 'StarJet'




/**
  * ES6 Modules :
  *
  * In ES6, JavaScript supports a new more readable and flexible syntax for exporting modules
  *
  * There is two types of modules, default export and named exports.
  */




/**
  * Default Exports :
  *
  * The default export syntax works similarly to the module.exports syntax, allowing us to export one module per file
  *
  * var/let/const exported_object_name = {
  *   ... (exported variables as object properties)
  *   ... (exported functions as object methods)
  * };
  * ...
  * export default exported_object_name;
  */

// example:

let Airplane = {
  myAirplane: "StarJet"
};

export default Airplane;




/**
  * Named Exports :
  *
  * The named exports allows us to export many variables in one module
  *
  * The named exports allow us to export data through the use of variables
  *
  * var/let/const variable_1_name = ... ;
  * var/let/const variable_2_name = ... ;
  * ...
  * export { variable_1_name, variable_2_name, ... };
  */

// example:

let specialty = 'back-end';

function isVegetarian(person) {
  return person.isVegetarian;
};

var mohamedKamal = {
  name: 'M. Kamal',
  age: 25,
  career: 'web developer',
  isVegetarian: false,
  work: function () {
    // working ...
  },
  sleep: function () {
    // sleeping ...
  },
  play: () => {
    // playing ...
  }
};

export { specialty, isVegetarian, mohamedKamal };




/**
  * Importing ES6 Modules :
  *
  * ES6 module syntax uses the import keyword for importing objects
  *
  * import {imported_object_name1, imported_object_name2, ...} from 'imported_module_path_without_file_extension';
  */

// examples:

import Airplane from './airplane';

console.log(Airplane.myAirplane);
// 'specialty'


import { specialty, isVegetarian, mohamedKamal } from './person';

console.log(specialty);
// 'back-end'

console.log(isVegetarian(mohamedKamal));
// false




/**
  * Export As :
  *
  * ES6 module syntax offers a way to change the name of variables when we export or import them
  *
  * We can do this with the as keyword
  *
  * export { variable_1_name as alias_name_for_variable_1, ... };
  */

// example:

let name = 'Mercedes';
let model = 'c180';
let number = '58A0';

export { name as carName, mode as carModel, number as carNumber };




/**
  * Import As :
  *
  * ES6 module syntax also offers a way to change the name of variables when we import them
  *
  * We can do this with the as keyword
  *
  * export { variable_1_name as alice_name_for_variable_1, ... };
  */

// examples:

import Airplane as Plane from './airplane';

console.log(Plane.myAirplane);
// 'specialty'


import { specialty as careerSpecialty, isVegetarian, mohamedKamal as person } from './person';

console.log(careerSpecialty);
// 'back-end'

console.log(isVegetarian(person));
// false


import * as car from './car';

console.log(car.carName + ' ' + car.carModel + ' ' + car.carNumber);
// 'Mercedes c180 58A0'
