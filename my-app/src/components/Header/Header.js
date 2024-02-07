import { NavLink } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <header id="Ancre-accueil" className="header">
      <div id="Body-text">
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
