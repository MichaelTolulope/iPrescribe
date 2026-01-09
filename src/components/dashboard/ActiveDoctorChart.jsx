import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent, Typography, Box } from "@mui/material";

const data = [
  { month: "Jan", doctors: 65, patients: 100 },
  { month: "Feb", doctors: 70, patients: 30 },
  { month: "Mar", doctors: 50, patients: 45 },
  { month: "Apr", doctors: 70, patients: 85 },
  { month: "May", doctors: 35, patients: 25 },
  { month: "Jun", doctors: 65, patients: 15 },
  { month: "Jul", doctors: 40, patients: 25 },
  { month: "Aug", doctors: 70, patients: 100 },
  { month: "Sep", doctors: 25, patients: 45 },
  { month: "Oct", doctors: 45, patients: 30 },
  { month: "Nov", doctors: 35, patients: 25 },
  { month: "Dec", doctors: 70, patients: 100 },
];

const ActiveDoctorsPatientsChart = () => {
  return (
    <Card
      sx={{
        height: "100%",
        boxShadow: "0px 4px 20px rgba(0,0,0,0.05)",
      }}
    >
      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography fontWeight={600}>
            Active Doctors vs Active Patients
          </Typography>

          <Box sx={{ display: "flex", gap: 2 }}>
            <LegendDot color="#FF9F1C" label="Doctors" />
            <LegendDot color="#2EC4FF" label="Patients" />
          </Box>
        </Box>

        {/* FIXED chart wrapper */}
        <Box sx={{ width: "100%", height: 260, mt: 2 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              barGap={8}
              barCategoryGap={24}
            >
              <XAxis dataKey="month" axisLine={false} tickLine={false} />
              <YAxis axisLine={false} tickLine={false} />
              <Tooltip />
              <Bar
                dataKey="doctors"
                fill="#FF9F1C"
                radius={[6, 6, 0, 0]}
                barSize={10}
              />
              <Bar
                dataKey="patients"
                fill="#2EC4FF"
                radius={[6, 6, 0, 0]}
                barSize={10}
              />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  );
};

const LegendDot = ({ color, label }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
      <Box
        sx={{
          width: 8,
          height: 8,
          borderRadius: "50%",
          bgcolor: color,
        }}
      />
      <Typography variant="caption">{label}</Typography>
    </Box>
  );
};

export default ActiveDoctorsPatientsChart;
