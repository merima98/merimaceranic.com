import React from "react";
import styled from "styled-components";
import { GitHub, Linkedin, MessageCircle } from "react-feather";
import { NavLink } from "react-router-dom";

import homeImage from "../../images/homeImage.jpg";
import { BREAKPOINTS } from "../../constants";

const Wrapper = styled.div`
  display: block;
  position: static;
  @media (min-width: ${BREAKPOINTS.SMALL_DEVICES}) {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
`;

const Image = styled.img.attrs({
  src: homeImage,
})`
  display: none;
  @media (min-width: ${BREAKPOINTS.SMALL_DEVICES}) {
    width: 100%;
    height: 50%;
    margin: 100px auto;
    object-fit: cover;
    border-radius: 4px;
    padding-left: 20px;
    padding-right: 20px;
    display: block;
  }
`;
const UserInformation = styled.div`
  padding: 10px;
  border-top: 1px solid #94a29e;
  color: #fff;
`;
const AboutUserInformation = styled.div`
  padding: 40px;
  border-top: 1px solid #94a29e;
  color: #fff;
  text-align: center;
  cursor: pointer;
  font-weight: bold;
  font-size: 20px;
`;

const UserContainer = styled.div`
  width: 100%;
  max-height: 60%;
  margin: 100px auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  @media (min-width: ${BREAKPOINTS.SMALL_DEVICES}) {
    width: 70%;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;
const AboutUserInfo = styled(NavLink)`
  margin: 100px auto;
  text-decoration: none;
`;
const ContactLink = styled(NavLink)`
  padding: 10px;
  border-top: 1px solid #94a29e;
  color: #fff;
  text-decoration: none;
`;

function Home() {
  return (
    <Wrapper>
      <Image />
      <div>
        <AboutUserInfo exact to="/user">
          <AboutUserInformation>ABOUT ME</AboutUserInformation>
        </AboutUserInfo>
        <UserContainer>
          <UserInformation>First name</UserInformation>
          <UserInformation>Merima</UserInformation>
          <UserInformation>Last name</UserInformation>
          <UserInformation>Ćeranić</UserInformation>
          <UserInformation>Visit my GitHub</UserInformation>
          <ContactLink exact to="https://github.com/merima98">
            <GitHub />
          </ContactLink>
          <UserInformation>Visit my LinkedIn</UserInformation>
          <ContactLink exact to="https://www.linkedin.com/in/merima-ceranic/">
            <Linkedin />
          </ContactLink>
          <UserInformation>Contact me</UserInformation>
          <ContactLink exact to="/contact">
            <MessageCircle />
          </ContactLink>
        </UserContainer>
      </div>
    </Wrapper>
  );
}

export default Home;
