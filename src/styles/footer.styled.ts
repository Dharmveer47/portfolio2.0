import styled, { keyframes } from "styled-components";

export const fadeIn = keyframes`
    0% {
        transform: scale(0);
    }
    100% {
        transform: scale(1);
    }
`;

export const FooterStyled = styled.footer`
  position: absolute;
  bottom: 30px;
  width: 100%;
  color: #eee;
  font-size: 12px;
  letter-spacing: 1px;
  transform-origin: left;
  transform: scale(0);
  animation: ${fadeIn} 0.5s ease-in-out 6s forwards;
`;
