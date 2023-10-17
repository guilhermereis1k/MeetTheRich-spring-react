import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import App from "../App";

const HeaderContainer = styled.header`
  padding-top: 2rem;
  display: flex;
  justify-content: space-between;
`;

const HeaderTitle = styled.h1`
  text-transform: uppercase;
  font-family: "Oswald";
  font-size: 3rem;
  letter-spacing: 1rem;
  color: #fff;
`;

const HeaderNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderNavList = styled.ul`
  display: inline-block;
  list-style: none;
  color: #fff;
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
    background-color: #fff;
    color: #000;
  }
`;

function WhiteHeader() {
  const JWTToken = localStorage.getItem("token");

  const logoutHandler = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

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
          <Link to="/about">
            <HeaderNavItem>About</HeaderNavItem>
          </Link>
          {JWTToken && (
            <>
              <Link to="/order/all">
                <HeaderNavItem>My orders</HeaderNavItem>
              </Link>
              <HeaderNavItem onClick={logoutHandler}>Logout</HeaderNavItem>
            </>
          )}
        </HeaderNavList>
      </HeaderNav>
    </HeaderContainer>
  );
}

export default WhiteHeader;
