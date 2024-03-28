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
        <h1>Portfolio</h1>
      </div>
    </header>
  );
}

export default Header;
