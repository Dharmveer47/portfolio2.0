import React, { useState, useEffect } from "react";
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
      <div
        className={`nav-link ${active === Links.INTRO ? "active" : ""}`}
        onClick={() => setActive(Links.INTRO)}
      >
        INTRO
      </div>
      <div
        className={`nav-link ${active === Links.ABOUT ? "active" : ""}`}
        onClick={() => setActive(Links.ABOUT)}
      >
        ABOUT ME
      </div>
      <div
        className={`nav-link ${active === Links.PROJECTS ? "active" : ""}`}
        onClick={() => setActive(Links.PROJECTS)}
      >
        PROJECTS
      </div>
      <div
        className={`nav-link ${active === Links.CONTACT ? "active" : ""}`}
        onClick={() => setActive(Links.CONTACT)}
      >
        CONTACT
      </div>
      <div
        className={`nav-link ${active === Links["LINKED IN"] ? "active" : ""}`}
        onClick={() => setActive(Links["LINKED IN"])}
      >
        LINKED IN
      </div>
      <div
        className={`nav-link ${active === Links.GITHUB ? "active" : ""}`}
        onClick={() => setActive(Links.GITHUB)}
      >
        GITHUB
      </div>
    </NavLinks>
  );
};
