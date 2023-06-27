import axios from "axios";
import { FormEvent, useState } from "react";
import { useAuthStore } from "../stores/auth/authStore";
import { profileRequest } from "../services/profile.service";
import { BASE_URL } from "../utilities/constants";

export const useLoginForm = () => {
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const setToken = useAuthStore.getState().setToken;
    const setIsAuth = useAuthStore.getState().setIsAuth;
    const setProfile = useAuthStore.getState().setProfile;

    const userData = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    try {
      setLoading(true);
      const { data: token } = await axios.post(`${BASE_URL}auth/login`, {
        user: userData,
      });

      setToken(token);

      const { data } = await profileRequest();

      setProfile(data.user);
      setIsAuth(true);
    } catch (error) {
      setError(error.response.data.message);
      setTimeout(() => {
        setError("");
      }, 3000);
    } finally {
      setLoading(false);
    }
  };

  return {
    error,
    handleLogin,
    loading,
  };
};
