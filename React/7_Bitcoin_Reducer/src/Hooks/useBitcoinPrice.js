import { useEffect, useReducer } from "react";
import axios from "axios";

// The state shape we want to manage
const initialState = {
  loading: false,
  price: null,
  error: null,
};

// Reducer to control all state transitions
function reducer(state, action) {
  switch (action.type) {
    case "FETCH_START":
      return {
        loading: true,
        price: null,
        error: null,
      };
    case "FETCH_SUCCESS":
      return {
        loading: false,
        price: action.payload,
        error: null,
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        price: null,
        error: action.payload,
      };
    default:
      return state;
  }
}

// Custom hook to fetch Bitcoin price for a given currency
function useBitcoinPrice(currency) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (!currency) return;

    // this AbortController lets us cancel the request if currency changes quickly
    const controller = new AbortController();

    async function fetchPrice() {
      dispatch({ type: "FETCH_START" });

      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/simple/price",
          {
            params: {
              ids: "bitcoin",
              vs_currencies: currency.toLowerCase(),
            },
            signal: controller.signal,
          }
        );

        const value =
          response.data.bitcoin?.[currency.toLowerCase()] ?? null;

        dispatch({ type: "FETCH_SUCCESS", payload: value });
      } catch (error) {
        // If the request was cancelled, do not set an error
        if (axios.isCancel(error)) {
          return;
        }
        dispatch({
          type: "FETCH_ERROR",
          payload: error.message || "Error loading price",
        });
      }
    }

    fetchPrice();

    // cleanup runs if currency changes or component unmounts
    return () => {
      controller.abort();
    };
  }, [currency]);

  // state has: loading, price, error
  return state;
}

export default useBitcoinPrice;