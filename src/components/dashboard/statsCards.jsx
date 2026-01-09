import { Box } from "@mui/material";
import StatCard from "./StatCard";

// Icons
import { PeopleRounded } from "@mui/icons-material";

const StatsCards = () => {
  return (
    <Box sx={styles.container}>
      <StatCard
        title="Total Patients"
        value="10"
        change="-0.10%"
        icon={<PeopleRounded  sx={{color:"#59B29F"}}/>}
        iconWrapperColor="#59b29f1f"
        bg="#F9F4FF"
      />

      <StatCard
        title="Total Doctors"
        value="5"
        change="-0.10%"
        icon={<PeopleRounded  sx={{color:"#59B29F"}} />}
        bg="#FFF8ED"
        iconWrapperColor="#59b29f1f"
        />

      <StatCard
        title="Pending Reviews"
        value="3"
        change="-0.10%"
        icon={<PeopleRounded  sx={{color:"#59B29F"}}  />}
        bg="#F9F4FF"
        iconWrapperColor="#59b29f1f"
      />

      <StatCard
        title="Total Consultations"
        value="0"
        change="-0.10%"
        icon={<PeopleRounded sx={{color:"#FFD66B"}} color="#FFD66B" />}
        bg="#F2FFFC"
        iconWrapperColor="#ffd56b25"
      />
      
    </Box>
  );
};

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
    mb: "32px",
    p: "12px",
  },
};

export default StatsCards;
