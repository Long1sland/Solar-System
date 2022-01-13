import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 860px) {
    flex-direction: column;
    max-width: 500px;
    margin: 0 auto;
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
    width: 100%;
    margin-bottom: 20px;

    h2 {
      font-size: 40px;
      float: right;
      text-align: center;
    }

    h4 {
      float: left;
      font-size: 11px;
      text-align: center;
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
