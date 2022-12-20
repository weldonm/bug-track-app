import React from "react";
import styled from "styled-components";

const Logo = styled.div`
  //cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-top: 3px;
  font-weight: 600;
  color: ${({ theme }) => theme.main_Font_Color};
  img {
    width: 30px;
    height: 30px;
  }
`;

const LogoMenu = () => {
  return (
    <Logo>
      <img src="/icons/Logo.svg" alt="logo" /> Bug Tracker
    </Logo>
  );
};

export default LogoMenu;