// class DigitalClock {

//     constructor(prefix) {
//         this.prefix = prefix;
//     }

//     display() {
//       let date = new Date();
//       //create 3 variables in one go using array destructuring
//       let [hours, mins, secs] = [date.getHours(), date.getMinutes(), date.getSeconds()];

//         if (hours < 10) hours = '0' + hours;
//         if (mins < 10) mins = '0' + mins;
//         if (secs < 10) secs = '0' + secs;

//         console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
//     }

//     stop() {
//         clearInterval(this.timer);
//     }

//     start() {
//         this.display();
//         this.timer = setInterval(() => this.display(), 1000);
//     }
// }

// const myClock = new DigitalClock('my clock:')
// myClock.start() 

//a //b
class DigitalClock { //parent class
    constructor(prefix) { //constructor
        this.prefix = prefix; //Stores the label that will prefix the time output. Attaches it to the instance (this).
     }

        display() { //display, stop and start are functions but in class syntax we call them methods attched to the class. display is a function that gets the current time and logs it.
        let date = new Date();
        //create 3 variables in one go using array destructuring
        let [hours, mins, secs] = [date.getHours(), date.getMinutes(), date.getSeconds()];

            if (hours < 10) hours = '0' + hours;
            if (mins < 10) mins = '0' + mins;
            if (secs < 10) secs = '0' + secs;

            console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
        }

        stop() { //a function that calls display() once and then sets a repeating timer (using setInterval).
            clearInterval(this.timer);
        }

        start() { //a function that calls display() once and then sets a repeating timer (using setInterval).
            this.display();
            this.timer = setInterval(() => this.display(), this.precision);
        }
    }

    class PrecisionClock extends DigitalClock { //subclass that adds precision. 
        constructor(prefix, precision = 1000) {
            super(prefix);
            this.precision = precision;
        }

        start() {
            this.display();
            this.timer = setInterval(() => this.display(), this.precision);
            }
    }    

    class AlarmClock extends DigitalClock {
        constructor(prefix, wakeupTime = "07:00") {
            super(prefix);
            this.wakeupTime = wakeupTime;
        }

        display() {
            const now = new Date(); //Creates a Date object representing the exact current date and time.
            const hh = String(now.getHours()).padStart(2, "0");
            const mm = String(now.getMinutes()).padStart(2, "0");

            if (`${hh}:${mm}` === this.wakeupTime) {
            console.log("Wake Up!");
            this.stop();
            } else {
            super.display(); // just call parent display for normal behavior
            }
        }
    }
const myClock = new PrecisionClock('my clock:', 2000);
myClock.start();
const myClock_1 = new AlarmClock('Wake up', "07:00")
myClock_1.start();

//class PrecisionClock extends DigitalClock: Declares a subclass. extends sets up prototype inheritance so PrecisionClock instances reuse 
// DigitalClock methods (display, start, stop) unless overridden.
// constructor(prefix, precision = 1000) {
// Adds a new parameter, precision, with a default value of 1000 ms. If the caller omits it, the clock still ticks once per second.

// now.getHours() gives you the hour (0–23).
// String(...) converts it to text.
// .padStart(2, "0") ensures it always has two digits (for example 7 becomes "07").


//Classes: we can use classes as a template for creating objects and encapsulating data and functions. 
//These are built on prototypes but with extra syntax and features which are useful for object-oriented programming.
//A class is a blueprint for creating objects with:
// properties (data attached to each object)
// methods (functions shared by all objects)

// Key features of classes:
// Constructor (called when creating an object as an instance of the class with new)
// Instance methods and fields (defined in the class, belong to an object instance)
// Static methods and fields (defined in the class, belong to the class itself)
// Inheritance (via the extends keyword - children inherit/override methods and fields)
// Encapsulation (via _protected and #private methods/fields)

//Class structure:
// class ClassName {
//   // 1. Constructor (runs when you do "new ClassName(...)")
//   constructor(param1, param2) {
//     this.property1 = param1;
//     this.property2 = param2;
//   }

//   // 2. Instance Methods (shared by all objects of this class)
//   methodOne() {
//     console.log(`Property1 is: ${this.property1}`);
//   }

//   methodTwo() {
//     return this.property2 * 2;
//   }

//   // 3. Static Methods (called on the class itself, not on instances)
//   static info() {
//     console.log("This is a static method");
//   }
// }

//If you want a class to inherit from another class, you use extends
//extends structure:
// class ParentClass {
//   constructor(parentParam) {
//     this.parentProp = parentParam;
//   }

//   parentMethod() {
//     console.log(`Parent method: ${this.parentProp}`);
//   }
// }

// class ChildClass extends ParentClass {
//   constructor(parentParam, childParam) {
//     super(parentParam); // ✅ must call super() first to set up 'this'
//     this.childProp = childParam;
//   }

//   childMethod() {
//     console.log(`Child method: ${this.childProp}`);
//   }
// }

//The super() method refers to the parent class.
//By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods.
//In a class that uses extends, you must call super() before using this.