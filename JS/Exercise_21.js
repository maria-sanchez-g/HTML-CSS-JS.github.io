// function makeCounter() {
//     let currentCount = 0;

//     return function() {
//         currentCount++;
//         console.log(currentCount)
//         return currentCount;
//     };
// }

// let counter1 = makeCounter();

// counter1(); // 1
// counter1(); // 2 

//makeCounter() runs once.
// It creates currentCount and sets it to 0.
// It returns the inner function (but does not execute it yet).
// The returned function “remembers” the variable currentCount — even after makeCounter has finished running.
// This is what we call a closure: the inner function keeps a reference to the variables of its outer function.



//A decorator function is a function that takes another function as an argument, wraps it with extra behavior, and returns a new function.

//a
// function makeCounter() {
//     let currentCount = 0;

//     return function() {
//         currentCount++;
//         console.log(currentCount)
//         return currentCount;
//     };
// }

// let counter1 = makeCounter();
// let counter2 = makeCounter();

// counter1(); // 1
// counter1(); // 2 
// counter2();

//b
// function makeCounter_1() {
    
//     return function(count) {
//         count++;
//         console.log(count)
//         return count;
//     };
// }

// let count_1 = makeCounter_1();

// console.log(count_1(7));

//c
function makeCounter_2(startFrom, incrementBy) {
let currentCount_1 = startFrom;
    return function() {
        currentCount_1 += incrementBy //add incrementBy each time
        return currentCount_1;
    };
}

let counter_3 = makeCounter_2(1, 3); //// create the counter, starting from 1, adding 3

console.log(counter_3());

//+= is called the addition assignment operator, x +=y; == x = x+y