import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './Context/userContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </UserProvider>
  </StrictMode>,
)

// /<StrictMode> is a special wrapper component in React that helps developers find potential problems in their applications.
// What it does
// When you wrap parts of your code with <React.StrictMode>, React performs extra checks during development. 
// It does not affect how your app works in production — it is only active in development mode.

// A <BrowserRouter> stores the current location in the
// browser's address bar using clean URLs. It navigates using 
// the browser's built-in history stack.