1- Install react package npm create vite@latest
2-Install react router npm list react-router-dom
Add <BrowserRouter> at the top level in main.js, with <App/> in the middle.
Add import { BrowserRouter } from 'react-router-dom' in main.js

3-Create folders: 
Components
-LoginForm
-NavBar
Context
-UseContext
-ThemeContext
Pages
-Homepage.jsx
-LoginPage.jsx
-PageNotFound.jsx
-ProfilePage.jsx
Utility
Routes: 
-AppRoutes.jsx
(Template for this file on AppRotes.jsx)

*IMPORTANTIn React, always name and use components with PascalCase (capitalized first letter).
Examples:
✅ <LoginForm />, <UserProfile />, <NavBar />
❌ <loginForm />, <userprofile />, <navbar />

*IMPORTANT
A path is simply the URL location your app navigates to — for example /home, /login, /home/profile.

In React Router, you can navigate or link in two ways:

Type	Starts With /	Example	Interpreted As
Absolute path	✅ Yes	/login	Go to exactly /login, no matter where you are
Relative path	❌ No	login	Add login to the current URL path

🧩 Example

Let’s say you are currently at /home.

Code	What it does	Result
navigate('/login')	Absolute — starts from the root	Goes to /login ✅
navigate('login')	Relative — adds onto current path	Goes to /home/login 🚫
navigate('profile')	Relative — adds onto /home	Goes to /home/profile ✅
navigate('/home/profile')	Absolute — same result	Goes to /home/profile ✅

Use absolute paths (with /) when the target is outside the current section.
→ Example: navigating from /home to /login.


4- Fill out Pages, first homepage (they are case sensitive), after that loginPage.
This is like a template for all of them: 
export default function LoginPage() {
  return (
    <div className="LoginPage componentBox">
      <h1>Login</h1>
      <LoginForm />
    </div>
  );
}

4.1 Homepage
use const navigate = useNavigate(); //Built in hook. This creates a constant called navigate.

4.2 loginPage
4.2.1 Also create loginForm under Components folder and userContext inside of Context folder, and import it from loginPage
4.2.2 userContext, import the context in main.jsx
*Main.js is the entry point of your React app.
<React.StrictMode> helps catch coding mistakes in development.
<UserProvider> wraps the whole app, giving access to currentUser, updateUser, and logOutUser anywhere inside.
<App /> is your main component, which contains all pages and routes.
<BrowserRouter> requires that your entire app be wrapped in a router provider
*

*App.jsx is the root component that defines the structure of your application.
Defines what pages, routes, or components appear in the UI
In App.jsx I can include the following: <Navbar> <main> <Footer> <BrowserRouter>
BrowserRouter can also be included in its own file AppRoutes.jsx
*

TEMPLATE FOR A CONTEXT FILE:
import { createContext, useContext, useState } from "react";


// 1️⃣ Create the Context object — this is the "shared box" for your data
const MyContext = createContext();

// 2️⃣ Create the Provider component
export function MyProvider({ children }) {
  // Define the shared state (can be anything: string, object, etc.)
  const [value, setValue] = useState("default");

  // Example of a function that updates the state
  function updateValue(newValue) {
    setValue(newValue);
  }

  // 3️⃣ Pass the data and functions to all child components through value
  return (
    <MyContext.Provider value={{ value, updateValue }}>
      {children}
    </MyContext.Provider>
  );
}

// 4️⃣ Create a custom hook for easier access to the context
export function useMyContext() {
  return useContext(MyContext);
}

4.2.3 LoginForm

loginForm.jsx = a small reusable component with logic.
loginPage.jsx = a full screen (page) where that component is used.

TEMPLATE FOR LOGIN FORM
import React, { useState } from "react";
import { useUser } from "../Context/UserContext"; // import your custom context hook

export default function LoginForm() {
  // 1️⃣ Access the context
  const { currentUser, handleUpdateUser, handleLogout } = useUser();

  // 2️⃣ Create local state for the email input
  const [email, setEmail] = useState("");

  // 3️⃣ Handle form submission
  function handleSubmit(event) {
    event.preventDefault();
    if (email.trim() !== "") {
      handleUpdateUser(email); // update user in context
      setEmail(""); // clear input
    }
  }

  // 4️⃣ If user is logged in, show welcome + logout
  if (currentUser) {
    return (
      <div className="LoginForm">
        <p>Welcome {currentUser.email}</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }

  // 5️⃣ Otherwise, show login form
  return (
    <form onSubmit={handleSubmit} className="LoginForm">
      <label htmlFor="email">Email:</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
      />
      <button type="submit">Login</button>
    </form>
  );
}

4.3 PageNotFound.jsx
TEMPLATE
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="PageNotFound">
      <h1>Page Not Found</h1>
      <p>
        Going back <Link to="/">home</Link>
      </p>
    </div>
  );
}

export default PageNotFound;
<Link> is a React Router component that changes pages without refreshing the browser. 
It’s perfect when you want a menu link or a text link that takes users to another route.

4.4 ProfilePage.jsx
* I only need <Outlet /> if the app uses nested routes — meaning one route is displayed inside another route’s layout.
if your homePage has internal sections such as /homePage/profile or /homePage/profilePage, you would use <Outlet /> 
inside DashboardPage.jsx to show those child pages.
Outlet is includen in homePage


5. AppRoutes
I can update this file on the Go

TEMPLATE
// import { BrowserRouter, Routes, Route, navigate } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import NotFound from "./pages/NotFound";

// function AppRoutes() {
//   return (
//     <Routes>
//       <Route path="/" element={<Navigate to="/home" replace />} /> {/* Redirect root (/) to /home */}
//       <Route path="/home" element={<HomePage />}> {/* Parent route for Home with nested children */}
//         <Route index element={<div>Welcome to Home</div>} /> {/* Default child for /home */}
//         <Route path="profile" element={<ProfilePage />} />{/* Nested child route for /home/profile */}
//       </Route>
  
//       <Route path="/login" element={<LoginPage />} /> {/* Independent Login route */}
//       <Route path="*" element={<PageNotFound />} /> {/* 404 fallback */}
//     </Routes>
//   );
// }

// export default AppRoutes;

6.Create themeContext, import the context in main.jsx
A Theme Context is used when you want to control the visual style (colors, backgrounds, font sizes, light/dark mode, etc.) of your entire app from one place, instead of passing style props through every component manually.
Different with userContext. Your UserContext is for managing user-related data, not styles.
UserContext manages who is using the app.
ThemeContext manages how the app looks.
// Difference between App.css and themeContext
//ThemeContext
//It allows you to change themes dynamically while the app is running — for example, switching between Light Mode and Dark Mode, or customizing colors per user preference.
//App.css
// It acts like your app’s global stylesheet.
// Every component (HomePage, LoginPage, NavBar, etc.) can inherit styles from here.
// is just a plain CSS file — it contains static styles that don’t change when your app is running.
//It defines what things look like, but those styles stay the same until you manually edit the CSS file.

TEMPLATE
import { createContext, useContext, useState } from "react";

// 1️⃣ Create the context
export const ThemeContext = createContext();

// 2️⃣ Create the provider component
export function ThemeProvider({ children }) {
  // Define the theme state (light by default)
  const [theme, setTheme] = useState({
    mode: "light",
    background: "#ffffff",
    foreground: "#000000",
  });

  // Function to toggle between light and dark
  function toggleTheme() {
    setTheme((prevTheme) => {
      if (prevTheme.mode === "light") {
        return {
          mode: "dark",
          background: "#1a1a1a",
          foreground: "#ffffff",
        };
      } else {
        return {
          mode: "light",
          background: "#ffffff",
          foreground: "#000000",
        };
      }
    });
  }

  // 3️⃣ Provide state and function to all children
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 4️⃣ Create a helper hook for easy access
export function useTheme() {
  return useContext(ThemeContext);
}


7.NavBar component
Add a navBar.jsx file inside of components

TEMPLATE
import { useContext } from "react";
import { NavLink } from 'react-router-dom'
import { useTheme } from "../Context/themeContext"


export default function navBar () {
    const { theme, toggleTheme } = useTheme(); // Access theme data
    const { currentUser, logOutUser } = useUser();    // Access user info
  return (
    <nav
    className="NavBar"
    style={{
        backgroundColor: theme.background, color: theme.foreground
    }}
    >
    <div className="menu">
      {/* Navigation links */}
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/home/profile">Profile</NavLink>
      <NavLink to="/login">Login</NavLink>
    </div>
    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        {/* Theme toggle */}
        <button onClick={toggleTheme}>
          Switch to {theme.mode === "light" ? "Dark" : "Light"} Mode
        </button>
    </div>
    </nav>
  );
}
8.App.jsx
Defines layout and structure, Ensures NavBar + routes display correctly
include 
<NavBar></NavBar>
<AppRoutes></AppRoutes>

*IMPORTANT
In JavaScript modules, there are two types of exports:
Default export → only one allowed per file.
Named export → can have many in one file.
✅ Use curly braces {} when importing a named export.
🚫 Do not use {} when importing a default export.
Ex: import NavBar, (withouth {})