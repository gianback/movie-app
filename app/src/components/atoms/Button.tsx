import React, { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  url?: string;
  type: Styles;
}
type Styles = "primary" | "secondary";

const styles = {
  primary:
    "Button mr-5 bg-primary hover:bg-white hover:text-primary text-white text-2xl font-medium px-[2.5rem] py-[1.5rem] rounded-md",
  secondary:
    "Button text-2xl font-semibold inline-flex bg-white hover:bg-secondary hover:text-white rounded-md text-primary px-[2.5rem] py-[1.5rem] mt-[3rem]",
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
