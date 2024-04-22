import React, { useState, useEffect, useRef } from "react";
import "../Projet/Projet.scss";
import { NavLink } from "react-router-dom";
import Projet1 from "../../views/Projets/Ohmyfood/Projet_ohmyfood";
import Projet2 from "../../views/Projets/Printit/Projet_printit";
import Ohmyfood from "../../assets/TitreOhmyfood.PNG";
import Printit from "../../assets/TitrePrintit.PNG";

function Projet({ theme }) {
  return (
    <section
      id="Ancre-projet"
      className={`Projet-Contenant ${theme === "light" ? "light-theme" : ""}`}
    >
      <h1 className="title-projet">
        {" "}
        <span className="deco-title">Mes Projets</span>{" "}
      </h1>
      <h2 className="info-projet">
        Ici vous retrouverez mes projet que j'ai réaliser{" "}
      </h2>
      <div className="Projet-block">
        <NavLink
          className="Page-lien"
          activeClassName="active"
          exact
          to="/Ohmyfood"
        >
          <div className="Block-page">
            <img className="img-page" src={Ohmyfood}></img>
            Projet1
          </div>
        </NavLink>

        <NavLink
          className="Page-lien"
          activeClassName="active"
          exact
          to="/Printit"
        >
          <div className="Block-page">
            <img className="img-page" src={Printit}></img>
            Projet2
          </div>
        </NavLink>
      </div>
    </section>
  );
}

export default Projet;