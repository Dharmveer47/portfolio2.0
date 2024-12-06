import styled, { keyframes } from "styled-components";
import { fadeIn } from "./footer.styled";
// import textureImg from "../Img/texture.png"
export const LandingContainer = styled.div`
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  perspective: 11px;
  background: radial-gradient(50% 50% at 50% 50%, #2c3c40 0%, #182226 100%);
`;
export const Header = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  transform-style: preserve-3d;
  z-index: -1;
  margin-top: 1.2rem;
`;
export const Test = styled.div`
  min-height: 100vh;
  width: 100%;
  transform: translateY(-20px);
  position: relative;

  background-repeat: no-repeat;
  background-size: cover;
  /* background-color: radial-gradient(50% 50% at 50% 50%, #2c3c40 0%, #182226 100%); */
  background: radial-gradient(50% 50% at 50% 50%, #2c3c40 0%, #182226 100%);
`;
export const Background = styled.img<{ scale: number; size: number }>`
  position: absolute;
  height: 100vh;
  width: 100%;
  object-fit: cover;
  z-index: -1;
  transition: 2s ease-in-out;
  transform: translateZ(${(props) => `${props.size}px`})
    scale(${(props) => props.scale});
`;
export const BackgroundTree = styled.img<{ scale: number; size: number }>(
  ({ scale, size }) => `
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0px;
  object-fit: cover;
  z-index: -1;
  transform: translateZ(${size}px) scale(${scale});
`
);

const DLogo = keyframes`
 0% {
  stroke-dashoffset: 789.9083251953125px;
 }
 100%{
  stroke-dashoffset: 0px;
 }
`;

const DharmLogoFill = keyframes`
 0% {
  fill: transparent;
 }
 100%{
  fill: #fff;
 }
`;
export const PathSvg = styled.path`
  stroke-dasharray: 789.9083251953125px;
  stroke-dashoffset: 789.9083251953125px;
  /* stroke-dashoffset: 500px; */
  animation: ${DLogo} ease-in-out 4s forwards 1s;
`;
const circleAnimation = keyframes`
 0% {
  stroke-dashoffset: 370.76007080078125px;
 }
 100%{
  stroke-dashoffset: 0px;
 }
`;
export const HeadingContainer = styled.div`
  width: 100%;
  .RightLine {
    border: 1px solid red;
  }
`;
const LineAnimation = keyframes`
 0% {
  height: 0px;
 }
 50%{
  height:70px;
  width: 0px;
 }
 100%{
  width: 40%;
  height:70px;
 }
`;
export const DesignContainer = styled.div`
  /* border: 1px solid #fff; */

  width: 100%;
  height: 9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    bottom: -39%;
    right: 50%;
    /* width: 45%;
    height: 100px; */
    border-top: none;
    border-bottom: 1px solid #fff;
    border-right: 1px solid #fff;
    animation: ${LineAnimation} ease-in-out 1s forwards 3s;
  }
  &::before {
    content: "";
    position: absolute;

    bottom: -39%;
    left: 50%;
    /* width: 45%;
    height: 100px; */
    border-top: none;
    border-bottom: 1px solid #fff;
    animation: ${LineAnimation} ease-in-out 1s forwards 3s;
  }
  @media screen and (max-width: 768px) {
    &::after,
    &::before {
      display: none;
    }
    margin-left: 1rem;
  }
  .LogoCircle {
    /* border: 1px solid red; */
    position: absolute;
    stroke-dasharray: 370.76007080078125px;
    stroke-dashoffset: 370.76007080078125px;
    animation: ${circleAnimation} ease-in-out 1s forwards 3s;
    width: clamp(120px, 50%, 21px);
  }
  .DharmLogo {
    animation: ${DharmLogoFill} ease-in-out 1s forwards 3s;
    width: clamp(71px, 10vw, 21px);
  }
`;

export const Cloude = styled.img<{ scale: number; size: number }>`
  position: absolute;
  top: -1400px;
  width: 100%;
  height: auto;
  z-index: -1;
  transform: translateZ(${(props) => `${props.size}px`})
    scale(${(props) => props.scale});
  animation: float 10s ease-in-out infinite;

  @keyframes float {
    0% {
      transform: translateZ(${(props) => `${props.size}px`})
        scale(${(props) => props.scale}) translateY(0);
    }
    50% {
      transform: translateZ(${(props) => `${props.size}px`})
        scale(${(props) => props.scale}) translateY(15px);
    }
    100% {
      transform: translateZ(${(props) => `${props.size}px`})
        scale(${(props) => props.scale}) translateY(0);
    }
  }
`;

const TextAnimation = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: .5;
  }
  100% {
    opacity: 1;
  }
`;

export const HeroName = styled.div`
  color: #f2f2f2;
  margin-top: 5rem;
  position: relative;
  font-size: 40px;
  letter-spacing: 0.04em;
  > :nth-child(1) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding-bottom: 2rem;
    span {
      opacity: 0;
    }
    div {
      > :nth-child(1) {
        animation: ${TextAnimation} ease-in-out 1s forwards 3s;
      }
      > :nth-child(2) {
        animation: ${TextAnimation} ease-in-out 1s forwards 3.2s;
      }
      > :nth-child(3) {
        animation: ${TextAnimation} ease-in-out 1s forwards 3.4s;
      }
      > :nth-child(4) {
        animation: ${TextAnimation} ease-in-out 1s forwards 3.6s;
      }
      > :nth-child(5) {
        animation: ${TextAnimation} ease-in-out 1s forwards 3.8s;
      }
      > :nth-child(6) {
        animation: ${TextAnimation} ease-in-out 1s forwards 4s;
      }
      > :nth-child(7) {
        animation: ${TextAnimation} ease-in-out 1s forwards 4.2s;
      }
      > :nth-child(8) {
        animation: ${TextAnimation} ease-in-out 1s forwards 4.4s;
      }
      > :nth-child(9) {
        animation: ${TextAnimation} ease-in-out 1s forwards 4.6s;
        padding-right: 0.7rem;
      }
      > :nth-child(10) {
        animation: ${TextAnimation} ease-in-out 1s forwards 4.8s;
      }
    }
    div {
      > :nth-child(11) {
        animation: ${TextAnimation} ease-in-out 1s forwards 5s;
      }
      > :nth-child(12) {
        animation: ${TextAnimation} ease-in-out 1s forwards 5.2s;
      }
      > :nth-child(13) {
        animation: ${TextAnimation} ease-in-out 1s forwards 5.4s;
      }
      > :nth-child(14) {
        animation: ${TextAnimation} ease-in-out 1s forwards 5.6s;
      }
    }
  }
  @media screen and (max-width: 768px) {
    margin-left: 3rem;
    margin-top: 1rem;
    > :nth-child(1) {
      padding-bottom: 1rem;
    }
  }
`;

export const Des = styled.div<{ time: number }>`
  font-size: 15px;
  /* font-size: clamp(10px, 1.5vw, 15px); */
  width: 70%;
  font-weight: 300;
  margin: auto;
  padding: 0.3rem 0;
  transform-origin: left;
  transform: scale(0);
  color: white;
  /* text-transform: uppercase; */
  line-height: 1.5rem;
  letter-spacing: 0.04em;
  animation: ${fadeIn} 0.5s ease-in-out ${(props) => `${props.time}s`} forwards;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;
export const SmallDes = styled.div`
  font-size: clamp(8px, 1.5vw, 12px);
  margin: 10px 0;

  &::before {
    content: "";
    position: absolute;
    bottom: -60%;
    left: 50%;
    /* width: 40%; */
    /* height: 100px; */
    border-top: 1px solid #fff;
    border-left: 1px solid #fff;
    animation: ${LineAnimation} ease-in-out 1s forwards 3s;
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
  &::after {
    content: "";
    position: absolute;
    bottom: -60%;
    right: 50%;
    /* width: 40%; */
    /* height: 100px; */
    animation: ${LineAnimation} ease-in-out 1s forwards 3s;
    border-top: 1px solid #fff;
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
`;
// const Heading = styled.h1<{ active: boolean }>`
//   color: ${props => (props.active ? 'red' : 'blue')};
// `;
