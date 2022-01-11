import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 860px) {
    flex-direction: column;
  }
`;

export const InfoBox = styled.div`
  border: solid 2px var(--darkGrey);
  padding: 25px;
  width: min(250px, 19vw);

  @media screen and (max-width: 1024px) {
    width: min(250px, 19vw);
    padding: 8px;

    h2 {
      font-size: 24px;
    }

    h4 {
      font-size: 8px;
    }
  }

  @media screen and (max-width: 860px) {
    max-width: 500px;

    h2 {
      font-size: inherit;
    }

    h4 {
      font-size: inherit;
    }
  }

  h4,
  h2 {
    margin: 0;
  }

  h4 {
    color: var(--darkGrey);
  }
`;
