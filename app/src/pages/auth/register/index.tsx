import React from "react";
import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-100">
      <form className="p-10 bg-white rounded flex justify-center items-center flex-col shadow-md gap-8 w-[65rem]">
        <p className="mb-5 text-3xl uppercase text-gray-600">Register</p>

        <input
          id="name"
          type="text"
          name="name"
          className="block rounded-t-lg px-4 py-4  w-full  text-2xl text-gray-900 bg-gray-100 font-medium dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder="Nombres"
          autoComplete="false"
          required
        />
        <input
          id="name"
          name="last_name"
          className="block rounded-t-lg px-4 py-4 w-full text-2xl text-gray-900 bg-gray-100 font-medium dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder="Apellidos"
          autoComplete="false"
          required
        />
        <input
          type="email"
          name="email"
          className="block rounded-t-lg px-4 py-4 w-full text-2xl text-gray-900 bg-gray-100 font-medium dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          autoComplete="false"
          placeholder="Correo"
          required
        />
        <input
          type="password"
          name="password"
          className="block rounded-t-lg px-4 py-4 w-full text-2xl text-gray-900 bg-gray-100 font-medium dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          autoComplete="false"
          placeholder="Contraseña"
          required
        />
        <div className="flex  flex-col gap-16  w-full mt-8">
          <button
            className="bg-secondary hover:bg-secondary/80 mx-auto text-white font-bold text-3xl ease-in duration-75 transition-all py-4 px-6 rounded w-80"
            id="login"
            type="submit"
          >
            Crear cuenta
          </button>
          <Link
            to={"/auth/login"}
            className="text-sm hover:underline md:text-[1.7rem] justify-self-end"
          >
            You already have an account? Log in
          </Link>
        </div>
      </form>
    </div>
  );
};
