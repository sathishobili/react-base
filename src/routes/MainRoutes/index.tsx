import React, { lazy } from "react";

// project import
import Loadable from "../../components/Loadable";
import MainLayout from "../../core/layout/main";
import UserOutlet from "../../pages/dashboard/user/userOutlet";

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import("../../pages/dashboard")));

// render - sample page
const UserListPage = Loadable(
  lazy(() => import("../../pages/dashboard/user/list"))
);
const UserAddEditPage = Loadable(
  lazy(() => import("../../pages/dashboard/user/add-edit"))
);

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/",
      element: <DashboardDefault />,
    },
    {
      path: "dashboard",
      children: [
        {
          path: "default",
          element: <DashboardDefault />,
        },
      ],
    },
    {
      path: "user",
      element: <UserOutlet />,
      children: [
        {
          path: "",
          element: <UserListPage />,
        },
        {
          path: "add",
          element: <UserAddEditPage />,
        },
        {
          path: "edit",
          element: <UserAddEditPage />,
        },
      ],
    },
  ],
};

export default MainRoutes;
