import React from "react";
import "./Projet_ohmyfood.scss";
import image from "../../../assets/TitreOhmyfood.PNG";
import carouselOhmyfood from "../../../assets/OhmyfoodMenu.PNG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import titreOhmyfood from "../../../assets/TitreOhmyfood.PNG";
import accueilohmyfood from "../../../assets/accueilohmyfood.PNG";
import menuohmyfood from "../../../assets/Menuohmyfood.PNG";
import commandeohmyfood from "../../../assets/Commandeohmyfood.PNG";
import commande2ohmyfood from "../../../assets/Commande2ohmyfood.PNG";
function Ohmyfood({ theme }) {
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
        <div className="image-logo">
          <img className="img-logo" src={titreOhmyfood}></img>
        </div>

        <a
          className="img-lien"
          href="https://aymeric-bascunana.github.io/aymeric-bascunana_4_13042023/"
        >
          {" "}
          <button className="btn-page">Accéder au site ici </button>
        </a>

        <div className="body-text">
          <div className="body-info">
            <h2 className="type-projet">Projet restaurant</h2>
            <div className="box-paragraphe">
              <p className="Paragraphe-about">
                Dans ce Projet je devais réaliser entièrement le site de A à Z,
                Mais ce qui étais différent des autres projets, c'est que je
                devais faire plusieurs cards restaurants.
              </p>
              <p className="Paragraphe-about">
                Dans chaque card j'ai du implanter des menu commme l'entrées,
                les plats et les desserts où vous validez et commendez vos
                repas.
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
              <li className="list-outil">SASS</li>
              <li className="list-outil">RESPONSIVE</li>
            </ul>
          </div>
        </div>

        <div className="block-page">
          <h2 className="titre-expo">Page D'accueil</h2>
          <img className="img-expo" src={accueilohmyfood}></img>
          <h2 className="titre-expo">Page Menu</h2>
          <img className="img-expo" src={menuohmyfood}></img>
          <h2 className="titre-expo">Page Commande</h2>
          <img className="img-expo" src={commandeohmyfood}></img>
          <img className="img-expo" src={commande2ohmyfood}></img>
        </div>
      </section>
    </>
  );
}

export default Ohmyfood;
