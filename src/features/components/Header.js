import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { BREAKPOINTS } from "../../constants";

const StyledHeader = styled.header`
  position: fixed;
  /* top: 0; */
  left: 0;
  right: 0;
  padding: 1rem 0.5rem;

  @media (min-width: ${BREAKPOINTS.SMALL_DEVICES}) {
    width: 100%;
  }
`;

const Container = styled.div`
  padding: 0 20px;
  @media (min-width: ${BREAKPOINTS.SMALL_DEVICES}) {
    max-width: 500px;
    margin: 0 auto;
  }
`;

const HomeLink = styled(NavLink)`
  margin-right: 0.5rem;
  background-color: white;
  font-size: 4rem;
  cursor: pointer;
  font-family: sans-serif;
  text-decoration: none;
  background-color: #333333;
  color: #fff;
`;

function Header() {
  return (
    <StyledHeader>
      <Container>
        <HomeLink exact to="/">
          Contact
        </HomeLink>
      </Container>
    </StyledHeader>
  );
}

export default Header;
