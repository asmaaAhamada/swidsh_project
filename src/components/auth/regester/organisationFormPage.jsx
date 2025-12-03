import React from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Divider,
  InputAdornment,
  useTheme
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import BadgeIcon from "@mui/icons-material/Badge";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LockIcon from "@mui/icons-material/Lock";
import BusinessIcon from "@mui/icons-material/Business";
import NumbersIcon from "@mui/icons-material/Numbers";
import LanguageIcon from "@mui/icons-material/Language";
import PublicIcon from "@mui/icons-material/Public";
import ListAltIcon from "@mui/icons-material/ListAlt";

const OrganisationFormPage = () => {
        const theme =useTheme()
    
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Organisation registrerad");
  };


  // for icons
const style ={

color:theme.navbar.icon
}

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 500 }}>
      <Typography variant="h6" gutterBottom>
        Registrera organisation
      </Typography>

      <TextField
        fullWidth
        margin="normal"
        label="Kontaktpersonens namn"
        required
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <BadgeIcon sx={style}  />
            </InputAdornment>
          )
        }}
      />

      <TextField
        fullWidth
        margin="normal"
        label="E-post"
        type="email"
        required
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <EmailIcon sx={style}  />
            </InputAdornment>
          )
        }}
      />

      <TextField
        fullWidth
        margin="normal"
        label="Telefonnummer"
        required
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PhoneIcon sx={style}  />
            </InputAdornment>
          )
        }}
      />

      <TextField
        fullWidth
        margin="normal"
        label="Lösenord"
        type="password"
        required
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LockIcon  sx={style} />
            </InputAdornment>
          )
        }}
      />

      <TextField
        fullWidth
        margin="normal"
        label="Bekräfta lösenord"
        type="password"
        required
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LockIcon sx={style} />
            </InputAdornment>
          )
        }}
      />

      {/* Organisation */}
      <TextField
        fullWidth
        margin="normal"
        label="Organisationsnamn"
        required
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <BusinessIcon sx={style} />
            </InputAdornment>
          )
        }}
      />

      <TextField
        fullWidth
        margin="normal"
        label="Registreringsnummer"
        required
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <NumbersIcon sx={style}  />
            </InputAdornment>
          )
        }}
      />

      <TextField
        fullWidth
        margin="normal"
        label="Land"
        required
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PublicIcon  sx={style} />
            </InputAdornment>
          )
        }}
      />

      <TextField
        fullWidth
        margin="normal"
        label="Bransch"
        required
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <ListAltIcon sx={style}  />
            </InputAdornment>
          )
        }}
      />

      <TextField
        fullWidth
        margin="normal"
        label="Webbplats"
        type="url"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LanguageIcon sx={style}  />
            </InputAdornment>
          )
        }}
      />

      <TextField
        fullWidth
        margin="normal"
        label="Beskrivning av verksamheten"
        multiline
        rows={3}
      />

      <input type="hidden" value="organization" />

      <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 ,backgroundColor:'#1976d2',color:'white' }}>
        Skicka för administratörgranskning
      </Button>

      <Divider sx={{ my: 3 }}>eller</Divider>

      <Button variant="outlined" fullWidth startIcon={<LinkedInIcon />}>
        Registrera med LinkedIn
      </Button>
    </Box>
  );
};

export default OrganisationFormPage;
