 
// let a = 2, b = 3;
// let result = `${a} + ${b} is `;

// if (a + b < 10) {
//   result += 'less than 10';
// } else {
//   result += 'greater than 10';
// } 

let a = 2, b = 3;
let result = `${a} + ${b} is `;

result += (a + b < 10) ? 'less than 10' : 'greater than 10';

console.log(result)
//+= keeps the original string and then adds more to it