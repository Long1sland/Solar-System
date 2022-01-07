import react from "react";

import { PlanetData, PlanetImage, Content, Wrapper } from "./hero.styles";
import usePlanetFetch from "../../Hook/usePlanetFetch";
import { useParams } from "react-router";
import { Link, NavLink } from "react-router-dom";
import Button from "../Button";

const Hero = () => {

    const{planetId} = useParams();
    const {state} = usePlanetFetch(planetId);


    console.log(state)
    return (
        <Wrapper>
            <Content>
                <PlanetImage src= {state.images? state.images.planet : null}/>
                <PlanetData >
                    <h1>{state.name}</h1>
                    <p>{state.overview? state.overview.content : null}</p>
                    <NavLink to={`${planetId}/overview`}><Button color ={`${state.color}`} text = "OVERVIEW"/></NavLink>
                    <NavLink to={`${planetId}/structure`}><Button color ={`${state.color}`} text = "INTERNAL STRUCTURE"/></NavLink>
                    <NavLink to={`${planetId}/geology`}><Button color ={`${state.color}`} text = "SURFACE GEOLOGY"/></NavLink>
                </PlanetData>
            </Content>
        </Wrapper>
    );
}
 
export default Hero;