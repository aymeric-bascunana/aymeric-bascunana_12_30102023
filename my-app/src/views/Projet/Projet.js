import React, { useState, useEffect, useRef } from "react";
import "./Projet.scss";
import { NavLink } from "react-router-dom";
import Projet1 from "../../components/PageProjet1/PageProjet1";
import Projet2 from "../../components/PageProjet2/PageProjet2";
import Ohmyfood from "../../assets/TitreOhmyfood.PNG";
import Printit from "../../assets/TitrePrintit.PNG";

function Projet({ theme }) {
  return (
    <section
      id="Ancre-projet"
      className={`Projet-Contenant ${theme === "light" ? "light-theme" : ""}`}
    >
      <div className="Projet-block">
        <NavLink
          className="Page-lien"
          activeClassName="active"
          exact
          to="/PageProjet1"
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
          to="/PageProjet2"
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
