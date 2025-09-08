// console.log(ucFirstLetters("los angeles") ) //Los Angeles

function capital(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(capital("hola adios"))


//adios has not capital letter
//.map(w => w ? w[0].toUpperCase() + w.slice(1) : w)