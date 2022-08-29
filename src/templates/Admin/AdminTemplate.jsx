import React, { useEffect, useState } from "react";
import "./AdminTemplate.scss";
import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
export const AdminTemplate = () => {
  let [width, setWidth] = useState(0);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, [width]);
  console.log(width);
  if (!localStorage.getItem("access_token")) {
    alert("Cần phải login");
    return <Navigate to="/login" replace={true} />;
  } else {
    return (
      <div id="admin">
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
      </div>
    );
  }
};
