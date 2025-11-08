import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme(); //This function creates a theme object. A theme defines global visual settings for your application.

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <ThemeProvider theme={theme}>
      <CssBaseline />
    <BrowserRouter>
    <App />
  </BrowserRouter>
   </ThemeProvider>
  </StrictMode>,
)


// | Code            | What it does                                         |
// | --------------- | ---------------------------------------------------- |
// | `createTheme()` | Creates global design settings                       |
// | `ThemeProvider` | Makes those settings available to all MUI components |
// | `CssBaseline`   | Resets browser CSS so everything looks uniform       |


// /<StrictMode> is a special wrapper component in React that helps developers find potential problems in their applications.
// What it does
// When you wrap parts of your code with <React.StrictMode>, React performs extra checks during development. 
// It does not affect how your app works in production — it is only active in development mode.

// A <BrowserRouter> stores the current location in the
// browser's address bar using clean URLs. It navigates using 
// the browser's built-in history stack.