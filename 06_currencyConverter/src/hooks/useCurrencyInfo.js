import { useEffect, useState } from "react";

// function hello(){
//     return [a,b]
// }

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    let api = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;
    fetch(api)
      .then((response) => response.json())
      .then((response) => setData(response[currency]));
  }, [currency]);
  console.log(data);
  return data;
}

export default useCurrencyInfo;
