import React from "react";
import { Outlet } from "react-router";


function MainLayout() {
  return (
    <div
      className="min-vh-100 py-md-10 py-lg-0"
    >
      <Outlet />
    </div>
  );
}

export default MainLayout;
