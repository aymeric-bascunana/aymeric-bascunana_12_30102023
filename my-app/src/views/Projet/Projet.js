import React, { useState } from "react";
import "./Projet.scss";

import Projet1 from "../../components/PageProjet1/PageProjet1";
import Projet2 from "../../components/PageProjet2/PageProjet2";

function Projet({ theme }) {
  const [selectedWindow, setSelectedWindow] = useState(null); // État pour suivre la fenêtre sélectionnée

  // Fonction pour changer la fenêtre sélectionnée
  const handleWindowChange = (window) => {
    setSelectedWindow(window);
  };

  // Fonction pour revenir à une page vide
  const handleClearWindow = () => {
    setSelectedWindow(null);
  };

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (event) => {
    event.preventDefault();
    const inputText = event.target
      .querySelector('input[name="prenom"]')
      .value.trim()
      .toLowerCase();

    if (inputText === "projet1" || inputText === "projet2") {
      setSelectedWindow(inputText);
    } else {
      setSelectedWindow(null);
    }
  };

  return (
    <section
      id="Ancre-projet"
      className={`Projet-Contenant ${theme === "light" ? "light-theme" : ""}`}
    >
      <div className="fenetre-buttons">
        {/* Boutons pour les fenêtres */}
        <button
          className={`btn-window ${selectedWindow === null ? "selected" : ""}`}
          onClick={handleClearWindow}
        >
          Nouvel onglet
        </button>
        <button
          className={`btn-window ${
            selectedWindow === "projet1" ? "selected" : ""
          }`}
          onClick={() => handleWindowChange("projet1")}
        >
          Projet 1
        </button>
        <button
          className={`btn-window ${
            selectedWindow === "projet2" ? "selected" : ""
          }`}
          onClick={() => handleWindowChange("projet2")}
        >
          Projet 2
        </button>
      </div>
      <h3 className="logo">Mes Projets</h3>
      <div className="fenetre-contenu">
        {/* Afficher le contenu en fonction de la fenêtre sélectionnée */}
        {selectedWindow === "projet1" && <Projet1 />}
        {selectedWindow === "projet2" && <Projet2 />}
        {selectedWindow === null && (
          <form onSubmit={handleSubmit}>
            <input className="search" type="text" name="prenom" />
            <input className="btn-search" type="submit" value="Entrée" />
            <div className="search-labels">
              Termes acceptés : <span>projet1</span>, <span>projet2</span>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

export default Projet;
