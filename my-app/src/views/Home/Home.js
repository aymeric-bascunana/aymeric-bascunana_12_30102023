import React, { useState } from "react";
import "../Home/Home.scss";

import Header from "../../components/Header/Header";
import About from "../../components/About/About";
import Compétence from "../../components/Competence/Competence";
import Projet from "../../components/Projet/Projet";
import Footer from "../../components/Footer/Footer";
import Panel from "../../components/panel/panel";

function Home() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <div className={`App ${theme === "dark" ? "dark-theme" : ""}`}>
        <Panel theme={theme} toggleTheme={toggleTheme} />
        <main>
          <Header theme={theme} />
          <About theme={theme} />
          <Compétence theme={theme} />
          <Projet theme={theme} />
          <Footer theme={theme} />
        </main>
      </div>
    </>
  );
}

export default Home;
