import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

function Layout(props) {
  return (
    <div class="listinghalfmap-body">
      <Nav />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
