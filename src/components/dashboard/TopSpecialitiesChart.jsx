import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { Card, CardContent, Typography, Box } from "@mui/material";

const data = [
  { name: "Pediatrics", value: 45, color: "#2EC4B6" },
  { name: "Cardiology", value: 30, color: "#FF9F1C" },
  { name: "Surgery", value: 15, color: "#54A0FF" },
  { name: "Others", value: 10, color: "#FF6B6B" },
];

const TopSpecialtiesChart = () => {
  return (
    <Card sx={{ height: "100%",boxShadow: "0px 4px 20px rgba(0,0,0,0.05)" }}>
      <CardContent>
        <Typography fontWeight={600} mb={2}>
          Top Specialties in Demand
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          {/* Donut */}
          <Box sx={{ width: 200, height: 200, position: "relative" }}>
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={data}
                  innerRadius={60}
                  outerRadius={80}
                  dataKey="value"
                  stroke="none"
                >
                  {data.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>

            {/* Center text */}
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <Typography fontSize={18} fontWeight={700}>
                30%
              </Typography>
            </Box>
          </Box>

          {/* Legend */}
          <Box sx={{ ml: 3 }}>
            {data.map((item) => (
              <Box
                key={item.name}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: 1,
                }}
              >
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    bgcolor: item.color,
                    mr: 1,
                  }}
                />
                <Typography variant="body2" sx={{ width: 90 }}>
                  {item.name}
                </Typography>
                <Typography fontWeight={600}>{item.value}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
export default TopSpecialtiesChart;