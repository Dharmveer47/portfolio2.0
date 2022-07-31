// import { useState, useEffect } from "react";
import Tree from "../Img/Trees.png";
import Mountent from "../Img/Mountent.png";
import Cloudes from "../Img/Cloud.png";
import DharmveerLogo from "../components/svgs/DharmLogo";
import Circle from "../components/svgs/Circle";
import {
  LandingContainer,
  Header,
  Test,
  Background,
  BackgroundTree,
  DesignContainer,
  Cloude,
  HeroName,
} from "../styles/landing.styled";
import HeroInro from "../components/HeroInro";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

// interface Props {
//     scale?: number;
//     size?: number;
// }
export default function Landing() {
  const handleScroll = (e: any) => {
    // console.log(e.target.scrollTop);
  };
  const handleLoad = (e: any) => {
    // console.log(e);
  };
 
  return (
    <LandingContainer onScroll={handleScroll} >
      <Header onLoad={handleLoad}>
        <DesignContainer >
          <DharmveerLogo />
          <Circle />
        </DesignContainer>
        <Background src={Mountent} scale={4.15} size={-34} />
        <BackgroundTree src={Tree} scale={2} size={-11} />
        <Cloude src={Cloudes} scale={6.2} size={-48} />
        <HeroName>
          <HeroInro />
        </HeroName>
        <Navbar />
        <Footer />
      </Header>
      <Test></Test>
    </LandingContainer>
  );
}
