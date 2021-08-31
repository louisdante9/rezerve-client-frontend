import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="listinghalfmap-body">
      <Nav />
      <Outlet />
    </div>
  );
}

export default Layout;
