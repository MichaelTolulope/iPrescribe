import { Box } from "@mui/material";
import RecentPatientsTable from "../components/dashboard/recentPatientsTable";
import DashboardHeader from "../components/dashboard/dashboardHeader";
import StatsCards from "../components/dashboard/statsCards";
import ConsultationOverTime from "../components/dashboard/ConsultationOverTime";
import PrescriptionTrend from "../components/dashboard/PrescriptionTotalTrend";
import DashboardTopBar from "../components/dashboard/dashBoardTopBar";
import ActiveDoctorsPatientsChart from "../components/dashboard/ActiveDoctorChart";
import TopSpecialtiesChart from "../components/dashboard/TopSpecialitiesChart";

const DashboardMain = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <DashboardHeader />
      <Box sx={styles.scrollArea}>
        <DashboardTopBar />
        <StatsCards />
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "2fr 2fr",
            gap: "20px",
            mb: "32px",
            p:"12px"
          }}
        >
          <ConsultationOverTime />
          <PrescriptionTrend />
          <ActiveDoctorsPatientsChart />
          <TopSpecialtiesChart />
        </Box>
        <Box
          sx={{
            p: "12px",
            backgroundColor: "background.paper",
            borderRadius: "12px",
          }}
        >
          <RecentPatientsTable />
        </Box>
      </Box>
    </Box>
  );
};
const styles = {
  scrollArea: {
    height: "80%",
    flex: 1,
    overflowY: "auto",
    paddingBottom: "100px",

    "&::-webkit-scrollbar": {
      width: "6px",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(22, 24, 100, 0.3)",
      borderRadius: "4px",
    },
  },
};

export default DashboardMain;
