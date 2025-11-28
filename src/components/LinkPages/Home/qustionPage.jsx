import { Box, Typography, useTheme } from "@mui/material";
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
export default function QuesPage (){
    const theme= useTheme()
    return(
        <>
       
        
         <Box sx={{ py: 4 ,
         backgroundColor: theme.palette.background.default,
                color: theme.navbar.border,
                                textAlign: "center",

                }}>
                    <Box sx={{display:'flex' ,justifyContent:'center'}}>


                         <AutoGraphIcon fontSize="large"/>
              <Typography  variant="h5" fontWeight='blod'>
            Varför välja att investera i Sverige?
        </Typography>
                    </Box>
                   

              <Typography sx={{color: theme.navbar.span}} variant="h6" >

       
        Vår app gör investeringar i Sverige enklare och säkrare, med smarta möjligheter som passar dina ambitioner och stöder din ekonomiska framtid med förtroende

                </Typography>

            </Box>
        </>
    )
}