import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LogoImg = styled.img`
  cursor: pointer;
`;

const Logo = () => {
  return (
    <Link to={"/"}>
      <LogoImg src="/public/logo/bugger2.png" alt="logo" />
    </Link>
  );
};

export default Logo;
