import React, { useState } from "react";
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
  const { last_names, names } = useAuthStore((state) => state.profile);
  const setIsAuth = useAuthStore((state) => state.setIsAuth);
  const setToken = useAuthStore((state) => state.setToken);
  const isMenuActive = useGeneralStore((state) => state.isMenuActive);
  const handleLogOut = () => {
    setIsAuth(false);
    handleProfileMenu(false);
    setToken("");
  };

  const handleProfileMenu = (isActive: boolean) => {
    setisProfileMenuActive(isActive);
  };

  return (
    <nav className="xl:flex justify-between items-center">
      <figure className="w-24 xl:w-36">
        <img src={logo} alt="logo movie app" />
      </figure>
      <div className="hidden xl:flex gap-40">
        <MenuList />
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
      <div className={`Navbar-mobile ${isMenuActive && "active"}`}>
        <MenuList>
          <li className="text-xl">
            <Link to={"/favorites"} onClick={() => handleProfileMenu(false)}>
              Mis Peliculas Favoritas
            </Link>
          </li>
          <li className="text-xl ">
            <button onClick={handleLogOut}>Log out</button>
          </li>
        </MenuList>
      </div>
    </nav>
  );
}
