// function orderItems(itemName) {
//     return `Order placed for: ${itemName}`;
// }

// // create a decorated version of the original function
// const validatedOrderItem = validateStringArg(orderItems);

// console.log(validatedOrderItem("Apple Watch")); // should run the function
// console.log(validatedOrderItem(123)); // should throw an error 

//a //b //c //d
function orderItems(...itemName) { //original function //rest operator to capture any number of arguments, itemName becomes an arrays
    return `Order placed for: ${itemName}`;
}

//decorator function
function validateStringArg(fn) {
    return function(...args) { //arg is the parameter of the new wrapper function, useful to pass the the value to the original function
        if (!args.every(arg => typeof arg ==="string")) { //.every() is an array method that tests whether all elements in the array pass a given condition.
            throw new TypeError("Error"); //Use TypeError when you want to signal that a function was called with arguments of the wrong type. 
        }
        return fn(...args);
    };
}

// create a decorated version of the original function, returns a new decorated function. That new function is the one that does the validation and calls orderItems.
const validatedOrderItem = validateStringArg(orderItems);

//Error handling
try {
console.log(validatedOrderItem("Apple Watch", "a", "b")); // should run the function
console.log(validatedOrderItem(123, 1 , 2)); // should throw an error 
} catch (err) {
    console.error("error");
}

try {
    console.log(validatedOrderItems("Tangerine", "Phone"))
} catch (err) {
    console.error("failed")
}


//Error handling structure:
// try {
//     // code . . .
// } catch (err) {
//    // code . . .
// }

// ! flips a boolean value:
// !true becomes false
// !false becomes true
                       
// | `Error`     | Generic catch-all error, used for any kind of problem.    
// | `TypeError` | Used when a **value is not of the expected type** (wrong data type)


//Only synchronous errors can be caught; asynchronous errors still cause a crash
//The throw operator can be used in the try or catch block to intentionally cause a new or existing error to crash theapplication for a specific reason.
//The finally clause is used when something in the try…catch block needs finalising in any case of outcome, regardless of any thrown errors or return statements.