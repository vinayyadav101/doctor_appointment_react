import * as React from 'react'
import { Box, Grid } from "@mui/material";
import { FaUserDoctor } from "react-icons/fa6";
import {AspectRatio , Link , Card , CardContent , Chip , Typography} from '@mui/joy';


export default function AdminDeshBoard(){
    return(
       
        <Box component="section" sx={{p:4}}>
            
            <Box component="div"
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(5, 1fr)",
                gridTemplateRows: "repeat(5, 1fr)",
                height: "100vh", // optional
              }}
            >
             <Card 
             variant='outlined'
             orientation='horizontal'>

              <Box  sx={{width:90 }}>
                <FaUserDoctor className='bg-transparent' size={90}/>
              </Box>
                <CardContent>
                  <Typography variant='p' sx={{fontSize:30}}>
                    100000
                  </Typography>
                </CardContent>
             </Card>
            </Box>
        </Box>
    )
}