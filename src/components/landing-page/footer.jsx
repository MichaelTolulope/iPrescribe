import {
  FacebookOutlined,
  Instagram,
  MailOutlineRounded,
  WhatsApp,
} from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  Container,
  Divider,
  InputAdornment,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { images } from "../../assets";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmitEmail = () => {
    if (!isValidEmail(email)) {
      setEmailError(true);
      return;
    }

    setEmailError(false);
    console.log("Submitted email:", email);

    setToastOpen(true);

    setEmail("");
  };

  return (
    <Box
      component="footer"
      sx={{
        pt: 6,
        px: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "primary.main",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      {/* Footer Content */}
      <Box
        width={{ xs: "100%", sm: 620 }}
        mb={4}
        px={2}
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={3}
      >
        <Box maxWidth={440}>
          <Typography
            variant="h3"
            sx={{
              color: "text.white",
              fontWeight: 600,
              fontSize: { xs: 28, md: "48px" },
            }}
          >
            Join Our Waitlist
          </Typography>
          <Typography
            sx={{
              color: "text.light",
              fontSize: 14,
              fontWeight: 400,
              lineHeight: "24px",
            }}
          >
            Be the first one to know about discounts, offers and events weekly
            in your mailbox. Unsubscribe whenever you like with one click.
          </Typography>
        </Box>

        <Box
          component="form"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmitEmail();
          }}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            mt: 3,
            flexDirection: "row",
            backgroundColor: "primary.overlay",
            p: { xs: "5px", md: "8px" },
            borderRadius: "1000px",
            border: emailError ? "1px solid #ff6b6b" : "1px solid #DFDFE02B",
            width: "100%",
          }}
        >
          <TextField
            placeholder="Enter your email"
            variant="standard"
            fullWidth
            error={emailError}
            // helperText={emailError ? "Please enter a valid email address" : ""}
            InputProps={{
              disableUnderline: true,
              startAdornment: (
                <InputAdornment position="start">
                  <MailOutlineRounded
                    sx={{ color: "text.muted-200", opacity: 0.7 }}
                  />
                </InputAdornment>
              ),
              sx: {
                color: "#fff",
                paddingLeft: 2,
                backgroundColor: "inherit",
                "&::placeholder": {
                  color: "text.muted-200",
                  opacity: 0.7,
                },
                "& input:-webkit-autofill": {
                  WebkitBoxShadow: "0 0 0 1000px transparent inset",
                  WebkitTextFillColor: "#fff",
                  transition: "background-color 9999s ease-in-out 0s",
                },

                "& input:focus": {
                  outline: "none",
                },
              },
            }}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError(false);
            }}
          />

          <Button
            variant="contained"
            sx={{
              borderRadius: "999px",
              backgroundColor: "#fff",
              color: "primary.main",
              padding: "10px 38px",
              textTransform: "none",
              fontWeight: 600,
              "&:hover": {
                backgroundColor: "primary.light",
              },
            }}
            onClick={handleSubmitEmail}
          >
            Submit
          </Button>
        </Box>
      </Box>
      <Divider
        sx={{
          borderColor: "#EEF2FF1A",
          width: "100%",
          my: "5px",
        }}
      />
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 2, md: 0 },
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          pb: 4,
        }}
      >
        <Box
          component="img"
          src={images.footerLogo}
          alt="footer logo"
          sx={{ width: { md: "80px" } }}
        />
        <Typography sx={{ color: "text.light", fontSize: 14, mt: 2 }}>
          &copy; 2025, All Rights Reserved
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "2px",
            height: 48,
          }}
        >
          <Box
            sx={{
              flex: "1",
              borderRadius: "50%",
              backgroundColor: "white",
              p: 1,
              height: 28,
              width: 28,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FacebookOutlined color="primary" />
          </Box>
          <Box
            sx={{
              flex: "1",
              borderRadius: "50%",
              backgroundColor: "white",
              p: 1,
              height: 28,
              width: 28,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Instagram color="primary" />
          </Box>
          <Box
            sx={{
              flex: "1",
              borderRadius: "50%",
              backgroundColor: "white",
              p: 1,
              height: 28,
              width: 28,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <WhatsApp color="primary" />
          </Box>
        </Box>
      </Container>
      <Snackbar
        open={toastOpen}
        autoHideDuration={2000}
        onClose={() => setToastOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={() => setToastOpen(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          Successfully subscribed
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Footer;
