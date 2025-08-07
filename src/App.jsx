
import {createContext, useContext, useEffect} from 'react';
import { useMediaQuery, useTheme } from "@mui/material";
import AppRoutes from "./routes/AppRoutes";
import { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { ExpireyCheck, getProfile } from './redux/slices/authSlice';


export const mobileContext = createContext() 
export const baseUrl = ""

export default function App() {
        const dispatch = useDispatch()
        const theme = useTheme();
        const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
        
useEffect(()=>{
  (async function(){
    const response = await dispatch(ExpireyCheck())

    if(response?.payload?.code === 1){
      await dispatch(getProfile())
    }
    
  })()
},[])
  return (
      <mobileContext.Provider value={isSmall}>
        <Toaster />
          <AppRoutes />
      </mobileContext.Provider>
  )
}

