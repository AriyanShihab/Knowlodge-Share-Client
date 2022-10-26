import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

import { userContext } from "../Context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(userContext);
  const location = useLocation();
  console.log(loading);
  if (loading) {
    return <p>Loading.............</p>;
  }

  if (user && user.uid) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
