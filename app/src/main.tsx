import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
// import Swiper styles
import "swiper/css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/AppRoute";
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_APP_GOOGLE_PUBLIC_KEY}>
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
