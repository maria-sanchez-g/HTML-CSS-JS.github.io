// console.log(truncate('This text will be truncated if it is too long', 25))
// // This text will be truncat...

function truncate(str, max) {
    if (max > str.length) {
        return str;
    }   else {
        return str.slice(0, max) + "...";
    }
}

console.log(truncate('hosadnka jhds', 10))


truncate_1 = (str, max) => {
    return str.length > max ? str.slice(0, max) + "..." : str;
}
console.log(truncate_1('hosadnka jhds', 10))


truncate_2 = (str, max) => {
    return str ? max > str.legth : str.slice(0, max) + "..."
}

console.log(truncate_2('hosadnka jhds', 10))