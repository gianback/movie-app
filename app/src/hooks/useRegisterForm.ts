import { FormEvent, useState } from "react";
import { showErrors } from "../utilities/utils";
import { baseApi } from "../utilities/baseApi";
import { useAuthStore } from "../stores/auth/authStore";
import { Toaster, toast } from "sonner";

export const useRegisterForm = () => {
  const setToken = useAuthStore((state) => state.setToken);
  const setProfile = useAuthStore((state) => state.setProfile);
  const setIsAuth = useAuthStore((state) => state.setIsAuth);
  const [errors, setErrors] = useState({
    names: "",
    last_names: "",
    email: "",
    password: "",
  });

  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const objectData = Object.fromEntries(formData);
    for (const key in objectData) {
      objectData[key] = objectData[key].toString().trim();
    }

    if (
      Object.keys(objectData).every(
        (item) => objectData[item].toString().trim() === ""
      )
    ) {
      showErrors(errors, setErrors);
      setTimeout(() => {
        setErrors({
          names: "",
          last_names: "",
          email: "",
          password: "",
        });
      }, 4000);
    }

    try {
      const { data } = await baseApi.post("/auth/register", {
        formData: objectData,
      });
      setToken(data.token);
      setIsAuth(true);
      setProfile(data.user);
    } catch (error) {
      if (error.response.data.message) {
        toast(error.response.data.message);
        return;
      }

      const errors = error.response.data;
      errors.forEach(({ message, field }) => {
        setErrors((prevState) => ({
          ...prevState,
          [field]: message,
        }));
      });
      setTimeout(() => {
        setErrors({
          names: "",
          last_names: "",
          email: "",
          password: "",
        });
      }, 4000);
    }
  };

  return {
    handleRegister,
    errors,
  };
};
