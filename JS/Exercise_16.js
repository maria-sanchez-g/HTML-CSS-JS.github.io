
const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]
const letter = ['a','b','a','c','d','e','b']

function unique(duplicatesArray) {
    return duplicatesArray.filter((value, index) => {
        return duplicatesArray.indexOf(value) === index;
    });
}


console.log(unique(colours)) // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
console.log(unique(testScores)) // [ 55, 84, 97, 63, 32, 91, 43 ]
console.log(unique(letter))

//const results = arr.filter(function(item, index, array) {
//item (current element) index (position of the element in the array) array(the full array itself)
//Filter: Runs a callback function for each element in the array. If your callback returns true, that element is kept.
//If your callback returns false, that element is removed.
//Returns a new array with all the elements that passed the test.
//The arrow function (item, index) => ... is needed to tell filter:“Here is the function you should run on each element, with two parameters:
//item = the element itself, index = its position in the array.”
//array.filter((item, index) => array.indexOf(value) === index);
//then inside that function we compare with index.of