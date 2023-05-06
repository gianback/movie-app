import React from "react";

export const Register = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-100">
      <form className="p-10 bg-white rounded flex justify-center items-center flex-col shadow-md gap-8 w-[55rem]">
        <p className="mb-5 text-3xl uppercase text-gray-600">Register</p>

        <input
          id="name"
          type="text"
          name="name"
          className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full  text-2xl text-gray-900 bg-gray-50 font-medium dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder="Nombres"
          autoComplete="false"
          required
        />
        <input
          id="name"
          name="last_name"
          className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-2xl text-gray-900 bg-gray-50 font-medium dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder="Apellidos"
          autoComplete="false"
          required
        />
        <input
          type="email"
          name="email"
          className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-2xl text-gray-900 bg-gray-50 font-medium dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          autoComplete="false"
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-2xl text-gray-900 bg-gray-50 font-medium dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          autoComplete="false"
          placeholder="Password"
          required
        />
        <button
          className="bg-purple-600 hover:bg-purple-900 text-white font-bold text-3xl duration-75 transition-all p-2 rounded w-80"
          id="login"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};
