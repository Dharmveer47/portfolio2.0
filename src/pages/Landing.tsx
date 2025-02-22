import React from "react";
import Tree from "../Img/Trees.webp";
import Mountent from "../Img/Mountent.webp";
import Cloudes from "../Img/Cloud.webp";
import DharmveerLogo from "../components/svgs/DharmLogo";
import Circle from "../components/svgs/Circle";
import CircleAniSVG from "../components/svgs/CircleAniSvg";
import {
  LandingContainer,
  Header,
  Test as AboutContainer,
  Test as ProjectContainer,
  Background,
  BackgroundTree,
  DesignContainer,
  Cloude,
  HeroName,
} from "../styles/landing.styled";
import HeroInro from "../components/HeroInro";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import ParticlesComponents from "../components/particles/Particles";
import About from "./About";
import Projects from "./Projects";

// import { HashLink } from 'react-router-hash-link';
// interface Props {
//     scale?: number;
//     size?: number;
// }
export default function Landing() {
  // const handleScroll = (e: any) => {
  //   e.preventDefault();
  // };

  return (
    <>
      <LandingContainer>
        <Header>
          <DesignContainer>
            <DharmveerLogo />
            <Circle />
          </DesignContainer>
          <Background src={Mountent} scale={4.15} size={-34} />
          <BackgroundTree src={Tree} scale={2.02} size={-11} />
          <Cloude src={Cloudes} scale={6.2} size={-48} />
          <HeroName>
            <HeroInro />
          </HeroName>
          <Navbar />
          <CircleAniSVG />
          <Footer />
        </Header>
        <AboutContainer>
          <About />
          <ParticlesComponents />
        </AboutContainer>
        <ProjectContainer>
          <Projects />
        </ProjectContainer>
        {/* <OldShowCase /> */}
      
      </LandingContainer>
    </>
  );
}
