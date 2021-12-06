import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Content = styled.div`
  width: 250px;
  display: flex;
  justify-content: space-between;
`;

export const Header = () => {
  return (
    <div>
      <h1>Coin Info</h1>
      <Content>
        <Link to="/">Coins</Link>
        <Link to="/exchanges">Exchanges</Link>
        <Link to="/prices">Prices</Link>
      </Content>
    </div>
  );
};
