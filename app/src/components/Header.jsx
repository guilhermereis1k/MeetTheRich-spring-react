import React from "react";
import { styled } from "styled-components";

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
      <HeaderTitle>Meet The Rich</HeaderTitle>
    </HeaderContainer>
  );
}

export default Header;
