import "./project2.scss";
import healthtrack from "../assets/images/healthtrack.png";
import github from "../assets/icons/github.png";
import newlink from "../assets/icons/newlink.svg";
import react from "../assets/icons/react.svg";
import redux from "../assets/icons/redux.svg";
import js from "../assets/icons/js.svg";
import mui from "../assets/icons/mui.svg";

export const Project2 = () => {
  return (
    <div id="project2" data-aos="zoom-in" data-aos-duration="1000">
      <div id="project2-box" >
        <div className="project-text">
          <div id="prj2-text1">02</div>
          <div id="prj2-text2">Track and check your health information.</div>
          <div id="prj2-text3">
            {" "}
            Health Track gets input weight data and show it in graph and table
            form. You can also set your height and calculate BMI index.
          </div>
          <div id="prj2-text4">
            <div className="button-box">
              <a
                className="source-anchor"
                href="https://github.com/1542shin/health-track"
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
                href="https://1542shin.github.io/health-track/"
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
          <img id="prj2-img" src={healthtrack} alt="project2" />
          <div className="project-skills-tab">
            <div className="project-skills-wrap">
              <div>Skills Used: </div>
              <div id="prj2-skills">
                <img src={js} alt="javascript" />
                <img src={react} alt="react" />
                <img src={redux} alt="redux" />
                <img src={mui} alt="mui" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
