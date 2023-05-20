import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { useLoginForm } from "../../../hooks/useLoginForm";
import axios from "axios";
import { useAuthStore } from "../../../stores/auth/authStore";
export const Login = () => {
  const { errors, handleLogin } = useLoginForm();
  const navigate = useNavigate();
  const setProfile = useAuthStore((state) => state.setProfile);
  const setToken = useAuthStore((state) => state.setToken);

  const handleAuthGoogle = async (credentials) => {
    try {
      const { data } = await axios.post("http://localhost:3000/auth/google", {
        data: {
          id: credentials.clientId,
          googleToken: credentials.credential,
        },
      });
      const { token, ...user } = data;
      setProfile(user);
      setToken(token);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      className="relative flex min-h-screen text-gray-800 antialiased flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12"
      onSubmit={handleLogin}
    >
      <div className="relative py-3 sm:w-[25%] mx-auto text-center">
        <span className="text-[3rem] font-light ">Login to your account</span>
        <div className="mt-4 bg-white shadow-md rounded-lg text-left">
          <div className="h-2 bg-secondary rounded-t-md"></div>
          <div className="px-10 py-10 ">
            <label className="block font-semibold text-[1.9rem]">Email</label>
            <input
              type="email"
              name="email"
              className="border w-full h-5 px-3 py-5 mt-2 md:mt-[1.7rem] md:px-[2rem] md:py-[2.5rem] hover:outline-none focus:outline-none focus:ring-secondary focus:ring-1 rounded-md text-[1.7rem]"
              placeholder="example@example.com"
            />
            {errors.email && (
              <p className="text-red-500 text-2xl mt-2">{errors.email}</p>
            )}
            <label className="block font-semibold mt-8 text-[1.9rem]">
              Contraseña
            </label>
            <input
              type="password"
              name="password"
              className="border w-full h-5 px-3 py-5 mt-2 md:mt-[1.7rem] md:px-[2rem] md:py-[2.5rem] hover:outline-none focus:outline-none focus:ring-secondary focus:ring-1 rounded-md text-[1.7rem]"
              placeholder="Contraseña"
            />
            {errors.password && (
              <p className="text-red-500 text-2xl mt-2">{errors.password}</p>
            )}
            <div className="flex justify-between items-baseline mt-8">
              <button className="mt-4 bg-secondary text-white py-2 px-6 rounded-md hover:bg-secondary/80 text-[2rem]">
                Iniciar sesión
              </button>
              <Link
                to={"/auth/register"}
                className="text-sm hover:underline md:text-[1.7rem]"
              >
                You don't have an account?
              </Link>
            </div>
          </div>
        </div>
        {/* <GoogleLogin
          onSuccess={handleAuthGoogle}
          onError={() => {
            console.log("Login Failed");
          }}
        /> */}
      </div>
    </form>
  );
};
