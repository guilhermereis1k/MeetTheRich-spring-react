import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import App from "../App";

const HeaderContainer = styled.header`
  margin-top: 2rem;
  display: flex;
  justify-content: left;
`;

const HeaderTitle = styled.h1`
  text-transform: uppercase;
  font-family: "Oswald";
  font-size: 3rem;
  letter-spacing: 1rem;
`;

function Header() {
  return (
    <HeaderContainer>
      <Link to={"/"}>
        <HeaderTitle>Meet The Rich</HeaderTitle>
      </Link>
    </HeaderContainer>
  );
}

export default Header;
