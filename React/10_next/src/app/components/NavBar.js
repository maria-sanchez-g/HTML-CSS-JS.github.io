"use client"; 
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "../../context/themeContext";

export default function NavBar() {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname(); // get current path

  // style for active link
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
  };

  return (
    <nav
      className="NavBar"
      style={{
        backgroundColor: theme.background,
        color: theme.foreground,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px 24px",
      }}
    >
      <div
        className="menu"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "40px",
        }}
      >
        {/* Navigation links */}
        <Link
          href="/home"
          style={pathname === "/home" ? activeStyle : {}}
        >
          Home
        </Link>
        <Link
          href="/home/profile"
          style={pathname === "/home/profile" ? activeStyle : {}}
        >
          Profile
        </Link>
        <Link
          href="/login"
          style={pathname === "/login" ? activeStyle : {}}
        >
          Login
        </Link>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
        <button onClick={toggleTheme}>
          Switch to {theme.mode === "light" ? "Dark" : "Light"} Mode
        </button>
      </div>
    </nav>
  );
}


//usePathname() is a React Hook provided by Next.js (from "next/navigation").It gives you the current URL path inside your app