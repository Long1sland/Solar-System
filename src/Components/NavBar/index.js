import React from "react";
import { useState } from "react";
import { Wrapper, Content, Navlinks, Hamburger, Menu } from "./NavBar.styles";
import { NavLink } from "react-router-dom";
import Any from "./icon-hamburger.svg";

const NavBar = () => {
  const [colorChange, setColorchange] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 10) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <>
      <Wrapper color={colorChange ? "hsl(0,0%,0%, 0.7)" : "transparent"}>
        <Content>
          <p>THE PLANETS</p>
          <Navlinks>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : null)}
              to="Solar-System/Mercury"
              id="mercury"
            >
              MERCURY
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : null)}
              to="Solar-System/Venus"
              id="venus"
            >
              VENUS
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : null)}
              to="Solar-System/Earth"
              id="earth"
            >
              EARTH
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : null)}
              to="Solar-System/Mars"
              id="mars"
            >
              MARS
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : null)}
              to="Solar-System/Jupiter"
              id="jupiter"
            >
              JUPITER
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : null)}
              to="Solar-System/Saturn"
              id="saturn"
            >
              SATURN
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : null)}
              to="Solar-System/Uranus"
              id="uranus"
            >
              URANUS
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : null)}
              to="Solar-System/Neptune"
              id="neptune"
              className="noMargin"
            >
              NEPTUNE
            </NavLink>
          </Navlinks>
          <Hamburger
            src={Any}
            alt="Hamburger"
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
            color={
              menuOpen
                ? "invert(55%) sepia(8%) saturate(418%) hue-rotate(201deg) brightness(93%) contrast(90%);"
                : "none"
            }
          />
        </Content>
        {menuOpen && <Menu />}
      </Wrapper>
    </>
  );
};

export default NavBar;