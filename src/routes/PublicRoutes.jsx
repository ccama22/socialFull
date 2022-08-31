import { Navigate, Outlet } from "react-router-dom";
import React from "react";

const PublicRoutes = () => {
  console.log("gamaMal");
  const isAuthenticated = JSON.parse(localStorage.getItem("isAuthenticated"));
  console.log("data storagePublic", isAuthenticated);
  if (isAuthenticated === true) {
    console.log("ccamaaaa");
    return <Navigate to="/admin" />;
  }
  return (
    <>
      <Outlet />
    </>
  );
};

export default PublicRoutes;
