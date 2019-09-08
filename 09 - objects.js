/**
  * Object :
  *
  * Object is a data type in javascript.
  * Object are collection of related date that descipe an object
  * Object consists of properites and methods
  */




/**
  * Object Properties :
  *
  * var/let/const object-name = {
  *   property1-key: property1-vlaue,
  *   property2-key: property2-vlaue,
  *   ...
  * };
  *
  * notes:
  * properity key is string
  * if the properity-key is single-word it can be written without quotes
  * property value may be any data type
  */

// example:

let car = {
  name: 'Mercedes',
  model: 'c180',
  number: '58A0',
  owner: 'John Oliver',
  'max speed': 240,
  color: 'silver'
};

console.log(car);
// {name: 'Mercedes', model: 'c180', number: '58A0', owner: 'John Oliver', max speed: 240, color: 'silver'}




/**
  * Access Object Properties :
  *
  * object-name.properity-key
  * 
  * object-name[properity-key]
  */

// example:

var animal = {
  name: 'Elephant',
  height: 3.3,
  weight: 6000,
  'life span': 70
};

console.log(animal.name);
// 'Elephant'

console.log(animal['life span']);
// 70

console.log(animal.speed);
// undefined




/**
  * Edit Object Properties :
  *
  * object-name.properity-key = property-new-value;
  * 
  * object-name[properity-key] = property-new-value;
  */

// example:

var footballTeam = {
  name: 'Liverpool',
  stadium: 'Anfield',
  manager: 'Tom Watson'
};

footballTeam['manager'] = 'Jürgen Klopp';
console.log(footballTeam.manager);
// 'Jürgen Klopp'




/**
  * Adding New Porperties to Object :
  *
  * object-name.new-property-key = new-property-value;
  *
  * object-name[new-property-key] = new-property-value;
  */

// example:

const person = {firstName:"John", lastName:"Doe"};

person.age = 50;
console.log(person.age);
// 50

person['eye color'] = 'blue';
console.log(person['eye color']);
// 'blue'




/**
  * Delete Object Porperties :
  *
  * delete object-name.property-key;
  *
  * delete object-name[new-property-key];
  */

// example:

var country = {
  name:"Egypt",
  landArea: 1010000,
  population: 97000000
};

delete country.population;
console.log(country.population);
// undefined




/**
  * Object Methods :
  *
  * var/let/const object-name = {
  *   method-name: function (set of parameters) {
  *     ... (method body)
  *   }
  * }
  *
  * var/let/const object-name = {
  *   method-name (set of parameters) {
  *     ... (method body)
  *   }
  * }
  *
  */

// example:

let robot = {
  name: 'rob-tech',
  system: 'KR-08',
  control: 'self-control',
  makeSound: function () {
  	console.log('Beep');
  },
  move (direction) {
  	console.log('moved ' + direction);
  }
};




/**
  * Object Method Invoke :
  *
  * object-name.method-name(set of arguments)
  */

// example:

let robot = {
  name: 'rob-tech',
  system: 'KR-08',
  control: 'self-control',
  makeSound: function () {
  	console.log('Beep');
  },
  move (direction) {
  	console.log('Moved ' + direction);
  }
};

robot.makeSound();
// 'Beep'

robot.move('forward');
// 'Moved forward'




/**
  * Access Object Properties Inside Methods :
  *
  * this.property-key
  */

// example:

var train = {
  noOfCabins: 10,
  fuelType: 'electricity',
  printNoOfCabins () {
    console.log(this.noOfCabins);
  },
  printFuelType () {
    console.log(this.fuelType);
  }
};

console.log(train.printNoOfCabins());
// 10

console.log(train.printFuelType());
// 'electricity'




/**
  * Privacy :
  *
  * Unfortunately, JavaSript don't have feature to control privacy
  * But, JavaScript developers follow naming conventions that signal to other developers how to interact with a property.
  * _ : added to the start of a property key to flag it as private
  */

// example:

let bankAccount = {
  owner: 'Mohamed Kamal',
  _amount: 1000000000
};
// _amount property can be altered, but it should not be altered because it's flaged as private




/**
  * Setters and Getters :
  *
  * {
  *   _property-key: property-value,
  *   ...
  *
  *   get property-key () {
  *     return property-key
  *   }
  * }
  */

// example:

let bankAccount = {
  owner: 'Mohamed Kamal',
  _amount: 1000000000,
  get amount () {
    return this._amount;
  },
  set amount (dollars) {
    if (typeof dollars === 'number') {
      this._amount = dollars;
    } else {
      console.log('amount must be number!');
    }
  }
};

console.log(bankAccount.amount);
// 1000000000

bankAccount.amount = 'dfdfd';
// 'amount must be number!'

bankAccount.amount = 1000000;

console.log(bankAccount.amount);
// 1000000




/**
  * Factory function to Create Objects :
  *
  * We don't like to create our objects manually in case of there are many of them.
  * So we use fcatory method to create needed objects
  *
  * var/let/const factory-function = (set of parameters) {
  *   return {
  *     property1-key = parameter1,
  *     property2-key = parameter2,
  *     property3-key = parameter3,
  *     ...
  *   };
  * }
  * 
  * var/let/const object-name = factory-function(set of arguments);
  */

// example:

const boxFactory = (width, height, depth) => {
  return {
  	width: width,
  	height: height,
  	depth: depth
  };
};

let box1 = boxFactory(15, 15, 10);

console.log(box1);
// {width: 15, height: 15, depth: 10}




/**
  * Object Property Value Shorthand :
  *
  * We can use a variable to shorthand property value
  *
  * var/let/const variable-name = new-value;
  *
  * var/let/const object-name = {
  *   variable-name,
  *   ...
  * }
  */

// examples:

let firstName = 'Mohamed', lastName = 'Kamal';
let programmer = {
  firstName,
  lastName,
}

console.log(programmer);
// {firstName: 'Mohamed', lastName = 'Kamal'}


const boxFactory = (width, height, depth) => {
  return {
    width,
    height,
    depth
  };
};

let box1 = boxFactory(15, 15, 10);

console.log(box1);
// {width: 15, height: 15, depth: 10}
