import React from "react";
import "../Home/Home.scss";
// import "../home/ResponsiveHome.scss";
import About from "../About/About";

function Home() {
  return (
    <>
      <div class="side-panel">
        <button id="bouton-scroll">Défiler vers le bas</button>
      </div>

      <About />
    </>
  );
}

export default Home;
