import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { images } from "../../assets/index";
import { Box, Button, Container } from "@mui/material";

const navLinks = ["Home", "Features", "Contact Us"];

const Navbar = () => {
  return (
    <>
      <AppBar position="fixed" elevation={0} sx={{ backgroundColor: "#FFFFFF" }}>
        <Container maxWidth="lg">
          <Toolbar
            sx={{
              justifyContent: "space-between",
                px: { xs: 0, md: 0 },
            }}
          >
            <Box
              component="img"
              src={images.logo}
              alt="Prescribe"
              sx={{ height: 84 }}
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  alignItems: "center",
                  gap: 6,
                }}
              >
                {navLinks.map((link) => (
                  <Typography
                    key={link}
                    variant="button"
                    sx={{
                      color: "text.secondary",
                      cursor: "pointer",
                      "&:hover": { color: "text.primary" },
                    }}
                  >
                    {link}
                  </Typography>
                ))}
              </Box>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  padding: "12px 38px",
                  borderRadius: "30px",
                  textTransform: "none",
                  fontWeight: 600,
                }}
              >
                Join Waitlist
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Navbar;
