import { NavLink } from "react-router-dom";
import "./Header.scss";
// import code from "../../assets/code.png";

function Header({ theme }) {
  return (
    <header
      id="Ancre-accueil"
      className={`header ${theme === "light" ? "light-theme" : ""}`}
    >
      {/* <img className="font-header" src={code}></img> */}
      <div id="header-text">
        <h1 className="text">Aymeric</h1>
        <h2 className="text">Developpeur</h2>
        <h2 className="text">WEB</h2>
      </div>
    </header>
  );
}

export default Header;
