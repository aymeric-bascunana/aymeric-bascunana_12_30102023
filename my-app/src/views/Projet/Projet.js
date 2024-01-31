import React from "react";
import "./Projet.scss";

function Projet() {
  return (
    <>
      <section id="Ancre-projet" className="Projet-Contenant">
        <div id="Body-text">
          <h2>Mes Projets</h2>
          <h3>Voici quelque projet que j'ai réaliser durant ma formation</h3>
          <div className="Box-projet">
            <a href="https://aymeric-bascunana.github.io/aymeric-bascunana_4_13042023/">
              <div className="Projet">
                <p className="Text-projet">Projet 1</p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projet;
