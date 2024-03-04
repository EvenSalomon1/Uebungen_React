import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header>
      <nav>
        <NavLink to="/speisekarte">Speisekarte</NavLink>
        <NavLink to="/kontakt">Kontakt</NavLink>
        <NavLink to="/oeffnungszeiten">Öffnungszeiten</NavLink>
        <NavLink to="/galerie">Galerie</NavLink>
      </nav>
      <h2>{props.title}</h2>
    </header>
  );
};

export default Header;
