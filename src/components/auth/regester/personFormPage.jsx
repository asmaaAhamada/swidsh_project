import React from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Divider,
  InputAdornment,
  Grid,
  useTheme
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PersonIcon from "@mui/icons-material/Person";
import BadgeIcon from "@mui/icons-material/Badge";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LockIcon from "@mui/icons-material/Lock";
import CheckIcon from "@mui/icons-material/Check";





const PersonFormPage = () => {
    const theme =useTheme()
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Användare registrerad");
  };


// for icons
const style ={

color:theme.navbar.icon
}



  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 450 }}>
      <Typography variant="h6" gutterBottom>
        Skapa privatkonto
      </Typography>
{/* 
 <Grid container spacing={2}>
                  <Grid item xs={8} sm={6} md={3} > */}

      <TextField
        fullWidth
        margin="normal"
        label="Användarnamn"
        required
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PersonIcon sx={style} />
            </InputAdornment>
          )
        }}
      />

      <TextField
        fullWidth
        margin="normal"
        label="Fullständigt namn"
        required
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <BadgeIcon sx={style} />
            </InputAdornment>
          )
        }}
      />
{/* </Grid>
</Grid> */}

      <TextField
        fullWidth
        margin="normal"
        label="E-post"
        type="email"
        required
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <EmailIcon sx={style} />
            </InputAdornment>
          )
        }}
      />

      <TextField
        fullWidth
        margin="normal"
        label="Telefonnummer"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PhoneIcon sx={style} />
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
              <LockIcon sx={style} />
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
              <CheckIcon sx={style} />
            </InputAdornment>
          )
        }}
      />

      <input type="hidden" value="user" />

      <Button  type="submit" variant="contained" fullWidth sx={{ mt: 2 ,backgroundColor:'#1976d2',color:'white' }}>
        Registrera & fortsätt till ID-verifiering
      </Button>

      <Divider sx={{ my: 3 }}>eller</Divider>

      <Button
        variant="outlined"
        fullWidth
        startIcon={<GoogleIcon />}
        sx={{ mb: 1 }}
      >
        Registrera med Google
      </Button>

      <Button variant="outlined" fullWidth startIcon={<LinkedInIcon />}>
        Registrera med LinkedIn
      </Button>
    </Box>
  );
};

export default PersonFormPage;



                //    <Grid item xs={12} sm={6} md={3} key={emp.id}>
