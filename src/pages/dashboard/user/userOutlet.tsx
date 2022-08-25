import React from "react";
import { Outlet } from "react-router-dom";

const UserOutlet = () => {
  return (
    <div>
      <p>User routings</p>
      <Outlet />
    </div>
  );
};

export default UserOutlet;
