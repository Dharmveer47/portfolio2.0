import React, { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
// import { }
import { NavLinks } from "../styles/navbar.styled";
export const Navbar: React.FC = () => {
  const Links = {
    INTRO: "INTRO",
    ABOUT: "ABOUT",
    PROJECTS: "PROJECTS",
    CONTACT: "CONTACT",
    "LINKED IN": "LINKED IN",
    GITHUB: "GITHUB",
  };
  const [active, setActive] = useState("");

  useEffect(() => {
    setActive(Links.INTRO);
  }, [Links.INTRO]);
  return (
    <NavLinks>
      {/* <HashLink smooth to="/#home"></HashLink> */}
      <div
        className={`nav-link ${active === Links.INTRO ? "active" : ""}`}
        onClick={() => setActive(Links.INTRO)}
      >
        <HashLinksCus address="/#home" navName="INTRO" />
      </div>
      <div
        className={`nav-link ${active === Links.ABOUT ? "active" : ""}`}
        onClick={() => setActive(Links.ABOUT)}
      >
        <HashLinksCus address="/about" navName="ABOUT ME" />
      </div>
      <div
        className={`nav-link ${active === Links.PROJECTS ? "active" : ""}`}
        onClick={() => setActive(Links.PROJECTS)}
      >
        <HashLinksCus address="/projects" navName="PROJECTS" />
      </div>
      <div
        className={`nav-link ${active === Links.CONTACT ? "active" : ""}`}
        onClick={() => setActive(Links.CONTACT)}
      >
        <a href="mailto:singhdharmu89@gmail.com">CONTACT</a>
      </div>
      <div
        className={`nav-link ${active === Links["LINKED IN"] ? "active" : ""}`}
        onClick={() => setActive(Links["LINKED IN"])}
      >
        <a href="https://www.linkedin.com/in/dharmveer47/">LINKEDIN IN</a>
      </div>
      <div
        className={`nav-link ${active === Links.GITHUB ? "active" : ""}`}
        onClick={() => setActive(Links.GITHUB)}
      >
        <a href="https://github.com/Dharmveer47">GITHUB</a>
      </div>
    </NavLinks>
  );
};

interface HasLinks {
  navName: string;
  address: string;
}

const HashLinksCus = ({ navName, address = "/#home" }: HasLinks) => {
  return (
    <HashLink
      smooth
      to={address}
      className="w-full h-full flex items-center justify-center"
    >
      {navName}
    </HashLink>
  );
};
