import React from "react";
import "./AdminTemplate.scss";
import { Navigate } from "react-router-dom";
import Sidebar from "./Sidebar";
export const AdminTemplate = () => {
  if (!localStorage.getItem("access_token")) {
    alert("Cần phải login");
    return <Navigate to="/login" replace={true} />;
  } else {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-4">
            <Sidebar />
          </div>
          <div className="col-8"></div>
        </div>
      </div>
    );
  }
};
