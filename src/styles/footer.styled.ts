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
  transition: all 1s ease-in-out;
  letter-spacing: 1px;
  transform-origin: left;
  transform: scale(0);
  animation: ${fadeIn} 0.5s ease-in-out 6s forwards;
  @media screen and (max-width: 768px) {
    width: fit-content;
    margin-left: 3rem;
    font-size: 10px;
    line-height: 1.3;
    position: absolute;
    bottom: 12%;
  }
`;
