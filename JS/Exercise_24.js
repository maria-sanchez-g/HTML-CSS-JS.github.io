//a
let a = 1; //hold previous fibonacci number
let b = 1; //holds the current fibonaci number
let count = 0;

const timerId = setInterval(function printFibonacci() { //timerId stores the interval ID so we can later use clearInterval
  if (count === 0) {
    console.log(a);
  } else if (count === 1) {
    console.log(b);
  } else {
    let next = a + b;  // calculate next Fibonacci number, sum of previous numbers. This way, each loop has the right two numbers ready to calculate the next one.
    console.log(next);

    a = b;             // shift a forward
    b = next;          // shift b forward
  }

  count++; // increment count after printing, this keeps track of how many numbers have been output.

  if (count === 10) {  // stop after 10 numbers
    clearInterval(timerId);
    console.log("Stopped Fibonacci sequence");
  }
}, 1000);

//setInterval(function () {element.innerHTML += "Hello"}, 1000);
//This pattern works because we always remember the last two numbers, calculate a new one, and then shift the variables forward.

//b //c
function repeatTimeout(delay, limit) { //repeatTimeout is a wrapper that sets everything up. Delay is how many miliseconds to wait between prints
  let a = 1;
  let b = 1;
  let count = 0;

  function printFibonacciTimeouts() { //This function runs once, prints the next Fibonacci number, and then schedules itself again with setTimeout.
    if (count === 0) {
      console.log(a);
    } else if (count === 1) {
      console.log(b);
    } else {
      let next = a + b;
      console.log(next);

      a = b;
      b = next;
    }

    count++;

    if (count < limit) { //this schedule the next call
      setTimeout(printFibonacciTimeouts, delay); // schedule the next run
    } else {
      console.log("Stopped Fibonacci sequence");
    }
  }

  setTimeout(printFibonacciTimeouts, delay); // start the first timeout, it starts the whole process
}

// Call with delay = 1000ms and limit = 5 numbers
repeatTimeout(1000, 5);

//Nested SetTimeout structure
//You schedule the next run yourself inside the function.
// It runs only once each time, then waits for you to schedule it again.

// Gives you full control: you can change the delay or stop simply by not calling setTimeout again.
// function runTask() {
//   // 1️⃣ Do some work
//   console.log("Running task");

//   // 2️⃣ Schedule the next call manually
//   setTimeout(runTask, 1000);
// }

// // 🔄 Start the first call
// setTimeout(runTask, 1000);


//SetInterval structure
//You schedule it once.
// The callback is called automatically every 1000ms until you manually stop it.
// The delay is fixed — if your code takes longer than the delay, calls can overlap.

// const timerId = setInterval(() => {
//   // 1️⃣ Do some work
//   console.log("Running task");

//   // 2️⃣ Work is done — but interval is still running automatically
// }, 1000);

// // ⛔ Stop it when needed:
// clearInterval(timerId);
