import { Button } from '@mui/material'
import BanerImage from '../asset/Baner.png'

export default function HomePage() {
    return (
        <div className="relative mb-5">
            <div className='relative'>
                <img src={BanerImage} alt="Baner" className='mask-b-from-60% mask-b-to-90% h-[70vh] w-[100%]' />
                <p className='text-[3.8vh] text-center absolute bottom-15 md:left-[30%] left-[5%]'>24/7 Multispeciality Hospital with compassionate <br className='hidden md:block'/> and Advanced Technology.</p>
                <div className='flex justify-center'>
                    <Button variant="contained" sx={{fontSize:"2.5vh"}}>Book Appointment</Button>

                </div>
            </div>
        </div>
    )
}