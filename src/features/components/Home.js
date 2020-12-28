import React from "react";
import styled from "styled-components";
import { BREAKPOINTS } from "../../constants";

import Portofolio from "./Portofolio";

const Wrapper = styled.div`
  min-height: 100vh;
  background-color: #d01527;
`;

const Container = styled.div`
  padding: 450px 20px;
  @media (min-width: ${BREAKPOINTS.SMALL_DEVICES}) {
    max-width: 3000px;
    margin: auto;
  }
`;

function Home() {
  return (
    <Wrapper>
      <Container>
        <Portofolio />
      </Container>
    </Wrapper>
  );
}

export default Home;
