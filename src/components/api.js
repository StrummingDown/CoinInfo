export const ticker = async () =>
  await fetch("https://api.coinpaprika.com/v1/tickers").then((res) =>
    res.json()
  );
export const exchange = async () =>
  await fetch("https://api.coinpaprika.com/v1/exchanges").then((res) =>
    res.json()
  );
export const coinApi = async () =>
  await fetch("https://api.coinpaprika.com/v1/coins").then((res) => res.json());
