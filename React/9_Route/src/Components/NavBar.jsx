import { useContext } from "react";
import { NavLink } from 'react-router-dom'
import { useTheme } from "../Context/ThemeContext"


export default function NavBar () {
    const { theme, toggleTheme } = useTheme(); // Access theme data
    // const { currentUser, logOutUser } = useUser();    // Access user info
  return (
    <nav
    className="NavBar"
      style={{
        backgroundColor: theme.background,
        color: theme.foreground,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px 24px"
      }}
      >
    <div className="menu"
          style={{
          display: "flex",
          alignItems: "center",
          gap: "40px", // <-- space between Home, Profile, Login
        }}
    >
      {/* Navigation links */}
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/home/profile">Profile</NavLink>
      <NavLink to="/login">Login</NavLink>
    </div>
    <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
        {/* Theme toggle */}
        <button onClick={toggleTheme}>
          Switch to {theme.mode === "light" ? "Dark" : "Light"} Mode
        </button>
    </div>
    </nav>
  );
}