import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";
import "../Competence/Competence.scss";
import html from "../../assets/logo-html.png";
import css from "../../assets/logo-css.png";
import sass from "../../assets/logo-sass.png";
import javas from "../../assets/logo-js.png";
import react from "../../assets/logo-react.png";

function Compétence() {
  const data = [
    { subject: "HTML", value: 4.5 },
    { subject: "CSS", value: 3.5 },
    { subject: "SASS", value: 4.5 },
    { subject: "Javascript", value: 2.5 },
    { subject: "React", value: 3 },
  ];

  return (
    <section id="Ancre-competence" className="Competence-Contenant">
      <RadarChart
        cx={300}
        cy={250}
        outerRadius={150}
        width={600}
        height={500}
        left={680}
        top={160}
        data={data}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={90} domain={[0, 5]} />
        <Radar
          name="Niveau de compétences"
          dataKey="value"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
      </RadarChart>

      <img id="img-competence" className="html-img" src={html} alt="HTML" />
      <img id="img-competence" className="css-img" src={css} alt="CSS" />
      <img id="img-competence" className="sass-img" src={sass} alt="SASS" />
      <img
        id="img-competence"
        className="js-img"
        src={javas}
        alt="JavaScript"
      />
      <img id="img-competence" className="react-img" src={react} alt="React" />
    </section>
  );
}

export default Compétence;
