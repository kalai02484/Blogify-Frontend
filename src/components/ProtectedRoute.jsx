import React from "react";
import Error from "../pages/Error";

const ProtectedRoute = ({ children, adminOnly=false }) => {

  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  if (!token) {
    return <Navigate to="/login" />;
  }
    
  if (adminOnly && role !== "admin"){
    return <Error />
  } 

  return children;
};

export default ProtectedRoute;
