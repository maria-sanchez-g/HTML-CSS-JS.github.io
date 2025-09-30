function camelCase(cssProp) {
    return cssProp.replace(/-([a-z])/, function(a, b) {
        return b.toUpperCase();
    });
}

console.log(camelCase("margin-left"))

// regex pattern.
// -([a-z]) means find a dash followed by a lowercase letter. The parentheses ( ) mean we "save" this part so we can use it later.
// [a-z] means any letter from a to z.
// The dash disappears, the letter becomes uppercase.
//call-back function inside of replace (a, b)
//a = -1; a= match the text that regex found
//b = 1 ; b is what replaces a
//A callback function is just a function that you pass as an argument to another function, so the other function can call it when it needs.

function camelCase_1(cssProp) {
    let result = "";
    for (let i = 0; i <cssProp.length; i++)
        if (cssProp[i] == "-") {
            i++
            result += cssProp[i].toUpperCase();
        } else {
            result += cssProp[i];
        }
        return result;
}
    
console.log(camelCase_1("background-image"))

//Let result, because we can't write reurn inside of the lopp, otherwise, as soon as the function hits return, it exits immediately
// i creates a counter variable starting at 0
// this is the condition: i < cssProp.length , so the loop will keep running as long as i is less than the length of the string
//i++ means increase by 1 after each iteration
//let i creates a variable i in memory
// square brackets are used for indexing (accessing array or string elements) parentheses is used for function call
//i++ means we increase i by 1 (i++) to move directly to the next character (the letter after the dash)
//The += operator is shorthand for “take the current value and add something to it.

function camelCase_2(cssProp) {
    let result = ""
    let upperNext = false;

    for (let i of cssProp) {
        if (i == "-") {
            upperNext = true;
        } else {
            result += upperNext ? i.toUpperCase() : i;
            upperNext = false;
        }
    }
    return result;
}

console.log(camelCase_2("margin-left"))

//let upperNext = false; works like a flag (a little reminder for the loop)
//upperNext = true ; When the loop sees a "-" (dash): We don’t add it to result. Instead, we set a flag upperNext = true → which means:remember that the next character should be capitalized
//Then reset upperNext to false (so only one letter is affected)
// += means add something to the end of the current result string
// condition ? valueIfTrue : valueIfFalse
// It has two conditionals: First conditional → check if current character is a dash. Second conditional → check what to do with non-dash characters.
// function camelCase_2(cssProp) {
//     let result = "";
//     let upperNext = false;

//     for (let i of cssProp) {
//         if (i === "-") {
//             upperNext = true; // mark that next char must be uppercase
//         } else {
//             if (upperNext) {
//                 result += i.toUpperCase(); // make next char uppercase
//                 upperNext = false;         // reset the flag
//             } else {
//                 result += i;               // normal character
//             }
//         }
//     }
//     return result;
// }
function camelCase_3(cssProp) {
  return cssProp
    .split('-') //split the string at every dash
    .map((word, index) => //.map loops through each element of the array ; word is the current element ; index is the position
      index ? word[0].toUpperCase() + word.slice(1) : word //if index == 0 return word; if > 0 capitalize the first character ; 
      // word.slice to keep the rest unchanged
    )
    .join(''); //joins the array back
}

console.log(camelCase_3("margin-left"));       // marginLeft
console.log(camelCase_3("background-image"));  // backgroundImage
console.log(camelCase_3("display"));           // display
