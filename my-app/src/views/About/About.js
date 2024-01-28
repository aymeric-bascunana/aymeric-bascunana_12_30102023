import React from "react";
import "./About.scss";
// import "./ResponsiveAbout.scss";

function About() {
  return (
    <>
      <section className="About-Contenant">
        <h2 id="Body-text" className="About-title">
          À propos de moi
        </h2>
        <h3 id="Body-text" className="Name-Portfolio">
          je m'appel Aymeric Bascunana
        </h3>
        <p id="Body-text" className="info-me">
          je suis étudiant débutant en code html, css, scss, Javascript et react
        </p>
      </section>
    </>
  );
}

export default About;
