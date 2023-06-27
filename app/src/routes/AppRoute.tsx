import React, { Suspense, lazy } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { loaderDetailsMovies } from "../pages/movie";
import { loaderHomeMovies } from "../pages/home";
import { AuthLayout, LayoutApp as AppLayout } from "../components/layout";
import { Error404 } from "../pages/error";
import { Loader } from "../components/atoms";

const Home = lazy(() => import("../pages/home"));
const Favorites = lazy(() => import("../pages/favorites"));
const Login = lazy(() => import("../pages/auth/login"));
const MovieDetails = lazy(() => import("../pages/movie"));
const Register = lazy(() => import("../pages/auth/register"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<AppLayout />}>
        <Route
          path="/"
          loader={loaderHomeMovies}
          element={
            <Suspense
              fallback={
                <div className="min-h-screen flex justify-center pt-20 bg-primary">
                  <Loader />
                </div>
              }
            >
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/favorites"
          element={
            <Suspense
              fallback={
                <div className="min-h-screen flex justify-center pt-20 bg-primary">
                  <Loader />
                </div>
              }
            >
              <Favorites />
            </Suspense>
          }
        />
        <Route
          path="/movies/:id"
          loader={loaderDetailsMovies}
          element={
            <Suspense
              fallback={
                <div className="min-h-screen flex justify-center pt-20 bg-primary">
                  <Loader />
                </div>
              }
            >
              <MovieDetails />
            </Suspense>
          }
        />
      </Route>
      <Route element={<AuthLayout />}>
        <Route
          path="/auth/login"
          element={
            <Suspense
              fallback={
                <div className="min-h-screen flex pt-20 justify-center">
                  <Loader />
                </div>
              }
            >
              <Login />
            </Suspense>
          }
        />
        <Route
          path="/auth/register"
          element={
            <Suspense
              fallback={
                <div className="min-h-screen flex justify-center pt-20 bg-primary">
                  <Loader />
                </div>
              }
            >
              <Register />
            </Suspense>
          }
        />
      </Route>
      <Route path="*" element={<Error404 />} />
    </Route>
  )
);
export default router;
