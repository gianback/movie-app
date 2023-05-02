import { redirect } from "react-router-dom";
import { verifyToken } from "../services/verify.token.service";

export const mainLoader = async () => {
  const token = localStorage.getItem("token") || "";
  const { status } = await verifyToken(token);
  if (status === 406) {
    redirect("/auth/login");
  }
};
