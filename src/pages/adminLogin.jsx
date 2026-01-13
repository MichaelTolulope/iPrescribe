import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import AuthLayout from "../components/dashboard/authLayout";
import { images } from "../assets/index";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Login Data:", data);
    navigate("/dashboard");
  };

  return (
    <AuthLayout>
      <Card sx={styles.card} elevation={8}>
        <CardContent sx={styles.cardContent}>
          {/* Logo */}
          <Box
            component="img"
            src={images.logo}
            alt="iPrescribe Logo"
            sx={styles.logo}
          />
          <Box sx={styles.headerContainer}>
            <Typography variant="h5" sx={styles.mainHeader}>
              Login to iPrescribe Admin
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={styles.subHeader}
            >
              Login to Prescribe Admin
            </Typography>
          </Box>

          <form style={styles.formContainer} onSubmit={handleSubmit(onSubmit)} noValidate>
            {/* Email */}
            <Box sx={{ width: "100%" }}>
              <Typography sx={styles.label}>Email Address</Typography>
              <TextField
                placeholder="Email Address"
                fullWidth
                margin="normal"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Enter a valid email",
                  },
                })}
                error={!!errors.email}
                helperText={errors.email?.message}
                sx={styles.inputStyles}
              />
            </Box>

            {/* Password */}
            <Box sx={{ width: "100%" }}>
              <Typography sx={styles.label}>Password</Typography>
              <TextField
                placeholder="Password"
                fullWidth
                margin="normal"
                type={showPassword ? "text" : "password"}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Minimum 6 characters",
                  },
                })}
                error={!!errors.password}
                helperText={errors.password?.message}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={styles.inputStyles}
              />
            </Box>

            {/* Forgot password */}
            <Box sx={{ textAlign: "right", mt: 1 }}>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ cursor: "pointer" }}
              >
                Forgot password?
              </Typography>
            </Box>

            {/* Submit */}
            <Button
              type="submit"
              variant="contained"
              size="large"
              fullWidth
              sx={styles.button}
            >
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </AuthLayout>
  );
};

const styles = {
    logo: {
        mb: '6px',
    },
  headerContainer: {
    margin: "auto",
    textAlign: "center",
    mb: 3,
  },
  mainHeader: {
    color: "text.dark",
  },
  subHeader: { color: "text.secondary" },
  card: {
    width: 380,
    borderRadius: 3,
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "20px",
    padding: "20px",
  },
  formContainer:{
    width:'100%',
    display:'flex',
    flexDirection:'column',
    gap:'10px',
  },
  inputStyles: {
    "& .MuiOutlinedInput-root": {
      borderRadius: "10px",
      backgroundColor: "#fff",

      "& fieldset": {
        borderColor: "#D0D5DD",
      },

      "&:hover fieldset": {
        borderColor: "#B0B8C4",
      },

      "&.Mui-focused fieldset": {
        borderColor: "#283C85",
        borderWidth: "1px",
      },
    },

    "& .MuiInputLabel-root": {
      color: "#667085",
      fontSize: "14px",
    },

    "& .MuiInputLabel-root.Mui-focused": {
      color: "#283C85",
    },

    "& input": {
      padding: "14px 16px",
      fontSize: "14px",
    },

    "& .MuiFormHelperText-root": {
      marginLeft: 0,
      fontSize: "12px",
    },
  },
  label: {
    fontSize: "14px",
    color: "#667085",
  },
  button:{
    with:'100%',
    borderRadius:'8px',
    my:'6px',
    backgroundColor:'primary.main',
  }
};

export default AdminLogin;
