import React, { useState, useEffect } from "react";
import "../panel/panel.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
// import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

function Panel({ toggleTheme, showPanel }) {
  const [activeLink, setActiveLink] = useState(""); // État pour suivre le lien actif
  const [modalOpen, setModalOpen] = useState(false); // État pour contrôler l'ouverture de la modal
  // const [theme, setTheme] = useState("light");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const accueilSection = document.getElementById("Ancre-accueil");
      const aboutSection = document.getElementById("Ancre-about");
      const competenceSection = document.getElementById("Ancre-competence");
      const projetSection = document.getElementById("Ancre-projet");
      const footerSection = document.getElementById("Ancre-footer");

      if (
        scrollPosition <= aboutSection.offsetTop &&
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
      } else if (scrollPosition >= footerSection.offsetTop) {
        setActiveLink("Ancre-footer");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //Section modal
  const closeModal = () => {
    setModalOpen(false); // Ferme la modal
  };

  const handleNavigation = (sectionId) => {
    closeModal(); // Ferme la modal lors de la navigation
  };

  // const toggleTheme = () => {
  //   setTheme(theme === "light" ? "dark" : "light");
  // };

  const modalContent = (
    <div className="modal-panel">
      <a
        className="btn-mobil"
        href="#Ancre-accueil"
        onClick={() => handleNavigation("#Ancre-accueil")}
      >
        Accueil
      </a>
      <a
        className="btn-mobil"
        href="#Ancre-about"
        onClick={() => handleNavigation("#Ancre-about")}
      >
        À propos de moi
      </a>
      <a
        className="btn-mobil"
        href="#Ancre-competence"
        onClick={() => handleNavigation("#Ancre-competence")}
      >
        Compétence
      </a>
      <a
        className="btn-mobil"
        href="#Ancre-projet"
        onClick={() => handleNavigation("#Ancre-projet")}
      >
        Projet
      </a>
      <a
        className="btn-mobil"
        href="#Ancre-footer"
        onClick={() => handleNavigation("#Ancre-footer")}
      >
        Contact
      </a>
    </div>
  );

  return (
    <div className="side-panel">
      <h2 className="name">Aymeric Bascunana</h2>
      <div className="display-mobil">
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
          Projet
        </a>
        <a
          className={`bouton-scroll ${
            activeLink === "Ancre-footer" ? "active" : ""
          }`}
          href="#Ancre-footer"
        >
          Contact
        </a>
      </div>

      <ul className="ul-contact">
        <li> 06.62.74.90.80</li>
        <li className="mail-info">
          <a className="deco-lien" href="mailto:aymeric.bascunana@gmail.com">
            aymeric.bascunana@gmail.com
          </a>
        </li>
      </ul>

      <button
        className="btn-nav"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Navigation
      </button>
      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </span>
            {modalContent}
          </div>
        </div>
      )}
      {/* Bouton pour basculer entre les thèmes sombre et clair
      <button className="btn-theme" onClick={toggleTheme}>
        <FontAwesomeIcon icon={faSun} />
        <FontAwesomeIcon icon={faMoon} />
      </button> */}
    </div>
  );
}

export default Panel;
