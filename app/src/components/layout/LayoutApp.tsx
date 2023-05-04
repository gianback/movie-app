import { Navigate, Outlet, useLocation } from "react-router-dom";
import Footer from "../ui/Footer";
import Header from "../ui/Header";
import { FC, PropsWithChildren, useEffect } from "react";
import { verifyToken } from "../../services/verify.token.service";
import { userStore } from "../../stores/user/user.store";

const LayoutApp: FC<PropsWithChildren> = () => {
  const setIsUserAuth = userStore((state) => state.setIsUserAuth);
  const isUserAuth = userStore((state) => state.isUserAuth);
  const setUser = userStore((state) => state.setUser);
  const location = useLocation();
  const verifyAppLayout = async () => {
    const { status } = await verifyToken();
    if (status === 406) {
      setIsUserAuth(false);
    } else {
      const user = JSON.parse(localStorage.getItem("user") as string);
      setUser(user);
    }
  };

  useEffect(() => {
    verifyAppLayout();
  }, []);

  return (
    <>
      {isUserAuth ? (
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      ) : (
        <Navigate to={"/auth/login"} state={{ from: location }} replace />
      )}
    </>
  );
};

export default LayoutApp;
