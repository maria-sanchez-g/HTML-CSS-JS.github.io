//a
function debounce(func) { //decorator function
  let timerId; // store timeout ID

  return function (...args) { //rest parameter, which collects all arguments passed to this function into an array called args. 
    clearTimeout(timerId); // cancel any previous scheduled call
    timerId = setTimeout(() => { //Create a new timeout. Store its ID in timerId, so we can cancel it if another call happens before 1000ms. //After 1000ms with no new calls, the function inside setTimeout will run.
      func.apply(this, args); // run the original function with the latest args. Use the same this context as the wrapper function had. Pass in all the arguments we collected (args).
    }, 1000); // 1000ms inactivity
  };
}

//.apply structure func.apply(context, args);
//this example structure:
// const person = {
//   name: "Edna",
//   sayName() {
//     console.log(this.name);
//   }
// };

// person.sayName(); // "Edna"
// Here, this = person.

// This is the decorator
// It takes a function func as input.
// debounce is just a normal function.
// It expects another function as its parameter — that is why we name it func.
// func is not executed immediately — it is stored so we can run it later under controlled conditions (after the delay).
// It returns a new function (the wrapper), that wrapper controls when func will run.

// This wraps the printMe function with the decorator logic
function printMe() {
  console.log('printing debounced message');
}

printMe = debounce(printMe); 
//it pass printMe as a parameter to debounce
//inside debounce, that parameter is called func
//debounce returns a new function(the wrapper) that has the debounce logic, we assigned that new function to prinMe

// function printMe()	Defines your original function
// debounce(printMe)	Creates a new debounced version
// printMe = debounce(printMe)	Replaces printMe with that debounced version
// printMe()	Now calls the debounced version, not the original

// Fire off 3 calls within 300ms — only the LAST one runs after 1000ms
setTimeout(printMe, 100);
setTimeout(printMe, 200);
setTimeout(printMe, 300);

// Debouncing is removing unwanted input noise from buttons, switches or other user input. 
// Debouncing prevents extra activations or slow functions from triggering too often. 
// In programming, debouncing is when a function filters user input before triggering the action. 
// Often, a general debouncing function is used instead of writing new code for each input activity. 
// The debouncing function sits after the user input and then calls the target action of the button.

// function delayDecorator(fn, delay) {
//   return function (...args) {
//     setTimeout(() => fn(...args), delay);
//   };
// }

// fn is the function we want to decorate.
// delay is the number of milliseconds we want to wait.
// (...args) uses the rest parameter so it can pass any arguments to the original function.

// A decorator is a wrapper around a function that alters its behaviour. A decorator function takes another another function as input.
// The main job is still carried out by the function. 
// It can be seen as “features” or “aspects” that can be added to a function. We can add one or add many of these features without
// changing the original function code! Decorators are also sometimes called higher order functions, or functional composition.
// Use cases: We can use decorators for many things, but some typical examples include adding logging, timing, validation or caching features.

//b //c
function debounce_1(func_1, ms) {
  let timerId_1;

  return function (...args) { 
    clearTimeout(timerId_1); 
    timerId_1 = setTimeout(() => { 
      func_1.apply(this, args); 
    }, ms); 
}
}

function printMe_1(msg) {
  console.log(`printing debounced message: ${msg}`);
}

printMe_1 = debounce_1(printMe_1, 2000); 

setTimeout(() => printMe_1("First call"), 100);
setTimeout(() => printMe_1("Second call"), 200);
setTimeout(() => printMe_1("Third call"), 300);

// Arrow function: setTimeout(function () {
//   printMe_1("First call");
// }, 100);