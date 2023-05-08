import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuthStore } from "../../stores/auth/authStore";

export const AuthLayout = () => {
  const isAuth = useAuthStore((state) => state.isAuth);
  const location = useLocation();

  return (
    <>
      {isAuth ? (
        <Navigate to={"/"} state={{ from: location }} replace />
      ) : (
        <Outlet />
      )}
    </>
  );
};
