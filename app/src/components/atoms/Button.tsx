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
    "Button whitespace-nowrap inline-flex  bg-primary hover:bg-white hover:text-primary text-white text-xl xl:text-2xl 2xl:text-3xl font-medium px-[1.5rem] xl-[2rem] 2xl:px-[2.5rem] py-[1rem] xl:py-[1.25rem] 2xl:py-[1.5rem] rounded-md",
  secondary:
    "Button whitespace-nowrap inline-flex  bg-white hover:bg-secondary hover:text-white text-xl xl:text-2xl 2xl:text-3xl font-medium  rounded-md text-primary px-[1.5rem] xl-[2rem] 2xl:px-[2.5rem] py-[1rem] xl:py-[1.25rem] 2xl:py-[1.5rem]",
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
