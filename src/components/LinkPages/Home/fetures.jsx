import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import {
  LockOutlined,
  VerifiedUserOutlined,
  BusinessCenterOutlined,
  SupportAgentOutlined,
} from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

const features = [
  {
    icon: <LockOutlined fontSize="large" />,
    title: "Säker & Trygg",
    description:
      "Din säkerhet är vår högsta prioritet. All data är krypterad och vi följer strikta säkerhetsstandarder.",
  },
  {
    icon: <VerifiedUserOutlined fontSize="large" />,
    title: "KYC-Verifiering",
    description:
      "Alla användare genomgår noggrann identitetskontroll för maximal trygghet.",
  },
  {
    icon: <BusinessCenterOutlined fontSize="large" />,
    title: "Verifierade Projekt",
    description:
      "Varje projekt granskas noggrant innan publicering för att säkerställa kvalitet.",
  },
  {
    icon: <SupportAgentOutlined fontSize="large" />,
    title: "Professionell Support",
    description:
      "Vårt team finns här för att hjälpa dig genom hela investeringsprocessen.",
  },
];

const CardPage = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: 6,
        px: 3,
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
      }}
    >
      <Grid container spacing={4}>
        {features.map((item, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                display: "flex",
                flexDirection: "column",
                gap: 1.5,
                textAlign: "left",
                backgroundColor: theme.palette.background.paper,
                borderRadius: 3,
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: 10,
                },
              }}
            >
              <Box
                sx={{
                  color: theme.palette.primary.main,
                }}
              >
                {item.icon}
              </Box>

              <Typography variant="h6" fontWeight={700} sx={{color:theme.navbar.Text}}>
                {item.title}
              </Typography>

              <Typography variant="body2" sx={{color: theme.navbar.span}}>
                {item.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CardPage;
