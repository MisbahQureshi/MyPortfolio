// components/Navbar/index.js (your navbar.js)
import React from "react";
import {
  Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems,
  MobileIcon, MobileMenu, MobileLink, ToggleButton
} from "./NavbarStyledComponent";
import { FaBars } from "react-icons/fa";
import { LuSun, LuMoon } from "react-icons/lu";

const Navbar = ({ lightMode, onToggle }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">{/* logo/brand here if you want */}</NavLogo>

        <MobileIcon>
          <FaBars onClick={() => setIsOpen(o => !o)} />
        </MobileIcon>

        <NavItems>
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#education">Education</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#contact">Contact</NavLink>

          {/* theme toggle */}
          <ToggleButton
            type="button"
            aria-label={lightMode ? "Switch to dark theme" : "Switch to light theme"}
            onClick={onToggle}
            $active={!lightMode}
            title={lightMode ? "Light" : "Dark"}
          >
            {lightMode ? <LuSun size={18} /> : <LuMoon size={18} />}
          </ToggleButton>
        </NavItems>

        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#home" onClick={() => setIsOpen(false)}>Home</MobileLink>
            <MobileLink href="#about" onClick={() => setIsOpen(false)}>About</MobileLink>
            <MobileLink href="#education" onClick={() => setIsOpen(false)}>Education</MobileLink>
            <MobileLink href="#experience" onClick={() => setIsOpen(false)}>Experience</MobileLink>
            <MobileLink href="#skills" onClick={() => setIsOpen(false)}>Skills</MobileLink>
            <MobileLink href="#projects" onClick={() => setIsOpen(false)}>Projects</MobileLink>
            <MobileLink href="#contact" onClick={() => setIsOpen(false)}>Contact</MobileLink>

            {/* mobile theme toggle */}
            <ToggleButton
              type="button"
              aria-label={lightMode ? "Switch to dark theme" : "Switch to light theme"}
              onClick={() => {
                onToggle();
                setIsOpen(false);
              }}
              $active={!lightMode}
              style={{ alignSelf: "flex-start", marginTop: 8 }}
              title={lightMode ? "Light" : "Dark"}
            >
              {lightMode ? <LuSun size={18} /> : <LuMoon size={18} />}
              <Span style={{ marginLeft: 8 }}>{lightMode ? "Light" : "Dark"}</Span>
            </ToggleButton>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
