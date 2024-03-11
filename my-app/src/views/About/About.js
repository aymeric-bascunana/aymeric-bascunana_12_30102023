import React from "react";
import "./About.scss";
import ordi from "../../assets/ordi.png";
import tel from "../../assets/tel.png";

function About() {
  return (
    <>
      <section id="Ancre-about" className="About-Contenant">
        <img className="ordi-background" src={ordi}></img>
        <div className="block-phone">
          <img className="tel-background" src={tel}></img>
        </div>
        <div id="div-text">
          {/* <h2 className="About-title">À propos de moi</h2> */}
          <h2 i className="Name-Portfolio">
            je m'appelle Aymeric Bascunana
          </h2>
          <p className="info-me">
            je suis étudiant débutant en code html, css, scss, Javascript et
            react,passionné par la création web et la résolution de problèmes.
          </p>
          <p className="info-me">
            Mon objectif est de développer des compétences solides dans ces
            langages pour construire des projets innovants et dynamiques.
          </p>
          <p className="info-me">
            Je suis motivé à apprendre et à progresser continuellement dans le
            domaine du développement web
          </p>
        </div>
      </section>
    </>
  );
}

export default About;
