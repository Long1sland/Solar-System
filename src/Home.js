import react from "react";
import Hero from "./Components/Hero";
import { Wrapper } from "./Home.styles";

const Home = () => {
  console.log("home has rendered");
  return (
    <Wrapper>
      <Hero></Hero>
    </Wrapper>
  );
};

export default Home;
