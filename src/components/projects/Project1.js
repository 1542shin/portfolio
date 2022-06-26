import "./project1.scss";
import mycatalog from "../assets/images/mycatalog.png";
import github from "../assets/icons/github.png";
import newlink from "../assets/icons/newlink.svg";
import react from "../assets/icons/react.svg";
import redux from "../assets/icons/redux.svg";
import js from "../assets/icons/js.svg";
import tailwind from "../assets/icons/tailwind.svg";
import AOS from "aos";
import "aos/dist/aos.css";

export const Project1 = () => {
  AOS.init();
  AOS.refresh();
  return (
    <div id="project1" data-aos="zoom-in" data-aos-duration="1000">
      <div id="project1-box">
        <div className="project-text">
          <div id="prj1-text1">01</div>
          <div id="prj1-text2">
            Get articles from multiple sources in one website.
          </div>
          <div id="prj1-text3">
            {" "}
            My Catalog fetches a number of posts from multiple websites and
            shows them on the timeline for each category.
            It requires access to this{'  '}
            <a
                id="cors"
                href=" https://cors-anywhere.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >server</a>.
          </div>
          <div id="prj1-text4">
            <div className="button-box">
              <a
                className="source-anchor"
                href="https://github.com/1542shin/my-catalog"
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
                href="https://1542shin.github.io/my-catalog/"
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
          <img id="prj1-img" src={mycatalog} alt="project1" />
          <div className="project-skills-tab">
            <div className="project-skills-wrap">
              <div>Skills Used: </div>
              <div id="prj1-skills">
                <img src={js} alt="javascript" />

                <img src={react} alt="react" />
                <img src={redux} alt="redux" />
                <img src={tailwind} alt="tailwind" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
