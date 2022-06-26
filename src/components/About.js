import "./about.scss";

import astronaut from "./assets/images/astronaut.jpeg";
import { skillsIcons } from "./assets/skills.js";
import "aos/dist/aos.css";

export const About = () => {
  return (
    <div id="about">
      <div
        id="about-box"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <div id="about-left">
          <div id="about-description">
            <div id="line1">About Me </div>
            <div id="line2">I love learning information technologies,</div>
            <div id="line3">
              and I want to be part of our information advancement. I am
              interested in web technologies enabling people to access the
              information from anywhere in the world.
            </div>
          </div>
          <br />
          <div id="about-skills">
            <div id="about-skills-title"> My skill-set</div>
            <div id="about-skills-icons">
              {skillsIcons.map((elem) => (
                <div className="skill" key={elem.skill}>
                  <img src={elem.icon} alt={elem.skill} />
                  <div>{elem.skill}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div id="about-right">
          <img id="astronaut" src={astronaut} alt="astronaut" />
        </div>
      </div>
    </div>
  );
};
