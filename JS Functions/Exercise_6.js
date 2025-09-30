const westley = {
    name: 'Westley',
    numFingers: 5
}
const rugen = {
    name: 'Count Rugen',
    numFingers: 6
}

const inigo = {
    firstName: 'Inigo',
    lastName: 'Garcia',
    greeting(person) { 
        let greeting = `Hello ${person.name}, my name is ${this.firstName} ${this.lastName}.`;
        console.log(greeting + this.getCatchPhrase(person));
    },
//     getCatchPhrase(person) {
//         if (person.numFingers == 6) {
//             return "Hello. My name is Inigo Montoya. You killed my father. Prepare to die.";
//         } else {
//             return 'Nice to meet you.';
//         }
//     }
// };

    getCatchPhrase: (person) =>
        person.numFingers == 6
        ? "Hello. My name is Inigo Montoya. You killed my father. Prepare to die."
        : "Nice to meet you."
};


inigo.greeting(westley)
inigo.greeting(rugen) 