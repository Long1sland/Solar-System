import { useState } from "react";
import Overlay from "./Overlay";
import {
  Wrapper,
  Content,
  Navlinks,
  Hamburger,
  GlobalStyle,
} from "./NavBar.styles";
import { NavLink } from "react-router-dom";
import Any from "./icon-hamburger.svg";
import MobileNav from "./MobileNav";
import { useParams } from "react-router";

const NavBar = () => {
  const [colorChange, setColorChange] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { planetId, section } = useParams();

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };
  const changeNavbarColor = () => {
    if (window.scrollY >= 10) {
      setColorChange(true);
    } else {
      setColorChange(false);
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
              className={() => (planetId == "Mercury" ? "active" : null)}
              to="../../Solar-System/Mercury/overview"
              id="mercury"
            >
              MERCURY
            </NavLink>
            <NavLink
              className={() => (planetId == "Venus" ? "active" : null)}
              to="../Solar-System/Venus/overview"
              id="venus"
            >
              VENUS
            </NavLink>
            <NavLink
              className={() => (planetId == "Earth" ? "active" : null)}
              to="../Solar-System/Earth/overview"
              id="earth"
            >
              EARTH
            </NavLink>
            <NavLink
              className={() => (planetId == "Mars" ? "active" : null)}
              to="../Solar-System/Mars/overview"
              id="mars"
            >
              MARS
            </NavLink>
            <NavLink
              className={() => (planetId == "Jupiter" ? "active" : null)}
              to="../Solar-System/Jupiter/overview"
              id="jupiter"
            >
              JUPITER
            </NavLink>
            <NavLink
              className={() => (planetId == "Saturn" ? "active" : null)}
              to="../Solar-System/Saturn/overview"
              id="saturn"
            >
              SATURN
            </NavLink>
            <NavLink
              className={() => (planetId == "Uranus" ? "active" : null)}
              to="../Solar-System/Uranus/overview"
              id="uranus"
            >
              URANUS
            </NavLink>
            <NavLink
              className={() => (planetId == "Neptune" ? "active" : null)}
              to="../Solar-System/Neptune/overview"
              id="neptune"
              className="noMargin"
            >
              NEPTUNE
            </NavLink>
          </Navlinks>
          <Hamburger
            src={Any}
            alt="Hamburger"
            onClick={handleMenuOpen}
            color={
              menuOpen
                ? "invert(55%) sepia(8%) saturate(418%) hue-rotate(201deg) brightness(93%) contrast(90%);"
                : "none"
            }
          />
        </Content>
        <MobileNav
          color={colorChange ? "hsl(0,0%,0%, 0.7)" : "transparent"}
          planetId={planetId}
          section={section}
        />
        {menuOpen && <Overlay menuOpen={handleMenuOpen} />}
      </Wrapper>
      <GlobalStyle scrollable={menuOpen ? "hidden" : null} />
    </>
  );
};

export default NavBar;
