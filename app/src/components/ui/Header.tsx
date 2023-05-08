import { Link } from "react-router-dom";
import Container from "../globals/Container";
import defaultImg from "../../public/default_img.png";
import logo from "../../public/logo.png";
import { useAuthStore } from "../../stores/auth/authStore";
export const Header = () => {
  const { last_names, names } = useAuthStore((state) => state.profile);

  return (
    <header className={`bg-secondary text-white  sticky top-0`}>
      <Container>
        <nav className="flex justify-between items-center">
          <div className="flex gap-40">
            <figure className="w-36">
              <img src={logo} alt="logo movie app" />
            </figure>
            <ul className="flex items-center justify-center gap-[10rem] font-medium">
              <Link className="text-[1.5rem] uppercase tracking-wider" to="/">
                Home
              </Link>
              <Link
                className="text-[1.5rem] uppercase tracking-wider"
                to="/estrenos"
              >
                Estrenos
              </Link>
            </ul>
          </div>

          <div className="flex gap-4">
            <figure className="w-16 h-16 rounded-full overflow-hidden">
              <img src={defaultImg} alt={names} />
            </figure>
            <div className="flex flex-col text-2xl font-medium tracking-wider">
              <span>{names}</span>
              <span>{last_names}</span>
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
};
