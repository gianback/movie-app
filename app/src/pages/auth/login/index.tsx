import React from "react";
import { Link } from "react-router-dom";

import { useLoginForm } from "../../../hooks/useLoginForm";
import { Loader } from "../../../components/atoms";
export default function Login() {
  const { error, handleLogin, loading } = useLoginForm();

  return (
    <div className="relative bg-gray-100 flex min-h-screen text-gray-800 antialiased flex-col justify-center overflow-hidden py-6 sm:py-12">
      <div className="relative py-3 w-[80%] sm:w-[85%] lg:w-[100%] max-w-[60rem] mx-auto text-center">
        <h1 className="text-[2.5rem] xl:text-[3rem] font-medium uppercase ">
          Ingresa a tu cuenta{" "}
        </h1>
        <form
          onSubmit={handleLogin}
          className="mt-8 bg-white shadow-lg rounded-2xl text-left"
        >
          <div className="px-10 py-10 ">
            <label className="block font-semibold text-[1.9rem]">Correo</label>
            <input
              type="email"
              name="email"
              required
              className="border w-full  px-3 py-5 mt-4 md:mt-[1.7rem] md:px-6 hover:outline-none  ring-secondary ring-1 rounded-md text-[1.7rem]"
              placeholder="example@example.com"
            />

            <label className="block font-semibold mt-8 text-[1.9rem]">
              Contraseña
            </label>
            <input
              type="password"
              name="password"
              className="border w-full  px-3 py-5 mt-4 md:mt-[1.7rem] md:px-6 hover:outline-none  ring-secondary ring-1 rounded-md text-[1.7rem]"
              placeholder="Contraseña"
              required
            />
            <div className="flex flex-col justify-between items-baseline mt-8 relative">
              <button
                className={`mt-4 mx-auto bg-secondary text-white py-2 px-6 rounded-md ${
                  !loading && "hover:bg-secondary/80"
                } text-[2rem]`}
                disabled={loading}
              >
                Iniciar sesión
              </button>
              {error && (
                <p className="text-red-500 text-2xl mt-6 mb-2">{error}</p>
              )}
              {loading && (
                <div className="absolute right-0 sm:right-[20%] top-[40%]  translate-y-[-50%]">
                  <Loader />
                </div>
              )}
              <Link
                to={"/auth/register"}
                className="text-[1.3rem] hover:underline mt-4 md:text-[1.7rem]"
              >
                You don't have an account?
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
