const today = new Date();
console.log('Current time is ' + today.toLocaleTimeString()) 
 
console.log(today.getHours() + ' hours have passed so far today') 

//a
const minutesPassed = today.getHours() * 60 + today.getMinutes()
console.log(minutesPassed)

//b
const secondsPassed = today.getHours() * 3600 + today.getMinutes() * 60 + today.getSeconds()
console.log(secondsPassed)

//c
const today_1 = new Date();
const birthday = new Date("1992-06-17");

let years = today_1.getFullYear() - birthday.getFullYear();
let months = today_1.getMonth() - birthday.getMonth();
let days = today_1.getDate() - birthday.getDate();
//This gives you the raw difference in years, months, and days — but it might be negative if your birthday has not happened yet this month/year.

if (days < 0) { //We cannot have negative days, so we "borrow" 1 month
  months--; //shortland of months = months -1 ; it decreases the value of months by 1
  const prevMonth = new Date(today_1.getFullYear(), today_1.getMonth(), 0); //Add the number of days in the previous month to fix days.
//Example: -12 + 31 = 19 (now days is a positive number)
//The Date constructor accepts three numbers: new Date(year, monthIndex, day) monthIndex is 0–11 (0 = January, 11 = December)
//day is 1–31, but here is the trick → If you put 0 as the day, JavaScript gives you the last day of the previous month.
  days += prevMonth.getDate(); //converts negative days into a positive count by "borrowing" those days from the previous month.
  //+= is just a shortcut to add something to an existing value and save the result back into the same variable.
}
//to adjust negative days
if (months < 0) {
  years--;
  months += 12; //turn negative months into a positive count by adding a full year (12 months) ; += is a shortland operator x = x + y;
}

console.log(`I am ${years} years, ${months} months and ${days} days old`);

//d
function daysInBetween(date1, date2) {
const d1 = new Date(date1); //convert to date objects in case strings are passed
const d2 = new Date(date2); //new Date(...) is the Date constructor in JavaScript. It creates a Date object from whatever you pass inside the parentheses.

const one = d1.getTime(); //convert to miliseconds
const two = d2.getTime(); 

const difference = Math.abs(one - two); //math.abs to ensure the result is positive

const diffDays = difference / (1000 * 60 * 60 * 24); //converts to days

return diffDays;

}
console.log(daysInBetween("2025-09-12","2025-08-01"))