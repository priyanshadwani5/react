import { useEffect, useState } from "react";

function useCurrencyInfo(baseCurrency) {
  const [data, setData] = useState({});

  useEffect(() => {
    const apiKey = "cur_live_Q6NZ7UalvzvX6TRPWWnHSc5pYbx7gPNHQAUFBwiv";
    const url = `https://api.currencyapi.com/v3/latest?apikey=${apiKey}&base_currency=${baseCurrency}`;

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        if (res && res.data) {
          console.log("currency data", data);
          setData(res.data); // contains currency rates like INR: { code: 'INR', value: 83.23 }
        } else {
          setData({});
        }
      })
      .catch((err) => {
        console.error("Currency API fetch error:", err);
        setData({});
      });
  }, [baseCurrency]);

  return data;
}

export default useCurrencyInfo;
