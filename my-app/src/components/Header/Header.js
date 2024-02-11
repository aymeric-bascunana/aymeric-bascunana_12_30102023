import { NavLink } from "react-router-dom";
import "./Header.scss";
import code from "../../assets/code.png";

function Header() {
  return (
    <header id="Ancre-accueil" className="header">
      <img className="font-header" src={code}></img>
      <div id="header-text">
        <h1>Portfolio</h1>
        <nav>
          {/* <NavLink className="lien" to="/">
          Accueil
          </NavLink>
          <NavLink className="lien" to="/About">
          A Propos
        </NavLink> */}
        </nav>
      </div>
    </header>
  );
}

export default Header;
