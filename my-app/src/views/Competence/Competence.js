import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import "../Competence/Competence.scss";
import html from "../../assets/logo-html.png";
import css from "../../assets/logo-css.png";
import sass from "../../assets/logo-sass.png";
import javas from "../../assets/logo-js.png";
import react from "../../assets/logo-react.png";

function Compétence() {
  const chartRef = useRef(null); // Ref pour accéder au canevas du graphique

  useEffect(() => {
    // Données pour le graphique histogramme
    const data = {
      labels: ["HTML", "CSS", "SASS", "Javascript", "React"],
      datasets: [
        {
          label: "Niveau de compétences",
          data: [4.5, 3.5, 4.5, 2.5, 3], // Niveaux de compétence (sur une échelle de 1 à 5, par exemple)
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
          ],
          borderWidth: 1,
        },
      ],
    };

    // Détruire le graphique existant s'il y en a un
    if (chartRef.current !== null) {
      chartRef.current.destroy();
    }

    // Créer un nouveau graphique histogramme
    const ctx = document.getElementById("histogram-chart").getContext("2d");
    chartRef.current = new Chart(ctx, {
      type: "bar",
      data: data,
      options: {
        scales: {
          y: {
            beginAtZero: true,
            max: 5,
          },
        },
      },
    });
  }, []);

  return (
    <>
      <section id="Ancre-competence" className="Competence-Contenant">
        {/* <h2 id="Body-competence"> Mes Compétences</h2>
        <ul id="Body-competence" className="block-list">
          <li className="list-Competence">HTML</li>
          <li className="list-Competence">CSS</li>
          <li className="list-Competence">SASS</li>
          <li className="list-Competence">Javascript</li>
          <li className="list-Competence">React</li>
        </ul> */}

        {/* Graphique histogramme */}
        <canvas id="histogram-chart"></canvas>

        <img id="img-competence" className="html-img" src={html}></img>
        <img id="img-competence" className="css-img" src={css}></img>
        <img id="img-competence" className="sass-img" src={sass}></img>
        <img id="img-competence" className="js-img" src={javas}></img>
        <img id="img-competence" className="react-img" src={react}></img>
      </section>
    </>
  );
}

export default Compétence;
