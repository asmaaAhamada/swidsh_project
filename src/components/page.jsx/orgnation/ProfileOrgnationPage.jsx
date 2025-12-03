import {
  Box,
  Typography,
  Paper,
  Stack,
  Divider,
  Chip,
  Button,
  useTheme,
  Link,
} from "@mui/material";

const organization = {
  name: "Tech Ventures AB",
  regNumber: "556789-1234",
  country: "Sverige",
  industry: "Fintech",
  website: "https://techventures.com",
  contactPerson: "Anna Svensson",
  email: "info@techventures.com",
  phone: "+46 70 123 45 67",
  description:
    "Ett investeringsfokuserat företag som arbetar med fintech och blockkedjelösningar.",
  documents: [
    { name: "Företagsprofil.pdf", url: "#" },
    { name: "Finansiell rapport.xlsx", url: "#" },
  ],
};

export default function ProfileOrgnationPage() {
  const theme = useTheme();
  const textColor =
    theme.palette.mode === "dark" ? "#ffffff" : "#333";

  return (
    <Box sx={{ p: 4, maxWidth: "900px", mx: "auto" }}>
      {/* ✅ Header */}
      <Typography variant="h5" fontWeight="bold" mb={3} color="primary">
        Organisationsprofil
      </Typography>

      <Paper sx={{ p: 4 }}>
        <Stack spacing={2}>
          {/* ✅ Basic Info */}
          <Typography sx={{ color: textColor }}>
            <b>Organisationsnamn:</b> {organization.name}
          </Typography>

          <Typography sx={{ color: textColor }}>
            <b>Registreringsnummer:</b> {organization.regNumber}
          </Typography>

          <Typography sx={{ color: textColor }}>
            <b>Land:</b> {organization.country}
          </Typography>

          <Typography sx={{ color: textColor }}>
            <b>Bransch:</b> {organization.industry}
          </Typography>

          <Typography sx={{ color: textColor }}>
            <b>Webbplats:</b>{" "}
            <Link href={organization.website} target="_blank">
              {organization.website}
            </Link>
          </Typography>

          <Divider />

          {/* ✅ Contact Info */}
          <Typography sx={{ color: textColor }}>
            <b>Kontaktperson:</b> {organization.contactPerson}
          </Typography>

          <Typography sx={{ color: textColor }}>
            <b>E-post:</b> {organization.email}
          </Typography>

          <Typography sx={{ color: textColor }}>
            <b>Telefon:</b> {organization.phone}
          </Typography>

          <Divider />

          {/* ✅ Description */}
          <Typography fontWeight="bold" sx={{ color: textColor }}>
            Företagsbeskrivning
          </Typography>

          <Typography sx={{ color: textColor }}>
            {organization.description}
          </Typography>

          <Divider />

          {/* ✅ Documents */}
          <Typography fontWeight="bold" sx={{ color: textColor }}>
            Dokument
          </Typography>

          <Stack direction="row" spacing={2}>
            {organization.documents.map((doc, index) => (
              <Chip
                key={index}
                label={doc.name}
                component="a"
                href={doc.url}
                clickable
                color="primary"
                variant="outlined"
              />
            ))}
          </Stack>

          {/* ✅ Action Buttons */}
          <Stack direction="row" spacing={2} justifyContent="flex-end">
            <Button variant="outlined" color="primary">
              Redigera profil
            </Button>
          </Stack>
        </Stack>
      </Paper>
    </Box>
  );
}
