// let goal = 5;
// for (let i = 0; i < goal; i++) {
//     console.log(`Iteration ${i} of ${goal}`)
// }

const user = {
    name: 'Bilbo Baggins',
    printThis() {
        console.log(this); // 'this' is the current object
        return this; // if we return it, we can 'chain' object methods together
    },
    printGreeting() {
        console.log(`Hello, I'm ${this.name}`); // 'this' is the current object
    }
}
user.printThis().printGreeting(); // methods chained together, works because printThis returns this