import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
    primary: {
      main: "#283C85",
     "dark-overlay":"#090E1F",
      overlay:"#689AFF1A",
      black:"#212121",
      light:"#f2f2f2"
    },
    background: {
      default: "#ffffff",
    },
     text: {
      dark: "#212121",     
      primary: "#405ABA",  
      secondary: "#424242", 
      "muted-200": "#9A9EA6",
      "muted-100": "#757575", 
      light: "#F5F5F5",   
      white: "#FFFFFF", 
    }
  },
  

  typography: {
    fontFamily: "Onest, sans-serif",
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },    
});

export default theme;

