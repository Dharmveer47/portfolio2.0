import React from "react";
import {
  AboutContainer,
  HeadingMain,
  LineBreak,
  SubHeading,
} from "../styles/About.styled";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  // PolarRadiusAxis,
  // Tooltip,
} from "recharts";
import { dataReact, dataCss, dataHtml } from "../components/DummyDatas/data";
import { Des } from "../styles/landing.styled";
// import { BgImg } from "../styles/About.styled";
// import texture from "../Img/texture.webp";
// import htmlImg from "../Img/html.jpg";
// import { GiBrain } from "react-icons/gi";
// import ParticlesComponents from "../components/particles/Particles";
const About = () => {
  return (
    <AboutContainer id="about">
      <HeadingMain>WHO AM I ?</HeadingMain>
      <Des time={1}>
        Hi, I’m Dharmveer Singh. I'm a multi-talented human, wide range of
        design disciplines.
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
      <LineBreak />
      <SubHeading>MY WEAPONS</SubHeading>
      <div className="flex flex-wrap md:overflow-y-auto items-center justify-center ">
        <div className="">
          <Rchart data={dataHtml} />
          <Wheading des="HTML" />
        </div>
       
        <div className="">
          <Rchart data={dataReact} />
          <Wheading des="JavaScript" />
        </div>
        <div className="">
          <Rchart data={dataCss} />
          <Wheading des="Others" />
        </div>
      </div>
    </AboutContainer>
  );
};
interface Description {
  des: string;
}

const Wheading = ({ des }: Description) => {
  return (
    <div>
      <h1 className="text-xl  text-white">{des}</h1>
    </div>
  );
};
interface ChartInt {
  data: any;
}

const Rchart = ({ data }: ChartInt) => {
  return (
    <RadarChart
      // cx={300}
      // cy={250}
      outerRadius={100}
      width={400}
      height={400}
      data={data}
    >
      <PolarGrid color="#fff" />
      <PolarAngleAxis dataKey="subject" fillOpacity={1} />
      {/* <PolarRadiusAxis  domain={[0, 150]} color="#fff" /> */}
      <Radar
        name="Mike"
        dataKey="A"
        // color="#fff"
        stroke="#82ca9d"
        fill="#82ca9d"
        fillOpacity={0.7}
      />
      {/* <Tooltip isAnimationActive={false} /> */}
      {/* <Radar
        color="#fff"
        name="Lily"
        dataKey="B"
        stroke="#82ca9d"
        fill="#82ca9d"
        fillOpacity={0.5}
      /> */}
    </RadarChart>
  );
};

// const SkillsCard = () => {
//   const links = "https://cdn-icons-png.flaticon.com/512/121/121537.png";
//   return (
//     <div className="flex flex-col md:flex-row w-4/5 mx-auto items-center">
//       <div className="w-1/2">
//         <img
//           src={htmlImg}
//           alt="Card"
//           className="w-[80%] aboutCard  p-3 mx-auto skew-y-6 skew-x-12  shadow-white hover:backdrop-contrast-50 "
//         />
//       </div>
//       <div className="w-1/2">
//         <div className="flex items-center text-white">
//           <img src={links} alt="" className="w-6 h-auto md:mx-4 mx-1 my-2" />
//           <p className="text-left md:text-center leading-5 ">
//             HyperText Markup Language
//           </p>
//         </div>
//         <div className="flex items-center ">
//           <GiBrain className="text-2xl md:mx-4 mx-1 my-2" />
//           <div className="w-80 relative">
//             <span className={`h-2 bg-black rounded-lg shadow block`}></span>
//             <span
//               style={{ width: "60%" }}
//               className={`h-2 bg-white absolute top-0 rounded-lg shadow-inner block`}
//             ></span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

export default About;
