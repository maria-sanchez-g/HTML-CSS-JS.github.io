import { useState } from "react";
import { useBitcoinPrice } from "./useBitcoinPrice";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

function BitcoinRates() {
  // which currency is selected in the dropdown
  const [currency, setCurrency] = useState(currencies[0]);

  // ask our custom hook for the latest price for that currency
  const { loading, price, error } = useBitcoinPrice(currency);

  // build <option> list for the dropdown
  const options = currencies.map((curr) => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));

  return (
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate</h3>

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
