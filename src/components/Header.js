import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Content = styled.div`
  justify-content: center;
`;

export const Header = () => {
  return (
    <div>
      <h1>Coin Info</h1>
      <Link to="/">Coins</Link>
      <Link to="/exchanges">Exchanges</Link>
      <Link to="/prices">Prices</Link>
    </div>
  );
};
