import React, { useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { verifyToken } from "../../services/verify.token.service";
import { userStore } from "../../stores/user/user.store";

export const AuthLayout = () => {
  const setIsUserAuth = userStore((state) => state.setIsUserAuth);
  const isUserAuth = userStore((state) => state.isUserAuth);
  const location = useLocation();

  const verifyAuthLayout = async () => {
    const { status } = await verifyToken();
    if (status === 200) {
      setIsUserAuth(true);
    }
  };

  useEffect(() => {
    verifyAuthLayout();
  }, []);

  return (
    <>
      {isUserAuth ? (
        <Navigate to={"/"} state={{ from: location }} replace />
      ) : (
        <Outlet />
      )}
    </>
  );
};
