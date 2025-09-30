
//a)
let twentyCents = 0.20
let tenCents = 0.10

console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`) 
// 0.2 + 0.1 = 0.30000000000000004 
//JavaScript uses the IEEE 754 standard to represent numbers

let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);

console.log(fixedTwenty + fixedTen) //why is this not working? Because they are strings

console.log(+fixedTwenty + +fixedTen) //unary plus
console.log(Number((+fixedTwenty + +fixedTen).toFixed(2)));

//b)
function currencyAddition(float1, float2) {

    return Number((float1 + float2).toFixed(2));
}

console.log(currencyAddition(twentyCents, tenCents));

//c)
function currencyOperation(float1, float2, operation) {
    switch (operation) {
        case "rest":
            return Number((float1 - float2).toFixed(2));
        case "multiplication":
            return Number((float1 * float2).toFixed(2));
        case "sum":
            return Number((float1 + float2).toFixed(2));
        case "division":
            return Number((float1 / float2).toFixed(2));
            break;
        default:
            return "invalid";
    }
}
console.log(currencyOperation(0.1, 0.2, "rest"));

//d)
function currencyOperation(float1, float2, operation, numDecimals) {
    switch (operation) {
        case "rest":
            result = float1 - float2;
        case "multiplication":
            result = float1 * float2;
        case "sum":
            result = float1 + float2;
        case "division":
            result = float1 / float2;
            break;
        default:
            return "invalid";
    }
    return Number(result.toFixed(numDecimals));
}
const value = currencyOperation(0.10, 0.20, "division", 4);
console.log(currencyOperation(0.10, 0.20, "division", 4));
console.log(value.toFixed(4));

//A JavaScript number does not store “trailing zeros.
// So if you want both:
// keep it as a number (so you can do math),
// and also always show 4 decimals when printing, you must handle the formatting when you display it, not when you store it.