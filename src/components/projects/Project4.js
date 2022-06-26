import "./project4.scss";
import "aos/dist/aos.css";

import myportfolio from "../assets/images/myportfolio.png";
import github from "../assets/icons/github.png";
import newlink from "../assets/icons/newlink.svg";
import react from "../assets/icons/react.svg";
import scss from "../assets/icons/scss.svg";
import js from "../assets/icons/js.svg";

export const Project4 = () => {
  return (
    <div id="project4">
      <div id="project4-box" data-aos="zoom-in" data-aos-duration="1000">
        <div className="project-text">
          <div id="prj4-text1">04</div>
          <div id="prj4-text2">Shin Portfolio</div>
          <div id="prj4-text3">
            This is my web portfolio. Learn about me and the web projects I
            worked on. You're currently on this website.
          </div>
          <div id="prj4-text4">
            <div className="button-box">
              <a
                className="source-anchor"
                href="https://github.com/1542shin/shin-portfolio"
                target="_blank"
                rel="noreferrer"
              >
                <button>
                  <img className="source-icon" src={github} alt="source" />
                  Source
                </button>
              </a>
            </div>
            <div className="button-box">
              <a
                className="demo-anchor"
                href="https://1542shin.github.io/shin-portfolio/"
                target="_blank"
                rel="noreferrer"
              >
                <button>
                  <img className="demo-icon" src={newlink} alt="newlink" />
                  Demo
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="project-image">
          <img id="prj4-img" src={myportfolio} alt="" />
          <div className="project-skills-tab">
            <div className="project-skills-wrap">
              <div>Skills Used: </div>
              <div id="prj4-skills">
                <img src={js} alt="javascript" />
                <img src={react} alt="react" />
                <img src={scss} alt="scss" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
