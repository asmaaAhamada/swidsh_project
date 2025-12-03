import React, { useEffect, useState } from "react";
import { Box, Button, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

import r1 from "../../../assets/image/2.jpg";
import r2 from "../../../assets/image/3.jpg";
import r3 from "../../../assets/image/4.jpg";
import r4 from "../../../assets/image/5.jpg";
import r5 from "../../../assets/image/7.jpg";
import r6 from "../../../assets/image/8.jpg";

const images = [r1, r2, r3, r4, r5, r6]; // ✅ حط كل الصور هون

const HomePage = () => {
  const theme = useTheme();
  const [currentImage, setCurrentImage] = useState(0);

  // ✅ تغيير الصورة كل 4 ثواني
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "80vh",
        backgroundImage: `url(${images[currentImage]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 1s ease-in-out", // ✅ أنيميشن ناعم
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* ✅ Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor:
            theme.palette.mode === "dark"
              ? "rgba(0,0,0,0.6)"
              : "rgba(0,0,0,0.4)",
        }}
      />

      {/* ✅ النص */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          maxWidth: "800px",
          textAlign: "center",
          color: "#fff",
          px: 2,
        }}
      >
        <Typography variant="h3" fontWeight="bold" mb={2}>
          Er tillit är vår största investering…
          <br />
          och er framgång är vårt mål
        </Typography>

        <Typography variant="body1" mb={4} fontSize="1.1rem">
          Välkommen till vår plattform för smart investering — där vi kopplar
          ambitiösa idéer till kapital som skapar framtiden
        </Typography>

        <Link to="/Skapa_konto" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            size="large"
            sx={{
              borderRadius: 2,
              textTransform: "none",
              px: 4,
              py: 1.2,
            }}
          >
            Kom igång
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default HomePage;
