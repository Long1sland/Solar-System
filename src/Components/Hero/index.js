import react from "react";

import { PlanetData, PlanetImage, Content, Wrapper } from "./hero.styles";
import usePlanetFetch from "../../Hook/usePlanetFetch";
import FooterData from "../PlanetFooterData";
import { Link } from "react-router-dom";
import Button from "../Button";

const Hero = () => {
  const { state, planetImage, planetId, section, planetText } =
    usePlanetFetch();

  return (
    <>
      <Wrapper>
        <Content>
          <PlanetImage src={"." + planetImage} />
          <PlanetData>
            <div id="Words">
              <h1>{state.name}</h1>
              <p>{planetText}</p>
            </div>
            <div id="Buttons">
              <Link to={"./../overview"}>
                <Button color={`${state.color}`} text="OVERVIEW" />
              </Link>
              <Link to={`./../internal`}>
                <Button color={`${state.color}`} text="INTERNAL STRUCTURE" />
              </Link>
              <Link to={`./../geology`}>
                <Button color={`${state.color}`} text="SURFACE GEOLOGY" />
              </Link>
            </div>
          </PlanetData>
        </Content>
      </Wrapper>
      <FooterData data={state}></FooterData>
    </>
  );
};

export default Hero;
