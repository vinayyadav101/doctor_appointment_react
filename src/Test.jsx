
import React from "react";
import { Card, CardContent, Typography, Rating, Box } from "@mui/material";

export default function Test(){

  const {email,rating,review} =   {
    email:"john.doe@example.com",
  rating:4.5,
  review:"The doctor was very professional and took time to explain everything."}
    return(
    <Card
      sx={{
        maxWidth: 500,
        margin: "auto",
        boxShadow: 3,
        borderRadius: 2,
        p: 1,
      }}
    >
      <CardContent>
        {/* User Email */}
        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
          {email}
        </Typography>

        {/* Rating */}
        <Box display="flex" alignItems="center" mb={1}>
          <Rating value={rating} precision={0.5} readOnly />
          <Typography variant="body2" sx={{ ml: 1 }}>
            {rating}/5
          </Typography>
        </Box>

        {/* Review Text */}
        <Typography variant="body1">{review}</Typography>
      </CardContent>
    </Card>
  );
}