// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.human = true;
// } 

// const person1 = new Person('M', 16);
// const person2 = new Person('S', 15);

// console.log(person1)
// console.log(person2)

class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.human = true;
    }
    canDrive() {
        return this.age >= 16;
    }
}

const person3 = new PersonClass('Maria', 18)

console.log(PersonClass)

console.log(person3.canDrive());
