import "../panel/panel.scss";

function Panel() {
  return (
    <>
      <div className="side-panel">
        <h2 className="name">Aymeric Bascunana</h2>
        <a id="bouton-scroll" href="http://localhost:3000/#Ancre-accueil">
          Accueil
        </a>
        <a id="bouton-scroll" href="http://localhost:3000/#Ancre-about">
          {" "}
          À propos de moi
        </a>
        <a id="bouton-scroll" href="http://localhost:3000/#Ancre-competence">
          Compétence
        </a>
        <a id="bouton-scroll" href="http://localhost:3000/#Ancre-projet">
          Project
        </a>
        <a id="bouton-scroll" href="http://localhost:3000/#Ancre-diplome">
          Diplome
        </a>
        <a id="bouton-scroll" href="http://localhost:3000/#Ancre-language">
          Language
        </a>
        <a id="bouton-scroll" href="http://localhost:3000/#Ancre-footer">
          Footer
        </a>
      </div>
    </>
  );
}

export default Panel;
