import { Box, Typography, Button } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

const DashboardTopBar = () => {
  return (
    <Box sx={styles.container}>
      <Box>
        <Typography sx={styles.title}>Dashboard</Typography>
        <Typography sx={styles.subtitle}>
          Latest update for the last 7 days, check now
        </Typography>
      </Box>

    
      <Box sx={styles.actions}>
        <Button
          startIcon={<CalendarMonthIcon />}
          sx={styles.dateBtn}
          variant="outlined"
        >
          12th Sept - 15th Sept, 2025
        </Button>

        <Button
          sx={styles.exportBtn}
          variant="contained"
        >
          Export
        </Button>
      </Box>
    </Box>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    mb: "32px",
    p:"12px",
  },

  title: {
    fontSize: "24px",
    fontWeight: 600,
    color: "text.primary",
  },

  subtitle: {
    fontSize: "14px",
    color: "text.secondary",
    mt: "4px",
  },

  actions: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },

  dateBtn: {
    textTransform: "none",
    borderRadius: "8px",
    color: "text.primary",
    borderColor: "#E0E0E0",
    px: "16px",
  },

  exportBtn: {
    textTransform: "none",
    borderRadius: "8px",
    px: "20px",
    backgroundColor: "primary.main",
  },
};

export default DashboardTopBar;
