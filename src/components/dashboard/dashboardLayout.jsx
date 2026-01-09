import { Box } from '@mui/material'

import SideNav from './sideNav'
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import LocalPharmacyIcon from "@mui/icons-material/LocalPharmacy";
import PaymentsIcon from "@mui/icons-material/Payments";
import SettingsIcon from "@mui/icons-material/Settings";
import SecurityIcon from "@mui/icons-material/Security";
import HistoryIcon from "@mui/icons-material/History";
import ArticleIcon from "@mui/icons-material/Article";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LanguageIcon from "@mui/icons-material/Language";
import { useState } from 'react';


const navLinks = {
  mainMenu: [
    { label: "Dashboard", icon: <DashboardIcon /> },
    { label: "User Management", icon: <PeopleIcon /> },
    { label: "Consult. & Pres.", icon: <LocalHospitalIcon /> },
    { label: "Pharm. & Orders Mgt.", icon: <LocalPharmacyIcon /> },
    { label: "Payments", icon: <PaymentsIcon /> },
  ],
  adminMenu: [
    { label: "Settings", icon: <SettingsIcon /> },
    { label: "Roles & Permissions", icon: <SecurityIcon /> },
    { label: "Activity Logs", icon: <HistoryIcon /> },
    { label: "Blog/Health Tips", icon: <ArticleIcon /> },
    { label: "Notifications Mgt.", icon: <NotificationsIcon /> },
    { label: "Website Updates", icon: <LanguageIcon /> },
  ],
};


const DashboardLayout = ({ children }) => {
    const [current, setCurrent] = useState("Dashboard");

  return (
    <Box sx={styles.mainContainer}>
        <SideNav navLinks={navLinks} current={current} setCurrent={setCurrent}/>
        {children}
    </Box>
  )
}
const styles = {
    mainContainer:{
        display:'flex',
        width:'100%',
        maxHeight:'100vh',
        overflowY:'hidden',
        m:0,
        p:0
    }
}

export default DashboardLayout