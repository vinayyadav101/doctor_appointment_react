import { Box, Button, ButtonGroup, CardMedia, Rating, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function DoctorCard({details , additionalCss}){
    
    const navigate = useNavigate()
    return(
        <div 
                        className='flex flex-col p-2   relative gap-2 max-w-[300px] mx-h-[400px] justify-center items-center shadow-xl/30 rounded-xl py-4 ring'
                    >
                        <CardMedia
                          component="img"
                          sx={{maxHeight:"298px" , maxWidth:"240px"}}
                          image={details?.avatar?.url_link}
                          alt={details.doctorName}
                        />
                        <Box component="div" className='flex flex-col'>
                            <Typography variant='p' className={`${additionalCss} mx-8`}>
                                {details.doctorName}
                            </Typography>
                            <Typography variant='p' className='font-light'>
                                {details.specialty}
                            </Typography>
                        </Box>
                        <Rating name="half-rating-read" defaultValue={2.3} precision={0.5} readOnly />
                        <ButtonGroup className='w-[100%] flex flex-row justify-center'>
                            <Button variant='contained' onClick={()=>navigate('/doctor/profile',{state:details})}>Profile</Button>
                            <Button variant='outlined' onClick={()=> navigate('/appointment-form')}>Appointment</Button>
                        </ButtonGroup>
                    </div>
    )
}