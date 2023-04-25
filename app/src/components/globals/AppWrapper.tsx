import { FC, PropsWithChildren, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const AppWrapper: FC<PropsWithChildren> = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    // Realizar acción al cambiar de página utilizando la información de la ubicación actual
    console.log(`Página cambiada a ${location.pathname}`);
  }, [location]);
  return <>{children}</>;
};
