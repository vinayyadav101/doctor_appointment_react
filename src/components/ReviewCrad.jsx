
import React from "react";
import { Card, CardContent, Typography, Rating, Box } from "@mui/material";

export default function ReviewCard({email , rating , review}){
    return(
    <Card
      sx={{
        width:"100%",
        minHeight:100,
        maxHeight:180,
        margin: "auto",
        boxShadow: 3,
        borderRadius: 2,
        p: 1,
      }}
    >
      <CardContent>
        {/* User Email */}
        <Box sx={{display:'flex', flexDirection:'row' , justifyContent:"space-between"}}>
            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          {email}
        </Typography>

        {/* Rating */}
        <Box display="flex" alignItems="center" mb={1}>
          <Rating value={rating} precision={0.5} readOnly />
          <Typography variant="body2" sx={{ ml: 1 }}>
            {rating}/5
          </Typography>
        </Box>
        </Box>

        {/* Review Text */}
        <Typography variant="body1">{review ? review : "User not review write" }</Typography>
      </CardContent>
    </Card>
  );
}