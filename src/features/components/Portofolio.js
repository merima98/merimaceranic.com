import React from "react";
import styled from "styled-components";

import Header from "./Header";

const Wrapper = styled.div`
  /* background-color: red; */
  width: 100%;
  height: 120rem;
  background-color: #333333;
  border-radius: 8px;
  box-shadow: 5px 10px 20px 15px #82030f;
`;

function Portofolio() {
  return (
    <Wrapper>
      <Header />
    </Wrapper>
  );
}

export default Portofolio;
