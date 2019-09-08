/**
  * JavaScript uses an event loop to handle asynchronous function calls. When a program is run, function calls are made and added to a stack. The functions that make requests that need to wait for servers to respond then get sent to a separate queue. Once the stack has cleared, then the functions in the queue are executed.
  *
  * Web developers use the event loop to create a smoother browsing experience by deciding when to call functions and how to handle asynchronous events. We’ll be exploring one system of technologies called Asynchronous JavaScript and XML, or AJAX.
  */

// examples:

console.log('First message!');
setTimeout(() => {
   console.log('This message will always run last...');
}, 2500);
console.log('Second message!');
// 'First message!'
// 'Second message!'
// 'This message will always run last...' --> after 2.5 second at least


console.log('First message!');
setTimeout(() => {
   console.log('This message will always run last...');
}, 0);
console.log('Second message!');
// 'First message!'
// 'Second message!'
// 'This message will always run last...'




/**
  * Asynchronous JavaScript and XML (AJAX) :
  *
  * Web develpment JavaScript Event Loop technology to send request and recieve response from server
  *
  * AJAX enables requests to be made after the initial page load. Initially, AJAX was used only for XML formatted data, now it can be used to make requests that have many different formats.
  */




/**
  * XMLHttpRequest class :
  *
  * XMLHttpRequest class are used to create request, send request and recieve responses
  *
  * var/let/const xhr = new XMLHttpRequest();
  * xhr.responseType = 'json';
  * xhr.onreadystatechange = callback-to-call-when-ready-state-changed;
  * xhr.open(method, url);
  * xhr.send();
  */




/**
  * XHR (XML Http Request) Get Request :
  *
  * var/let/const xhr = new XMLHttpRequest();
  * var/let/const url = url-to-send-request;
  * xhr.responseType = 'json';
  * xhr.onreadystatechange = callback-to-call-when-ready-state-changed;
  * xhr.open('GET', url);
  * xhr.send();
  */

// example:

const xhr = new XMLHttpRequest();
const url = 'https://api-to-call.com/endpoint';
xhr.responseType = 'json';
xhr.onreadystatechange = () => {
  if(xhr.readyState === XMLHttpRequest.DONE) {
    return xhr.response;
  }
};
xhr.open('GET', url);
xhr.send();




/**
  * XHR Post Request :
  *
  * var/let/const xhr = new XMLHttpRequest();
  * var/let/const url = url-to-send-request;
  * var/let/const data = JSON.stringfy(json-file-or-object-to-convert-to-string);
  * xhr.responseType = 'json';
  * xhr.onreadystatechange = callback-to-call-when-ready-state-changed;
  * xhr.open('POST', url);
  * xhr.setRequestHeader(header-name, header-value);
  * xhr.send(data);
  */

// example:

const xhr = new XMLHttpRequest();
const url = 'https://api-to-call.com/endpoint';
const data = JSON.stringify({id: '200'});
xhr.responseType = 'json';
xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    return xhr.response;
  }
};
xhr.open('POST', url);
xhr.setRequestHeader('Content-type', 'application/json');
xhr.send(data);
