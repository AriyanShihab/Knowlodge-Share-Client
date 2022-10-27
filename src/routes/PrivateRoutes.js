import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

import { UserContext } from "../Context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(UserContext);
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
