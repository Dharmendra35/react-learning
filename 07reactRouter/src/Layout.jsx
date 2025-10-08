import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      //here we use Outlet, so that only Outlet region will change //rest will
      (header, Footer) will not change on navigation
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
