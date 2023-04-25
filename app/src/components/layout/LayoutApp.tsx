import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { FC, PropsWithChildren, ReactNode, useEffect } from "react";
import { baseApi } from "../../utilities/baseApi";

const LayoutApp: FC<PropsWithChildren> = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isTokenValid = async () => {
    const token = localStorage.getItem("token") || "";
    const data = await baseApi.post("/verify-token", {
      data: token,
    });
    return data;
    // console.log("error");
    // if (data.response.data.status === "406") {
    //   localStorage.removeItem("token");
    // }
  };
  useEffect(() => {
    try {
      isTokenValid();
    } catch (error) {
      console.log(error, "xdd");
    }
  }, [location]);
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default LayoutApp;
