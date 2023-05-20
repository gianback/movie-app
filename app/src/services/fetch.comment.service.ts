import { baseApi } from "../utilities/baseApi";

export const createComment = async (formData) => {
  const { data } = await baseApi.post("/api/comments", {
    formData,
  });
  return data;
};
