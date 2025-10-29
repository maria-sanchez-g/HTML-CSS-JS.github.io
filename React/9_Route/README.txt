1- Install react package npm create vite@latest
2-Install react router npm list react-router-dom
Add <BrowserRouter> at the top level in main.js, with <App/> in the middle.
Add import { BrowserRouter } from 'react-router-dom' in main.js

3-Create folders: 
Components
Context
Pages
-Homepage.jsx
-LoginPage.jsx
-BitcoinPage.jsx
Utility
Routes: 
-AppRoutes.jsx
(Template for this file on AppRotes.jsx)

4- Fill out Pages, first homepage (they are case sensitive), after that loginPage, and finally bitcoinPage.
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
example template for a context file template:
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





