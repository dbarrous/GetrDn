import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "../react-auth0-spa";

const NavWrapper = styled.nav`
  width: 100vw;
  background: lightgray;
  color: white;
  height: 5vh;
`;

const StyledUl = styled.ul`
  width: 80%;
  height: 100%;
  margin: auto 0;
  display: flex;
  list-style-type: none;
  justify-content: center;
`;

const StyledLi = styled.li`
  width: 75px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-family: sans-serif;
`;
const Navbar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <NavWrapper>
      <StyledUl>
        <StyledLi>
          <StyledLink to={"/"}>Home</StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink to={"/local-list"}>Quick List</StyledLink>
        </StyledLi>
        {isAuthenticated && (
          <StyledLi>
            <StyledLink to={"/profile"}>My Profile</StyledLink>
          </StyledLi>
        )}

        <StyledLi>
          {!isAuthenticated && (
            <button onClick={() => loginWithRedirect({})}>Log in</button>
          )}

          {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
        </StyledLi>
      </StyledUl>
    </NavWrapper>
  );
};

export default Navbar;
