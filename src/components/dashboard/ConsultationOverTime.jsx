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

const data = [
  { month: "Jan", value: 48 },
  { month: "Feb", value: 65 },
  { month: "Mar", value: 50 },
  { month: "Apr", value: 56 },
  { month: "May", value: 95 },
  { month: "Jun", value: 58 },
  { month: "Jul", value: 70 },
  { month: "Aug", value: 59 },
  { month: "Sep", value: 64 },
  { month: "Oct", value: 65 },
  { month: "Nov", value: 47 },
  { month: "Dec", value: 36 },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <Box sx={styles.tooltip}>
        <ArrowUpwardIcon sx={{ fontSize: 16 }} />
        <Typography sx={{ fontSize: 13 }}>
          {payload[0].value} Consultations
        </Typography>
      </Box>
    );
  }
  return null;
};

const ConsultationOverTime = () => {
  return (
    <Box sx={styles.card}>
      <Box sx={styles.header}>
        <Typography sx={styles.title}>Consultation Over Time</Typography>
        <IconButton size="small">
          <MoreHorizIcon />
        </IconButton>
      </Box>

      <Box sx={{ height: 300 }}>
        <ResponsiveContainer width="100%" height="300">
          <LineChart data={data}>
            <defs>
              <linearGradient id="colorConsult" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2196f3" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#2196f3" stopOpacity={0} />
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
              fill="url(#colorConsult)"
            />

            <Line
              type="monotone"
              dataKey="value"
              stroke="#2196f3"
              strokeWidth={3}
              dot={{
                r: 5,
                fill: "#fff",
                stroke: "#2196f3",
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

export default ConsultationOverTime;
