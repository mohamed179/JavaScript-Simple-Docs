/**
  * Class
  *
  * Classes are templates that are used to create objects, and to define object data types and methods.
  * Core properties include the object data.
  * Core methods include the object behaviors.
  */




/**
  * Class Defination
  *
  * class class-name {
  *   property-name = property-value;
  *   ...
  *   method-name (set of parameters) {
  *     ... (method body)
  *   }
  *   ...
  * };
  *
  * var/let/const class-name = class {
  *   property-name = property-value;
  *   ...
  *   method-name (set of parameters) {
  *     ... (method body)
  *   }
  *   ...
  * };
  */

// example:

class Person {
  _name = 'Mohamed Kamal';
  _age = 25;
  set name (name) {
  	this._name = name;
  }
  get name () {
  	return this._name;
  }
  set age (age) {
  	this._age = age;
  }
  get age () {
  	return this._age;
  }
};




/**
  * Class Constructor
  *
  * class class-name {
  *   constructor (parameters) {
  *     ... (properties intialization)
  *   }
  *   ... (porperites)
  *   ... (methods)
  * };
  *
  * note:
  * properties initalized in the constructor not nesecary to be included in the class body.
  */

// example:

class Person {
  constructor (name, age) {
  	this._name = name;
  	this._age = age;
  }
  set name (name) {
  	this._name = name;
  }
  get name () {
  	return this._name;
  }
  set age (age) {
  	this._age = age;
  }
  get age () {
  	return this._age;
  }
};




/**
  * Class Instantiation (Making an Object)
  *
  * We can instantiate an class by using the new operator.
  *
  * var/let/const object-name = new class-name (constructor-arguments);
  */

// example:

class Person {
  constructor (name, age) {
  	this._name = name;
  	this._age = age;
  }
  set name (name) {
  	this._name = name;
  }
  get name () {
  	return this._name;
  }
  set age (age) {
  	this._age = age;
  }
  get age () {
  	return this._age;
  }
};

const mohamedKamal = new Person('Mohamed Kamal', 25);

console.log(mohamedKamal.name + ' is ' + mohamedKamal.age + ' years old.');




/**
  * Class Inheritance
  *
  * A class can inherit properites and methods from another class
  *
  * When a class inherits form (extends) another class, it takes all properties and method from this class
  *
  * The inherted class called 'Super Class'
  *
  * The inheriting calss called 'Sub Class'
  *
  * class super-class-name {
  *   ... (properties)
  *   ... (methods)
  * }
  *
  * class sub-class-name extends super-class-name {
  *   ... (other properties)
  *   ... (other methods)
  * }
  */

// example:

class Animal {
  constructor (name, food) {
    this._name = name;
    this._food = food;
  }

  get name () {
    return this._name;
  }

  get food() {
    return this._food;
  }
}

class Cat extends Animal {
  constructor (name, food, voice) {
    super(name, food);
    this._voice = voice;
  }

  get voice () {
    return this._voice;
  }
}

class Dog extends Animal {
  constructor (name, food, long) {
    super(name, food);
    this._long = long;
  }

  get long () {
    return this._long;
  }
}

let cat = new Cat('Pissy', 'milk', 'meow');
console.log('The cat ' + cat.name + ' has voice of: ' + cat.voice);
// 'The cat Pissy has voice of: meow'

let dog = new Dog('Doggy', 'cooked chicken', 105);
console.log('The dog ' + dog.name + ' can eat ' + dog.food + ', and has ' + dog.long + ' cm long');
// 'The dog Doggy can eat cooked chicken, and has 105 cm long'




/**
  * Static Properites and Static Methods
  *
  * static properties and methods can be used only from the calss not instances (ojbects).
  *
  * if you try to use a static property or method from an instance of this calss or any sub class, a type error will be thrown
  *
  * class class-name {
  *   static property-key = property-value;
  *   ... (other properties)
  *
  *   static method-name (set parameters) {
  *     ... (method body)
  *   }
  *   ... (other methods)
  * }
  *
  * class-name.static-property-key;
  *
  * class-name.static-method-name();
  */

// example:

class MyMath {
  static PI = 22/7;
  static addition (num1, num2) {
    return num1 + num2;
  }
  static multiply (num1, num2) {
    return num1 * num2;
  }
}

console.log(MyMath.PI);
// 3.142857142857143

console.log(MyMath['PI']);
// 3.142857142857143

console.log(MyMath.addition(5, 7));
// 12

const myMath = new MyMath();
console.log(myMath.multiply(3, 4));
// throw: TypeError
