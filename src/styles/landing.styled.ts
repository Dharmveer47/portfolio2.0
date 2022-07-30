import styled, { keyframes } from "styled-components";

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
  height: 100vh;
  width: 100%;
  background: radial-gradient(50% 50% at 50% 50%, #2c3c40 0%, #182226 100%);
`;
// const SlowMotion = keyframes`
//  0% {
//   transform: translateY(0) translateX(0);
//  }
//  25% {
//   transform: translateY(5px) translateX(5px);
//  }
//   50% {
//   transform: translateY(0) translateX(0);
//   }
//   75% {
//   transform: translateY(-5px) translateX(-5px);
//   }
//  100%{
//   transform: translateY(0) translateX(0);
//  }
// `;
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
export const BackgroundTree = styled.img<{ scale: number; size: number }>`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0px;
  /* border: 1px solid red; */
  object-fit: cover;
  z-index: -1;
  transform: translateZ(${(props) => `${props.size}px`})
    scale(${(props) => props.scale});
`;

const breatheAnimation = keyframes`
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
  animation: ${breatheAnimation} ease-in-out 4s forwards 1s;
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
  /* width: 100%; */
  /* height: 40vh; */
  z-index: -1;
  transform: translateZ(${(props) => `${props.size}px`})
    scale(${(props) => props.scale});
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
  >:nth-child(1) {
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
`;

export const Des = styled.div`
  font-size: 15px;
  margin: 8px 0;
`
export const SmallDes = styled.div`
  font-size: 12px;
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
  }
`;
// const Heading = styled.h1<{ active: boolean }>`
//   color: ${props => (props.active ? 'red' : 'blue')};
// `;
