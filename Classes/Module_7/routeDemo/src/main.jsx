import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import { UserProvider } from "./Context/UserContext";
import NavBar from "./Components/NavBar";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <UserProvider>
    <BrowserRouter>
      <NavBar></NavBar>
      <AppRoutes />
    </BrowserRouter>
  </UserProvider>
);