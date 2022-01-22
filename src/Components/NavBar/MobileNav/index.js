import { Wrapper, Content, NavItem } from "./mobileNav.styles";
import { Link } from "react-router-dom";
import usePlanetFetch from "../../../Hook/usePlanetFetch";

const MobileNav = () => {
  const { state } = usePlanetFetch();
  return (
    <Wrapper>
      <Content>
        <Link to={"overview"}>
          <NavItem color={`${state.color}`}>OVERVIEW</NavItem>
        </Link>
        <Link to={`internal`}>
          <NavItem color={`${state.color}`}>STRUCTURE</NavItem>
        </Link>
        <Link to={`geology`}>
          <NavItem color={`${state.color}`}>SURFACE</NavItem>
        </Link>
      </Content>
    </Wrapper>
  );
};

export default MobileNav;
