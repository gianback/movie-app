import { Navigate, Outlet, useLocation } from "react-router-dom";
import { FC, PropsWithChildren, useEffect } from "react";
import { Header, Footer } from "../ui";
import { useAuthStore } from "../../stores/auth/authStore";
import { useGeneralStore } from "../../stores/general/general.store";
import { verifyToken } from "../../services/verify.token.service";

const LayoutApp: FC<PropsWithChildren> = () => {
  const isAuth = useAuthStore((state) => state.isAuth);
  const setIsAuth = useAuthStore((state) => state.setIsAuth);
  const [isMenuActive, setIsMenuActive] = useGeneralStore((state) => [
    state.isMenuActive,
    state.setIsMenuActive,
  ]);
  const location = useLocation();
  const verifyAppLayout = async () => {
    try {
      const { data } = await verifyToken();
      if (data.status === 200 && !isAuth) {
        setIsAuth(true);
      }
    } catch (error) {
      setIsAuth(false);
    }
  };

  useEffect(() => {
    verifyAppLayout();
  }, []);

  const setIsActive = () => {
    document.querySelector("body")?.classList.toggle("scroll");
    setIsMenuActive(!isMenuActive);
  };
  return (
    <>
      {isAuth ? (
        <>
          <Header />
          <Outlet />
          <div
            onClick={setIsActive}
            className={`Overlay ${isMenuActive && "isActive"}`}
          ></div>
          <Footer />
        </>
      ) : (
        <Navigate to={"/auth/login"} state={{ from: location }} replace />
      )}
    </>
  );
};

export default LayoutApp;
