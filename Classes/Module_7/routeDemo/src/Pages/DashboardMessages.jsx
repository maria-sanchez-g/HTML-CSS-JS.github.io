import { useState, useContext } from "react";
import { UserContext } from "../Context/UserContext";
export default function DashboardMessages(props) {
  const { currentUser } = useContext(UserContext);
  return (
    <div className="DashboardMessages">
      <p>
        Welcome to your dashboard, {currentUser.email} {currentUser.firstName}
      </p>
    </div>
  );
}
