import styled from "styled-components";

export const Menu = styled.div`
  background-color: white;
  position: absolute;
  width: 100%;
  height: calc(100vh - 82px);
  animation: slide 0.3s linear;
  top: 82px;

  @keyframes slide {
    from {
      transform: translateX(-100%);
    }

    to {
      transform: translateX(10px);
    }
  }
`;
