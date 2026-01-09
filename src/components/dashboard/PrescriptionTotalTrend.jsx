import {
  Box,
  Typography,
  IconButton,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Area,
} from "recharts";

// Example monthly prescription data
const data = [
  { month: "Jan", value: 32 },
  { month: "Feb", value: 45 },
  { month: "Mar", value: 38 },
  { month: "Apr", value: 50 },
  { month: "May", value: 60 },
  { month: "Jun", value: 55 },
  { month: "Jul", value: 68 },
  { month: "Aug", value: 52 },
  { month: "Sep", value: 48 },
  { month: "Oct", value: 57 },
  { month: "Nov", value: 40 },
  { month: "Dec", value: 36 },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <Box sx={styles.tooltip}>
        <ArrowUpwardIcon sx={{ fontSize: 16 }} />
        <Typography sx={{ fontSize: 13 }}>
          {payload[0].value} Prescriptions
        </Typography>
      </Box>
    );
  }
  return null;
};

const PrescriptionTrend = () => {
  return (
    <Box sx={styles.card}>
     
      <Box sx={styles.header}>
        <Typography sx={styles.title}>Prescription Volume Trend</Typography>
        <IconButton size="small">
          <MoreHorizIcon />
        </IconButton>
      </Box>

     
      <Box sx={{ height: 300 }}>
        <ResponsiveContainer width="100%" height="300">
          <LineChart data={data}>
            <defs>
              <linearGradient id="colorPrescription" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#4caf50" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#4caf50" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="month"
              tick={{ fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip content={<CustomTooltip />} />

            <Area
              type="monotone"
              dataKey="value"
              stroke="none"
              fill="url(#colorPrescription)"
            />

            <Line
              type="monotone"
              dataKey="value"
              stroke="#4caf50"
              strokeWidth={3}
              dot={{
                r: 5,
                fill: "#fff",
                stroke: "#4caf50",
                strokeWidth: 2,
              }}
              activeDot={{ r: 7 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </Box>
  );
};

const styles = {
  card: {
    backgroundColor: "#fff",
    borderRadius: "16px",
    p: "20px",
    boxShadow: "0px 4px 20px rgba(0,0,0,0.05)",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    mb: "16px",
  },

  title: {
    fontSize: "16px",
    fontWeight: 600,
  },

  tooltip: {
    backgroundColor: "#2c2c2c",
    color: "#fff",
    px: "12px",
    py: "6px",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    gap: "6px",
  },
};

export default PrescriptionTrend;
