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
