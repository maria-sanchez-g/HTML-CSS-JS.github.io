// function randomDelay() {
//     // your code
// }
// randomDelay().then(() => console.log('There appears to have been a delay.')); 

//a
function randomDelay() {
  return new Promise((resolve) => {
    // Generate a random delay between 1 and 20 seconds
    const delay = Math.floor(Math.random() * 20000) + 1000;

    // Use setTimeout to wait for that delay, then resolve
    setTimeout(() => {
      resolve(); //we put resolve() inside setTimeout's callback, because we want the Promise to finish only after the timer completes.
    }, delay);
  });
}

// Test
randomDelay().then(() => console.log('There appears to have been a delay.'));

//b //c //d
function randomDelay_1() {
  return new Promise((resolve, reject) => {
    const delay_1 = Math.floor(Math.random() * 20000) + 1000;

    setTimeout(() => {
      if (delay_1 % 2 === 0) {
        resolve(delay_1);
      } else {
        reject (delay_1)
      }
    }, delay_1);
  });
}

randomDelay_1()
.then((delay) => console.log(`${delay}'Success'`)) //Inside the Promise → we have delay_1.
//Outside the Promise → we cannot see delay_1, but we get its value through the parameter we name in .then(...)
//Whatever you passed to resolve(...) becomes the parameter of the .then(...) callback.
We can name that parameter anything we like
.catch((delay) => console.error(`${delay}'Error'`));

//A Promise represents the eventual completion (or failure) of an asynchronous operation. It provides a way to wait for an
// unknown period of time and then execute certain code once a result (or an error) is returned. 
// We can produce (create) promises explicitly, but most often we will consume (use) promises from other asynchronous
// code, such as database manipulation or HTTP requests.
// Producer Syntax: Promise constructor takes a single argument which is a function, with resolve and reject callback functions as arguments.

// const promise = new Promise(function(resolve, reject) {
//     // executor
// });

// Consumer Syntax: uses the then, catch and finally functions of an existing promise to define what should happen when theasynchronous operation succeeds or fails.
// then - function that executes when promise resolves (success)
// catch - function that executes when promise rejects (failure)
// finally - function that executes when promise settles (either success or failure)