import react from "react";
import { Content, Wrapper } from "./Button.styles";

const Button = ({ text, color }) => {
  return (
    <Wrapper color={color}>
      <Content>
        <h3>{text}</h3>
      </Content>
    </Wrapper>
  );
};

export default Button;
