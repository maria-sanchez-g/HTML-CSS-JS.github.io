import { useState } from 'react';

function Calculator () { //each const is a state variables. Each box is a controlled input because its value depends on React state.
const [Number_1, setNumber_1] = useState(''); //useCat stores what the user writes in Name box
const [Number_2, setNumber_2] = useState(''); //useState() is a React Hook that allows you to store and update values that can change over time
const [Operator, setOperator] = useState('');
const [result, setResult] = useState('');

const handleSubmit = (e) => { //handleSubmit is the function that runs when you press the Submit button in your form.
  e.preventDefault(); //Prevents the browser from reloading the page when you press “Submit”.
  
const a = parseFloat(Number_1); //parseFloat converts a string into a decimal. When you type in an <input> box, React stores the value as a string, even if it looks like a number.
const b = parseFloat(Number_2);
if (Number.isNaN(a) || Number.isNaN(b)) {
  setResult();
  return;
}

// Number.isNaN(a) checks if a is not a number.
// || means “or” — so if either a or b is invalid, the condition is true.
// setResult("Please enter valid numbers") shows a friendly message.
// return; stops the rest of the function, preventing React from trying to calculate with invalid data.

let r;
switch(Operator) {
  case "+":
    r = a + b;
    break;
  case "-":
    r = a - b;
    break;
  case "*":
    r = a * b;
    break;
  case "/":
    r = a / b;
    break;
    default:
      r = "Unknown"
}
  setResult(String(r)); //is there to convert the result into a string before displaying it on the screen.If you do not convert it, React can sometimes behave unpredictably
};

return (
    <div className="FormCalculator componentBox">
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Number 1
            <input
              type="text"
              value={Number_1}
              name="Number_1"
              onChange={(e) => setNumber_1(e.target.value)}
            />
          </label>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Number_2
            <input
              type="text"
              value={Number_2}
              name="Number_2"
              onChange={(e) => setNumber_2(e.target.value)}
            />
          </label>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>
            Operator
            <select value= {Operator} onChange={(e) => setOperator(e.target.value)}>
              <option value="+">+</option>
              <option value="-">-</option>
              <option value="*">*</option>
              <option value="/">/</option>
            </select>
          </label>
        </div>
        <button type="submit">Calculate</button>
      </form>
        <div style={{ border: "1px solid #ccc"}}>
        {result}
        </div>
    </div>
  );
}


export default Calculator;