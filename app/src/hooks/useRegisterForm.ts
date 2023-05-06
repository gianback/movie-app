import { FormEvent, useState } from "react";
import { showErrors } from "../utilities/utils";
import { baseApi } from "../utilities/baseApi";

export const RegisterForm = () => {
  const [errors, setErrors] = useState({
    name: "",
    last_names: "",
    email: "",
    password: "",
  });

  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    if (Object.keys(data).every((item) => data[item] === "")) {
      setTimeout(() => {
        showErrors(errors, setErrors);
      }, 4000);
      return;
    }

    try {
      const { data } = await baseApi.post("/auth/register", {
        formData,
      });
    } catch (error) {}
  };

  return {
    handleRegister,
    errors,
  };
};
