import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { AuthLayout } from "../components/layout/AuthLayout";

import LayoutApp from "../components/layout/LayoutApp";
import {
  Error404,
  Favorites,
  Login,
  Register,
  HomePage,
  loaderHomeMovies,
} from "../pages";
import { authLoader } from "../loaders/authLoader";
import { mainLoader } from "../loaders/mainLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutApp />,
    loader: mainLoader,
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
    element: <AuthLayout />,
    loader: authLoader,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
    ],
  },
]);
export default router;
