import { useState, useEffect} from "react";

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];
// Constant array for the dropdown. It does not change between renders, so it can live outside the component
function BitcoinRates() {
    const [currency, setCurrency] = useState(currencies[0]); // State: currently selected currency. Default to the first value of the currencies array as the default state
    const [price, setPrice] = useState(null);   // State: the latest fetched Bitcoin price for the selected currency, it gives an initial value of null
// useState() always returns an array of two elements:
// The current value of your state (price here).
// A function to update it (setPrice).
// We use null because when the app first loads:
// You have not fetched any price yet.
// You need a temporary empty value before the API returns data.

    // Build the <option> nodes for the <select> from the currencies array
    //You are creating a list of <option> elements (like in an HTML <select> dropdown) dynamically, instead of writing them all manually.
    //maps loops through each item in the array and returns a new array made up of the values you return inside the callback.
    // and for each element (we call it curr), returns: <option>USD</option>
    //So .map() is turning an array of data into an array of JSX elements.
    // The value attribute is what gets sent when the user selects that option.
    // The content inside {curr} is what is displayed in the dropdown.

    const options = currencies.map(curr => 
    (<option value={curr}
    key={curr}>{curr}</option>)); //React requires a key when rendering lists

    // Side effect: fetch the price whenever `currency` changes
    useEffect (() => {
        console.log("running effect"); // Debug log so you can see when the effect runs
        let ignore = false; // Local flag to ignore late responses after unmount or dependecy change

        // Build and send the request to CoinGecko, using the selected currency in lowercase
        //fetch() is a built-in JavaScript function used to make network requests.
        // It returns a Promise — an object that represents an asynchronous operation (something that will finish later).
       // When fetch completes, it does not directly give you the data. So you must parse the response body as JSON.
       //That’s what .json() does — it reads the data and converts it into a JavaScript object.
        fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency.toLowerCase()}`)
            .then(response => response.json()) // Parse the JSON body
            .then(json => { // Safely read the price and update state if we are still on the current effect run
                if (!ignore) {
            const value = json.bitcoin?.[currency.toLowerCase()] ?? null; //“Get the price if it exists, otherwise set value to null.”
            setPrice(value); //This updates your React state variable price with the new value.
            }
        });
        //It creates a temporary variable to store the extracted Bitcoin price from the API response.
        // That way, you separate two distinct steps:
        // Extract the data from the JSON
        // Store the data in React state
        // ?. It prevents the code from crashing if json.bitcoin is undefined.
        // If something is missing, it returns undefined safely instead of an error.

        // ?? null
        // → This is the nullish coalescing operator.
        // It means “if the left side is undefined or null, use null instead.”
        // This ensures value is never undefined.



    return () => {  // Cleanup function that runs before the next effect or when the component unmounts
        ignore = true;
        console.log("cleanu effect");
    }; 
    }, [currency]); //the effect reads from currency, so you must include it:

    return (  // Component UI
        <div className="BitcoinRates componentBox">
            <h3>Bitcoin Exchange Rate</h3>
            <label>Choose currency:
                <select value={currency} onChange={(e) => 
                    setCurrency(e.target.value)}>
                    {options}
                </select>
            </label>
        <p>
          1 BTC = {price} {currency}
        </p>
        </div>
    );
}

export default BitcoinRates;

// | Phase          | Meaning                                                 | When it happens                                                    |
// | -------------- | ------------------------------------------------------- | ------------------------------------------------------------------ |
// | **Mounting**   | The component is created and inserted into the DOM      | When your page first loads or the component appears                |
// | **Updating**   | The component re-renders because state or props changed | When you select another currency (changing state)                  |
// | **Unmounting** | The component is removed from the DOM                   | When the user leaves the page or the component is hidden/destroyed |
