import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Coin } from "../pages/Coins";
import { Exchange } from "../pages/Exchange";
import { Prices } from "../pages/Prices";
import { Header } from "./Header";
export const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Coin />} />
          <Route path="/exchanges" element={<Exchange />} />
          <Route path="/prices" element={<Prices />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
