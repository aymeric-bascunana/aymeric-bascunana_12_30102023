import React from "react";
import "../Competence/Competence.scss";
import html from "../../assets/logo-html.png";
import css from "../../assets/logo-css.png";
import sass from "../../assets/logo-sass.png";
import javas from "../../assets/logo-js.png";
import react from "../../assets/logo-react.png";

function Compétence() {
  return (
    <>
      <section id="Ancre-competence" className="Competence-Contenant">
        <h2 id="Body-competence"> Mes Compétences</h2>
        <ul id="Body-competence" className="block-list">
          <li className="list-Competence">HTML</li>
          <li className="list-Competence">CSS</li>
          <li className="list-Competence">SASS</li>
          <li className="list-Competence">Javascript</li>
          <li className="list-Competence">React</li>
        </ul>
        <img className="html-img" src={html}></img>
        <img className="css-img" src={css}></img>
        <img className="sass-img" src={sass}></img>
        <img className="js-img" src={javas}></img>
        <img className="react-img" src={react}></img>
      </section>
    </>
  );
}

export default Compétence;
