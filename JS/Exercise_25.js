// let car = {
//     make: "Porsche",
//     model: '911',
//     year: 1964,
//     description() {
//         console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
//     }
// };

// car.description(); //works

// setTimeout(car.description, 200); //fails 

//a 
//If a function relies on context (this) and is passed as a reference instead of being called directly, its context is lost.
//This needs context to work. SetTimeout does not know about car
//One solution is to wrap it inside a function

let car = {
    make: "Porsche",
    model: '911',
    year: 1964,
    description() {
        console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
    }
};

car.description(); //works

setTimeout(car.description, 200); //fails 
setTimeout( () => car.description(), 200) //Arrow function, same as below
setTimeout( function() {car.description(); }, 200)

//b //c
let car_1 = {
    make: "Porsche",
    model: '911',
    year: 1964,
    description_1() {
        console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
    }
};
let car_2 = { //spread operator, makes a shallow clone
    ...car_1,
    year: 1999
};

setTimeout( function() {car_2.description_1(); }, 200)

//The spread operator expands (or “spreads out”) the elements of an array, object, or iterable into individual elements. 
// It can be used for merging objects, cloning arrays or passing arrays items as function arguments.
//const numbers = [1, 2, 3];
// console.log(...numbers); 
// Output: 1 2 3  (spread into separate values)

//d //e
let car_3 = {
    make: "Porsche",
    model: '911',
    year: 1964,
    description_2() {
        console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
    }
};

const vehicles = car_3.description_2.bind(car_3)

setTimeout(vehicles, 200);

//.bind() creates a new function that is permanently tied (“bound”) to a specific value of this.
// Useful for passing methods as callbacks without losing their original object context.
//bind structure: const boundFunc = func.bind(context);

// Call, apply & bind are special methods that can be called on any function. They allow us to acces and override the context and arguments for that function.
// Normally, this in a function refers to the object it was called on. With apply(), call() and bind(). 
// we can set this to any value when calling a function, customising the context.
// Unlike .call() and .apply(), bind() it does not execute immediately — it gives you a reusable, “safe” version of the function.
// call() - function arguments are passed individually as a list
// apply() - function arguments are combined in one iterable object, typically an array

//e
let car_4 = {
    make: "Porsche",
    model: '911',
    year: 1964,
    description_3() {
        console.log(`This car is a ${this.make} ${this.model} from ${this.year}`);
    }
};

const vehicles_0= car_4.description_3.bind(car_4)
const vehicles_2 = {...car_4, model: "1"}; //clone and override property

const vehicles_2_bound = vehicles_2.description_3.bind(vehicles_2); //re-bind
setTimeout(vehicles_2_bound, 200); 


// Even though we created vehicles_1 with a different model and year, the vehicles function is still bound to the original car_3 object.
//We will need to re-bind