import React from "react";
import { Outlet } from "react-router-dom";

// ==============================|| MAIN LAYOUT ||============================== //

const MainLayout = () => {
  return (
    <>
      <p>Header</p>
      <Outlet />
      <p>Footer</p>
    </>
  );
};

export default MainLayout;
