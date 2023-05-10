import Container from "../globals/Container";
import { Navbar } from "../molecules/Navbar";
import "../../styles/ui/Header.css";

export const Header = () => {
  return (
    <header className={`bg-secondary text-white  sticky top-0`}>
      <Container>
        <Navbar />
      </Container>
    </header>
  );
};
