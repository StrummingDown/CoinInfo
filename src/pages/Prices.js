import React from "react";
import { ticker } from "../components/api";
import { useState, useEffect } from "react";
import { Loading } from "../components/Loading";
import { Price } from "../components/Price";

export const Prices = () => {
  let [tikers, setTikers] = useState([]);
  let [loading, setLoading] = useState(false);
  async function fetchData() {
    let tickerS = await ticker();
    tickerS = tickerS.slice(0, 500);
    setTikers(tickerS);
  }

  useEffect(() => {
    setLoading(true);
    fetchData();
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <div>
      {loading ? <Loading /> : tikers.map((tik) => <Price ticker={tik} />)}
    </div>
  );
};
