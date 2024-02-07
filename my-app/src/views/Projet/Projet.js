import React from "react";
import "./Projet.scss";
import { Link } from "react-router-dom";
import Ohmyfood from "../../assets/TitreOhmyfood.PNG";
import Printit from "../../assets/TitrePrintit.PNG";

function Projet() {
  return (
    <>
      <section id="Ancre-projet" className="Projet-Contenant">
        <div id="Body-text">
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
