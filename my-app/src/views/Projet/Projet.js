import React, { useState } from "react";
import "./Projet.scss";
// import { Link } from "react-router-dom";
// import Ohmyfood from "../../assets/TitreOhmyfood.PNG";
// import Printit from "../../assets/TitrePrintit.PNG";
import Projet1 from "../../components/PageProjet1/PageProjet1";
import Projet2 from "../../components/PageProjet2/PageProjet2";

function Projet() {
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
    <section id="Ancre-projet" className="Projet-Contenant">
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

/* <div id="Body-text">
  <h2>Mes Projets</h2>
  <h3>Voici quelque projet que j'ai réaliser durant ma formation</h3>
  <div className="Box-projet">
    <Link to="/PageProjet1">
      <img className="img-banner" src={Ohmyfood} />

      <div className="Projet">
        <p className="Text-projet">Projet 1</p>
      </div>
    </Link>
  </div>

  <div className="Box-projet2">
    <Link to="/PageProjet2">
      <img className="img-banner2" src={Printit} />

      <div className="Projet2">
        <p className="Text-projet2">Projet 2</p>
      </div>
    </Link>
  </div>
</div> */
