import styled, { keyframes } from "styled-components";

export const Svg = styled.svg`
  .path1 {
    stroke-dasharray: 722.706298828125px;
    stroke-dashoffset: 722.706298828125px;
    /* fill="#182226" */
  }
`;
export const SvgContainer = styled.div`
  align-self: center;
  margin-top: -6px;
  @media screen and (max-width: 768px) {
    margin-left: 3rem;
  }
`;
export const CircleAnimation = keyframes`
  0% {
  transform: rotate(0deg);
  }
  100% {
  transform: rotate(360deg);
  }
`;
export const SvgPath = styled.path<{
  time: number;
  id: string;
  activeId: string;
}>`
  fill: "#182226";
  transform-origin: center;
  transform: rotate(50deg);
  transition: all ease 0.1s;
  animation: ${CircleAnimation} ease-in-out ${(props) => `${props.time}s`}
    alternate-reverse infinite;
    filter: ${(props) => (props.id === props.activeId ? "drop-shadow(2px 2px 6px #aff)" : "none")};  
  &:hover {
    filter: drop-shadow(2px 2px 6px #aff);
  }
`;
