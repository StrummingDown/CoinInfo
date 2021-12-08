import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Content = styled.div`
  width: 250px;
  display: flex;
  justify-content: space-between;
`;

const Main = styled.h1`
  font-weight: bold;
  color: indianred;
  text-shadow: 2px 2px 2px midnightblue;
`;
export const Header = () => {
  return (
    <div>
      <Main>-Coin Informaiton-</Main>
      <Content>
        <Link to="/">Coins</Link>
        <Link to="/exchanges">Exchanges</Link>
        <Link to="/prices">Prices</Link>
      </Content>
    </div>
  );
};
