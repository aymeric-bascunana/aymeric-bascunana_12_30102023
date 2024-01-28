import React from "react";
import "../Home/Home.scss";
// import "../home/ResponsiveHome.scss";
import About from "../About/About";
import Compétence from "../Competence/Competence";
import Project from "../Project/Project";

function Home() {
  return (
    <>
      <div className="side-panel">
        <button id="bouton-scroll">Défiler vers le bas</button>
      </div>

      <About />
      <Compétence />
      <Project />
    </>
  );
}

export default Home;
