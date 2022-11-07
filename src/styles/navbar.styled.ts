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
  border-left: 1px solid #fff;
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
    @media screen and (max-width: 768px) {
      animation: none;
      border: none;
    }
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
      box-shadow: 2px 3px 10px gainsboro;
      &::before {
        width: 100%;
      }
    }
  }
  > :nth-child(1) {
    border-left: 1px solid #fff;
    @media screen and (max-width: 768px) {
      border-left: none;
    }
  }
  @media screen and (max-width: 768px) {
    /* border: 1px solid #fff; */
    /* color: #182226; */
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 4px;
    position: fixed;
    top: -20px;
    left: 0;
    height: 100vh;
    width: 2rem;
    background-color: #2c3c40;

    .active {
      background-color: #d9d9d9;
      color: #182226;
      border-radius: 2px;
    }

    div {
      transform: rotate(90deg);
      padding: 8px 7px;
      margin: 22px -2px;
      font-size: 9px;
    }
    /* transform: rotate(90deg); */
  }
`;
