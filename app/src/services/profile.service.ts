import { baseApi } from "../utilities/baseApi";

export const profileRequest = async () => {
  return await baseApi.get("/auth/profile");
};
