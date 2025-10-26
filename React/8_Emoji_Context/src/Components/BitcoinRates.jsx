import { useState } from "react"; //You need useState in this component because the component must remember which currency the user has selected in the <select> dropdown
import useBitcoinPrice from "../Hooks/useBitcoinPrice";
import { useMood } from "../Context/MoodContext";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

function BitcoinRates() {
  const  { mood} = useMood(); //same line as in Emoji, I don't need toggleMood because I don't use it
  const [currency, setCurrency] = useState(currencies[0]); 

  const { loading, price, error } = useBitcoinPrice(currency);

  const options = currencies.map((curr) => (  
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));

  return (  
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate</h3>
      <div className="MoodChanger componentBox">
      Current Mood: {mood}
      </div>

      <label>
        Choose currency:
        <select 
          value={currency} 
          onChange={(e) => setCurrency(e.target.value)}
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

export default BitcoinRates;
