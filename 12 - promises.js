/**
  * Asynchronous programming is diffecult concepts even for experienced programmers.
  *
  * Asynchronous programming is a form of parallel programming that allows a unit of work to run separately from the primary application thread.
  * 
  * In JavaScript we can create asynchronous operations using Promise class
  */




/**
  * Promises :
  *
  * Promises are JavaScript objects that represent the eventual result of an asynchronous operation.
  *
  * A promise object can be created by Promise class
  *
  * Promises can be in one of three states: pending, resolved, or rejected
  *
  * We construct a promise by using the new keyword and passing an executor function to the Promise constructor method
  *
  * The constructor takes a callback function as an argument, this function is invoked in the constructor
  *
  * This function takes two callback functions as arguments, those functions (resolve, reject) must be called to settle the promise
  *
  * The programmer will not wirte those (resolve, reject) function, the Promise class will provide them.
  *
  * var/let/const promise-object-name = new Promise(operation-function-name);
  */

// example:

let num = Math.floor(Math.random() * 100) + 1;

const operationFunction = (resolve, reject) => {
  num > 50 ? resolve('num is greater than 50') : reject('num is less than or equal 50');
};

let prom = new Promise(operationFunction);

// this promise will settle randomly (randomly resolved or rejected).




/**
  * setTimeout() Function :
  *
  * Is a Node function which delays the execution of a callback function using the event-loop
  *
  * setTimeout(callback, delay-in-milliseconds)
  */

// example:

const dishWashingMachineOperation = (resolve, reject) => {
  setTimeout(() => {
  	let decision = Math.random();
  	if (decision > 0.5) {
  	  resolve('dishes washed!');
	  } else {
	    reject('dishes not washed, no soap!');
	  }
  }, 2000);
};

let prom = new Promise(dishWashingMachineOperation);

// this promise will settle after 2 minutes at least.




/**
  * Promise .then() Method :
  *
  * We use .then() with handlers callbacks containing the logic for what should happen after the promise is settled
  *
  * Those callbacks must acccept a value as an argument representing resolved value or rejected value
  *
  * .then() method always returns a promise with the same settle result of the promise it called from
  *
  * promise-object-name.then(resolve-handler-callback, reject-handler-callback);
  */

// example:

const dishWashingMachineOperation = (resolve, reject) => {
  setTimeout(() => {
  	let decision = Math.random();
  	if (decision > 0.5) {
  	  resolve('dishes washed!');
	  } else {
	    reject('dishes not washed, no soap!');
	  }
  }, 2000);
};

const successHandler = (resolvedValue) => {
  console.log(resolvedValue);
};

const failureHandler = (rejectedValue) => {
  console.log(rejectedValue);
};

let prom = new Promise(dishWashingMachineOperation);

prom.then(successHandler, failureHandler);

// this randomly output 'dishes washed!' or 'dishes not washed, no soap!'




/**
  * Promise .catch() Method :
  *
  * We use .catch() with (only) a failure handler callback containing the logic for what should happen if a promise rejects
  *
  * This callback must acccept a value as an argument representing rejected value
  *
  * .catch() function always returns a promise with the same settle result of the promise it called from
  *
  * promise-object-name.catch(reject-handler-callback);
  */

// example:

const dishWashingMachineOperation = (resolve, reject) => {
  setTimeout(() => {
  	let decision = Math.random();
  	if (decision > 0.5) {
  	  resolve('dishes washed!');
  	} else {
  	  reject('dishes not washed, no soap!');
  	}
  }, 2000);
};

const successHandler = (resolvedValue) => {
  console.log(resolvedValue);
};

const failureHandler = (rejectedValue) => {
  console.log(rejectedValue);
};

let prom = new Promise(dishWashingMachineOperation);

prom.then(successHandler).catch(failureHandler);

// this randomly output 'dishes washed!' or 'dishes not washed, no soap!'




/**
  * Promises Composition :
  *
  * Promises compostion means chaining promises what depends on each other
  *
  * When promises depends on each other and they must executed in certain order, we should use the following technique
  *
  * After resolving a promise, we use its .then() to resolve the next promise in the order
  *
  * new Promise(callback1)
  * .then((resolvedValue) => {
  *   ...
  *   return new Promise(callback2);
  * })
  * .then((resolvedValue) => {
  *   ...
  *   return new Promise(callback2);
  * })
  * .then((resolvedValue) => {
  *   ...
  *   return new Promise(callback3);
  * })
  * ... (other promises)
  * .catch((rejectedValue) => {
  *   ...
  *   return new Promise(failure-callback);
  * });
  */

// example:

const prom = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      console.log('dishes washed!');
      resolve('dishes washed!');
    } else {
      reject('dishes not washed, no soap!');
    }
  }, 1000);
})
.then((resolvedValue) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        console.log('dishes dried!');
        resolve('dishes dried!');
      } else {
        reject('dishes not dried, dryer needs fix!');
      }
    }, 1000);
  });
})
.then((resolvedValue) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        console.log('dishes integrated!');
        resolve('dishes integrated!');
      } else {
        reject('dishes not integrated, dryer door needs fix!');
      }
    }, 1000);
  });
})
.catch((rejectedValue) => {
  console.log(rejectedValue);
});




/**
  * async/await Functions :
  *
  * async function is asynchronous function, which returns an Promise object. An async function is a function which operates asynchronously via the event loop, using an implicit Promise to return its result
  *
  * The syntax and structure of your code using async functions is much more like using standard synchronous functions. That gives simplicity in handling and chaining asynchronous operations
  *
  * await operator is used to wait for a Promise to settle. It can only be used inside an async function
  *
  * await operator returns the resolved value of the promise, or the value itself if it's not a Promise
  *
  * await operator throws the rejected value as an error if the promise is rejected, so we need to use try/catch statment to handle promise rejection
  *
  * async function returns a Promise with resolved value of the returned value if it returns something, or it will return a promise with resolved value of undefined
  *
  * var/let/const function-name = await function (set-of-parameters) {
  *   try {
  *     ...
  *     var/let/const resolved-value1 = await promise1;
  *     ...
  *     var/let/const resolved-value1 = await promise2;
  *     ...
  *     var/let/const resolved-value1 = await promise3;
  *     ...
  *     return any-value; // optionally return statement
  *   } catch (error) {
  *     ... (code to handle promise rejection)
  *   }
  * }
  */

// example:

const dishWashingMachineOperation = (resolve, reject) => {
  setTimeout(() => {
    let decision = Math.random();
    if (decision > 0.5) {
      resolve('dishes washed!');
    } else {
      reject('dishes not washed, no soap!');
    }
  }, 2000);
};

const dishDryingMachineOperation = (resolve, reject) => {
  setTimeout(() => {
    let decision = Math.random();
    if (decision > 0.5) {
      resolve('dishes dried!');
    } else {
      reject('dishes not dried, dryer needs fix!');
    }
  }, 2000);
};

const washingDishesProcess = async () => {
  try {
    let resolvedValue1 = await new Promise(dishWashingMachineOperation);
    let resolvedValue2 = await new Promise(dishDryingMachineOperation);
    return 'dishes washing process completed!';
  } catch (error) {
    console.log(error);
  }
};

washingDishesProcess().then ((resolvedValue) => {
  console.log(resolvedValue);
});
