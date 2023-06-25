import React, { Suspense, lazy } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { loaderDetailsMovies } from "../pages/movie";
import { loaderHomeMovies } from "../pages/home";
import { Error404 } from "../pages/error";

const Home = lazy(() => import("../pages/home"));
const Favorites = lazy(() => import("../pages/favorites"));
const Login = lazy(() => import("../pages/auth/login"));
const MovieDetails = lazy(() => import("../pages/movie"));
const Register = lazy(() => import("../pages/auth/register"));
const AppLayout = lazy(() => import("../components/layout/LayoutApp"));
const AuthLayout = lazy(() => import("../components/layout/AuthLayout"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        element={
          <Suspense fallback={<p>Cargando Layoutapp</p>}>
            <AppLayout />
          </Suspense>
        }
      >
        <Route
          path="/home"
          loader={loaderHomeMovies}
          element={
            <Suspense fallback={<p>Cargando Home</p>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/favorites"
          element={
            <Suspense fallback={<p>Cargando Favorites</p>}>
              <Favorites />
            </Suspense>
          }
        />
        <Route
          path="/movies/:id"
          loader={loaderDetailsMovies}
          element={
            <Suspense fallback={<p>Cargando Movie</p>}>
              <MovieDetails />
            </Suspense>
          }
        />
      </Route>
      <Route
        element={
          <Suspense fallback={<p>Cargando authLayout</p>}>
            <AuthLayout />
          </Suspense>
        }
      >
        <Route
          path="/auth/login"
          element={
            <Suspense fallback={<p>Cargando login</p>}>
              <Login />
            </Suspense>
          }
        />
        <Route
          path="/auth/register"
          element={
            <Suspense fallback={<p>Cargando register</p>}>
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
