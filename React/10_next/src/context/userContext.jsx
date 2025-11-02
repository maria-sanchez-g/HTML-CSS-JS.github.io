"use client";
import { createContext, useState, useContext } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  function updateUser(email) {
    setCurrentUser({ email });
  }

  function logOutUser() {
    setCurrentUser(null);
  }

  return (
    <UserContext.Provider value={{ currentUser, updateUser, logOutUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
