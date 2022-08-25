import React, { lazy } from "react";
// project import
import Loadable from "../../components/Loadable";
import LoginLayout from "../../core/layout/login";

// render - login
const AuthLogin = Loadable(
  lazy(() => import("../../pages/authentication/login"))
);
const AuthRegister = Loadable(
  lazy(() => import("../../pages/authentication/register"))
);

// ==============================|| AUTH ROUTING ||============================== //

const LoginRoutes = {
  path: "/",
  element: <LoginLayout />,
  children: [
    {
      path: "login",
      element: <AuthLogin />,
    },
    {
      path: "register",
      element: <AuthRegister />,
    },
  ],
};

export default LoginRoutes;
