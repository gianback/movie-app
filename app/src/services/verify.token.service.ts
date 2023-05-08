import { baseApi } from "../utilities/baseApi";

export const verifyToken = async () => {
  return await baseApi.post("/verify-token");
};
