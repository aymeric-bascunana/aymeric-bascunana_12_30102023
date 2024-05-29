import React from "react";
import "./Projet_printit.scss";
import image from "../../../assets/TitrePrintit.PNG";
import CarouselPrintit from "../../../assets/CarouselPrintit.PNG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import titrePrintit from "../../../assets/TitrePrintit.PNG";
import pagecarouselprintit from "../../../assets/PageCarouselPrintit.PNG";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

function Printit({ theme, toggleTheme }) {
  return (
    <>
      <section
        className={`body-page ${theme === "light" ? "light-theme" : ""}`}
      >
        <NavLink className="lien" activeClassName="active" exact to="/">
          <FontAwesomeIcon icon={faArrowLeft} />
        </NavLink>
        <h1 className="header-page">Print it! </h1>
        <button
          className="btn-theme-page"
          onClick={toggleTheme}
          aria-label={
            theme === "light" ? "Switch to Dark Theme" : "Switch to Light Theme"
          }
        >
          {theme === "light" ? (
            <FontAwesomeIcon icon={faSun} />
          ) : (
            <FontAwesomeIcon icon={faMoon} />
          )}
          {theme === "light"}
        </button>
        <h2 className="info-projet">
          Voici l'un de mes projet réaliser où j'ai dû modifier un site web pour
          Print it!
        </h2>
        <div className="image-logo">
          <img className="img-logo" src={titrePrintit}></img>
        </div>
        <a
          className="img-lien"
          href="https://aymeric-bascunana.github.io/aymeric-bascunana_5_26062023/"
        >
          <button className="btn-page">Accéder au site ici</button>
        </a>
        <div className="body-text">
          <div className="body-info">
            <h2 className="type-projet">Projet carousel</h2>
            <div className="box-paragraphe">
              <p className="Paragraphe-about">
                Dans ce Projet je devais modifier le site, je devais rajouter un
                carousel.
              </p>
              <p className="Paragraphe-about">
                Avec les fleches permetant de changer l'image et le nom tout en
                faisent en sorte que quand-on arrive à la fin on recommence au
                debut, je devais également ajouter les dots.
              </p>
            </div>
          </div>
          <div className="body-outils">
            <h2 className="type-projet">Outils</h2>
            <p className="box-paragraphe">
              Les outils utiliser dans ce projet:
            </p>
            <ul className="block-list">
              <li className="list-outil">HTML</li>
              <li className="list-outil">CSS</li>
              <li className="list-outil">Javascript</li>
            </ul>
          </div>
        </div>

        <div className="block-page">
          <h2 className="titre-expo">Page Carousel</h2>
          <img className="img-expo" src={pagecarouselprintit}></img>
        </div>
      </section>
    </>
  );
}

export default Printit;
