import React from "react";
import { Link } from "react-router-dom";
import { useRegisterForm } from "../../../hooks/useRegisterForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const Register = () => {
  const { handleRegister, errors } = useRegisterForm();

  return (
    <>
      <div className="w-full py-20 flex-col min-h-screen flex justify-center items-center bg-gray-100">
        <h1 className="text-[2.5rem] xl:text-[3rem] font-medium uppercase  ">
          Registro
        </h1>
        <form
          className="p-10 bg-white rounded-2xl mt-8 flex justify-center items-center flex-col shadow-md gap-8 w-[90%] lg:w-full  max-w-[65rem]"
          onSubmit={handleRegister}
        >
          <div className="w-full">
            <label htmlFor="name" className="block font-semibold text-[1.9rem]">
              Nombres
            </label>
            <input
              type="text"
              name="names"
              id="name"
              className="border w-full  px-3 py-5 mt-4 md:mt-[1.7rem] md:px-6 hover:outline-none  ring-secondary ring-1 rounded-md text-[1.7rem]"
              placeholder="Jhon"
              required
            />
            {errors.names && (
              <p className="text-red-500 text-2xl mt-2">{errors.names}</p>
            )}
          </div>
          <div className="w-full">
            <label
              htmlFor="last_names"
              className="block font-semibold text-[1.9rem]"
            >
              Apellidos
            </label>
            <input
              id="last_names"
              type="text"
              name="last_names"
              className="border w-full  px-3 py-5 mt-4 md:mt-[1.7rem] md:px-6 hover:outline-none  ring-secondary ring-1 rounded-md text-[1.7rem]"
              placeholder="Doeh Smith"
            />
            {errors.last_names && (
              <p className="text-red-500 text-2xl mt-2">{errors.last_names}</p>
            )}
          </div>
          <div className="w-full">
            <label className="block font-semibold text-[1.9rem]">Correo</label>
            <input
              type="email"
              name="email"
              className="border w-full  px-3 py-5 mt-4 md:mt-[1.7rem] md:px-6 hover:outline-none  ring-secondary ring-1 rounded-md text-[1.7rem]"
              placeholder="example@example.com"
              required
            />
            {errors.email && (
              <p className="text-red-500 text-2xl mt-2">{errors.email}</p>
            )}
          </div>
          <div className="w-full">
            <label className="block font-semibold text-[1.9rem]">
              Contraseña
            </label>
            <input
              type="password"
              name="password"
              className="border w-full  px-3 py-5 mt-4 md:mt-[1.7rem] md:px-6 hover:outline-none  ring-secondary ring-1 rounded-md text-[1.7rem]"
              placeholder="*******"
              required
            />
            {errors.password && (
              <p className="text-red-500 text-2xl mt-2">{errors.password}</p>
            )}
          </div>

          <div className="flex  flex-col gap-10  w-full mt-8">
            <button
              className="bg-secondary hover:bg-secondary/80 mx-auto text-white font-bold text-3xl ease-in duration-75 transition-all py-4 px-6 rounded w-80"
              id="login"
              type="submit"
            >
              Crear cuenta
            </button>
            <Link
              to={"/auth/login"}
              className="text-[1.3rem] hover:underline md:text-[1.7rem]"
            >
              Ya tienes una cuenta? Ingresa aquí
            </Link>
          </div>
        </form>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="dark"
      />
    </>
  );
};
