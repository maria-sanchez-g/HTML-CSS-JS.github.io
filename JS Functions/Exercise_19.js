let salaries = {
    "Timothy" : 35000,
    "David" : 25000,
    "Mary" : 55000,
    "Christina" : 75000,
    "James" : 43000
}; 

//a
function sumSalaries(salaries) {
    const totalSalary = Object.values(salaries)
    .reduce((initial, num) => initial + num, 0);
    return `The total salary is $${totalSalary}`;
}

console.log(sumSalaries(salaries));

//reduce method to sum up arrays
//object.values() is a built-in JavaScript method that takes an object and returns an array of its property values.
//const value = arr.reduce(function(accumulator, item, index, array)

//b
function topEarner(salaries) {
    const salary = Object.entries(salaries)
    .sort((a, b) => b[1] - a[1]) [0][0];
    return salary;
}

console.log(topEarner(salaries))

//objec.entries gives [key, value] ; objec.keys ; object.value just gives one
//.sort((a, b) => b[1] - a[1])
// a[1] means the salary of the first item.
// b[1] means the salary of the second item.
// b[1] - a[1] sorts descending (highest to lowest):
// If result > 0 → b comes before a.
// If result < 0 → a comes before b.
// If result = 0 → order does not change.
// //[0] is an array index
//second [0] , takes the first element, so just the name

function topEarner_1(salaries) {
    const[[name, salary]] = Object.entries(salaries)
    .sort((a, b) => b[1] - a[1]);
    return name;
}
console.log(topEarner_1(salaries))