import React from "react";
import "../Home/Home.scss";
// import "../home/ResponsiveHome.scss";
import Header from "../../components/Header/Header";
import About from "../About/About";
import Compétence from "../Competence/Competence";
import Project from "../Project/Project";
import Diplome from "../Diplome/Diplome";
import Language from "../Language/Language";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <>
      <div className="side-panel">
        <a id="bouton-scroll" href="#Ancre-accueil">
          Accueil
        </a>
        <a id="bouton-scroll" href="#Ancre-about">
          {" "}
          À propos de moi
        </a>
        <a id="bouton-scroll" href="#Ancre-competence">
          Compétence
        </a>
        <a id="bouton-scroll" href="#Ancre-project">
          Project
        </a>
        <a id="bouton-scroll" href="#Ancre-diplome">
          Diplome
        </a>
        <a id="bouton-scroll" href="#Ancre-language">
          Language
        </a>
        <a id="bouton-scroll" href="#Ancre-footer">
          Footer
        </a>
      </div>

      <Header />
      <About />
      <Compétence />
      <Project />
      <Diplome />
      <Language />
      <Footer />
    </>
  );
}

export default Home;
