import React from "react";
import "./AdminTemplate.scss";
import { Navigate } from "react-router-dom";
export const AdminTemplate = () => {
  if (!localStorage.getItem("token")) {
    alert("Cần phải login");
    return <Navigate to="/login" replace={true} />;
  } else {
    return <div>AdminTemplate</div>;
  }
};
