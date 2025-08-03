const fruits = ["apple", "orange", "pear", "cherries", "kiwi"];

const temp = fruits[1];
fruits[1] = fruits[4];
fruits[4] = temp;

fruits.unshift("straberry");
let lastFruits = fruits.pop();
console.log(fruits);


