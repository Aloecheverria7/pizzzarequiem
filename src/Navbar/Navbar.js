import React from "react";
import styled from "styled-components";
import { pizzaRed } from "../Styles/colors";
import { Title } from "../Styles/title";

const NavbarStyled = styled.div`
  background-color: ${pizzaRed};
  padding: 10px;
  position: fixed;
  width: 100%;
  z-index: 999;
  display: flex;
  justify-content: space-between;
`;
const Logo = styled(Title)`
  font-size: 20px;
  color: white;
  text-shadow: 1px 1px 4px #380502;
`;

export function Navbar({ carshop }) {
  return (
    <NavbarStyled>
      <Logo>
        Requiem Pizza{" "}
        <span role="img" aria-label="Requiem Pizza">
          🍕
        </span>
      </Logo>
    </NavbarStyled>
  );
}
