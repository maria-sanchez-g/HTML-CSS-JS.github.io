import React, { createContext, useState, useContext } from "react";

// Create the context object
export const ThemeContext = createContext();

// Create the provider component
export function ThemeProvider({ children }) {
  // Define the theme state (light by default)
  const [theme, setTheme] = useState({ //setTheme is the updater function used to switch themes later.
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
// Defines toggleTheme, which flips the theme based on the current mode.
// Uses the functional form of setTheme to read the previous value safely (prevTheme).
// Returns a new theme object for “dark” or “light” with corresponding colors.

  //Provide state and function to all children
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
// Renders the Context Provider.
// Passes down theme (current values) and toggleTheme (the action) via the value prop.
// {children} ensures the wrapped subtree renders normally while having access to the context.

//Create a helper hook for easy access
export function useTheme() {
  return useContext(ThemeContext);
}









//A Theme Context is used when you want to control the visual style (colors, backgrounds, font sizes, light/dark mode, etc.) of your entire app from one place, instead of passing style props through every component manually.
// Different with userContext. Your UserContext is for managing user-related data, not styles.
// UserContext manages who is using the app.
// ThemeContext manages how the app looks.

// Difference between App.css and themeContext
//ThemeContext
//It allows you to change themes dynamically while the app is running — for example, switching between Light Mode and Dark Mode, or customizing colors per user preference.
//App.css
// It acts like your app’s global stylesheet.
// Every component (HomePage, LoginPage, NavBar, etc.) can inherit styles from here.
// is just a plain CSS file — it contains static styles that don’t change when your app is running.
//It defines what things look like, but those styles stay the same until you manually edit the CSS file.