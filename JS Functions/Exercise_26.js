// function multiply(a, b) {
//     console.log( a * b );
// }

// multiply.delay(500)(5, 5); // prints 25 after 500 milliseconds 

//a
Function.prototype.delay = function (ms) { //Function.prototype is the prototype object for all functions, adding delay means every function has a delay.(ms) method available
    const originalFunction = this; //Inside delay, this refers to the function that called .delay() // multiply.delay(500) "this" is multiply
    return function (...args) { //returns a new function, arguments get captured as args
        setTimeout(() => { //scheduling the call
            originalFunction(...args); //closure . The arrow function then calls originalFunction (which is multiply) with the arguments you provided
        }, ms);
    };
};

function multiply(a, b) {
    console.log( a * b );
}


multiply.delay(500)(5, 5); // prints 25 after 500 milliseconds

//In JavaScript, every object has an internal property called [[Prototype]], which is a reference to another object. That object is called the prototype.
//When you use new with that function, the new object’s [[Prototype]] points to that .prototype.
//Prototype structure:
// function Car(make, model) {
//   this.make = make;
//   this.model = model;
// }
// Car.prototype.description = function () {
//   console.log(`This car is a ${this.make} ${this.model}`);
// };
// const car1 = new Car("Porsche", "911");
// const car2 = new Car("Ferrari", "F8");
// car1.description(); // "This car is a Porsche 911"
// car2.description(); // "This car is a Ferrari F8"

//description is stored once on Car.prototype.
//Both car1 and car2 share the same description function via the prototype chain.

//Object.setPrototypeOf() and Object.create() are ways to work directly with prototypes, they let you manually control inheritance.
//Object.setPrototypeOf(), changes the prototype of an existing object
//Object.create(), creates a new object with its prototype set to the given object.

//b
Function.prototype.delay = function (ms) {
    const originalFunction = this; 

    return function (...args) { 
        setTimeout(() => { 
            originalFunction.apply(this, args);
        }, ms);
    };
};

function multiply(a, b) {
    console.log( a * b );
}


multiply.delay(500)(5, 5); 

//c
Function.prototype.delay_1 = function (ms_1) {
    const originalFunction_1 = this; 
    return function (...args) { 
        setTimeout(() => { 
            originalFunction_1(...args); //We use args to make the delay flexible, no matter how many arguments it takes
        }, ms_1);
    };
};

function multiply_1(a, b, c, d) {
    console.log( a * b * c * d);
}

multiply_1.delay_1(500)(5, 5, 5, 5);