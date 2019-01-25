// This is a simple example of a synchronous callback, as it is executed immediately

function greeting(name) {
  return "Hello " + name;
}

function processUserInput(callback) {
  const name = prompt("Please enter your name.");
  callback(name);
}

processUserInput(greeting); // `Hello ${name}`

// Note, however, that callbacks are often used to continue code execution after an asynchronous operation has completed —
// these are called asynchronous callbacks. A good example is the callback functions
// executed inside a .then() block chained onto the end of a promise after that promise fulfills or rejects.
