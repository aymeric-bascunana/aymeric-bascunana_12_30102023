import { NavLink } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <h1>Portfolio</h1>
      <nav>
        {/* <NavLink className="lien" to="/">
          Accueil
        </NavLink>
        <NavLink className="lien" to="/About">
          A Propos
        </NavLink> */}
      </nav>
    </header>
  );
}

export default Header;
