import { baseApi } from "../utilities/baseApi";

export const verifyToken = async () => {
  const { data } = await baseApi.post("/verify-token");
  return data;
};
