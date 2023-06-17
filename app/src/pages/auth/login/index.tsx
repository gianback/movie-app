import React from "react";
import { Link } from "react-router-dom";

import { useLoginForm } from "../../../hooks/useLoginForm";
export const Login = () => {
  const { error, handleLogin } = useLoginForm();

  return (
    <div className="relative flex min-h-screen text-gray-800 antialiased flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
      <div className="relative py-3 sm:w-[35%] mx-auto text-center">
        <h1 className="text-[3rem] font-light ">Ingresa a tu cuenta </h1>
        <form
          onSubmit={handleLogin}
          className="mt-4 bg-white shadow-lg rounded-lg text-left"
        >
          <div className="px-10 py-10 ">
            <label className="block font-semibold text-[1.9rem]">Correo</label>
            <input
              type="email"
              name="email"
              required
              className="border w-full h-5 px-3 py-5 mt-2 md:mt-[1.7rem] md:px-[2rem] md:py-[2.5rem] hover:outline-none  ring-secondary ring-1 rounded-md text-[1.7rem]"
              placeholder="example@example.com"
            />

            <label className="block font-semibold mt-8 text-[1.9rem]">
              Contraseña
            </label>
            <input
              type="password"
              name="password"
              className="border w-full h-5 px-3 py-5 mt-2 md:mt-[1.7rem] md:px-[2rem] md:py-[2.5rem] hover:outline-none  ring-secondary ring-1 rounded-md text-[1.7rem]"
              placeholder="Contraseña"
              required
            />
            {error && <p className="text-red-500 text-2xl mt-2">{error}</p>}
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
        </form>
      </div>
    </div>
  );
};
