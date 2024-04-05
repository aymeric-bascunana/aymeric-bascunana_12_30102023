import React, { useState, useEffect, useRef } from "react";
import "./Projet.scss";
import { NavLink } from "react-router-dom";
import Projet1 from "../../components/PageProjet1/PageProjet1";
import Projet2 from "../../components/PageProjet2/PageProjet2";

function Projet({ theme }) {
  return (
    <section
      id="Ancre-projet"
      className={`Projet-Contenant ${theme === "light" ? "light-theme" : ""}`}
    >
      <div className="fenetre-buttons">
        <NavLink
          className="btn-window"
          activeClassName="active"
          exact
          to="/PageProjet1"
        >
          Projet1
        </NavLink>
        <NavLink
          className="btn-window"
          activeClassName="active"
          exact
          to="/PageProjet2"
        >
          Projet 2
        </NavLink>
      </div>
    </section>
  );
}

export default Projet;
