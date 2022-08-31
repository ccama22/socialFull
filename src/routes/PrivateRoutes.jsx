import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  console.log("gama");
  const isAuthenticated = JSON.parse(localStorage.getItem("isAuthenticated"));
  console.log("data storagePrivate", isAuthenticated);
  if (isAuthenticated === false) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Outlet />
    </>
  );
};

export default PrivateRoutes;
