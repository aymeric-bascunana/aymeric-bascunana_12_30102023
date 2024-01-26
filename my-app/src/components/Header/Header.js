import { NavLink } from "react-router-dom";
import "./ResponsiveHeader.scss";

function Header() {
  return (
    <header className="header">
      {/* <img className="img-header" src={logo}></img> */}
      <nav>
        <NavLink className="lien" to="/">
          Accueil
        </NavLink>
        <NavLink className="lien" to="/About">
          A Propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
