import { useState, useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

export default function ProtectedRoute({ redirectPath = "/login" }) {
  const { currentUser } = useContext(UserContext);
  if (!currentUser.email) {
    return <Navigate to={redirectPath} replace />;
  }
  // works for both nested and standalone routes
  return <Outlet />;
}
