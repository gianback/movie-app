import { Link, Router, Routes } from "react-router-dom";
import "../../styles/layout/Header.css";
import Container from "../globals/Container";
const Header = () => {
  return (
    <header className="Header">
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
