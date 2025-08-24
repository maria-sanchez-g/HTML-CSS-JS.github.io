function Person(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
} 

const person1 = new Person('M', 1);
const person2 = new Person('S', 2);

console.log(person1)
console.log(person2)

class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.human = true;
    }
}

console.log(PersonClass)