import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 30px;
  height: calc(100vh - 82px);
  background: var(--backgroundColor);
  position: absolute;
  top: 82px;
  left: 0;
  right: 0;
  animation: slide 1s cubic-bezier(0.59, -0.05, 0.12, 0.63);

  @keyframes slide {
    from {
      transform: translateX(-100%);
    }

    to {
      transform: translateX(0px);
    }
  }

  @media screen and (min-width: 860px) {
    display: none;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: scroll;
  height: 100%;
  max-width: 650px;
  margin: 0 auto;

  ::-webkit-scrollbar {
    width: 0;
  }

  // To style the link tags
  a {
    border-bottom: 1px solid var(--darkGrey);
  }
`;

export const MenuItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    height: 8px;
    width: 4px;
  }

  h4 {
    font-size: 15px;
    letter-spacing: 1.35px;
  }
`;

export const MenuContent = styled.div`
  display: flex;
  align-items: center;
  .circle {
    height: 20px;
    width: 20px;
    border-radius: 100%;
    margin-right: 25px;
  }
  #Mercury {
    background: var(--mercuryColor);
  }

  #Venus {
    background: var(--venusColor);
  }

  #Earth {
    background: var(--earthColor);
  }

  #Mars {
    background: var(--marsColor);
  }

  #Jupiter {
    background: var(--jupiterColor);
  }

  #Saturn {
    background: var(--saturnColor);
  }

  #Uranus {
    background: var(--uranusColor);
  }

  #Neptune {
    background: var(--neptuneColor);
  }
`;
