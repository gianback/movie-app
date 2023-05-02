import { Link, useLocation } from "react-router-dom";
import "../../styles/layout/Header.css";
import Container from "../globals/Container";
const Header = () => {
  const { pathname } = useLocation();
  return (
    <header
      className={`Header ${
        pathname === "/auth/login" || pathname === "/auth/register"
          ? "hidden"
          : ""
      }`}
    >
      <Container>
        <nav className="Header-nav">
          <span>Logo</span>
          <ul className="Header-ul">
            <Link to="/">Home</Link>
            <Link to="/estrenos">Estrenos</Link>
          </ul>
          <span>Avatar</span>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
