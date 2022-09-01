import React, { useEffect, useState } from "react";
import "./AdminTemplate.scss";
import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
export const AdminTemplate = () => {
  if (!localStorage.getItem("access_token")) {
    alert("Cần phải login");
    return <Navigate to="/login" replace={true} />;
  } else {
    return (
      <div id="admin">
        <div className="container-fluid">
          <div className="row">
            <div className=" col-12 col-md-1">
              <div className="container">
                <Sidebar />
              </div>
            </div>
            <div className="col-12 col-md-11">
              <div className="container">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
