import styled from "styled-components";

export const Wrapper = styled.div`
  height: 50px;
  background-color: ${({ color }) => color};
  position: absolute;
  left: 0;
  width: 100vw;
  padding: 0 40px;
  border-bottom: 1px solid var(--darkGrey);
  transition: all 0.3s ease-in-out;
  backdrop-filter: blur(8px);
  @media screen and (min-width: 860px) {
    display: none;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;

  h4 {
    font-size: 9px;
    color: var(--darkGrey);
  }

  h4:hover {
    color: white;
  }

  .active {
    border-bottom: 3px solid ${({ color }) => color};
    transition: all 0.3s ease-in-out;
  }
`;
