import { Box, Button, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

export default function RedoAt(){
    const theme=useTheme()
    return(
        <>
        
        <Box sx={{ py: 4 , textAlign: "center",
        }}>
     <Typography variant="h5" fontWeight='blod' sx={{color: theme.navbar.Text,}}>

        Redo att börja investera?
     </Typography>
      <Typography   sx={{color: theme.navbar.span,}}>

Ju tidigare du börjar, desto större blir chansen för dina pengar att växa över tid. Börja med små belopp, 
<br/>
lär dig under resans gång, och låt ränta-på-ränta-effekten arbeta till din fördel.
     </Typography>
     <Box sx={{ textAlign: "center", mt: 4 }}>
             <Link to="/Skapa_konto">
             <Button
               sx={{
                 color:theme.palette.primary.contrastText,
                  backgroundColor: theme.navbar.border,
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