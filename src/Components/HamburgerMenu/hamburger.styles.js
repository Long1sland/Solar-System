import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 860px) {
    display: none;
  }
`;

export const Span = styled.span`
  background: var(--white);
  width: 24px;
  height: 3px;
  margin-bottom: 4px;
`;
