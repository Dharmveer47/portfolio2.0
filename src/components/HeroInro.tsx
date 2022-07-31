import React from "react";
import { Des,SmallDes } from "../styles/landing.styled"
const HeroInro = () => {
  return (
    <>
      <div>
        <div>
          <span>D</span>
          <span>H</span>
          <span>A</span>
          <span>R</span>
          <span>M</span>
          <span>V</span>
          <span>E</span>
          <span>E</span>
          <span>R</span>
        </div>

        <div>
          <span>S</span>
          <span>I</span>
          <span>N</span>
          <span>G</span>
          <span>H</span>
        </div>
      </div>
      <Des time={5}>FRONT-END WEB DEVELOPER & UI/UX DESIGNER</Des>
      <Des time={5.5}>PRIMARY FOCUS ON REACT.JS AND CSS</Des>
        <SmallDes>I LOVE MY WORK</SmallDes>
    </>
  );
};

export default HeroInro;
