import react from "react";

import { Wrapper, InfoBox } from "./FooterData.styles";
const FooterData = ({ data: state }) => {
  return (
    <Wrapper>
      <InfoBox>
        <h4>ROTATION TIME</h4>
        <h2>{state.rotation}</h2>
      </InfoBox>
      <InfoBox>
        <h4>REVOLUTION TIME</h4>
        <h2>{state.revolution}</h2>
      </InfoBox>
      <InfoBox>
        <h4>RADIUS</h4>
        <h2>{state.radius}</h2>
      </InfoBox>
      <InfoBox>
        <h4>AVERAGE TEMP</h4>
        <h2>{state.temperature}</h2>
      </InfoBox>
    </Wrapper>
  );
};

export default FooterData;
