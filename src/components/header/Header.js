import { NavLink } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <>
      <nav>
        <h1>Portfolio</h1>
        <NavLink className="lien" to="/">
          Accueil
        </NavLink>
        <NavLink className="lien" to="/About">
          A Propos
        </NavLink>
        <NavLink className="lien" to="/Projet">
          Projet
        </NavLink>
      </nav>
    </>
  );
}

export default Header;
