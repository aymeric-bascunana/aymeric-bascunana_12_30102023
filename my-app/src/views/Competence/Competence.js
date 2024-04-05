import React, { useEffect } from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
// } from "recharts";
import "../Competence/Competence.scss";
import html from "../../assets/logo-html.png";
import css from "../../assets/logo-css.png";
import sass from "../../assets/logo-sass.png";
import javas from "../../assets/logo-js.png";
import react from "../../assets/logo-react.png";

const Competence = ({ theme }) => {
  useEffect(() => {
    const progressions = document.querySelectorAll(".progression");
    progressions.forEach((progression) => {
      const width = progression.getAttribute("data-width");
      progression.style.width = width + "%";

      // Ajouter le pourcentage à l'intérieur de chaque barre
      progression.innerText = width + "%";
    });
  }, []);

  return (
    <section
      id="Ancre-competence"
      className={`Competence-Contenant ${
        theme === "light" ? "light-theme" : ""
      }`}
    >
      <div className="competence">
        <h2>Compétences</h2>
        <div className="competence-item">
          <span>HTML</span>
          <div className="barre">
            <div className="progression html" data-width="90"></div>
          </div>
        </div>
        <div className="competence-item">
          <span>CSS</span>
          <div className="barre">
            <div className="progression css" data-width="85"></div>
          </div>
        </div>
        <div className="competence-item">
          <span>SCSS</span>
          <div className="barre">
            <div className="progression scss" data-width="75"></div>
          </div>
        </div>
        <div className="competence-item">
          <span>JavaScript</span>
          <div className="barre">
            <div className="progression js" data-width="50"></div>
          </div>
        </div>
        <div className="competence-item">
          <span>React</span>
          <div className="barre">
            <div className="progression react" data-width="40"></div>
          </div>
        </div>
      </div>
      <div className="img-competence">
        <img className="html-img" src={html} alt="HTML" />
        <img className="css-img" src={css} alt="CSS" />
        <img className="sass-img" src={sass} alt="SASS" />
        <img className="js-img" src={javas} alt="JavaScript" />
        <img className="react-img" src={react} alt="React" />
      </div>
    </section>
  );
};

export default Competence;
