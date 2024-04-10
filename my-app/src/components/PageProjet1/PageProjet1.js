import React from "react";
import "./PageProjet1.scss";
import image from "../../assets/TitreOhmyfood.PNG";
import carouselOhmyfood from "../../assets/OhmyfoodMenu.PNG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

function Projet1({ theme }) {
  return (
    <>
      <NavLink className="lien" activeClassName="active" exact to="/">
        <FontAwesomeIcon icon={faArrowLeft} />
      </NavLink>
      {/* <img className="header-page1" src={image}></img> */}
      <h1 className="header-page">Ohmyfood </h1>
      <section
        className={`body-page ${theme === "light" ? "light-theme" : ""}`}
      >
        <h2 className="info-projet">
          Voici l'un de mes projet réaliser où j'ai dû créer un site web pour
          Ohmyfood <span> .</span>
        </h2>
        <a
          className="img-lien"
          href="https://aymeric-bascunana.github.io/aymeric-bascunana_4_13042023/"
        >
          <img className="carousel" src={carouselOhmyfood}></img>
        </a>
        <div className="body-text">
          <h2 className="type-projet">Projet restaurant</h2>
          <div className="box-paragraphe">
            <p className="Paragraphe-about">
              Dans ce Projet je devais réaliser entièrement le site de A à Z,
              Mais ce qui étais différent des autres projets, c'est que je
              devais faire plusieurs cards restaurants.
            </p>
            <p className="Paragraphe-about">
              Dans chaque card j'ai du implanter des menu commme l'entrées, les
              plats et les desserts où vous validez et commendez vos repas.
            </p>
          </div>

          <h2 className="type-projet">Outils</h2>
          <p className="box-paragraphe">Les outils utiliser dans ce projet:</p>
          <ul className="block-list">
            <li className="list-outil">HTML</li>
            <li className="list-outil">CSS</li>
            <li className="list-outil">SASS</li>
            <li className="list-outil">RESPONSIVE</li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Projet1;
