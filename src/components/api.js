export const ticker = fetch("https://api.coinpaprika.com/v1/tickers").then(
  (res) => res.json()
);
