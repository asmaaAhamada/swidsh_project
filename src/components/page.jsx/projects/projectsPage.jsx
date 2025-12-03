import {
  Box,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Stack,
  IconButton,
  useTheme
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Link } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "IPO-plattform",
    status: "Active",
    views: 120,
    requests: 8,
  },
  {
    id: 2,
    title: "E-handelsystem",
    status: "Pending",
    views: 75,
    requests: 3,
  },
  {
    id: 3,
    title: "Sjukhusadministration",
    status: "Closed",
    views: 210,
    requests: 15,
  },
];

// ✅ تحويل الحالات للسويدية
const statusMap = {
  Active: "Aktiv",
  Pending: "Väntande",
  Closed: "Stängd",
};

export default function Projects_Page() {
  const theme = useTheme();

  return (
    <Box sx={{ p: 4 }}>

      {/* ✅ Header Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
        }}
      >
        <Box>
          <Typography variant="h5" fontWeight="bold" sx={{ color: "#1976d2" }}>
            Företagsnamn: Org Name
          </Typography>
          <Typography sx={{ color: theme.navbar?.span }}>
            Verifieringsstatus: Godkänd
          </Typography>
        </Box>

        <Button
          size="small"
          variant="contained"
          color="primary"
          component={Link}
          to="/create-project"
        >
          Skapa nytt projekt
        </Button>
      </Box>

      {/* ✅ Project List Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: "#1976d2" }}><b>Titel</b></TableCell>
              <TableCell sx={{ color: "#1976d2" }}><b>Status</b></TableCell>
              <TableCell sx={{ color: "#1976d2" }}><b>Visningar</b></TableCell>
              <TableCell sx={{ color: "#1976d2" }}><b>Förfrågningar</b></TableCell>
              <TableCell sx={{ color: "#1976d2" }} align="center">
                <b>Åtgärder</b>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {projects.map((project) => (
              <TableRow key={project.id} hover>

                {/* ✅ الانتقال لصفحة التفاصيل عند الضغط على العنوان */}
                <TableCell>
                  <Link
                    to={`/projects/${project.id}`}
                    style={{
                      textDecoration: "none",
                      color: theme.navbar?.body1 || "#1976d2",
                      fontWeight: "bold",
                    }}
                  >
                    {project.title}
                  </Link>
                </TableCell>

                {/* ✅ Status */}
                <TableCell
                  sx={{
                    color:
                      project.status === "Active"
                        ? "success.main"
                        : project.status === "Pending"
                        ? "warning.main"
                        : "text.secondary",
                    fontWeight: "bold",
                  }}
                >
                  {statusMap[project.status]}
                </TableCell>

                <TableCell sx={{ color: theme.navbar?.body1 }}>
                  {project.views}
                </TableCell>

                <TableCell sx={{ color: theme.navbar?.body1 }}>
                  {project.requests}
                </TableCell>

                {/* ✅ أزرار التحكم + زر عرض التفاصيل */}
                <TableCell align="center">
                  <Stack direction="row" spacing={1} justifyContent="center">

                    {/* ✅ زر الانتقال لصفحة التفاصيل */}
                    <IconButton
                      color="info"
                      size="small"
                      component={Link}
                      to={`/projects/${project.id}`}
                    >
                      <VisibilityIcon />
                    </IconButton>

                    <IconButton color="primary" size="small">
                      <EditIcon />
                    </IconButton>

                    <IconButton color="error" size="small">
                      <DeleteIcon />
                    </IconButton>

                  </Stack>
                </TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

    </Box>
  );
}
