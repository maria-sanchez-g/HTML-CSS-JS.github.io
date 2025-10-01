import { useReducer, useState } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

export default function ReducerCounter() {
  // useReducer takes a reducer function and the initial state value;
  // returns array with the state variable and a dispatch function
  const [stateCount, setStateCount] = useState(0);
  const [counter, dispatch] = useReducer(reducer, 0);
  const handleIncrement = () => {
    setStateCount("one");
    // we call the dispatch function to make all state updates
    dispatch({ type: "increment" });
  };
  const handleDecrement = () => {
    // dispatch takes a single argument - object passed to
    reducer;
    dispatch({ type: "decrement" });
  };
  return (
    <div className="ReducerCounter componentBox">
      <h2>Count: {counter}</h2>
      <button onClick={handleIncrement}>Reducer Increment</button>
      <button onClick={handleDecrement}>Reducer Decrement</button>
      {stateCount}
    </div>
  );
}