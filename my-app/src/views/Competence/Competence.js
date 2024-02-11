import React from "react";
import "../Competence/Competence.scss";
import html from "../../assets/logo-html.png";
// import css from "../../assets/logo-css.png";
// import sass from "../../assets/logo-sass.png";
// import javas from "../../assets/logo-js.png";
// import react from "../../assets/logo-react.png";

function Compétence() {
  return (
    <>
      <section id="Ancre-competence" className="Competence-Contenant">
        <h2 id="Body-text"> Mes Compétences</h2>
        <img src={html}></img>
        {/* <img src={css}></img>
        <img src={sass}></img>
        <img src={javas}></img>
        <img src={react}></img> */}
        <ul id="Body-text" className="block-list">
          <li className="list-Competence">HTML</li>
          <li className="list-Competence">CSS</li>
          <li className="list-Competence">SASS</li>
          <li className="list-Competence">Javascript</li>
          <li className="list-Competence">React</li>
        </ul>
      </section>
    </>
  );
}

export default Compétence;
