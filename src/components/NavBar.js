import React from "react";
import "./navBar.scss";
import github from "./assets/icons/github.png";
import linkedin from "./assets/icons/linkedin.png";
import mail from "./assets/icons/mail.svg";
export const NavBar = () => {
  return (
    <nav id="navbar">
      <a className=" menu" href="#home">
        Home
      </a>
      <a className=" menu" href="#about">
        About
      </a>
      <a className=" menu" href="#projects">
        Projects
      </a>
      <a className=" menu" href="#contact">
        Contact
      </a>{" "}
      <div id="links">
        <a id="mail" href="mailto:1142shin@gmail.com">
          <img className="link-icons" src={mail} alt="mail" />
        </a>

        <a
          id="github"
          href="https://github.com/1542shin/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <img className="link-icons" src={github} alt="github" />
        </a>

        <a
          id="linkedin"
          href="https://www.linkedin.com/in/aahan-shin-300722235"
          target="_blank"
          rel="noreferrer"
        >
          <img className="link-icons" src={linkedin} alt="linkedin" />
        </a>
      </div>
    </nav>
  );
};
