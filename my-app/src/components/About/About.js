import React from "react";
import "./About.scss";
// import ordi from "../../assets/ordi.png";
// import tel from "../../assets/tel.png";

function About({ theme }) {
  return (
    <>
      <section
        id="Ancre-about"
        className={`section-main About-Contenant ${
          theme === "light" ? "light-theme" : ""
        }`}
      >
        {/* <img className="ordi-background" src={ordi}></img> */}
        {/* <div className="block-phone">
          <img className="tel-background" src={tel}></img>
        </div> */}
        <div className="block-info">
          <h1 className="title">
            Bonjour <span>. </span>
          </h1>
          <div id="div-text">
            {/* <h2 i className="Name-Portfolio">
            </h2> */}
            <p className="info-me">
              Je m'appelle Aymeric Bascunana, Je suis étudiant débutant en code
              html, css, scss, Javascript et react,passionné par la création web
              et la résolution de problèmes.
            </p>
            <p className="info-me">
              Mon objectif est de développer des compétences solides dans ces
              langages pour construire des projets innovants et dynamiques.
            </p>
            <p className="info-me">
              Je suis motivé à apprendre et à progresser continuellement dans le
              domaine du développement web
            </p>

            <h2 className="info-list">
              Langages que j'utilise en développement web{" "}
            </h2>

            <ul className="list-style">
              <li>HTML</li>
              <li>CSS</li>
              <li>SCSS</li>
              <li>Javascript</li>
              <li>React</li>
            </ul>

            <h2 className="info-list">
              Outils que j'utilise en développement web
            </h2>

            <ul className="list-style">
              <li>Visual Studio Code</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
