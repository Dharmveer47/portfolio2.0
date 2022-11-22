import React from "react";
import { HeadingMain } from "../styles/About.styled";
import TablateImage from "../Img/tablate.png";
import Rth from "../Img/rth.png";
const Projects: React.FC = () => {
  return (
    <div id="projects" className="md:w-9/12 w-full m-auto">
      <HeadingMain>Featured Projects</HeadingMain>
      <SingleProject />
    </div>
  );
};

const SingleProject: React.FC = () => {
  return (
    <div className="flex md:flex-row flex-col text-left my-6 ">
      <div className="px-5 relative overflow-hidden">
        <div className="relative block">
          <img src={TablateImage} alt="" className="relative z-10 " />
          <div className="overflow-hidden bg-black  absolute top-0 h-3/4 rounded-3xl ">
            <img
              src={Rth}
              alt=""
              className=" relative px-4 pt-4 w-full z-0 "
            />
          </div>
        </div>
      </div>
      <div className="px-5">
        <h1 className="text-3xl text-gray-100 tracking-wide font-bold py-4">
          Project Heading
        </h1>
        <p className="text-gray-300 py-2 tracking-wide leading-5 pl-2">
          Project Description Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Et exercitationem minus eius nam, error facilis.
          Consequuntur, tempore. Voluptas, ipsam nulla reprehenderit quasi non
          consequatur delectus sit iusto aspernatur, porro cum?
        </p>
        <h1 className="text-xl text-gray-100 tracking-wide font-bold py-1">
          Role and Responsibility
        </h1>
        <p className="text-gray-300 py-2 tracking-wide leading-5 pl-2">
          Project Descripttur delectus sit iusto aspernatur, porro cum?
        </p>
      </div>
    </div>
  );
};

export default Projects;
