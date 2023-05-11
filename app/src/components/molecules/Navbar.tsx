import React from "react";
//hooks
import { useAuthStore } from "../../stores/auth/authStore";
//components
import { MenuList } from "../atoms";
import { Link } from "react-router-dom";
//images
import defaultImg from "../../public/default_img.png";
import logo from "../../public/logo.png";

export function Navbar() {
  const { last_names, names } = useAuthStore((state) => state.profile);
  const setIsAuth = useAuthStore((state) => state.setIsAuth);
  const setToken = useAuthStore((state) => state.setToken);

  const handleLogOut = () => {
    setIsAuth(false);
    setToken("");
  };

  return (
    <nav className="flex justify-between items-center">
      <div className="flex gap-40">
        <figure className="w-36">
          <img src={logo} alt="logo movie app" />
        </figure>
        <MenuList />
      </div>

      <div className="flex gap-4 relative">
        <div className="Header-options">
          <figure className="w-16 h-16 rounded-full overflow-hidden">
            <img src={defaultImg} alt={names} />
          </figure>
          <ul className="Header-options-menu">
            <li className="text-xl font-normal">
              <Link to={"/favorites"}>Mis Peliculas Favoritas</Link>
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
    </nav>
  );
}
