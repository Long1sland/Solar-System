import React from "react";

import { Wrapper, Content, Navlinks } from "./NavBar.styles";
import Hamburger from "../HamburgerMenu";
import { NavLink } from "react-router-dom";


const NavBar = () => {
    return (

        <Wrapper>
            <Content>
                <p>THE PLANETS</p>
                <Navlinks>
                    <NavLink className={({ isActive }) => (isActive ? 'active' : null)}to = "Solar-System/Mercury" id="mercury">MERCURY</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'active' : null)}to = "Solar-System/Venus" id = "venus">VENUS</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'active' : null)}to = "Solar-System/Earth" id = "earth">EARTH</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'active' : null)}to = "Solar-System/Mars" id = "mars">MARS</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'active' : null)}to = "Solar-System/Jupiter" id = "jupiter">JUPITER</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'active' : null)}to = "Solar-System/Saturn" id = "saturn">SATURN</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'active' : null)}to = "Solar-System/Uranus" id = "uranus">URANUS</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'active' : null)}to = "Solar-System/Neptune" id = "neptune" className="noMargin">NEPTUNE</NavLink>
                </Navlinks>
                <Hamburger/>
                
            </Content>
        </Wrapper>

    );
}
 
export default NavBar;