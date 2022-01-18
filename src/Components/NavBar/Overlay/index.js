import React from "react";
import { Content, Wrapper, MenuItem, MenuContent } from "./overlay.styles";
import { Link } from "react-router-dom";
import Pointer from "./icon-chevron.svg";

const Overlay = ({ menuOpen }) => {
  return (
    <Wrapper>
      <Content onClick={menuOpen}>
        <Link to="/Solar-System/Mercury">
          <MenuItem>
            <MenuContent>
              <div id="Mercury" className="circle"></div>
              <h4>Mercury</h4>
            </MenuContent>
            <img src={Pointer} alt="arrow" />
          </MenuItem>
        </Link>
        <Link to="/Solar-System/Venus/overview">
          <MenuItem>
            <MenuContent>
              <div id="Venus" className="circle"></div>
              <h4>Venus</h4>
            </MenuContent>
            <img src={Pointer} alt="venus" />
          </MenuItem>
        </Link>
        <Link to="/Solar-System/Earth">
          <MenuItem>
            <MenuContent>
              <div id="Earth" className="circle"></div>
              <h4>Earth</h4>
            </MenuContent>
            <img src={Pointer} alt="Earth" />
          </MenuItem>
        </Link>
        <Link to="/Solar-System/Mars">
          <MenuItem>
            <MenuContent>
              <div id="Mars" className="circle"></div>
              <h4>Mars</h4>
            </MenuContent>
            <img src={Pointer} alt="Mars" />
          </MenuItem>
        </Link>
        <Link to="/Solar-System/Jupiter">
          <MenuItem>
            <MenuContent>
              <div id="Jupiter" className="circle"></div>
              <h4>Jupiter</h4>
            </MenuContent>
            <img src={Pointer} alt="Jupiter" />
          </MenuItem>
        </Link>
        <Link to="/Solar-System/Satrun">
          <MenuItem>
            <MenuContent>
              <div id="Saturn" className="circle"></div>
              <h4>Saturn</h4>
            </MenuContent>
            <img src={Pointer} alt="" />
          </MenuItem>
        </Link>
        <Link to="/Solar-System/Uranus">
          <MenuItem>
            <MenuContent>
              <div id="Uranus" className="circle"></div>
              <h4>Uranus</h4>
            </MenuContent>
            <img src={Pointer} alt="Uranus" />
          </MenuItem>
        </Link>
        <Link to="/Solar-System/Neptune">
          <MenuItem>
            <MenuContent>
              <div id="Neptune" className="circle"></div>
              <h4>Neptune</h4>
            </MenuContent>
            <img src={Pointer} alt="Neptune" />
          </MenuItem>
        </Link>
      </Content>
    </Wrapper>
  );
};

export default Overlay;
