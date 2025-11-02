// src/theme/muiTheme.js
import { createTheme } from "@mui/material/styles";

// ✅ This function builds your custom MUI theme
export function makeAppTheme(theme) {
  // "theme" is coming from your themeContext (mode, background, foreground)
  const { mode, background, foreground } = theme;

  return createTheme({
    palette: {
      mode, // "light" or "dark"

      // Custom primary and secondary colors
      primary: {
        main: mode === "light" ? "#5E35B1" : "#9575CD", // Purple shades
      },
      secondary: {
        main: mode === "light" ? "#00BFA6" : "#26A69A", // Teal shades
      },

      background: {
        default: background, // from your context
        paper: background,
      },
      text: {
        primary: foreground,
      },
    },

    typography: {
      fontFamily: [
        "Inter",
        "Roboto",
        "Helvetica",
        "Arial",
        "sans-serif",
      ].join(","),
      button: {
        textTransform: "none", // Prevents all caps in buttons
      },
    },

    shape: {
      borderRadius: 10, // Rounded corners for all components
    },

    components: {
      // ✅ Global AppBar customization
      MuiAppBar: {
        styleOverrides: {
          root: {
            boxShadow: "none",
            borderBottom: mode === "light"
              ? "1px solid #e0e0e0"
              : "1px solid #333",
          },
        },
      },

      // ✅ Custom Button styles
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 20,
            fontWeight: 600,
          },
        },
      },

      // ✅ TextField consistent spacing
      MuiTextField: {
        defaultProps: {
          size: "small",
          variant: "outlined",
        },
      },
    },
  });
}
