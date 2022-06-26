import "./home.scss";
import stars from "./assets/video/stars.mp4";
import AOS from "aos";
import "aos/dist/aos.css";

export const Home = () => {
  AOS.init();
  AOS.refresh();

  return (
    <div id="home">
      <video id="home-background-video" src={stars} autoPlay loop muted />

      <div id="home-box" data-aos="zoom-in" data-aos-duration="1000">
        <div id="home-intro1">Hi, I am</div>
        <div id="home-intro2">Aahan Shin</div>
        <div id="home-intro3">Web Technology Enthusiast</div>
      </div>

      <a id="arrows-link" href="#about">
        <svg className="arrows">
          <path className="a1" d="M0 0 L30 32 L60 0"></path>
          <path className="a2" d="M0 20 L30 52 L60 20"></path>
          <path className="a3" d="M0 40 L30 72 L60 40"></path>
        </svg>
      </a>
    </div>
  );
};
