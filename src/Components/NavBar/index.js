import React from "react";

import { Wrapper, Content, Navlinks } from "./NavBar.styles";
import Hamburger from "../HamburgerMenu";
import { Link } from "react-router-dom";


const NavBar = () => {
    return (

        <Wrapper>
            <Content>
                <p>THE PLANETS</p>
                <Navlinks>
                    <Link to = "/Mercury" id="mercury">MERCURY</Link>
                    <Link to = "/Venus" id = "venus">VENUS</Link>
                    <Link to = "/Earth" id = "earth">EARTH</Link>
                    <Link to = "/Mars" id = "mars">MARS</Link>
                    <Link to = "/Jupiter" id = "jupiter">JUPITER</Link>
                    <Link to = "/Saturn" id = "saturn">SATURN</Link>
                    <Link to = "/Uranus" id = "uranus">URANUS</Link>
                    <Link to = "/Neptune" id = "neptune" className="noMargin">NEPTUNE</Link>
                </Navlinks>
                <Hamburger/>
                
            </Content>
        </Wrapper>

    );
}
 
export default NavBar;