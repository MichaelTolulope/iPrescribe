import { Box, Typography } from "@mui/material";

const StatCard = ({ title, value, icon, change,iconWrapperColor,bg }) => {
  const isNegative = change.startsWith("-");

  return (
    <Box sx={[styles.card, {backgroundColor:`${bg}`}]}>
      {/* Icon */}
      <Box sx={[styles.iconWrapper,{backgroundColor:`${iconWrapperColor};`}]}>{icon}</Box>

      {/* Content */}
      <Typography sx={styles.title}>{title}</Typography>
      <Typography sx={styles.value}>{value}</Typography>

      <Box sx={styles.changeRow}>
        <Typography
          sx={{
            ...styles.change,
            color: isNegative ? "error.main" : "success.main",
          }}
        >
          {change}
        </Typography>
        <Typography sx={styles.since}>Since last week</Typography>
      </Box>
    </Box>
  );
};

const styles = {
  card: {
    backgroundColor: "#fff",
    borderRadius: "16px",
    p: "20px",
    position: "relative",
    minWidth: "220px",
    boxShadow: "0px 4px 20px rgba(0,0,0,0.05)",
  },

  iconWrapper: {
    position: "absolute",
    top: "16px",
    right: "16px",
    width: "32px",
    height: "32px",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: "14px",
    color: "text.secondary",
  },

  value: {
    fontSize: "28px",
    fontWeight: 600,
    mt: "8px",
  },

  changeRow: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    mt: "12px",
  },

  change: {
    fontSize: "13px",
    fontWeight: 500,
  },

  since: {
    fontSize: "13px",
    color: "text.secondary",
  },
};

export default StatCard;
