import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: 210px;
  padding-left: 30px;
  padding-right: 30px;

  @media (min-width: 1024px) {
    padding-top: 100px;
  }
`;
export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 80px;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const PlanetContainer = styled.div`
  position: relative;
  height: 300px;
  width: 300px;
  #main {
    height: 300px;
    position: absolute;

    z-index: 1;
  }

  #float {
    height: 142px;
    position: absolute;
    top: 210px;
    left: 92px;
    z-index: 2;
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
