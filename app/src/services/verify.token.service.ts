import { baseApi } from "../utilities/baseApi";

export const verifyToken = async (token) => {
  const { data } = await baseApi.post("/verify-token", {
    data: token,
  });
  return data;
};
