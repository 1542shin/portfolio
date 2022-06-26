import { Project1 } from "./Project1";
import { Project2 } from "./Project2";
import { Project3 } from "./Project3";
import { Project4 } from "./Project4";
import "./projects.scss";
import AOS from "aos";
import "aos/dist/aos.css";


export const Projects = () => {
  AOS.init();

  return (
    <div id="projects">
      <Project1  data-aos="zoom-in" data-aos-duration="1000"/>
      <Project2 data-aos="zoom-in" data-aos-duration="1000" />
      <Project3 data-aos="zoom-in" data-aos-duration="1000" />
      <Project4  data-aos="zoom-in" data-aos-duration="1000"/>
    </div>
  );
};
