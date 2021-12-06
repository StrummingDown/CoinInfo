import React from "react";
import { useState, useEffect } from "react";
import { Loading } from "../components/Loading";
import { coinApi } from "../components/api";
import { Coins } from "../components/Coins";
export const Coin = () => {
  let [coinS, setCoin] = useState([]);
  let [loading, setLoading] = useState(false);
  async function fetchData() {
    let coinApii = await coinApi();
    setCoin(coinApii);
  }
  useEffect(() => {
    setLoading(true);
    fetchData();
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        coinS.map((coin) => <Coins key={coinS.id} coinProps={coin} />)
      )}
    </div>
  );
};
