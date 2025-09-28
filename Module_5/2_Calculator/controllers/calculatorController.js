// Unit test - stored in square.test.js
// First we import the square function
const { add } = require('../calculator');
// Then we test it by describing the test, running the
// code, and comparing expected vs. actual results
test('add 5 with 5 to get 10', () => {
  expect(add(5, 5)).toBe(10);
});