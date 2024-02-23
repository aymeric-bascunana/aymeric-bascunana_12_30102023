import React, { useState, useEffect } from "react";
import "../panel/panel.scss";

function Panel() {
  const [activeLink, setActiveLink] = useState(""); // État pour suivre le lien actif

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const accueilSection = document.getElementById("Ancre-accueil");
      const aboutSection = document.getElementById("Ancre-about");
      const competenceSection = document.getElementById("Ancre-competence");
      const projetSection = document.getElementById("Ancre-projet");
      const footerSection = document.getElementById("Ancre-footer");

      if (
        scrollPosition < aboutSection.offsetTop &&
        scrollPosition >= accueilSection.offsetTop
      ) {
        setActiveLink("Ancre-accueil");
      } else if (
        scrollPosition < competenceSection.offsetTop &&
        scrollPosition >= aboutSection.offsetTop
      ) {
        setActiveLink("Ancre-about");
      } else if (
        scrollPosition < projetSection.offsetTop &&
        scrollPosition >= competenceSection.offsetTop
      ) {
        setActiveLink("Ancre-competence");
      } else if (
        scrollPosition < footerSection.offsetTop &&
        scrollPosition >= projetSection.offsetTop
      ) {
        setActiveLink("Ancre-projet");
      } else {
        setActiveLink("Ancre-footer");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="side-panel">
      <h2 className="name">Aymeric Bascunana</h2>
      <a
        className={`bouton-scroll ${
          activeLink === "Ancre-accueil" ? "active" : ""
        }`}
        href="#Ancre-accueil"
      >
        Accueil
      </a>
      <a
        className={`bouton-scroll ${
          activeLink === "Ancre-about" ? "active" : ""
        }`}
        href="#Ancre-about"
      >
        À propos de moi
      </a>
      <a
        className={`bouton-scroll ${
          activeLink === "Ancre-competence" ? "active" : ""
        }`}
        href="#Ancre-competence"
      >
        Compétence
      </a>
      <a
        className={`bouton-scroll ${
          activeLink === "Ancre-projet" ? "active" : ""
        }`}
        href="#Ancre-projet"
      >
        Project
      </a>
      <a
        className={`bouton-scroll ${
          activeLink === "Ancre-footer" ? "active" : ""
        }`}
        href="#Ancre-footer"
      >
        Footer
      </a>
    </div>
  );
}

export default Panel;
