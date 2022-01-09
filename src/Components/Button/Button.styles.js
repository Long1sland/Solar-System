import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 5px 25px;
  border: solid 2px var(--darkGrey);
  margin-top: 12px;
  transition: all 0.3s ease-in-out;
  width: 400px;

  :hover {
    background: ${({ color }) => color};
    border: solid 2px ${({ color }) => color};
  }
`;

export const Content = styled.div``;
