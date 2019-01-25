## What are Callbacks???

Simply put: A callback is a function that is to be executed after another function has finished executing — hence the name 'call back'. More complexly put: In JavaScript, functions are objects. Because of this, functions can take functions as arguments, and can be returned by other functions.

## Why do we need callBacks???

For one very important reason — JavaScript is an event driven language. This means that instead of waiting for a response before moving on, JavaScript will keep executing while listening for other events. Lets look at a basic example:

function first(){
console.log(1);
}
function second(){
console.log(2);
}
first(); // 1
second(); // 2

All good?

But what if function first contains some sort of code that can’t be executed immediately? For example, an API request where we have to send the request then wait for a response? We'll use setTimeout for this example:

function first(){
// Simulate a code delay
setTimeout( function(){
console.log(1);
}, 500 );
}
function second(){
console.log(2);
}
first();
second();

Now with this delay because of the setTimeout we are returned...

// 2
// 1

this is because the first fn has a callback fn (line 24) that says:

- When the first() is called, run the setTimeout(), which is set to wait 500ms
- THEN console log 1.

While the second(), says:

- When you are called IMMEDIATELY log 2

JavaScript is smart enought to know not to wait on the setTimeout fn because whenever it is ready it will callback the fn that it is supposed to do, which in this case is to log 1 after 500ms.

# So why show you this? Because you can’t just call one function after another and hope they execute in the right order. Callbacks are a way to make sure certain code doesn’t execute until other code has already finished execution.
