import React from "react";
import { Outlet } from "react-router";


function MainLayout() {
  return (
    <div
      className="min-vh-100 py-md-10 py-lg-0"
      style={{
        background:
          "url(../assets/images/post-single-img.jpg) no-repeat center center fixed",
        backgroundSize: "cover",
      }}
    >
      <Outlet />
    </div>
  );
}

export default MainLayout;
