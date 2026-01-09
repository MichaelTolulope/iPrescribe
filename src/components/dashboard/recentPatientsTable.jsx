import {
  Box,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
  CircularProgress,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { fetchRecentPatients } from "../../services/service";
import { ChevronRightOutlined } from "@mui/icons-material";

const RecentPatientsTable = () => {
  const { data: patients = [], isLoading } = useQuery({
    queryKey: ["recentPatients"],
    queryFn: fetchRecentPatients,
  });

  if (isLoading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", py: 6 }}>
        <CircularProgress size={28} />
      </Box>
    );
  }

  return (
    <Box>
      {/* Header */}
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <Typography fontWeight={600}>Recent Patients Sign Up</Typography>

        <Typography
          sx={{
            fontSize: "14px",
            color: "primary.main",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
          }}
        >
          See All <ChevronRightOutlined fontSize="small" />
        </Typography>
      </Box>

      <TableContainer
        component={Paper}
        elevation={0}
        sx={{
          borderRadius: "12px",
          border: "1px solid #EAECF0",
        }}
      >
        <Table>
          <TableHead sx={{ backgroundColor: "#F9FAFB" }}>
            <TableRow>
              {[
                "#",
                "Sign Up Date",
                "Patient Name",
                "Email Address",
                "Phone Number",
                "Last Seen Date & T",
                "Location",
                "Device",
                "Status",
              ].map((head) => (
                <TableCell
                  key={head}
                  sx={{ fontSize: "12px", whiteSpace: "nowrap" }}
                >
                  {head}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {patients.map((row, index) => (
              <TableRow key={row.id}>
                <TableCell sx={{ fontSize: "12px" }}>{index + 1}</TableCell>
                <TableCell sx={{ fontSize: "12px" }}>{row.signupDate}</TableCell>
                <TableCell sx={{ fontSize: "12px" }}>{row.name}</TableCell>
                <TableCell sx={{ fontSize: "12px" }}>{row.email}</TableCell>
                <TableCell sx={{ fontSize: "12px" }}>{row.phone}</TableCell>
                <TableCell sx={{ fontSize: "12px" }}>{row.lastSeen}</TableCell>
                <TableCell sx={{ fontSize: "12px" }}>{row.location}</TableCell>
                <TableCell sx={{ fontSize: "12px" }}>{row.device}</TableCell>
                <TableCell>
                  <Chip
                    label={row.status}
                    size="small"
                    sx={{
                      backgroundColor: "#ECFDF3",
                      color: "#027A48",
                      fontSize: "12px",
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default RecentPatientsTable;
