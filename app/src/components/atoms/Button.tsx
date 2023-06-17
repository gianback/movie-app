import React, { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  url?: string;
  type: Styles;
};
type Styles = "primary" | "secondary";

const styles = {
  primary:
    "Button whitespace-nowrap inline-flex  bg-primary hover:bg-white hover:text-primary text-white text-2xl xl:text-3xl font-medium px-[2.5rem] py-[1.5rem] rounded-md",
  secondary:
    "Button whitespace-nowrap text-2xl xl:text-3xl font-semibold inline-flex bg-white hover:bg-secondary hover:text-white rounded-md text-primary px-[2.5rem] py-[1.5rem]",
};

export const Button: FC<ButtonProps> = ({ children, onClick, type, url }) => {
  const className = styles[type];
  return (
    <>
      {url ? (
        <Link className={className} onClick={onClick} to={url}>
          {children}
        </Link>
      ) : (
        <button className={className} onClick={onClick}>
          {children}
        </button>
      )}
    </>
  );
};
