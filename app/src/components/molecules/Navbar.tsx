import React, { useEffect, useState } from "react";
//hooks
import { useAuthStore } from "../../stores/auth/authStore";
//components
import { MenuList } from "../atoms";
import { Link } from "react-router-dom";
//images
import defaultImg from "../../public/default_img.png";
import logo from "../../public/logo.png";
import { useGeneralStore } from "../../stores/general/general.store";
//styles
import "../../styles/molecules/Navbar.css";

export function Navbar() {
  const [isProfileMenuActive, setisProfileMenuActive] = useState(false);
  const [setIsAuth, setToken, { last_names, names }] = useAuthStore((state) => [
    state.setIsAuth,
    state.setToken,
    state.profile,
  ]);
  const [isMenuActive, setIsMenuActive, witdhWindow, setWithWindow] =
    useGeneralStore((state) => [
      state.isMenuActive,
      state.setIsMenuActive,
      state.witdhWindow,
      state.setWithWindow,
    ]);
  const handleLogOut = () => {
    setIsAuth(false);
    handleProfileMenu(false);
    setToken("");
    setIsActive();
  };

  const handleProfileMenu = (isActive: boolean) => {
    setisProfileMenuActive(isActive);
  };
  const setIsActive = () => {
    document.querySelector("body")?.classList.toggle("scroll");
    isMenuActive && setIsMenuActive(!isMenuActive);
  };

  useEffect(() => {
    setWithWindow(window.innerWidth);
  }, []);

  return (
    <nav className="xl:flex w-full justify-between items-center">
      <div className="xl:flex gap-16">
        <figure className="w-24 xl:w-36">
          <img src={logo} alt="logo movie app" />
        </figure>
        <div className="hidden xl:flex gap-40">
          <MenuList />
        </div>
      </div>

      <div className={` hidden xl:flex gap-4 relative`}>
        <div
          className={`Header-options ${isProfileMenuActive && "isActive"}`}
          onMouseEnter={() => handleProfileMenu(true)}
          onMouseLeave={() => handleProfileMenu(false)}
        >
          <figure className="w-16 h-16 rounded-full overflow-hidden">
            <img src={defaultImg} alt={names} />
          </figure>
          <ul className="Header-options-menu">
            <li className="text-xl">
              <Link to={"/favorites"} onClick={() => handleProfileMenu(false)}>
                Mis Peliculas Favoritas
              </Link>
            </li>
            <li className="text-xl ">
              <button onClick={handleLogOut}>Log out</button>
            </li>
          </ul>
        </div>
        <div className="flex flex-col text-2xl font-medium tracking-wider">
          <span>{names}</span>
          <span>{last_names}</span>
        </div>
      </div>
      {witdhWindow < 1281 && (
        <div className={`Navbar-mobile ${isMenuActive && "active"}`}>
          <MenuList handleClick={setIsActive}>
            <li className="text-2xl w-full font-medium px-[2rem] py-[1.5rem] border-t  border-solid border-white">
              <Link
                to={"/favorites"}
                className="block w-full"
                onClick={() => handleProfileMenu(false)}
              >
                Mis Peliculas Favoritas
              </Link>
            </li>
            <li className="text-2xl font-medium px-[2rem] py-[1.5rem] border-t border-b border-solid border-white ">
              <button className="block w-full text-left" onClick={handleLogOut}>
                Log out
              </button>
            </li>
          </MenuList>
        </div>
      )}
    </nav>
  );
}
