import React from "react";
import { HeadingMain } from "../styles/About.styled";
import TablateImage from "../Img/tablate.png";
import { LineBreak } from "../styles/About.styled";
import Rth from "../Img/rth.png";
import RthMob from "../Img/rthMob.png";
import ApplePng from "../Img/applePng.png";
const Projects: React.FC = () => {
  return (
    <div id="projects" className="">
      <HeadingMain>Featured Projects</HeadingMain>
      <SingleProject />
    </div>
  );
};

const SingleProject: React.FC<{}> = () => {
  return (
    <>
      <div className="flex md:flex-row flex-col text-left my-6 md:w-9/12 w-full m-auto ">
        <div className="px-5 relative overflow-hidden ">
          <div className="relative block">
            <img src={TablateImage} alt="" className="relative z-10 " />
            <div className="overflow-hidden bg-black  absolute top-0 h-3/4 rounded-3xl ">
              <img
                src={Rth}
                alt=""
                className="relative px-4 pt-4 w-full z-0 transform-gpu transitionAni"
              />
            </div>
          </div>
          <div className="block absolute bottom-0 right-0 w-1/4 z-30  ">
            <img src={ApplePng} alt="" className="relative z-30" />
            <div className="absolute  bg-black    mx-auto top-1 rounded-2xl  overflow-hidden h-[98%] ">
              <img
                src={RthMob}
                alt=""
                className="shadow-xl relative p-1  z-0 transform-gpu rounded-2xl  transitionAni"
              />
            </div>
          </div>
        </div>
        <div className="px-5 md:w-full">
          <h1 className="text-3xl text-gray-100 tracking-wide font-bold py-4">
            Roads That Honk
          </h1>
          <p className="text-gray-300 py-2 tracking-wide leading-5 pl-2">
          Roads That Honk - the world's first anti-collision vehicle management system for dangerous hairpin bends.
          </p>
          <h1 className="text-xl text-gray-100 tracking-wide font-bold py-1">
            Role and Responsibility
          </h1>
          <p className="text-gray-300 py-2 tracking-wide leading-5 pl-2">
            Project Descripttur delectus sit iusto aspernatur, porro cum?
          </p>
        </div>
      </div>
      <LineBreak />
    </>
  );
};

export default Projects;
