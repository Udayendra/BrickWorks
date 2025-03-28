import React, { useContext } from "react";
import { AuthContext } from "../backend/context/Auth";
import { Navigate, useLocation } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  if (!user) {
    return <Navigate to="/admin/login" state={{ from: location }} />;
  }
  return children;
};

export default RequireAuth;
