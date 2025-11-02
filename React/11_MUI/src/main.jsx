// main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

import {
  ThemeProvider as CustomThemeProvider,
  useTheme,
} from "./Context/themeContext.jsx";
import { ThemeProvider as MUIThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { makeAppTheme } from "./theme/muiTheme";

// ✅ import your UserProvider
import { UserProvider } from "./Context/userContext.jsx";

function RootThemeWrapper({ children }) {
  const { theme } = useTheme();
  const muiTheme = makeAppTheme(theme);
  return (
    <MUIThemeProvider theme={muiTheme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CustomThemeProvider>
      <RootThemeWrapper>
        <BrowserRouter>
          {/* ✅ wrap App with UserProvider so useUser() has a value */}
          <UserProvider>
            <App />
          </UserProvider>
        </BrowserRouter>
      </RootThemeWrapper>
    </CustomThemeProvider>
  </StrictMode>
);




// /<StrictMode> is a special wrapper component in React that helps developers find potential problems in their applications.
// What it does
// When you wrap parts of your code with <React.StrictMode>, React performs extra checks during development. 
// It does not affect how your app works in production — it is only active in development mode.

// A <BrowserRouter> stores the current location in the
// browser's address bar using clean URLs. It navigates using 
// the browser's built-in history stack.