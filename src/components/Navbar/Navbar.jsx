import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useTheme } from "../../context/ThemeContext";
import { device } from "../../shared/breakpoints";
import HamburgerMenu from "./_HamburgerMenu";
import LogoMenu from "./_LogoMenu";
import { default as MenuContainer } from "./_ContainerMenu";
import { default as LayerBackgroundDim } from "./_LayerDimMenu";
import SwitchTheme from "./_SwitchTheme";


const NavbarContainer = styled.nav`
  background-color: ${({ theme }) => theme.navbar_Background};
  backdrop-filter: blur(10px);
  box-shadow: ${({ theme }) => theme.navbar_Shadow};
  flex: 2;
  max-width: 250px;
  min-height: 100vh;
  display: grid;
  place-items: center;
  position: absolute;
  top: 0;
  left: ${(props) => (props.showMenu ? "0" : "-1000px")};
  transition: 0.3s ease-out;
  z-index: 15;
  @media ${device.phone} {
    position: relative;
    left: 0;
  }
`;

const NavbarContent = styled.div`
  height: 100%;
  width: 100%;
  padding: 25px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  position: relative;
`;

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { theme, toggleTheme } = useTheme();

 // avoid closing menu while clicking navbar using ref
  const btnRef = useRef();
  const containerRef = useRef();
  const menuRef = useRef();

  // open and closes side menu when hamburger is clicked
  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  // disable scrolling the body when menu is open
  useEffect(() => {
    showMenu
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "visible");
  }, [showMenu]);

  // closes menu if window is resized
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 780) setShowMenu(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // closes menu if clicked outside
  useEffect(() => {
    const closeMenu = (e) => {
      if (
        !btnRef.current.contains(e.target) &&
        !containerRef.current.contains(e.target) &&
        !menuRef.current.contains(e.target)
      )
        setShowMenu(false);
    };
    document.body.addEventListener("click", closeMenu);
    return () => document.body.removeEventListener("click", closeMenu);
  }, []);

  return (
    <>
      <div ref={btnRef} onClick={handleMenu}>
        <HamburgerMenu showMenu={showMenu} />
      </div>

      <NavbarContainer showMenu={showMenu}>
        <NavbarContent ref={containerRef}>
          <LogoMenu />

          <div ref={menuRef}>
            <MenuContainer setShowMenu={setShowMenu} />
          </div>

          <div onClick={() => toggleTheme()}>
            <SwitchTheme checked={theme === "dark" ? true : false} />
          </div>
        </NavbarContent>
      </NavbarContainer>
      {showMenu && <LayerBackgroundDim />}
    </>
  );
};

export default Navbar;