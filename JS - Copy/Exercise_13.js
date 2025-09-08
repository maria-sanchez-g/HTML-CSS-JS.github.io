//aray
const animals = ['Tiger', 'Giraffe']
console.log(animals) 

//a
const animals_1 = animals
animals.push ('dog', 'cat')
console.log(animals_1)

//b
const animals_2 = animals_1
animals_1.unshift ('snake', 'rabbit')
console.log(animals_2)

//c
const animals_3 = [...animals_2]
animals_3.sort();
console.log(animals_3)

const animals_4 = [...animals_2];
animals_4.sort((a,b) => a.localeCompare(b));
console.log(animals_4);

//d
function replaceMiddleAnimal () {
    const middle = Math.floor(animals_2.length / 2);
    animals_2.splice (middle, 1, "newValue");
    return animals_2;
}

console.log(replaceMiddleAnimal())

//e
//beginsWith = the letters the user wants to check for.
// .startsWith() = the method that checks if one string begins with those letters.
// .toLowerCase() = makes both lowercase so the check works regardless of upper/lower case.

const animals_5 = [...animals_2];

function findMatchingAnimal(beginsWith) {
  return animals_5.filter(animal =>
    animal.toLowerCase().startsWith(beginsWith.toLowerCase())
  );
}

console.log(findMatchingAnimal("T"));