import React from "react";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const { pathname } = useLocation();
  return (
    <div
      className={`${
        pathname === "/auth/login" || pathname === "/auth/register"
          ? "hidden"
          : ""
      }`}
    >
      Footer
    </div>
  );
};

export default Footer;
