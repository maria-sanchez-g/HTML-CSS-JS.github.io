const sydney = {
    name: 'Sydney',
    population: 5_121_000,
    state: 'NSW',
    founded: '26 January 1788',
    timezone: 'Australia/Sydney'
} 

const canberra = {
    name: 'Canberra',
    state: 'ACT',
    timezone: 'Australia/Canberra'
}

function city (x) {
    for (let i in x)
    console.log(`${i}: ${x[i]}`);
}

city(sydney);
city(canberra);