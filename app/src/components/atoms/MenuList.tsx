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
  handleClick?: () => void;
};
export function MenuList({ children, handleClick }: MenuListProps) {
  return (
    <ul className="flex flex-col  justify-center items-left xl:items-center  xl:px-[0]  pt-[10rem] pb-[4rem] xl:pb-[10rem]  xl:gap-[10rem] font-medium">
      {menuList.map(({ id, title, url }) => (
        <li className="text-2xl xl:text-[1.5rem] xl:uppercase tracking-wider px-[2rem] py-[1rem] border-t border-solid border-white">
          <Link
            to={url}
            key={id}
            onClick={handleClick}
            className="w-full block"
          >
            {title}
          </Link>
        </li>
      ))}
      {children}
    </ul>
  );
}
