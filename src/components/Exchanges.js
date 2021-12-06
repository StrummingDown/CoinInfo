import React from "react";
import styled from "styled-components";

const Head = styled.h2`
  color: yellowgreen;
  border: 10px;
  background-color: gray;
  opacity: 0.8;
`;
const Content = styled.div`
  width: 400px;
  color: red;
  margin-bottom: 5px;
  font-weight: bold;
`;
const Homepage = styled.a`
  //
  margin-bottom: 20px;
`;
export const Exchanges = ({ exchange }) => {
  const { name, description, links } = exchange;

  return (
    <div>
      {/* {console.log(exchange)} */}
      <Head>{`${name}`}</Head>
      <Content>
        {`${
          description.length <= 100
            ? `${description}`
            : `${description.slice(0, 100)}...`
        }`}
      </Content>
      <Homepage href={`${links.website[0]}`}>{`${links.website[0]}`}</Homepage>
    </div>
  );
};
