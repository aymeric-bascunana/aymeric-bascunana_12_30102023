import { NavLink } from "react-router-dom";
import "./Header.scss";
import Logo from "../../assets/Logo-aymeric.png";
// import code from "../../assets/code.png";

function Header({ theme }) {
  return (
    <header
      id="Ancre-accueil"
      className={`header ${theme === "light" ? "light-theme" : ""}`}
    >
      {/* <img className="font-header" src={code}></img> */}
      <div className="display-body">
        <div id="header-text">
          <h1 className="text">
            Aymeric <span>Bascunana </span>{" "}
          </h1>
          <h2 className="text">
            Developpeur <span>WEB</span>
          </h2>
        </div>

        <img className="logo-me" src={Logo}></img>
      </div>
    </header>
  );
}

export default Header;
