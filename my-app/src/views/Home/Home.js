import React, { useState } from "react";
import "../Home/Home.scss";

import Header from "../../components/Header/Header";
import About from "../About/About";
import Compétence from "../Competence/Competence";
import Projet from "../Projet/Projet";
import Footer from "../Footer/Footer";
import Panel from "../panel/panel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

function Home() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <div className={`App ${theme === "dark" ? "dark-theme" : ""}`}>
        <button
          className="btn-theme"
          onClick={toggleTheme}
          aria-label={
            theme === "light" ? "Switch to Dark Theme" : "Switch to Light Theme"
          }
        >
          {theme === "light" ? (
            <FontAwesomeIcon icon={faSun} />
          ) : (
            <FontAwesomeIcon icon={faMoon} />
          )}
          {theme === "light"}
        </button>
        <Panel theme={theme} toggleTheme={toggleTheme} />
        <Header theme={theme} />
        <About theme={theme} />
        <Compétence theme={theme} />
        <Projet theme={theme} />
        <Footer theme={theme} />
      </div>
    </>
  );
}

export default Home;
