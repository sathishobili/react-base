import React from "react";
import { useRoutes } from "react-router-dom";
import PageNotFound from "../pages/pageNotFound";

// project import
import LoginRoutes from "./LoginRoutes";
import MainRoutes from "./MainRoutes";

// ==============================|| ROUTING RENDER ||============================== //

const Routes = () => {
  return useRoutes([
    MainRoutes,
    LoginRoutes,
    { path: "*", element: <PageNotFound /> },
  ]);
};

export default Routes;
