import { useEffect, useReducer } from "react";
import axios from "axios";

// Defines what the state looks like at the start. These initial values tell React what type of data to expect and prevent errors before the data is ready.
const initialState = {
  loading: false, //shows if the app is currently fetching data. When the component first loads, no data is being fetched yet.
  // When you start fetching data, you change it to true to show a spinner or “Loading…” message. After the data arrives or fails, you set it back to false.
  price: null, //the actual Bitcoin price returned from the API.
  error: null, //any message if the request fails.
};

// Reducer to control all state transitions
function reducer(state, action) {
  switch (action.type) { //action.type tells the reducer what kind of update to perform.
    case "FETCH_START": //When a fetch begins, mark loading as true and clear old values.
      return {
        loading: true,
        price: null,
        error: null,
      };
    case "FETCH_SUCCESS": //When the request succeeds, stop loading and set price to the data contained in action.payload.
      return {
        loading: false,
        price: action.payload,
        error: null,
      };
    case "FETCH_ERROR": //When the request fails, stop loading and store the error message.
      return {
        loading: false,
        price: null,
        error: action.payload,
      };
    default: //Always return the current state if nothing matches.
      return state;
  }
}
//useReducer is another built-in React hook which provides an alternative to useState, best suited for simplifying complex state updates.
//A reducer function takes two inputs — state and action — and returns a new state.
// 1. The state variable, Represents the current data or situation of your component.
// 2. The action passed from dispatch, which tells the reducer what action to take on the state variable. 
// Action is typically an object containing properties needed for the update to state, such as the type of update. Sometimes it carries data using payload.

// A common use-case for useReducer is to handle the various possible outcomes of fetching remote data. We often want to know when the data has
// finished loading, what the successful result was, and if there was any error. Instead of managing separate useState calls, we can combine it


// Custom hook to fetch Bitcoin price for a given currency
function useBitcoinPrice(currency) { //The parameter currency is passed into the hook, The hook will use this to fetch the Bitcoin price in that currency.
  const [state, dispatch] = useReducer(reducer, initialState);

// state → holds the current state object (loading, price, error).
// dispatch → a function that you use to send actions to the reducer.

// The react hook takes two arguments:
// A reducer function — this decides how the state changes.
// An initial state — the default values when the hook first runs.

// React calls the reducer(state, action) function, and the new returned state replaces the old one. So your component gets updated automatically.

  useEffect(() => { //useEffect runs when the selected currency changes.
    if (!currency) return; // ! means no. It means If there is no currency value provided, or it is empty, then stop.”
    // return; exits the function immediately. That means the code below it will not run.

// React’s main job is to render the UI (what the user sees).
// But fetching data from an API, setting timers, or subscribing to events are side effects — they happen outside of the rendering process.
// If you call fetch() directly in the body of the function, it would:
// Run every single time the component renders and cause an infinite loop

    const fetchPrice = async () => { //Calls the CoinGecko API to get the current Bitcoin price.
      dispatch({ type: "FETCH_START" });  //Sends an action to your reducer telling it that data fetching has started. The reducer receives { type: "FETCH_START" } and updates the state:

// Declares a new asynchronous function named fetchPrice. async means that this function can use the await keyword inside it.
// The reason you make it async is because axios.get() returns a Promise (data that arrives later), and you need to wait for it.

      try { //Begins a try...catch block. You use this to handle any possible network errors cleanly
        const response = await axios.get( //await pauses the function until the response arrives.
          `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency.toLowerCase()}`
        );
        const price = response.data.bitcoin[currency.toLowerCase()]; //stores the value fetch in the variable price
        dispatch({ type: "FETCH_SUCCESS", payload: price }); //Sends another action to the reducer, this time signaling that data fetching succeeded.
      } catch (error) { //If something goes wrong in the try block (like the API is unavailable), this block runs instead.
        dispatch({ type: "FETCH_ERROR", payload: error.message }); //Dispatches an action telling the reducer there was an error. The payload carries the error message (for example, "Network Error").
      }
    };

    fetchPrice(); //It is  afunction call. Immediately calls the fetchPrice function you just defined. This line executes the function.
  }, [currency]);
// This is the closing of the useEffect hook. The [currency] dependency means the effect (and therefore the API call) runs:
// Once when the component first mounts, and again whenever the currency value changes (e.g., from USD → EUR)
  return state; //The custom hook returns the current state object. This allows the component that uses this hook to access:state.loading, state.price, state.error
}

export default useBitcoinPrice;

//This file is not a component, it is a custom function, that's why is in js and not jsx. It contains logic (useReducer, axios... does not return any div, h3...)