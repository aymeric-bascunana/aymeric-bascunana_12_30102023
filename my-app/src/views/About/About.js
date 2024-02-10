import React from "react";
import "./About.scss";
import ordi from "../../assets/ordi.png";

function About() {
  return (
    <>
      <section id="Ancre-about" className="About-Contenant">
        <div id="Body-text">
          <img src={ordi}></img>
          <h2 className="About-title">À propos de moi</h2>
          <h3 i className="Name-Portfolio">
            je m'appel Aymeric Bascunana
          </h3>
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
