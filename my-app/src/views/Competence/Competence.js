import React from "react";
import {
  // Radar,
  // RadarChart,
  // PolarGrid,
  // PolarAngleAxis,
  // PolarRadiusAxis,
  ////parti histogramme////
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import "../Competence/Competence.scss";
import html from "../../assets/logo-html.png";
import css from "../../assets/logo-css.png";
import sass from "../../assets/logo-sass.png";
import javas from "../../assets/logo-js.png";
import react from "../../assets/logo-react.png";

function Compétence({ theme }) {
  const data = [
    { subject: "HTML", value: 7 },
    { subject: "CSS", value: 6 },
    { subject: "SASS", value: 5 },
    { subject: "Javascript", value: 2 },
    { subject: "React", value: 2 },
  ];

  return (
    <section
      id="Ancre-competence"
      className={`Competence-Contenant ${
        theme === "light" ? "light-theme" : ""
      }`}
    >
      {/* <RadarChart
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
      </RadarChart> */}

      <BarChart
        width={600}
        height={500}
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="subject" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>

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
