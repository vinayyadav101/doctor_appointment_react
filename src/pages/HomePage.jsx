import { Box, Button, ButtonBase, ButtonGroup, CardMedia, Link, Rating, Typography, useMediaQuery, useTheme } from '@mui/material'
import BanerImage from '../asset/Baner.png'
import { FaHeartbeat } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";
import { GiKneeCap } from "react-icons/gi";
import { MdFace } from "react-icons/md";
import { MdBloodtype } from "react-icons/md";
import { LuStethoscope } from "react-icons/lu";
import { FaRegEye } from "react-icons/fa";
import { FaRadiationAlt } from "react-icons/fa";
import DoctorImage from "../asset/images (2).jpeg"

export default function HomePage() {
    const emergencyNumber = 7046816857;
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

    const SmallSizeCss = isSmall ?{
        div:'min-w-40 min-h-30 p-3 m-2',
        size:40 ,
        perentDiv: "",
        gap:0,
        fontSize:'text-xl'
    }:{
        div:'min-w-48 min-h-44 p-5 m-4',
        size:60,
        perentDiv:18,
        gap:6,
        fontSize:'text-2xl'
    }
    return (
        <div className="relative mb-5">
            <div className='relative'>
                <img src={BanerImage} alt="Baner" className='mask-b-from-60% mask-b-to-90% h-[70vh] w-[100%]' />
                <p className={`${isSmall ? 'text-[2.8vh]': 'text-[3.8vh]'} text-center absolute md:bottom-8 bottom-2 md:left-[30%] left-[5%]`}>24/7 Multispeciality Hospital with compassionate <br className='hidden md:block'/> and Advanced Technology.</p>
            </div>
            <div className='flex justify-center gap-4 flex-wrap md:mt-0 mt-2'>
                    <Button variant="contained" sx={{fontSize:"2.5vh"}}>Book Appointment</Button>
                    <Button variant="outlined" sx={{fontSize:"2.5vh"}}>Emergency: +91 {emergencyNumber}</Button>
            </div>
            <div className='mt-8 text-center'>
                <Box component="section" sx={{ p: 2, textAlign:'center'}}>
                        <Typography  variant={isSmall ? 'h5' : 'h3'}  sx={{letterSpacing:"5px"}} >
                            Our Specialties
                        </Typography>
                        <Typography variant='p'  className={ `${isSmall ? 'text-lg':'text-3xl'} font-light`}>
                            Expert Care Across Every Specilty
                        </Typography>
                </Box>
                <Box component="section" sx={{ p: 2, px:SmallSizeCss.perentDiv  ,display:"flex" , flexDirection:"row" , flexWrap:"wrap", gap:SmallSizeCss.gap, textAlign:"center", justifyContent:'center'}}>
                       <div className={`flex flex-col justify-center items-center rounded-2xl  bg-blue-50 ${SmallSizeCss.div} `}>
                            <FaHeartbeat size={SmallSizeCss.size} color="#1976d2"  />
                            <Typography className={SmallSizeCss.fontSize} variant='p'>
                                Cardilogy
                            </Typography>
                       </div>
                       <div className={`flex flex-col justify-center items-center rounded-2xl  bg-blue-50 ${SmallSizeCss.div} `}>
                            <GiBrain size={SmallSizeCss.size} color="#1976d2"/>
                            <Typography className={SmallSizeCss.fontSize} variant='p'>
                                Neurology
                            </Typography>
                       </div>
                       
                       <div className={`flex flex-col justify-center items-center rounded-2xl  bg-blue-50 ${SmallSizeCss.div} `}>
                            <GiKneeCap size={SmallSizeCss.size} color="#1976d2"/>
                            <Typography className={SmallSizeCss.fontSize} variant='p'>
                                Orthopedics
                            </Typography>
                       </div>
                       <div className={`flex flex-col justify-center items-center rounded-2xl  bg-blue-50 ${SmallSizeCss.div} `}>
                            <MdFace size={SmallSizeCss.size} color="#1976d2"/>
                            <Typography className={SmallSizeCss.fontSize} variant='p'>
                                pediatrics
                            </Typography>
                       </div>
                       <div className={`flex flex-col justify-center items-center rounded-2xl  bg-blue-50 ${SmallSizeCss.div} `}>
                            <MdBloodtype size={SmallSizeCss.size} color="#1976d2"/>
                            <Typography className={SmallSizeCss.fontSize} variant='p'>
                                Blood Bank
                            </Typography>
                       </div>
                       <div className={`flex flex-col justify-center items-center rounded-2xl  bg-blue-50 ${SmallSizeCss.div} `}>
                            <LuStethoscope size={SmallSizeCss.size} color="#1976d2"/>
                            <Typography className={SmallSizeCss.fontSize} variant='p'>
                                Gernal <br />Medicline
                            </Typography>
                       </div>
                       <div className={`flex flex-col justify-center items-center rounded-2xl  bg-blue-50 ${SmallSizeCss.div} `}>
                            <FaRegEye size={SmallSizeCss.size} color="blue"/>
                            <Typography className={SmallSizeCss.fontSize} variant='p'>
                               Eye Care
                            </Typography>
                       </div>
                       <div className={`flex flex-col justify-center items-center rounded-2xl  bg-blue-50 ${SmallSizeCss.div} `}>
                            <FaRadiationAlt size={SmallSizeCss.size} color="#1976d2"/>
                            <Typography className={SmallSizeCss.fontSize} variant='p'>
                                Radilogy
                            </Typography>
                       </div>
                       
                </Box>
                        <Link component="button" variant="body2">
                             View All Services
                        </Link> 
            </div>
            <div className='mt-8'>
                <Box component="section" sx={{ p: 2, textAlign:"center"}}>
                        <Typography variant={isSmall ? 'h5' : 'h3'}  sx={{letterSpacing:"5px"}}>
                            Top Rated Doctors
                        </Typography>
                </Box>
                <Box component="section" sx={{ p: 2, border: '1px dashed grey', textAlign:"center", display:'flex', flexDirection:'row', flexWrap:'wrap', gap:SmallSizeCss.gap , justifyContent:"center"}}>
                    <div 
                        className='flex flex-col p-2 border-black border-2 relative gap-2'
                    >
                        <CardMedia
                          component="img"
                          sx={{maxHeight:"298px" , maxWidth:"240px"}}
                          image={DoctorImage}
                          alt="Paella dish"
                        />
                        <Box component="div" className='flex flex-col'>
                            <Typography variant='p' className={SmallSizeCss.fontSize}>
                                Rita reporter
                            </Typography>
                            <Typography variant='p' className='font-light'>
                                Cardilogy
                            </Typography>
                        </Box>
                        <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                        <ButtonGroup className='w-[100%] flex flex-row justify-evenly'>
                            <Button variant='contained'>Profile</Button>
                            <Button variant='outlined'>Applointment</Button>
                        </ButtonGroup>
                    </div>
                </Box>
            </div>
        </div>
    )
}