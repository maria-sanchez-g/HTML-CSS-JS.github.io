import { useState } from "react"; //You need useState in this component because the component must remember which currency the user has selected in the <select> dropdown
import useBitcoinPrice from "../Hooks/useBitcoinPrice";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"]; //It is the list of allowed currencies for the dropdown.

function BitcoinRates() { // This is a React component. It will render the UI for selecting a currency
  // which currency is selected in the dropdown
  const [currency, setCurrency] = useState(currencies[0]); //useState(currencies[0]) means: start with the first currency in the list as default (which is "USD").
// "currency" will hold the currently selected currency (for example "USD"
 // "setCurrency" is the function we call to change that value.

 
  const { loading, price, error } = useBitcoinPrice(currency);
  // Call our custom hook and ask it for the Bitcoin price in the currently selected currency.
  // The hook returns an object with 3 values:
  // loading -> true if we are currently fetching
  // price -> the numeric Bitcoin price for that currency, or null if not loaded yet
  // error -> an error message if something went wrong
  // Every time "currency" changes, the hook will fetch again for the new currency.
  // I need this line because it is how your component gets the latest Bitcoin price, loading state, and error state from your custom hook called useBitcoinPrice.

  const options = currencies.map((curr) => (  // build <option> list for the dropdown
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));
  // We loop over each currency code in the array and return an <option> for it.
  // key={curr} gives React a stable ID for each option in the list.
  // value={curr} sets what value will be sent when the user picks that option.
  // curr is a variable name

  return (  // The component returns JSX. This is what will actually be rendered on the page.
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate</h3>

      <label>
        Choose currency:
        <select //"controlled component"
          value={currency} //means the selected option always matches our React state.
          onChange={(e) => setCurrency(e.target.value)} //runs when the user picks another currency.We call setCurrency(...) to update the state. That triggers a re-render and triggers the hook to fetch the new price
        >             
          {options}
        </select>
      </label>

      <p style={{ marginTop: "0.75rem" }}>
        {loading && "Loading..."}
        {!loading && error && `Error: ${error}`}
        {!loading && !error && price !== null && (
          <>
            1 BTC = {price} {currency}
          </>
        )}
      </p>
    </div>
  );
}

//{loading && "Loading..."}. This is conditional rendering using the logical AND (&&) operator.
// It means: If loading is true, display "Loading...". If loading is false, show nothing.

// {!loading && error && `Error: ${error}`}
// This checks two conditions before displaying anything.
// !loading means “loading is false” (so the request finished).
// error means there is an error message from the reducer (for example, "Network Error").

// {!loading && !error && price !== null && (
//   <>
//     1 BTC = {price} {currency}
//   </>
// )}
// This one checks three conditions:
// !loading → we are not fetching anymore.
// !error → there was no error.
// price !== null → the price actually exists (the API returned data).

// The <> ... </> is called a React Fragment.
// It allows you to group several elements without adding an extra <div> in the DOM.
export default BitcoinRates;
