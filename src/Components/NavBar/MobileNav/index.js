import { Wrapper, Content, NavItem } from "./mobileNav.styles";
import { Link } from "react-router-dom";
import usePlanetFetch from "../../../Hook/usePlanetFetch";
const MobileNav = ({ color, section, planetId }) => {
  const { state } = usePlanetFetch();

  return (
    <Wrapper color={color}>
      <Content color={state.color}>
        <Link
          to={"./../overview"}
          className={section == "overview" ? "active" : null}
        >
          <h4>OVERVIEW</h4>
        </Link>
        <Link
          to={`./../internal`}
          className={section == "internal" ? "active" : null}
        >
          <h4>STRUCTURE</h4>
        </Link>
        <Link
          to={`./../geology`}
          className={section == "geology" ? "active" : null}
        >
          <h4>SURFACE</h4>
        </Link>
      </Content>
    </Wrapper>
  );
};

export default MobileNav;
