import React from "react";
import styled from "styled-components";

const CoinDiv = styled.div`
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;
  color: gray;
`;

export const Price = ({ ticker }) => {
  const {
    name,
    symbol,
    quotes: {
      USD: { price },
    },
  } = ticker;
  return <CoinDiv> {`${name} ${symbol} ${price}`}</CoinDiv>;
};
