1- Install react package npm create vite@latest
2-Install react router npm list react-router-dom
Add <BrowserRouter> at the top level in main.js, with <App/> in the middle.
Add import { BrowserRouter } from 'react-router-dom' in main.js

3-Create folders: 
Components
-LoginForm
Context
Pages
-Homepage.jsx
-LoginPage.jsx
-BitcoinPage.jsx
Utility
Routes: 
-AppRoutes.jsx
(Template for this file on AppRotes.jsx)

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




