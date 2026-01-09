import { Box } from "@mui/material";
import React from "react";
import { images } from "../../assets";

const AuthLayout = ({ children }) => {
  return <Box sx={styles.wrapper}>{children}</Box>;
};
const styles = {
  wrapper: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: `
    linear-gradient(180deg, #2c3e8f 10%, #1a1f4d 100%),
    url(${images.net})
  `,
    backgroundRepeat: "repeat",
    backgroundSize: "auto",
  },
};

export default AuthLayout;
