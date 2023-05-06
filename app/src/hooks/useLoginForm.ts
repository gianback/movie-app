import axios from "axios";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userStore } from "../stores/user/user.store";
import { showErrors } from "../utilities/utils";

interface InitialLoginState {
  email: string;
  password: string;
}

export const useLoginForm = () => {
  const navigate = useNavigate();
  const setUser = userStore((state) => state.setUser);

  const [errors, setErrors] = useState<InitialLoginState>({
    email: "",
    password: "",
  });

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const login = Object.fromEntries(formData);

    if (Object.keys(login).every((item) => login[item] === "")) {
      setTimeout(() => {
        showErrors(errors, setErrors);
      }, 4000);
      return;
    }

    try {
      const { data } = await axios.post("http://localhost:3000/auth/login", {
        formData,
      });
      const { message, token, user } = data;
      if (message === "Ok") {
        localStorage.setItem("token", token);
        setUser(user);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    errors,
    showErrors,
    handleLogin,
  };
};
