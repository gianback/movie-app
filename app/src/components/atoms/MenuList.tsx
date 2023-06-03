import React from "react";
import { Link } from "react-router-dom";

const menuList = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
];
export function MenuList() {
  return (
    <ul className="flex items-center justify-center gap-[10rem] font-medium">
      {menuList.map(({ id, title, url }) => (
        <Link
          to={url}
          key={id}
          className="text-[1.5rem] uppercase tracking-wider"
        >
          {title}
        </Link>
      ))}
    </ul>
  );
}
