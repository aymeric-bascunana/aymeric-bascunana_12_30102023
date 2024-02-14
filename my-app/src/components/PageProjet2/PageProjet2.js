import React from "react";
import "./PageProjet2.scss";
import image from "../../assets/TitrePrintit.PNG";
import carouselOhmyfood from "../../assets/CarouselPrintit.PNG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

function Projet2() {
  return (
    <>
      <NavLink className="lien" activeClassName="active" exact to="/">
        <FontAwesomeIcon icon={faArrowLeft} />
      </NavLink>
      <img className="header-page1" src={image}></img>
      <div className="body-page1">
        <a href="https://aymeric-bascunana.github.io/aymeric-bascunana_5_26062023/">
          <img className="carousel" src={carouselOhmyfood}></img>
        </a>

        <h2 className="type-projet">Projet carousel</h2>
        <p>
          Voici l'un de mes projet réaliser où j'ai dû modifier un site web pour
          Print it!
        </p>
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
        <h2>Outils</h2>
        <p>Les outils utiliser dans ce projet:</p>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
        </ul>
      </div>
    </>
  );
}

export default Projet2;
