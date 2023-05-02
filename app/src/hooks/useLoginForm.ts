import axios from "axios";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

interface InitialLoginState {
  email: string;
  password: string;
}

export const useLoginForm = () => {
  const navigate = useNavigate();

  const [errors, setErrors] = useState<InitialLoginState>({
    email: "",
    password: "",
  });
  const [login, setLogin] = useState<InitialLoginState>({
    email: "",
    password: "",
  });
  //estado global
  const [user, setUser] = useState(null);

  const showErrors = () => {
    for (const key in errors) {
      setErrors((prevState) => {
        return {
          ...prevState,
          [key]: "This field is required",
        };
      });
    }
  };
  const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
    setLogin({
      ...login,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };
  const handleLogin = async (e) => {
    e.preventDefault();

    if (Object.keys(login).every((item) => login[item] === "")) {
      setTimeout(() => {
        showErrors();
      }, 5000);
      return;
    }
    try {
      const { data } = await axios.post("http://localhost:3000/auth/login", {
        login,
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
    login,
    setLogin,
    errors,
    showErrors,
    handleInputChange,
    handleLogin,
  };
};
