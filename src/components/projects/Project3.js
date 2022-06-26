import "./project3.scss";
import myfavspot from "../assets/images/myfavspot.png";
import github from "../assets/icons/github.png";
import newlink from "../assets/icons/newlink.svg";
import react from "../assets/icons/react.svg";
import redux from "../assets/icons/redux.svg";
import js from "../assets/icons/js.svg";
import mui from "../assets/icons/mui.svg";

export const Project3 = () => {
  return (
    <div id="project3">
      <div id="project3-box" >
        <div className="project-text">
          <div id="prj3-text1">03</div>
          <div id="prj3-text2">Find your favorite spot</div>
          <div id="prj3-text3">
            {" "}
            MyFavSpot searches restaurants, and you can pick and save them to
            your favorites . Make picking restaurants easier.
          </div>
          <div id="prj3-text4">
            <div className="button-box">
              <a
                className="source-anchor"
                href="https://github.com/1542shin/my-fav-spot"
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
                href="https://1542shin.github.io/my-fav-spot/"
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
          <img id="prj3-img" src={myfavspot} alt="project3" />
          <div className="project-skills-tab">
            <div className="project-skills-wrap">
              <div>Skills Used: </div>
              <div id="prj3-skills">
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
