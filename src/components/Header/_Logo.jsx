import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LogoImg = styled.img`
  cursor: pointer;
`;

const Logo = () => {
  return (
    <Link to={"/"}>
      <LogoImg src="/logo/icons8-insect-48.png" alt="logo" />
    </Link>
  );
};

export default Logo;
