const phoneBookABC = new Map() //an empty map to begin with
phoneBookABC.set('Annabelle', '0412312343') //map.set(key, value): stores the value by the key
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182') 

//a
const phoneBookDEF = new Map([
["Daysie", "value1"],
["Edu", "value 2"],
["Fin", "value 3"]
])

//b
console.log(phoneBookDEF);
console.log(phoneBookDEF.get("Edu"))

for (let name of phoneBookDEF) {
    console.log(name)
}

//c
phoneBookABC.set('Caroline', '000000000');

console.log(phoneBookABC.get("Caroline"))

//e //f
const phoneBook = new Map ([...phoneBookABC, ...phoneBookDEF]);

console.log(phoneBook)

//spread operator lets you expand arrays, objects, or iterables into individual elements. You use it whenever you need to copy, merge, or pass multiple values without writing loops.

