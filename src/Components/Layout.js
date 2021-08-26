import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Layout(props) {
  return (
    <div class="listinghalfmap-body">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
