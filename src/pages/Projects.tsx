import React, { useEffect, useState } from "react";
import { HeadingMain } from "../styles/About.styled";
import { Link, useLocation } from "react-router-dom";
import { useIsMobile } from "../hooks/useIsMobile";

const HASH_LINK = {
  RTH: "#road-that-honk",
  SPOTBUS_CANVAS: "#spotbus-canvas",
  SPOTBUS_DASHBOARD: "#spotbus-dashboard",
  SPOTBUS_CHAT_BOT: "#spotbus-chat-bot",
};

const DES = {
  RTH: "The project is known as 'Roads That Honk', and to prevent accidents on sharp turns on hilly roads, it consists of SmartLife poles at both sides of sharp curves and hairpin bends. Both the poles communicate with each other with the help of wireless technology and monitor the incoming traffic with radar systems. The poles detect the speeds of incoming vehicles and then communicate with each other to alert the drivers of the approaching vehicles on either side with the sound of a horn",
  SPOTBUS_CANVAS:
    "SpotBus's routing canvas makes route planning easy and efficient. With our innovative AI technology, you can generate optimized routes with just one click. Say goodbye to the time-consuming and error-prone process of manual route planning. Our AI takes into account various factors such as traffic patterns, road closures, and time constraints to provide you with the most efficient routes possible. This feature saves you time and money, enabling you to focus on what really matters - providing excellent service to your customers.",
  SPOTBUS_DASHBOARD:
    "SpotBus is a school bus tracker app that functions as a school vehicle monitoring system. It uses GPS tracking to provide real-time updates on the location of school buses. The app is designed to be user-friendly for both parents and drivers, and it is considered one of the best GPS tracking apps in the US.",
  SPOTBUS_CHAT_BOT:
    "SpotBus brings cutting-edge technology to your fingertips with a state-of-the-art AI-powered chatbot, leveraging the power of Generative AI technology. With just a few clicks, the Transportation Director’s team can customize the chatbot widget and integrate it into the school website.",
};

const Projects: React.FC = () => {
  const { hash } = useLocation();
  const [name, setName] = useState("");
  const isMobile = useIsMobile();
  console.log(isMobile, "check_isMobile");
  return (
    <div id="projects" className=" w-fulls flex flex-col">
      <HeadingMain>Featured Projects</HeadingMain>

      <div
        className="border min-h-[80vh]  flex  
      items-center justify-center"
      >
        <div
          className={`border  text-gray-100   
        text-start ${
          isMobile ? "w-5/6" : "w-3/4"
        }  flex   items-center justify-between font-light ${
            isMobile ? "flex-col-reverse" : "flex-row"
          }`}
        >
          <div className={` ${isMobile ? "w-5/6" : "w-1/2"}`}>
            <h2 className="text-2xl my-5 mb-8">{name}</h2>
            <div className="flex">
              <div className="w-3 bg-white mr-6  rounded-sm"></div>

              <div className="p-2 leading-6 tracking-wide transition-all">
                {(hash === HASH_LINK.RTH || hash === "") && DES.RTH}
                {hash === HASH_LINK.SPOTBUS_CANVAS && DES.SPOTBUS_CANVAS}
                {hash === HASH_LINK.SPOTBUS_DASHBOARD && DES.SPOTBUS_DASHBOARD}
                {hash === HASH_LINK.SPOTBUS_CHAT_BOT && DES.SPOTBUS_CHAT_BOT}
              </div>
            </div>
            <div className="mx-8 mt-5 font-bold  tracking-wide ">
              {/* <div>View Site</div> */}
              <div className="w-10 bg-white my-2  rounded-sm h-[2px]"></div>
            </div>
          </div>

          <div className={`${isMobile ? "w-full" : "w-1/3"}   relative `}>
            {!isMobile && (
              <div className="absolute -top-12 -left-6">
                <div className="w-20 bg-white my-2  rounded-sm h-[2px]"></div>
                <div className="w-[3px] bg-white my-2  rounded-sm h-20"></div>
              </div>
            )}
            {!isMobile && <div className="text-2xl mb-8">Projects</div>}
            <div className="w-full">
              <ul
                className={` ${
                  isMobile ? "flex  w-full" : "space-y-3"
                }   text-sm `}
              >
                <LI
                  setName={setName}
                  name="Road That Honk"
                  _to={HASH_LINK.RTH}
                />
                <LI
                  setName={setName}
                  name="Spotbus Canvas"
                  _to={HASH_LINK.SPOTBUS_CANVAS}
                />
                <LI
                  setName={setName}
                  name="Spotbus Dashboard"
                  _to={HASH_LINK.SPOTBUS_DASHBOARD}
                />
                <LI
                  setName={setName}
                  name="Spotbus Chat bot"
                  _to={HASH_LINK.SPOTBUS_CHAT_BOT}
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const LI: React.FC<{
  name: string;
  _to: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
}> = ({ name, _to, setName }) => {
  const { hash } = useLocation();
  const _hashLink = hash === "" ? HASH_LINK.RTH : hash;

  useEffect(() => {
    _hashLink === _to && setName(name);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name, hash]);
  return (
    <li
      className="border-solid w-max leading-6
      hover:text-gray-200 hover:tracking-wider transition-all group"
      role="button"
    >
      <Link to={`${_to}`}>{name}</Link>
      <div
        className={`underLine ${
          _hashLink === _to ? "w-full" : "w-0"
        } group-hover:w-full`}
      ></div>
    </li>
  );
};

export default Projects;
