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
                    <NavLink className={({ isActive }) => (isActive ? 'active' : null)}to = "/Mercury" id="mercury">MERCURY</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'active' : null)}to = "/Venus" id = "venus">VENUS</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'active' : null)}to = "/Earth" id = "earth">EARTH</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'active' : null)}to = "/Mars" id = "mars">MARS</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'active' : null)}to = "/Jupiter" id = "jupiter">JUPITER</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'active' : null)}to = "/Saturn" id = "saturn">SATURN</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'active' : null)}to = "/Uranus" id = "uranus">URANUS</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? 'active' : null)}to = "/Neptune" id = "neptune" className="noMargin">NEPTUNE</NavLink>
                </Navlinks>
                <Hamburger/>
                
            </Content>
        </Wrapper>

    );
}
 
export default NavBar;