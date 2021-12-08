import React from "react";
import styled from "styled-components";

const Content = styled.span`
  border-radius: 0.4rem;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid black;
  color: black;
  padding: 0.8px;
  margin-right: 8px;
  margin-bottom: 50px;
`;

const ContentChild = styled.span`
  color: gray;
`;
const ContentSymbol = styled.span`
  color: orange;
`;

export const Coins = ({ coinProps }) => {
  const { name, symbol, rank } = coinProps;
  return (
    <div>
      <Content>{name} </Content>
      <ContentSymbol> {symbol} </ContentSymbol>

      <ContentChild>{rank}</ContentChild>
    </div>
  );
};
