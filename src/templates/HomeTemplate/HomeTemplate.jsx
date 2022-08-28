import React from "react";
import "./HomeTemplate.scss";
import { Header } from "../../components/Header/Header";
import { Outlet } from "react-router-dom";
import { Footer } from "../../components/Footer/Footer";
export const HomeTemplate = () => {
  return (
    <div className="HomeTemPlate">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
