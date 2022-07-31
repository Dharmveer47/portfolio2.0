import styled, { keyframes } from "styled-components";
const NavlineAni = keyframes`
 0% {
  height: 0px;
 }
 50%{
  height:40px;
  width: 0px;
}
100%{
    width: 100%;
  border-right: 1px solid #fff;
  border-bottom: 1px solid #fff;
  border-top: 1px solid #fff;
  height:40px;
 }
`;
export const NavLinks = styled.div`
  position: relative;
  top: 13.5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 15px;
  width: 80%;
  margin: 0 auto;
  color: #fff;

  div {
    /* padding: 10px 12px; */
    display: flex;
    align-items: center;
    justify-content: center;
    /* width: 100%;
    height: 35px; */
    white-space: nowrap;

    animation: ${NavlineAni} ease-in-out 3s forwards 3s;
    cursor: pointer;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      background-color: #fff;
      width: 0%;
      height: 100%;
      left: 0;
      z-index: -1;
      transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
    }
    &:hover {
      color: #000;
      &::before {
        width: 100%;
      }
    }
  }
  > :nth-child(1) {
    border-left: 1px solid #fff;
  }
`;
