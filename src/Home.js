import react from "react";
import Hero from "./Components/Hero";
import FooterData from "./Components/PlanetFooterData";
import { Wrapper } from "./Home.styles";

const Home = () => {
  return (
    <Wrapper>
      <Hero></Hero>
      <FooterData></FooterData>
    </Wrapper>
  );
};

export default Home;
