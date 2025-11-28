import { Box, Button, Grid, Paper, Typography, useTheme } from "@mui/material";
import { keyframes } from '@mui/system';

import DryIcon from '@mui/icons-material/Dry';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import Groups2Icon from '@mui/icons-material/Groups2';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import {
  LockOutlined,
  VerifiedUserOutlined,
  BusinessCenterOutlined,
  SupportAgentOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
const whyInvest = [
  {
    icon: <BusinessCenterOutlined fontSize="large" />,
    title: "Målmedveten avkastning",
    desc: "Vi fokuserar på lönsamma projekt med stark tillväxtpotential.",
  },
  {
    icon: <VerifiedUserOutlined fontSize="large" />,
    title: "Verifierade projekt",
    desc: "Varje projekt granskas noggrant för att säkerställa legitimitet.",
  },
  {
    icon: <LockOutlined fontSize="large" />,
    title: "Trygg och säker plattform",
    desc: "Vi följer KYC, AML och GDPR för högsta säkerhetsnivå.",
  },
  {
    icon: <SupportAgentOutlined fontSize="large" />,
    title: "Professionell support",
    desc: "Vårt team står redo att hjälpa dig i varje steg.",
  },
];
export default function AboutPage(){
    const theme =useTheme()
    // أنميشن للأيقونة تتحرك لأعلى ولأسفل
  const bounce = keyframes`
    0%, 100% { transform: translateY(0); }
    40% { transform: translateY(-20px); }
              nb  nb r4uy      

  `;
    return(
        <>
        
      





    <Box sx={{ px: 3, py: 6, backgroundColor: theme.navbar.main}}>
      
      {/* HERO */}
      
      <Box sx={{display:'flex', justifyContent: "center", mb: 6 ,alignItems: "center"
}}>
       <DryIcon  fontSize="large" sx={{mr:2,  color: theme.palette.primary.main,         animation: `${bounce} 1.5s ease-in-out infinite`
}}/>
        <Typography variant="h6"  maxWidth="700px" sx={{ color: theme.navbar.span}}>
          Vi gör investeringar tillgängliga för alla – säkert, transparent och enkelt.
        </Typography>
      </Box>

      {/* VISION + WHO WE ARE */}
      <Grid container spacing={4} sx={{ mb: 6 }}>
        <Grid item xs={12} md={6}>
              <Box sx={{backgroundColor: theme.navbar.paper,borderRadius: 3,
}}>

              <Box sx={{display:'flex',mb:1, alignItems:'flex-start',ml:3
}}>
            <Groups2Icon fontSize="large" sx={{mr:1,mt:3}}/>
          <Typography variant="h5" fontWeight={700} sx={{ color:theme.navbar.Text ,mt:3}}>
            Vilka är vi?
          </Typography>
          </Box>
          <Typography variant="body1" sx={{color: theme.navbar.span,ml:3}}>
            Vi är en modern investeringsplattform som vill förenkla vägen till smartare investeringar för både nya och erfarna investerare.
          </Typography>
          </Box>


              <Box sx={{backgroundColor: theme.navbar.paper,borderRadius: 3,}}>


          <Box sx={{display:'flex', alignItems:'flex-start',mt:3,ml:3
}}>
    <AutoAwesomeIcon fontSize="large" sx={{mr:1,mt:3,mt:3}}/>
          <Typography variant="h5" fontWeight={700} sx={{  mb: 2,color:theme.navbar.Text,mt:3 }}>
            Vår vision
          </Typography>
          </Box>
          <Typography variant="body1" sx={{color: theme.navbar.span,ml:3}}>
            Att öppna dörren till framtidens investeringar – där teknik, innovation och hållbarhet möts.
          </Typography>
          </Box>
        </Grid>

        <Grid
  item
  xs={12}
  md={6}
  sx={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }}
>
  <Diversity3Icon
    sx={{
      fontSize: { xs: 140, md: 260 }, //  تكبير الأيقونة حسب حجم الشاشة
      color: theme.palette.primary.main,
      transition: "transform 0.4s ease",
      
         animation: "pulse 3s infinite ease-in-out",
          "@keyframes pulse": {
            "0%, 100%": { transform: "scale(1)", opacity: 1 },
            "50%": { transform: "scale(1.1)", opacity: 0.9 },
          },
     
      willChange: "transform",
    }}
  />
</Grid>

      </Grid>

      {/* WHY INVEST WITH US - ICON CARDS */}
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography variant="h5" fontWeight={700} sx={{color: theme.palette.primary.main}}>
          Varför investera med oss?
        </Typography>
      </Box>

      <Grid container spacing={4} sx={{ mb: 6 }}>
        {whyInvest.map((item, i) => (
          <Grid item xs={12} md={6} key={i}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                borderRadius: 3,
                backgroundColor: theme.palette.background.paper,
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: 10,
                },
              }}
            >
              <Box sx={{ color: theme.palette.primary.main, mb: 1 }}>
                {item.icon}
              </Box>
              <Typography variant="h6" fontWeight={700} sx={{ mb: 1,color: theme.palette.primary.main }}>
                {item.title}
              </Typography>
              <Typography variant="body2" sx={{color: theme.navbar.span}}>
                {item.desc}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* SUSTAINABILITY */}
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography variant="h5" fontWeight={700} sx={{ mb: 2 ,color: theme.palette.primary.main}}>
          Hållbarhet & ESG
        </Typography>
        <Typography
          variant="body1"
         
          maxWidth="700px"
          sx={{ mx: "auto" ,color: theme.navbar.span}}
        >
          Vi tror på investeringar som skapar ekonomisk avkastning och samtidigt
          bidrar till ett bättre samhälle och en hållbar framtid.
        </Typography>
      </Box>

      {/* CTA */}
      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Link to="/Skapa_konto">
        <Button
         
          sx={{
            color:theme.navbar.span,
             backgroundColor: theme.navbar.button,
            cursor: "pointer",
            fontWeight: 700,
          }}
        >
          Kom igång →
        </Button>
        </Link>
      </Box>
    </Box>
 

        </>
    )
}