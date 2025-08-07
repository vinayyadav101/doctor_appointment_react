import { Typography } from "@mui/material";

export default function SpecilitCrad({additionalCss , text , Icon}) {
    return (
    <div className={`flex flex-col justify-center items-center rounded-2xl  bg-blue-50 ${additionalCss.div} `}>
        <Icon size={additionalCss.size} color="#1976d2" /> 
        <Typography className={additionalCss.fontSize} variant='p'>
            {text}
        </Typography>
    </div>
    )
}