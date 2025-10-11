import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import { UserProvider } from "./Context/UserContext";
import NavBar from "./Components/NavBar";
import MUIDialog from "./Components/MUIDialog";
import "./index.css";
import { ThemeProvider } from "@mui/material/styles";
import { tealTheme } from "./theme";

createRoot(document.getElementById("root")).render(
  <UserProvider>
    <ThemeProvider theme={tealTheme}>
      <BrowserRouter>
        <NavBar></NavBar>
        <AppRoutes />
      </BrowserRouter>
      <MUIDialog text={"My first dialog"}></MUIDialog>
    </ThemeProvider>
  </UserProvider>
);