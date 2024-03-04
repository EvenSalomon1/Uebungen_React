import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h3>My life</h3>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
      </nav>
    </header>
  );
};

export default Header;
