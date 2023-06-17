import React, { FC } from "react";

interface IconMenuProps {
  isActive?: boolean;
  type?: string;
  setIsActive: () => void;
}

export const IconMenu: FC<IconMenuProps> = ({
  isActive = false,
  type = "hamburguer",
  setIsActive,
}) => {
  return (
    <div
      onClick={setIsActive}
      className={`menu-icon ${type} ${isActive ? "change" : null}`}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};
