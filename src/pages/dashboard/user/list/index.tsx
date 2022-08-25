import React from "react";
import { Outlet } from "react-router-dom";

const UserList = () => {
  return (
    <div>
      UserList
      <Outlet />
    </div>
  );
};

export default UserList;
