import React from "react";
import Navbar from "../components/navbar/Navbar";

const Layout = ({ Children }) => {
  return (
    <>
      <Navbar />
      <Children/>
    </>
  );
};

export default Layout;
