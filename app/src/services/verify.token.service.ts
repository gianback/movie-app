import { baseApi } from "../utilities/baseApi";

export const verifyToken = async () => {
  const token = localStorage.getItem("token") || "";

  const { data } = await baseApi.post("/verify-token", {
    token,
  });
  return data;
};
