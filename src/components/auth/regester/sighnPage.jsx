
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CallMissedIcon from '@mui/icons-material/CallMissed'; 
import { Typography, useTheme } from '@mui/material';
import RegesterTabs from './tabs';

export default function SighnPage(){
    const theme =useTheme()
    return(
        <>
         <CssBaseline />
     <Container maxWidth="sm">
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      height: '100vh',
      mt:6
    }}
  >
    <CallMissedIcon fontSize="large" sx={{color: theme.navbar.border}} />

    <Typography variant="h5" fontWeight="bold" sx={{color: theme.navbar.border}}>
      Skapa ditt konto
    </Typography>

    <Typography fontWeight="bold" sx={{ color: theme.navbar.span ,mb:4}}>
      Börja din investeringsresa idag
    </Typography>
    {/*===================== form ===================*/}
    <Box sx={{backgroundColor: theme.navbar.main ,borderRadius:3}}>
    <RegesterTabs/>
    </Box>
        {/*=====================///// form//////// ===================*/}

  </Box>
</Container>

                   









   
      
        </>
    )
}