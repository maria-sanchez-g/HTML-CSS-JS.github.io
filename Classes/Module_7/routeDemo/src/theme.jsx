import { createTheme } from "@mui/material/styles";
// save as themes/tealTheme.jsx
// creates a new theme containing overrides for any defaults
// see https://mui.com/material-ui/customization/theming/
export const tealTheme = createTheme({
<<<<<<< HEAD
    palette: {
        primary: { main: '#214D4C', contrastText: '#efefef' },
        secondary: { main: '#3CA899', contrastText: '#ffffff' }
    },
    typography: {
        fontFamily: 'Montserrat',
        fontSize: 14,
        h1: { fontSize: 30 }
    },
    shape: { borderRadius: 0 },
    components: {
        MuiCssBaseline: {
            styleOverrides: `a { color: #3CA899; }`,
        },
        MuiButton: { defaultProps: { variant: 'contained' } },
        MuiTextField: { defaultProps: { variant: 'filled' } }
    }
});
=======
  palette: {
    primary: { main: "#214D4C", contrastText: "#efefef" },
    secondary: { main: "#3CA899", contrastText: "#ffffff" },
  },
  typography: {
    fontFamily: "Montserrat",
    fontSize: 14,
    h1: { fontSize: 30 },
  },
  shape: { borderRadius: 0 },
  components: {
    MuiCssBaseline: {
      styleOverrides: `a { color: #3CA899; }`,
    },
    MuiButton: { defaultProps: { variant: "contained" } },
    MuiTextField: { defaultProps: { variant: "filled" } },
  },
});
>>>>>>> 8bc4e7d2323faa128e9da498be3a3b836d4eba98
