import react from "react";

import { PlanetData, PlanetImage, Content, Wrapper } from "./hero.styles";
import usePlanetFetch from "../../Hook/usePlanetFetch";
import FooterData from "../PlanetFooterData";
import { NavLink } from "react-router-dom";
import Button from "../Button";

const Hero = () => {
  const { state } = usePlanetFetch();

  return (
    <>
      <Wrapper>
        <Content>
          <PlanetImage src={state.images ? state.images.planet : null} />
          <PlanetData>
            <div id="Words">
              <h1>{state.name}</h1>
              <p>{state.overview ? state.overview.content : null}</p>
            </div>
            <div id="Buttons">
              <NavLink to={`#`}>
                <Button color={`${state.color}`} text="OVERVIEW" />
              </NavLink>
              <NavLink to={`#`}>
                <Button color={`${state.color}`} text="INTERNAL STRUCTURE" />
              </NavLink>
              <NavLink to={`#`}>
                <Button color={`${state.color}`} text="SURFACE GEOLOGY" />
              </NavLink>
            </div>
          </PlanetData>
        </Content>
      </Wrapper>
      <FooterData data={state}></FooterData>
    </>
  );
};

export default Hero;
