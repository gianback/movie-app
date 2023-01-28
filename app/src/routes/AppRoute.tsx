import React from "react";
import { createBrowserRouter } from "react-router-dom";

import { HomePage, loaderHomeMovies } from "../pages/home";
import LayoutApp from "../components/layout/LayoutApp";
import { Favorites } from "../pages/favorites";
import { Error404 } from "../pages/error";
import { Login } from "../pages/login";
import { Register } from "../pages/register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutApp />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: loaderHomeMovies,
        errorElement: <Error404 />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
        errorElement: <Error404 />,
      },
    ],
  },
  {
    path: "/auth/login",
    element: <Login />,
  },
  {
    path: "/auth/register",
    element: <Register />,
  },
]);
export default router;
