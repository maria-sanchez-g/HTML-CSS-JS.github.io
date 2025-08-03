//function 1
function addition(p1, p2) {
    return p1 + p2;
}
console.log(addition(5,5));

//test 1
if (addition(5,5) !=10) {
    throw new Error('Test failed');
}
if (addition(0,0) !=0) {
    throw new Error('Test failed');
}
if (addition(-1,2) !=1) {
    throw new Error('Test failed');
}
console.log('All tests passed.');

//It should return the sum of two numbers
//It should return 0 when both inputs are 0


//function 2
function substraction(p1, p2) {
    return p1 - p2;
}
console.log(substraction(5,5));

//test 2
if (substraction(5,5) !=0) {
    throw new Error('Test failed');
}
if (substraction(0,0) !=0) {
    throw new Error('Test failed');
}
if (substraction(-1,2) !=-3) {
    throw new Error('Test failed');
}
console.log('All tests passed.');

//It should return the rest of two numbers
//It should return 0 when both inputs are 0


//function 3
function division(p1, p2) {
    return p1 / p2;
}
console.log(division(5,5));

//test 3
if (division(5,5) !=1) {
    throw new Error('Test failed');
}
if (division(1,1) !=1) {
    throw new Error('Test failed');
}
if (division(-1,2) !=-0.5) {
    throw new Error('Test failed');
}
console.log('All tests passed.');

//It should return the division of two numbers


//function 4
function multiplication(p1, p2) {
    return p1 * p2;
}
console.log(multiplication(5,5));

//test 4
if (multiplication(5,5) !=25) {
    throw new Error('Test failed');
}
if (multiplication(0,0) !=0) {
    throw new Error('Test failed');
}
if (multiplication(-1,2) !=-2) {
    throw new Error('Test failed');
}
console.log('All tests passed.');

//It should return the multiplication of two numbers
//It should return 0 when both inputs are 


//function concatenate
function concatenate(name) {
    return `Hello ${name}`;
}

console.log(concatenate("Maria"));

//test 5
if (concatenate(5) !="Hello 5") {
    throw new Error('Test failed');
}
if (concatenate("Maria") !="Hello Maria") {
    throw new Error('Test failed');
}
console.log('All tests passed.');

//It should return two elements together