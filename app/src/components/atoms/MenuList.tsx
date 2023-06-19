import { ReactNode } from "react";
import { Link } from "react-router-dom";

const menuList = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
];

type MenuListProps = {
  children?: ReactNode;
};
export function MenuList({ children }: MenuListProps) {
  return (
    <ul className="flex flex-col items-center justify-center gap-[10rem] font-medium">
      {menuList.map(({ id, title, url }) => (
        <Link
          to={url}
          key={id}
          className="text-[1.5rem] uppercase tracking-wider"
        >
          {title}
        </Link>
      ))}
      {children}
    </ul>
  );
}
