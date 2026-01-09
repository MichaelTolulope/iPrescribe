import { Box, Typography } from "@mui/material";
import { images } from "../../assets";

const SideNav = ({ navLinks, setCurrent, current }) => {
  return (
    <Box sx={styles.sideNav}>
      <Box
        component="img"
        src={images.adminLogo}
        alt="admin logo"
        sx={styles.logo}
      />
      <Box sx={styles.scrollArea}>
        <NavSection
          title="Main Menu"
          links={navLinks.mainMenu}
          current={current}
          setCurrent={setCurrent}
        />

        <NavSection
          title="Admin Menu"
          links={navLinks.adminMenu}
          current={current}
          setCurrent={setCurrent}
        />
      </Box>
    </Box>
  );
};

const NavSection = ({ title, links, current, setCurrent }) => {
  return (
    <Box sx={styles.navLinkSection}>
      <Typography sx={styles.linksHeader}>{title}</Typography>

      {links.map((link) => {
        const isActive = current === link.label;

        return (
          <Box
            key={link.label}
            sx={styles.navItemWrapper}
            onClick={() => setCurrent(link.label)}
          >
            {isActive && <Box sx={styles.activeIndicator} />}
            <Box sx={[styles.navLink, isActive && styles.activeNavLink]}>
              {link.icon}
              <Typography>{link.label}</Typography>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

const styles = {
  sideNav: {
    width: "320px",
    minHeight: "100vh",
    background: "linear-gradient(180deg, #2c3e8f 10%, #1a1f4d 100%)",
    display: "flex",
    flexDirection: "column",
  },

  logo: {
    width: "143px",
    padding: "32px",
  },

  navLinkSection: {
    display: "flex",
    flexDirection: "column",
    marginTop: "32px",
    paddingLeft: "8px",
  },

  linksHeader: {
    fontSize: "13px",
    marginBottom: "20px",
    color: "rgba(255,255,255,0.6)",
    paddingLeft: "24px",
  },

  navItemWrapper: {
    position: "relative",
    display: "flex",
    alignItems: "center",
  },

  activeIndicator: {
    position: "absolute",
    left: -7,
    top: "2px",
    height: "44px",
    width: "8px",
    backgroundColor: "white",
    borderTopRightRadius: "8px",
    borderBottomRightRadius: "8px",
  },

  navLink: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    marginLeft: "8px",
    gap: "16px",
    padding: "12px 20px",
    marginBottom: "12px",
    color: "#fff",
    cursor: "pointer",
    borderTopLeftRadius: "32px",
    borderBottomLeftRadius: "32px",
    transition: "all 0.2s ease",
    "& svg": {
      fontSize: "20px",
    },
    "&:hover": {
      backgroundColor: "rgba(255,255,255,0.08)",
    },
  },
  scrollArea: {
  flex: 1,              
  overflowY: "auto",
  paddingBottom: "24px",

  "&::-webkit-scrollbar": {
    width: "6px",
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "rgba(255,255,255,0.3)",
    borderRadius: "4px",
  },
},


  activeNavLink: {
    backgroundColor: "#fff",
    color: "primary.main",
    fontWeight: 600,
    "& svg": {
      color: "primary.main",
    },
  },
};

export default SideNav;
