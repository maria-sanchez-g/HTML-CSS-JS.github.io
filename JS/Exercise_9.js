let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let dog1 = 'Bingo';
let cat1 = { name: 'Fluffy', breed: 'Siberian' };

let moreSports = [...teamSports];

//teamSports.push('Basketball');
//teamSports.unshift('Football');

moreSports.push('Basketball');
moreSports.unshift('Football');

let dog2 = dog1;

dog1 = 'Bango';

let cat2 = {...cat1};

//cat1.name = 'Misty';
cat2.name = 'Misty';

console.log(teamSports)
console.log(dog1)
console.log(cat1)