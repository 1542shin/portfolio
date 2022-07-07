import "./App.scss";
import { NavBar } from "./components/NavBar";
import { Home } from "./components/Home";
import { About } from "./components/About";
import React from "react";
import { Projects } from "./components/projects/Projects";
import { Contact } from "./components/Contact";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init()
function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </React.Fragment>
  );
}

export default App;
