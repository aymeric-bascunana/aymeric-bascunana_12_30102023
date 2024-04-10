import React from "react";
import "./PageProjet2.scss";
import image from "../../assets/TitrePrintit.PNG";
import CarouselPrintit from "../../assets/CarouselPrintit.PNG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

function Projet2({ theme }) {
  return (
    <>
      <NavLink className="lien" activeClassName="active" exact to="/">
        <FontAwesomeIcon icon={faArrowLeft} />
      </NavLink>
      <h1 className="header-page">Print it! </h1>
      <section
        className={`body-page ${theme === "light" ? "light-theme" : ""}`}
      >
        <h2>
          Voici l'un de mes projet réaliser où j'ai dû modifier un site web pour
          Print it!
        </h2>
        <a
          className="img-lien"
          href="https://aymeric-bascunana.github.io/aymeric-bascunana_5_26062023/"
        >
          <img className="carousel" src={CarouselPrintit}></img>
        </a>
        <div className="body-text">
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
          <h2 className="type-projet">Outils</h2>
          <p className="box-paragraphe">Les outils utiliser dans ce projet:</p>
          <ul>
            <li li className="list-outil">
              HTML
            </li>
            <li li className="list-outil">
              CSS
            </li>
            <li li className="list-outil">
              Javascript
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Projet2;
