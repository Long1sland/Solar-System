import react from "react";
import { Outlet } from "react-router";
import Hero from "./Components/Hero";
import NavBar from "./Components/NavBar";

const Home = () => {
  console.log("home has rendered");
  return (
    <>
      <NavBar></NavBar>
      <Hero></Hero>
      <Outlet />
    </>
  );
};

export default Home;
