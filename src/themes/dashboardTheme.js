import { grey } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const dashboardTheme = createTheme({
  primary: {
    main: "#283C85",
    "dark-overlay": "#090E1F",
    grey: "#D0D5DD",
  },
  text: {
    dark: "#212121",
    primary: "#283C85",
    secondary: "#424242",
    "muted-200": "#9A9EA6",
    "muted-100": "#757575",
    light: "#F5F5F5",
    white: "#FFFFFF",
  },
  typography: {
    fontFamily: "Montserrat, sans-serif",

    h1: { fontWeight: 600 },
    h2: { fontWeight: 600 },
    h3: { fontWeight: 600 },

    body1: { fontWeight: 400 },
    body2: { fontWeight: 400 },
    button: {
      fontWeight: 500,
      textTransform: "none",
    },
  },
});

export default dashboardTheme;
