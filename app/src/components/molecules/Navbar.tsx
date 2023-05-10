import React from "react";
import defaultImg from "../../public/default_img.png";
import logo from "../../public/logo.png";
import { useAuthStore } from "../../stores/auth/authStore";
import { MenuList } from "../atoms";
import { Link } from "react-router-dom";

export function Navbar() {
  const { last_names, names } = useAuthStore((state) => state.profile);

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
          <div className="Header-options-menu">
            <ul>
              <li>
                <Link to={"/favorites"}>Mis Peliculas Favoritas</Link>
              </li>
              <li>Log out</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col text-2xl font-medium tracking-wider">
          <span>{names}</span>
          <span>{last_names}</span>
        </div>
      </div>
    </nav>
  );
}
