function rollDice() {
    const number = 1 + Math.floor(Math.random() *6);
    document.getElementById("result").textContent = `You rolled ${number}`;
}

//test
if (rollDice() < 1 || result > 10) {
    throw new Error('Test failed');
}
console.log('The tests passed.');

//It should return a random number from 1 to 6