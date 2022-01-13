import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${({ color }) => color};
  padding: 0 28px;
  border-bottom: 1px solid var(--darkGrey);
  position: fixed;
  width: 100%;
  transition: all 0.3s ease-in-out;
  backdrop-filter: blur(8px);
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: var(--maxWidth);
  margin: 0 auto;
  height: 100%;

  p {
    font-family: "Antonio", sans-serif;
    color: var(--white);
    font-size: 28px;
  }

  //Tablets
  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }

  //Phones
  @media screen and (max-width: 860px) {
    flex-direction: row;
  }
`;

export const Navlinks = styled.div`
  display: flex;

  a {
    font-family: "Spartan", sans-serif;
    font-weight: 700;
    font-size: 11px;
    line-height: 25px;
    letter-spacing: 1px;
    color: var(--darkGrey);

    margin-right: 33px;
    border-top: 3px solid transparent;
    padding: 30px 0;
    transition: all 0.3s ease-in-out;
  }

  a:hover,
  .active {
    color: var(--white);
  }

  #mercury.active,
  #mercury:hover {
    border-top: 3px solid var(--mercuryColor);
  }

  #venus.active,
  #venus:hover {
    border-top: 3px solid var(--venusColor);
  }

  #earth.active,
  #earth:hover {
    border-top: 3px solid var(--earthColor);
  }

  #mars.active,
  #mars:hover {
    border-top: 3px solid var(--marsColor);
  }

  #jupiter.active,
  #jupiter:hover {
    border-top: 3px solid var(--jupiterColor);
  }

  #saturn.active,
  #saturn:hover {
    border-top: 3px solid var(--saturnColor);
  }

  #uranus.active,
  #uranus:hover {
    border-top: 3px solid var(--uranusColor);
  }

  #neptune.active,
  #neptune:hover {
    border-top: 3px solid var(--neptuneColor);
  }

  .noMargin {
    margin-right: 0px;
  }
  //Phones
  @media screen and (max-width: 860px) {
    display: none;
  }
`;

export const Hamburger = styled.img`
  transition: all 0.3s ease-in-out;
  filter: ${({ color }) => color};

  @media screen and (min-width: 860px) {
    display: none;
  }
`;

export const Menu = styled.div`
  height: calc(100vh - 82px);

  background: white;
  position: absolute;
  left: 0;
  right: 0;
  animation: slide 0.3s linear;

  @keyframes slide {
    from {
      transform: translateX(-100%);
    }

    to {
      transform: translateX(10px);
    }
  }
`;
