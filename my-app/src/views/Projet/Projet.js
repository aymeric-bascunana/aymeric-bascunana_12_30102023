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

              <div className="Projet">
                <p className="Text-projet">Projet 1</p>
              </div>
            </Link>
          </div>

          {/* <div className="Box-projet">
            <Link to="/PageProjet2">
              <img className="img-banner" src={image} />

              <div className="Projet">
                <p className="Text-projet">Projet 1</p>
              </div>
            </Link>
          </div> */}
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
