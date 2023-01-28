import { FC, PropsWithChildren } from "react";
import "../../styles/globals/Container.css";

const Container: FC<PropsWithChildren> = ({ children }) => {
  return <div className="Container">{children}</div>;
};

export default Container;
