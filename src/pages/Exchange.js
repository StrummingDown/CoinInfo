import React from "react";
import { exchange } from "../components/api";
import { useState, useEffect } from "react";
import { Loading } from "../components/Loading";
import { Exchanges } from "../components/Exchanges";

export const Exchange = () => {
  let [exchanges, setExchanges] = useState([]);
  let [loading, setLoading] = useState(false);
  async function fetchData() {
    let exchangeS = await exchange();
    exchangeS = exchangeS.slice(0, 500);
    exchangeS = exchangeS.filter((el) => {
      if (el.links && el.links.website) return el;
    });
    exchangeS = exchangeS.filter((el) => {
      if (el.description) return el;
    });
    setExchanges(exchangeS);
  }
  useEffect(() => {
    setLoading(true);
    fetchData();
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <div>
      {/* {console.log(exchanges)} */}
      {loading ? (
        <Loading />
      ) : (
        exchanges.map((exchange) => (
          <Exchanges key={exchange.id} exchange={exchange} />
        ))
      )}
    </div>
  );
};
