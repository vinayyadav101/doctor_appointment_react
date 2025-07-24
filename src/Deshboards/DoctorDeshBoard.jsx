import { Box, Button, ButtonGroup, Typography, useMediaQuery, useTheme } from "@mui/material";

export default function DoctorDeshBoard(){
        const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
    return(
        <div className="relative mb-5 mt-5">
            <Box component='section' sx={{p:2}}>
               <Box component="div" sx={{gap:3 ,display:"flex" , flexDirection:'column' , mx:(!isSmall) && 4}}>
                        <Box component="div" className="flex flex-row justify-start gap-2">  
                            {/* gap set becuse mobile view not set this gap 2 proper */}
                            <Typography variant="h5" sx={{gridColumn:(!isSmall && "span 2")}}>Doctor Deshboard</Typography>
                            <Button variant="plain" className="hover:border-b-2" sx={{
                                position: "relative",
                                px: 0,
                                "&::after": {
                                  content: '""',
                                  position: "absolute",
                                  left: 0,
                                  bottom: 0,
                                  height: "2px",
                                  width: 0,
                                  backgroundColor: "currentColor",
                                  transition: "width 0.3s ease-in-out",
                                },
                                "&:hover::after": {
                                  width: "100%",
                                },}}>Today</Button>
                            <Button variant="plain" className="hover:border-b-2" sx={{
                                position: "relative",
                                px: 0,
                                "&::after": {
                                  content: '""',
                                  position: "absolute",
                                  left: 0,
                                  bottom: 0,
                                  height: "2px",
                                  width: 0,
                                  backgroundColor: "currentColor",
                                  transition: "width 0.3s ease-in-out",
                                },
                                "&:hover::after": {
                                  width: "100%",
                                },}}>History</Button>
                        </Box>
                        <Box component="section" >
                            <Box component="div" className="max-h-[60vh] overflow-y-scroll p-1 flex flex-col gap-3">
                                <Box component="div" sx={{ p:1,boxShadow: 3, borderRadius: 2}} className={`flex ${isSmall ? "flex-col gap-4":"flex-row justify-between"} `}>
                                    <div >
                                    <Typography variant="h5">Jhone pole Jonsen </Typography>
                                    <Typography variant="p">10:30 AM</Typography>
                                    </div>
                                    <div className={`flex ${isSmall ? "flex-col gap-2" : "flex-row gap-5"} `}>
                                    <ButtonGroup>
                                        <Button variant="outlined" className="w-full">Canel</Button>
                                        <Button variant="outlined" className="w-full">Residual</Button>
                                    </ButtonGroup>
                                    <ButtonGroup>
                                        <Button variant="contained" className="w-full">Upload Test Report</Button>
                                        <Button variant="contained" className="w-full">Upload Prescription</Button>
                                    </ButtonGroup>
                                    </div>
                                </Box>
                                <Box component="div" sx={{ p:1,boxShadow: 3, borderRadius: 2}} className={`flex ${isSmall ? "flex-col gap-4":"flex-row justify-between"} `}>
                                    <div >
                                    <Typography variant="h5">Jhone pole Jonsen </Typography>
                                    <Typography variant="p">10:30 AM</Typography>
                                    </div>
                                    <div className={`flex ${isSmall ? "flex-col gap-2" : "flex-row gap-5"} `}>
                                    <ButtonGroup>
                                        <Button variant="outlined" className="w-full">Canel</Button>
                                        <Button variant="outlined" className="w-full">Residual</Button>
                                    </ButtonGroup>
                                    <ButtonGroup>
                                        <Button variant="contained" className="w-full">Upload Test Report</Button>
                                        <Button variant="contained" className="w-full">Upload Prescription</Button>
                                    </ButtonGroup>
                                    </div>
                                </Box>
                                <Box component="div" sx={{ p:1,boxShadow: 3, borderRadius: 2}} className={`flex ${isSmall ? "flex-col gap-4":"flex-row justify-between"} `}>
                                    <div >
                                    <Typography variant="h5">Jhone pole Jonsen </Typography>
                                    <Typography variant="p">10:30 AM</Typography>
                                    </div>
                                    <div className={`flex ${isSmall ? "flex-col gap-2" : "flex-row gap-5"} `}>
                                    <ButtonGroup>
                                        <Button variant="outlined" className="w-full">Canel</Button>
                                        <Button variant="outlined" className="w-full">Residual</Button>
                                    </ButtonGroup>
                                    <ButtonGroup>
                                        <Button variant="contained" className="w-full">Upload Test Report</Button>
                                        <Button variant="contained" className="w-full">Upload Prescription</Button>
                                    </ButtonGroup>
                                    </div>
                                </Box>
                                <Box component="div" sx={{ p:1,boxShadow: 3, borderRadius: 2}} className={`flex ${isSmall ? "flex-col gap-4":"flex-row justify-between"} `}>
                                    <div >
                                    <Typography variant="h5">Jhone pole Jonsen </Typography>
                                    <Typography variant="p">10:30 AM</Typography>
                                    </div>
                                    <div className={`flex ${isSmall ? "flex-col gap-2" : "flex-row gap-5"} `}>
                                    <ButtonGroup>
                                        <Button variant="outlined" className="w-full">Canel</Button>
                                        <Button variant="outlined" className="w-full">Residual</Button>
                                    </ButtonGroup>
                                    <ButtonGroup>
                                        <Button variant="contained" className="w-full">Upload Test Report</Button>
                                        <Button variant="contained" className="w-full">Upload Prescription</Button>
                                    </ButtonGroup>
                                    </div>
                                </Box>
                                <Box component="div" sx={{ p:1,boxShadow: 3, borderRadius: 2}} className={`flex ${isSmall ? "flex-col gap-4":"flex-row justify-between"} `}>
                                    <div >
                                    <Typography variant="h5">Jhone pole Jonsen </Typography>
                                    <Typography variant="p">10:30 AM</Typography>
                                    </div>
                                    <div className={`flex ${isSmall ? "flex-col gap-2" : "flex-row gap-5"} `}>
                                    <ButtonGroup>
                                        <Button variant="outlined" className="w-full">Canel</Button>
                                        <Button variant="outlined" className="w-full">Residual</Button>
                                    </ButtonGroup>
                                    <ButtonGroup>
                                        <Button variant="contained" className="w-full">Upload Test Report</Button>
                                        <Button variant="contained" className="w-full">Upload Prescription</Button>
                                    </ButtonGroup>
                                    </div>
                                </Box>
                                <Box component="div" sx={{ p:1,boxShadow: 3, borderRadius: 2}} className={`flex ${isSmall ? "flex-col gap-4":"flex-row justify-between"} `}>
                                    <div >
                                    <Typography variant="h5">Jhone pole Jonsen </Typography>
                                    <Typography variant="p">10:30 AM</Typography>
                                    </div>
                                    <div className={`flex ${isSmall ? "flex-col gap-2" : "flex-row gap-5"} `}>
                                    <ButtonGroup>
                                        <Button variant="outlined" className="w-full">Canel</Button>
                                        <Button variant="outlined" className="w-full">Residual</Button>
                                    </ButtonGroup>
                                    <ButtonGroup>
                                        <Button variant="contained" className="w-full">Upload Test Report</Button>
                                        <Button variant="contained" className="w-full">Upload Prescription</Button>
                                    </ButtonGroup>
                                    </div>
                                </Box>
                                <Box component="div" sx={{ p:1,boxShadow: 3, borderRadius: 2}} className={`flex ${isSmall ? "flex-col gap-4":"flex-row justify-between"} `}>
                                    <div >
                                    <Typography variant="h5">Jhone pole Jonsen </Typography>
                                    <Typography variant="p">10:30 AM</Typography>
                                    </div>
                                    <div className={`flex ${isSmall ? "flex-col gap-2" : "flex-row gap-5"} `}>
                                    <ButtonGroup>
                                        <Button variant="outlined" className="w-full">Canel</Button>
                                        <Button variant="outlined" className="w-full">Residual</Button>
                                    </ButtonGroup>
                                    <ButtonGroup>
                                        <Button variant="contained" className="w-full">Upload Test Report</Button>
                                        <Button variant="contained" className="w-full">Upload Prescription</Button>
                                    </ButtonGroup>
                                    </div>
                                </Box>
                            </Box>
                        </Box>
               </Box>
            </Box>
        </div>
    )
}