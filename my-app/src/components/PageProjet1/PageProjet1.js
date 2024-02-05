import React from "react";
import "./PageProjet1.scss";
import image from "../../assets/TitreOhmyfood.PNG";
import carouselOhmyfood from "../../assets/OhmyfoodMenu.PNG";

function Projet1() {
  return (
    <>
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
      </div>
    </>
  );
}

export default Projet1;
