import axios from "axios";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userStore } from "../stores/user/user.store";
import { showErrors } from "../utilities/utils";
import { useAuthStore } from "../stores/auth/authStore";
import { profileRequest } from "../services/profile.service";

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
    const setToken = useAuthStore.getState().setToken;
    const setProfile = useAuthStore.getState().setProfile;
    const userData = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    if (Object.keys(userData).every((item) => userData[item] === "")) {
      setTimeout(() => {
        showErrors(errors, setErrors);
      }, 4000);
      return;
    }
    try {
      const { data: user } = await axios.post(
        "http://localhost:3000/auth/login",
        {
          user: userData,
        }
      );
      setToken(user.token);

      const { data } = await profileRequest();

      setProfile(data.user);
      navigate("/");
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
