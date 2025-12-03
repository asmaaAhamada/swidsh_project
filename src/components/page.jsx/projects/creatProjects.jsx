import {
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  Paper,
  IconButton,
  MenuItem,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";

const statusOptions = [
  "Utkast",        // Draft
  "Inskickad",     // Submitted
  "Godkänd",       // Approved
  "Publicerad",    // Published
  "Stängd",        // Closed
];

export default function CreateProject() {
  const [metrics, setMetrics] = useState([{ key: "", value: "" }]);
  const [status, setStatus] = useState("Utkast");
  const [documents, setDocuments] = useState([]);

  const handleMetricChange = (index, field, value) => {
    const updated = [...metrics];
    updated[index][field] = value;
    setMetrics(updated);
  };

  const addMetric = () => {
    setMetrics([...metrics, { key: "", value: "" }]);
  };

  const removeMetric = (index) => {
    const updated = metrics.filter((_, i) => i !== index);
    setMetrics(updated);
  };

  const handleFileChange = (e) => {
    setDocuments(Array.from(e.target.files));
  };

  return (
    <Box sx={{ p: 4, maxWidth: "900px", mx: "auto" }}>
      <Typography variant="h5" fontWeight="bold" mb={3} color="primary">
        Skapa nytt projekt
      </Typography>

      <Paper sx={{ p: 4 }}>
        <Stack spacing={3}>

          {/* ✅ Projekttitel */}
          <TextField fullWidth label="Projekttitel" />

          {/* ✅ Kort sammanfattning */}
          <TextField
            fullWidth
            label="Kort sammanfattning"
            multiline
            rows={2}
          />

          {/* ✅ Fullständig beskrivning */}
          <TextField
            fullWidth
            label="Fullständig beskrivning"
            multiline
            rows={4}
          />

          {/* ✅ Projektstatus */}
          <TextField
            select
            label="Projektstatus"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            fullWidth
          >
            {statusOptions.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>

          {/* ✅ Nyckeltal */}
          <Box>
            <Typography fontWeight="bold" mb={1}>
              Nyckeltal
            </Typography>

            {metrics.map((metric, index) => (
              <Stack direction="row" spacing={2} mb={2} key={index}>
                <TextField
                  label="Nyckel"
                  value={metric.key}
                  onChange={(e) =>
                    handleMetricChange(index, "key", e.target.value)
                  }
                  fullWidth
                />

                <TextField
                  label="Värde"
                  value={metric.value}
                  onChange={(e) =>
                    handleMetricChange(index, "value", e.target.value)
                  }
                  fullWidth
                />

                <IconButton onClick={() => removeMetric(index)} color="error">
                  <DeleteIcon />
                </IconButton>
              </Stack>
            ))}

            <Button
              startIcon={<AddIcon />}
              variant="outlined"
              onClick={addMetric}
            >
              Lägg till fält
            </Button>
          </Box>

          {/* ✅ Tidslinje / Milstolpar */}
          <TextField
            fullWidth
            label="Tidslinje / milstolpar"
            multiline
            rows={3}
          />

          {/* ✅ Ladda upp dokument */}
          <Box>
            <Typography fontWeight="bold" mb={1}>
              Ladda upp dokument (PDF, Excel, Bilder)
            </Typography>

            <Button variant="outlined" component="label">
              Ladda upp filer
              <input
                hidden
                type="file"
                multiple
                accept=".pdf,.xls,.xlsx,image/*"
                onChange={handleFileChange}
              />
            </Button>

            {documents.length > 0 && (
              <Box mt={1}>
                {documents.map((file, index) => (
                  <Typography key={index} variant="body2">
                    {file.name}
                  </Typography>
                ))}
              </Box>
            )}
          </Box>

          {/* ✅ Knappar */}
          <Stack direction="row" spacing={2} justifyContent="flex-end">
            <Button variant="outlined">Spara utkast</Button>
            <Button variant="contained" color="primary">
              Skicka för granskning
            </Button>
          </Stack>

        </Stack>
      </Paper>
    </Box>
  );
}
