import { Link } from "react-router-dom";
import "../../styles/layout/Header.css";
import Container from "../globals/Container";
import { userStore } from "../../stores/user/user.store";
const Header = () => {
  const { picture, email, lastName, names } = userStore((state) => state.user);

  return (
    <header className={`Header`}>
      <Container>
        <nav className="Header-nav">
          <span>Logo</span>
          <ul className="Header-ul">
            <Link to="/">Home</Link>
            <Link to="/estrenos">Estrenos</Link>
          </ul>
          <div className="flex">
            <figure className="w-16 h-16 rounded-full overflow-hidden">
              <img src={picture} alt={names} />
            </figure>
            <span>{names}</span>
            <span>{lastName}</span>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
