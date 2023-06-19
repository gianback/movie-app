import { Navbar } from "../molecules/Navbar";
import { IconMenu } from "../atoms";
import "../../styles/ui/Header.css";
import { useGeneralStore } from "../../stores/general/general.store";
import { Container } from "../globals";

export const Header = () => {
  const [isMenuActive, setIsMenuActive] = useGeneralStore((state) => [
    state.isMenuActive,
    state.setIsMenuActive,
  ]);

  const setIsActive = () => {
    document.querySelector("body")?.classList.toggle("scroll");
    setIsMenuActive(!isMenuActive);
  };

  return (
    <header className={`bg-secondary Header text-white  sticky top-0 z-20`}>
      <Container>
        <div className="Header-container">
          <Navbar />
          <IconMenu setIsActive={setIsActive} isActive={isMenuActive} />
        </div>
      </Container>
    </header>
  );
};
