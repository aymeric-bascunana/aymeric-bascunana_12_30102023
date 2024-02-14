import React from "react";
import "./PageProjet1.scss";
import image from "../../assets/TitreOhmyfood.PNG";
import carouselOhmyfood from "../../assets/OhmyfoodMenu.PNG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

function Projet1() {
  return (
    <>
      <NavLink className="lien" activeClassName="active" exact to="/">
        <FontAwesomeIcon icon={faArrowLeft} />
      </NavLink>
      <img className="header-page1" src={image}></img>
      <div className="body-page1">
        <a href="https://aymeric-bascunana.github.io/aymeric-bascunana_4_13042023/">
          <img className="carousel" src={carouselOhmyfood}></img>
        </a>

        <h2 className="type-projet">Projet restaurant</h2>
        <p>
          Voici l'un de mes projet réaliser où j'ai dû créer un site web pour
          Ohmyfood
        </p>
        <div className="box-paragraphe">
          <p className="Paragraphe-about">
            Dans ce Projet je devais réaliser entièrement le site de A à Z, Mais
            ce qui étais différent des autres projets, c'est que je devais faire
            plusieurs cards restaurants.
          </p>
          <p className="Paragraphe-about">
            Dans chaque card j'ai du implanter des menu commme l'entrées, les
            plats et les desserts où vous validez et commendez vos repas.
          </p>
        </div>

        <h2>Outils</h2>
        <p>Les outils utiliser dans ce projet:</p>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>SASS</li>
          <li>RESPONSIVE</li>
        </ul>
      </div>
    </>
  );
}

export default Projet1;
