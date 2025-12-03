import {
  Box,
  Typography,
  Paper,
  Stack,
  Chip,
  Button,
  Divider,
  Link,
  useTheme,
} from "@mui/material";

const project = {
  title: "IPO-plattform",
  coverImage: "https://picsum.photos/1200/400",
  summary:
    "En digital plattform som gör det möjligt för företag att hantera och publicera investeringsmöjligheter för IPO.",
  description:
    "Detta projekt syftar till att tillhandahålla en säker och skalbar IPO-plattform som kopplar samman organisationer med investerare. Den inkluderar dokumenthantering, realtidsanalys och regelefterlevnad.",
  metrics: [
    { key: "Målbelopp", value: "2 000 000 $" },
    { key: "Investerare", value: "350+" },
    { key: "Beräknad ROI", value: "18 %" },
  ],
  documents: [
    { name: "Affärsplan.pdf", url: "#" },
    { name: "Finansiell rapport.xlsx", url: "#" },
  ],
  milestones:
    "Fas 1: Plattformdesign\nFas 2: Utveckling\nFas 3: Beta-lansering\nFas 4: Offentlig lansering",
  organization: {
    name: "Tech Ventures AB",
    verified: true,
    description:
      "En investeringsfokuserad organisation som arbetar med fintech- och blockkedjelösningar.",
  },
};

export default function ProjectDetail() {
  const theme = useTheme();
  const textColor =
    theme.palette.mode === "dark" ? "#ffffff" : "#333";

  return (
    <Box sx={{ p: 4, maxWidth: "1100px", mx: "auto" }}>
      
      {/* ✅ Projekttitel */}
      <Typography variant="h4" fontWeight="bold" mb={2} color="primary">
        {project.title}
      </Typography>

      {/* ✅ Omslagsbild */}
      <Box
        component="img"
        src={project.coverImage}
        alt="cover"
        sx={{
          width: "100%",
          height: 300,
          objectFit: "cover",
          borderRadius: 2,
          mb: 3,
        }}
      />

      {/* ✅ Sammanfattning */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" mb={1} color="primary">
          Sammanfattning
        </Typography>
        <Typography sx={{ color: textColor }}>
          {project.summary}
        </Typography>
      </Paper>

      {/* ✅ Fullständig beskrivning */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" mb={1} color="primary">
          Fullständig beskrivning
        </Typography>
        <Typography sx={{ color: textColor }}>
          {project.description}
        </Typography>
      </Paper>

      {/* ✅ Nyckeltal */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" mb={2} color="primary">
          Nyckeltal
        </Typography>

        <Stack direction="row" spacing={2} flexWrap="wrap">
          {project.metrics.map((metric, index) => (
            <Chip
              key={index}
              label={`${metric.key}: ${metric.value}`}
              color="primary"
              variant="outlined"
            />
          ))}
        </Stack>
      </Paper>

      {/* ✅ Tidslinje / Milstolpar */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" mb={1} color="primary">
          Tidslinje / Milstolpar
        </Typography>

        <Typography whiteSpace="pre-line" sx={{ color: textColor }}>
          {project.milestones}
        </Typography>
      </Paper>

      {/* ✅ Dokument */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" mb={1} color="primary">
          Dokument
        </Typography>

        <Stack spacing={1}>
          {project.documents.map((doc, index) => (
            <Link
              href={doc.url}
              key={index}
              underline="hover"
              download
              sx={{
                color:
                  theme.palette.mode === "dark" ? "#ffffff" : "#333",
                fontWeight: 500,
              }}
            >
              {doc.name}
            </Link>
          ))}
        </Stack>
      </Paper>

      {/* ✅ Organisationsprofil */}
      <Paper sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" mb={1} color="primary">
          Organisation
        </Typography>

        <Typography fontWeight="bold" sx={{ color: textColor }}>
          {project.organization.name}
        </Typography>

        <Typography sx={{ color: textColor }} mb={1}>
          {project.organization.description}
        </Typography>

        {project.organization.verified && (
          <Chip label="Verifierad organisation" color="primary" />
        )}
      </Paper>

      {/* ✅ Knapp: Begär deltagande */}
      <Divider sx={{ mb: 3 }} />

      <Stack direction="row" justifyContent="flex-end">
        <Button variant="contained" color="primary" size="large">
          Begär deltagande
        </Button>
      </Stack>
    </Box>
  );
}
