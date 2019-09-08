/**
  * Revistion on Promises :
  *
  * A promise is an JS object that can handel asynchronous task
  *
  * A promise is an object that handles asynchronous data. A promise has three states (pending, fulfiled and rejected)
  *
  * The great thing about promises is that once a promise is fulfilled or rejected, you can chain an additional method to the original promise
  *
  * We also can use async/await functions to handle asynchronous tasks
  */




/**
  * fetch Function to Send GET Request :
  *
  * fetch(url-to-send-request).then(response => {
  *	  if (response.ok) {
  *     return response.json;
  *   }
  *   throw new Error('Request failed');
  * }, networkError => {
  *   console.log(networkError.message);
  * }).then(jsonResponse => {
  *    // code to execute with jsonResponse ...
  * });
  */

// example:

fetch('https://api-to-call.com/endpoint')
.then(response => {
  if (response.ok) {
    return response.json();
  }
  throw new Error('Request failed!');
}, networkError => console.log(networkError.message))
.then(jsonResponse => jsonResponse);




/**
  * fetch Function to Send POST Request :
  *
  * fetch(url-to-send-request, {
  *   method: 'POST',
  *   headers: {
  *     // headers needed ...
  *   }
  *   body: JSON.stringfy(json-file-or-object-to-convert-to-string)
  * }).then(response => {
  *	  if (response.ok) {
  *     return response.json;
  *   }
  *   throw new Error('Request failed');
  * }, networkError => {
  *   console.log(networkError.message);
  * }).then(jsonResponse => {
  *    // code to execute with jsonResponse ...
  * });
  */

// example:

fetch('https://api-to-call.com/endpoint', {
  method: 'Post',
  headers: {
  	'Content-type': 'application/json',
  }
  body: JSON.stringify({id: '200'})
})
.then(response => {
  if (response.ok) {
    return response.json();
  }
  throw new Error('Request failed!');
}, networkError => console.log(networkError.message))
.then(jsonResponse => jsonResponse);




/**
  * async/await GET Request :
  *
  * const getData = async () => {
  *   try {
  *     const response = await fetch(url-to-send-request);
  *     if (response.ok) {
  *       const jsonResponse = await response.json();
  *       // code to execute with jsonResponse ...
  *     }
  *     throw new Error('Request failed!');
  *   } catch (error) {
  *     console.log(error);
  *   }
  * }
  */

// example:

const getData = async () => {
  try {
    const response = await fetch('https://api-to-call.com/endpoint');
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
    throw new Error('Request failed!');
  } catch (error) {
    console.log(error);
  }
}




/**
  * async/await POST Request :
  *
  * const getData = async () => {
  *   try {
  *     const response = await fetch(url-to-send-request, {
  *       method: 'POST',
  *       headers: {
  *         // headers needed ...
  *       }
  *       body: JSON.stringfy(json-file-or-object-to-convert-to-string)
  *     });
  *     if (response.ok) {
  *       const jsonResponse = await response.json();
  *       // code to execute with jsonResponse ...
  *     }
  *     throw new Error('Request failed!');
  *   } catch (error) {
  *     console.log(error);
  *   }
  * }
  */

// example:

const getData = async () => {
  try {
    const response = await fetch('https://api-to-call.com/endpoint', {
    	method: 'POST',
    	headers: {
    		'Content-type': 'application/json',
    	},
    	data = JSON.stringify({id: '200'});
    });
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
    throw new Error('Request failed!');
  } catch (error) {
    console.log(error);
  }
}
