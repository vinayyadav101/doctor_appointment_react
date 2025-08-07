import { Box, Button, ButtonBase, ButtonGroup, CardMedia, Link, Rating, Typography, useMediaQuery, useTheme } from '@mui/material'
import BanerImage from '../asset/Baner.png'

import { useContext } from 'react';
import { mobileContext } from '../App';
import { specialities, topethreeDoctor } from '../rowfiles/Homepage';
import DoctorCard from '../components/DoctorCard';
import SpecilitCrad from '../components/SpecilitCard';

export default function HomePage() {
    const emergencyNumber = 7046816857;
    const isSmall = useContext(mobileContext)

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
        fontSize:'text-xl'
    }

    
    return (
        <div className="relative mb-5">
            <div className='relative'>
                <img src={BanerImage} alt="Baner" className='mask-b-from-60% mask-b-to-90% h-[70vh] w-[100%]' />
                <p className={`${isSmall ? 'text-[2.8vh]': 'text-[3.8vh]'} text-center absolute md:bottom-8 bottom-2 md:left-[30%] left-[5%]`}>24/7 Multispeciality Hospital with compassionate <br className='hidden md:block'/> and Advanced Technology.</p>
            </div>
            <div className='flex justify-center gap-4 flex-wrap md:mt-0 mt-2'>
                    <Button variant="contained" sx={{fontSize:"2.5vh"}} >Book Appointment</Button>
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
                      {
                        specialities.map((e,i)=> <SpecilitCrad  additionalCss={SmallSizeCss} key={i} Icon={e.icon} text={e.text}/>)
                      }


                       {/* <div className={`flex flex-col justify-center items-center rounded-2xl  bg-blue-50 ${SmallSizeCss.div} `}>
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
                       </div> */}
                       
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
                <Box component="section" sx={{ p: 2, textAlign:"center", display:'flex', flexDirection:'row', flexWrap:'wrap', gap:isSmall ? 3 : 6 , justifyContent:"center"}}>
                    {
                        topethreeDoctor.map((e,i)=><DoctorCard 
                        key={i}
                        name={e.name} 
                        id={e.id} 
                        specility={e.specility} 
                        imageUrl={e.imageUrl}
                        rating={e.rating} 
                        additionalCss={SmallSizeCss.fontSize}
                        />)
                    }
                </Box>
            </div>
        </div>
    )
}