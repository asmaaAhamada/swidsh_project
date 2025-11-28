import { Box, Grid, Typography, useTheme } from "@mui/material";

const StatsSection = () => {
    const theme =useTheme()
  const items = [
    { number: "2.5+", label: "Miljoner investeringar" },
    { number: "120+", label: "Investeringspartners" },
    { number: "50+", label: "Aktiva projekt" },
    { number: "98%", label: "Kundnöjdhet" },
  ];

  return (
    <Box sx={{ py: 4 ,backgroundColor: theme.navbar.main,
        color: theme.navbar.contrastText,}}>
      <Grid container spacing={3}>
        {items.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Box
              sx={{
                textAlign: "center",
                p: 3,
              
               
              }}
            >
              <Typography variant="h4" sx={{ fontWeight: "bold", color: "primary.main" }}>
                {item.number}
              </Typography>
              <Typography variant="subtitle1" sx={{ mt: 1 }}>
                {item.label}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default StatsSection;
