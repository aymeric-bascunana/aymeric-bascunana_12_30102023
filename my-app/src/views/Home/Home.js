import React from "react";
import "../Home/Home.scss";
// import "../home/ResponsiveHome.scss";
import Header from "../../components/Header/Header";
import About from "../About/About";
import Compétence from "../Competence/Competence";
import Projet from "../Projet/Projet";

import Footer from "../Footer/Footer";

function Home() {
  return (
    <>
      <Header />
      <About />
      <Compétence />
      <Projet />
      <Footer />
    </>
  );
}

export default Home;
