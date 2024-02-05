import React from "react";
import "./Projet.scss";
import { Link } from "react-router-dom";
import image from "../../assets/TitreOhmyfood.PNG";

function Projet() {
  return (
    <>
      <section id="Ancre-projet" className="Projet-Contenant">
        <div id="Body-text">
          <h2>Mes Projets</h2>
          <h3>Voici quelque projet que j'ai réaliser durant ma formation</h3>
          <div className="Box-projet">
            <Link to="/PageProjet1">
              <img className="img-banner" src={image} />
              {/* <a href="https://aymeric-bascunana.github.io/aymeric-bascunana_4_13042023/"> */}
              <div className="Projet">
                <p className="Text-projet">Projet 1</p>
              </div>
              {/* </a> */}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projet;

//  Card = ({ title, imageURL, id }) => {
//   const cardStyle = {
//     backgroundImage: `url(${imageURL})`,
//   };
