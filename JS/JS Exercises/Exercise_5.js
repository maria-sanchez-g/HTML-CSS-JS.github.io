//function declaration
function getGreeting(name) {
    return 'Hello ' + name + '!';
} 

console.log(getGreeting("Maria"))

//function syntax
const expressionSyntax = function (name) {
    return 'Hello' + name + '!';
}

console.log(expressionSyntax("Maria"));

//arrow function sysntax
const arrowSyntax = (name) => 'Hello' + name + '!';

console.log(arrowSyntax("Maria"));