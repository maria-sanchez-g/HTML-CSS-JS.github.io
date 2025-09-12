// console.log(ucFirstLetters("los angeles") ) //Los Angeles

function capital(str) {
    return str
    .split(" ")
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(capital("hola adios hola fu"))


//.split(" ") Takes your input string and splits it into an array of words using the space " " as a separator.
//.map Iterates through each word in the array. For each word: takes the first character and makes it uppercase.
//word.slice(1) → takes the rest of the characters after the first and concatenates them.
//.join joins the array back into a string with spaces

//.map(w => w ? w[0].toUpperCase() + w.slice(1) : w)