import Container from "../globals/Container";
import { Navbar } from "../molecules/Navbar";
import { IconMenu } from "../atoms";
import "../../styles/ui/Header.css";
import { useState } from "react";

export const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const setIsActive = () => {
    document.querySelector("body")?.classList.add("scroll");
    setIsMenuActive(!isMenuActive);
  };

  return (
    <header className={`bg-secondary Header text-white  sticky top-0 z-20`}>
      <Container>
        <Navbar />
        <IconMenu setIsActive={setIsActive} />
      </Container>
      <div className="Header-overlay"></div>
    </header>
  );
};
