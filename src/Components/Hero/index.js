import {
  PlanetData,
  PlanetImage,
  Content,
  Wrapper,
  PlanetContainer,
} from "./hero.styles";
import usePlanetFetch from "../../Hook/usePlanetFetch";
import FooterData from "../PlanetFooterData";
import { Link } from "react-router-dom";
import Button from "../Button";
import { useParams } from "react-router";
const Hero = () => {
  const { state, planetImage, planetText } = usePlanetFetch();
  console.log(planetImage);
  const { section } = useParams();
  return (
    <>
      <Wrapper>
        <Content>
          <PlanetContainer>
            <img id="main" src={"." + planetImage[0]}></img>
            {planetImage[1] && (
              <img id="float" src={"." + planetImage[1]}></img>
            )}
          </PlanetContainer>
          <PlanetData>
            <div id="Words">
              <h1>{state.name}</h1>
              <p>{planetText}</p>
            </div>
            <div id="Buttons">
              <Link to={"./../overview"}>
                <Button
                  color={section == "overview" ? `${state.color}` : null}
                  text="OVERVIEW"
                />
              </Link>
              <Link to={`./../internal`}>
                <Button
                  color={section == "internal" ? `${state.color}` : null}
                  text="INTERNAL STRUCTURE"
                />
              </Link>
              <Link to={`./../geology`}>
                <Button
                  color={section == "geology" ? `${state.color}` : null}
                  text="SURFACE GEOLOGY"
                />
              </Link>
            </div>
          </PlanetData>
        </Content>
        <FooterData data={state}></FooterData>
      </Wrapper>
    </>
  );
};

export default Hero;
