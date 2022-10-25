import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navber from "../Components/Navber";

const Main = () => {
  return (
    <div>
      <Navber></Navber>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
