import React, { useState } from "react";
import styled from "styled-components";
import { device } from "../../shared/breakpoints";
import { useTheme } from "../../context/ThemeContext";
import NavbarHeader from "./_NavbarHeader";
import NavigationMenu from "./_NavigationMenu";
import SwitchThemeIcon from "./_ThemeSwitchIcon";
import SettingsSuggestSharpIcon from "@mui/icons-material/SettingsSuggestSharp";

const NavbarContainer = styled.nav`
  width: 260px;
  height: 100%;
  position: fixed;
  top: 70px;
  left: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  transition: 0.6s ease;
  z-index: 10;

  @media ${device.navbarBreakpoint} {
    left: ${(props) => (props.showMenu ? "0" : "-500px")};
  }
`;

const MenuModal = styled.div``;

const SwitchModal = styled.div`
  display: flex;
  margin: 15px 0px;
`;

const Title = styled.div`
  flex: 2;
  cursor: pointer;
  padding: 5px 15px;
  display: grid;
  place-items: center;
  color: ${(props) => props.showModal && props.theme.color_Cyan};
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.2px;
  border-bottom: 1px solid ${({ theme }) => theme.background_Modal};
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  &:hover {
    color: ${({ theme }) => theme.color_Cyan};
  }
`;

const ProjectsModal = styled(Title)`
  flex: 1;
  border: 1px solid
    ${(props) =>
      props.showModal ? props.theme.background_Modal : "transparent"};
  border-bottom: 1px solid
    ${(props) =>
      props.showModal ? "transparent" : props.theme.background_Modal};
  border-left: none;
  &:hover {
    border-top: 1px solid ${({ theme }) => theme.background_Modal};
  }
`;

const SettingsModal = styled(Title)`
  flex: 1;
  border: 1px solid
    ${(props) =>
      props.showModal ? props.theme.background_Modal : "transparent"};
  border-bottom: 1px solid
    ${(props) =>
      props.showModal ? "transparent" : props.theme.background_Modal};
  &:hover {
    border-top: 1px solid ${({ theme }) => theme.background_Modal};
    border-right: 1px solid ${({ theme }) => theme.background_Modal};
  }
`;

const SettingsIcon = styled(SettingsSuggestSharpIcon)`
  transform: scale(0.85);
`;

const SwitchTheme = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 10px 20px;
  font-weight: 500;
`;

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showNavigation, setShowNavigation] = useState(true);
  const { theme, toggleTheme } = useTheme();

  return (
    <NavbarContainer showMenu={showMenu}>
      <NavbarHeader />
      {/* Navbar Header + User Options */}
      {/* Menu Model => Switch view between Navigation and Theme Settings */}
      <MenuModal>
        <SwitchModal>
          {/* Modal Title => Projects/Settings */}
          <ProjectsModal
            showModal={showNavigation}
            onClick={() => setShowNavigation(true)}
          >
            Projects
          </ProjectsModal>
          <SettingsModal
            showModal={!showNavigation}
            onClick={() => setShowNavigation(false)}
          >
            <SettingsIcon />
          </SettingsModal>
          <Title></Title>
        </SwitchModal>

        {/* Switch to Navigation or Theme View */}
        {showNavigation ? (
          <NavigationMenu setShowMenu={setShowMenu} />
        ) : (
          <SwitchTheme onClick={() => toggleTheme()}>
            <span>Choose Mode</span>
            <SwitchThemeIcon theme={theme} />
          </SwitchTheme>
        )}
      </MenuModal>
    </NavbarContainer>
  );
};

export default Navbar;
