import { alpha, Box, InputBase ,styled } from "@mui/material";
import { useSelector } from "react-redux";
import DoctorCard from "../components/DoctorCard";
import { topethreeDoctor } from "../rowfiles/Homepage";
import { useContext } from "react";
import { mobileContext } from "../App";
import Search from "../components/Search";

export default function SearchDoctors(){
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


    return(
        <div className="relative my-5 flex flex-col justify-center">
            <div>
                <Search />
            </div>
                <Box sx={{paddingY:5, display:"flex", justifyContent:'center', flexDirection:"row", flexWrap:'wrap', gap:3, maxHeight:"500px", overflowY:"scroll"}}>
                    {
                        topethreeDoctor?.map((e,i)=><DoctorCard 
                        key={i}
                        name={e.name} 
                        id={e.id} 
                        specility={e.specility} 
                        imageUrl={e.imageUrl}
                        rating={3.5} 
                        additionalCss={SmallSizeCss.fontSize}
                        />)
                    }  
                    {
                        topethreeDoctor?.map((e,i)=><DoctorCard 
                        key={i}
                        name={e.name} 
                        id={e.id} 
                        specility={e.specility} 
                        imageUrl={e.imageUrl}
                        rating={3.5} 
                        additionalCss={SmallSizeCss.fontSize}
                        />)
                    }  
                     
                </Box>
        </div>
    )
}