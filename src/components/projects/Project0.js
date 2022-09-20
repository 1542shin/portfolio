import "./project1.scss";
import timezone from "../assets/images/timezone.png";
import github from "../assets/icons/github.png";
import newlink from "../assets/icons/newlink.svg";
import react from "../assets/icons/react.svg";
import mui from "../assets/icons/mui.svg";
import js from "../assets/icons/js.svg";
import firebase from "../assets/icons/firebase.svg";
import tailwind from "../assets/icons/tailwind.svg";

export const Project0 = () => {
  return (
    <div id="project1" data-aos="zoom-in" data-aos-duration="1000">
      <div id="project1-box">
        <div className="project-text">
          <div id="prj1-text1">01</div>
          <div id="prj1-text2">
            Plan meeting in different timezone
          </div>
          <div id="prj1-text3">
            {" "}
            Timezone planner lets you plan meetings with people in different timezones. 
            You will see the availabilty of other people in the timeline converted to your timezone.
            
          </div>
          <div id="prj1-text4">
            <div className="button-box">
              <a
                className="source-anchor"
                href="https://github.com/Scott-Coates-Org/solo-project-1342shin"
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
                href="https://timezone-planner.web.app/"
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
          <img id="prj1-img" src={timezone} alt="project1" />
          <div className="project-skills-tab">
            <div className="project-skills-wrap">
              <div>Skills Used: </div>
              <div id="prj1-skills">
              <img src={js} alt="javascript" />
              <img src={react} alt="react" />
              <img src={mui} alt="mui" />
              <img src={firebase} alt="firebase" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
