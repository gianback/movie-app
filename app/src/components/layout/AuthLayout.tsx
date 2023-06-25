import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuthStore } from "../../stores/auth/authStore";

export default function AuthLayout() {
  const isAuth = useAuthStore((state) => state.isAuth);
  const location = useLocation();

  return (
    <>
      {isAuth ? (
        <Navigate to={"/home"} state={{ from: location }} replace />
      ) : (
        <>
          <Outlet />
        </>
      )}
    </>
  );
}
