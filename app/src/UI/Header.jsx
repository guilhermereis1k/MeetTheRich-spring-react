import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import App from "../App";

const HeaderContainer = styled.header`
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
`;

const HeaderTitle = styled.h1`
  text-transform: uppercase;
  font-family: "Oswald";
  font-size: 3rem;
  letter-spacing: 1rem;
`;

const HeaderNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderNavList = styled.ul`
  display: inline-block;
  list-style: none;
`;

const HeaderNavItem = styled.li`
  display: inline-block;
  padding: 0.5rem 2rem;
  font-size: 2rem;
  font-family: "Roboto";
  font-weight: 600;
  margin: auto 0;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #01003b;
    color: #fff;
  }
`;

function Header() {
  const JWTToken = localStorage.getItem("token");

  return (
    <HeaderContainer>
      <Link to={"/"}>
        <HeaderTitle>Meet The Rich</HeaderTitle>
      </Link>
      <HeaderNav>
        <HeaderNavList>
          <Link to="/riches">
            <HeaderNavItem>The riches</HeaderNavItem>
          </Link>
          {!JWTToken && (
            <>
              <Link to="/users/login">
                <HeaderNavItem>Login</HeaderNavItem>
              </Link>
              <Link to="/users/register">
                <HeaderNavItem>Register</HeaderNavItem>
              </Link>
            </>
          )}
          {JWTToken && (
            <>
              <Link to="/order/all">
                <HeaderNavItem>My orders</HeaderNavItem>
              </Link>
            </>
          )}
          <Link to="/about">
            <HeaderNavItem>About</HeaderNavItem>
          </Link>
        </HeaderNavList>
      </HeaderNav>
    </HeaderContainer>
  );
}

export default Header;
