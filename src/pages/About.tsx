import React from "react";
import { AboutContainer, HeadingMain } from "../styles/About.styled";
import { Des } from "../styles/landing.styled";
import { BgImg } from "../styles/About.styled";
import texture from "../Img/texture.webp";
const About = () => {
  return (
    <AboutContainer>
      <BgImg src={texture} alt="Texture" />
      <HeadingMain>WHO AM I ?</HeadingMain>
      <Des time={1}>
        Hi, I’m Dharmveer Singh. I'm a multi-talented human, wide range of design
        disciplines.
      </Des>
      <Des time={0}>
        I don’t like to define myself by the work I’ve done. I define myself by
        the work I want to do. Skills can be taught, personality is inherent. I
        prefer to keep learning, continue challenging myself, and do interesting
        things that matter.
      </Des>
      <Des time={0}>
        Fueled by high energy levels and boundless enthusiasm, I’m easily
        inspired and more then willing to follow my fascinations wherever they
        take me. I’m passionate, expressive, multi-talented spirit with a
        natural ability to entertain and inspire. I’m never satisfied to just
        come up with ideas. Instead I have an almost impulsive need to act on
        them.
      </Des>
      <Des time={0}>
        My abundant energy fuels me in the pursuit of many interests, hobbies,
        areas of study and artistic endeavors. I’m a fast learner, able to pick
        up new skills and juggle different projects and roles with relative
        ease.
      </Des>
    </AboutContainer>
  );
};

export default About;
