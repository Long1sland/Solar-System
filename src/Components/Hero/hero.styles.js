import styled from "styled-components";

export const Wrapper = styled.div`
  margin-bottom: 100px;
`;
export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1280px;
  margin: 0 auto;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const PlanetImage = styled.img`
height: 290px;


}
`;

export const PlanetData = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1024px) {
    flex-direction: row;
    align-items: baseline;
    justify-content: space-between;
    width: 100%;
  }

  @media screen and (max-width: 860px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  #Words {
    width: 350px;

    @media screen and (max-width: 860px) {
      width: 100%;
      max-width: 500px;
    }
  }

  #Buttons {
    @media screen and (max-width: 860px) {
      display: none;
    }
  }
`;
