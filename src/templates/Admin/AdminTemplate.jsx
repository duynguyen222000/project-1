import React, { useEffect, useState } from "react";
import "./AdminTemplate.scss";
import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
export const AdminTemplate = () => {
  let [widthScreen, setWidth] = useState(true);
  useEffect(() => {
    window.addEventListener("resize", () => {
      console.log(window.screen.width);
      if (window.screen.width < 600) {
        setWidth(false);
      } else {
        setWidth(true);
      }
    });
  }, []);
  console.log(widthScreen);
  if (!localStorage.getItem("access_token")) {
    alert("Cần phải login");
    return <Navigate to="/login" replace={true} />;
  } else {
    return (
      <div id="admin">
        {widthScreen ? (
          <div className="container-fluid">
            <div className="row">
              <div className="col-2 col-lg-2 col-xs-6 col-md-6">
                <Sidebar />
              </div>
              <div className="col-10 col-lg-10 col-xs-6 col-md-6">
                <Outlet />
              </div>
            </div>
          </div>
        ) : (
          <h1>Trang chưa hỗ trợ trên thiết bị này</h1>
        )}{" "}
      </div>
    );
  }
};
