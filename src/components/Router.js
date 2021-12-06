import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Coins } from "./Coins";
import { Exchanges } from "./Exchanges";
import { Prices } from "./Prices";
import { Header } from "./Header";
export const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Coins />} />
          <Route path="/exchanges" element={<Exchanges />} />
          <Route path="/prices" element={<Prices />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
