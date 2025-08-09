import { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Avatar,
  Button,
  Rating,
  Tab,
  Tabs,
  Paper,
} from "@mui/material";
import { useLocation } from "react-router-dom";
import ReviewCard from "../components/ReviewCrad";

export default function DoctorProfile() {
  const { state } = useLocation();
  const [tab, setTab] = useState(0);

  return (
    <Box sx={{ p: 3 }}>
      {/* Header Section */}
      <Paper sx={{ p: 3, mb: 3 }}>
        <Grid container spacing={3} alignItems="center">
          {/* Doctor Avatar */}
          <Grid item xs={12} md={3} sx={{ textAlign: "center" }}>
            <Avatar
              alt={state?.doctorName}
              src={state?.avatar?.url_link}
              variant="square"
              sx={{ width: 150, height: 150, mx: "auto" }}
            />
          </Grid>

          {/* Doctor Info */}
          <Grid item xs={12} md={6}>
            <Typography variant="h5" fontWeight="bold">
              {state?.doctorName}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {state?.specialty} — {state?.experience} Years Experience
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Department: {state?.specialty}
            </Typography>
            <Rating value={4.5} precision={0.5} readOnly sx={{ mt: 1 }} />
          </Grid>

          {/* Actions */}
          <Grid item xs={12} md={3} sx={{ textAlign: "center" }}>
            <Button variant="contained" sx={{ mb: 1 }} fullWidth>
              Book Appointment
            </Button>
            <Button variant="outlined" fullWidth>
              Contact
            </Button>
          </Grid>
        </Grid>
      </Paper>

      {/* Tabs */}
      <Paper>
        <Tabs
          value={tab}
          onChange={(e, newVal) => setTab(newVal)}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="Qualifiaction" />
          <Tab label="Availability" />
          <Tab label="Reviews" />
          <Tab label="Reports" />
        </Tabs>

        {/* Tab Content */}
        <Box
          sx={{
            p: 2,
            maxHeight: "250px",
            overflowY: "scroll",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          {tab === 0 && <Typography>{state.qualifications}</Typography>}
          {tab === 1 && <Typography>Mon–Fri: 10am–4pm</Typography>}
          {tab === 2 &&
            state?.review?.map(
              (e, i) =>
                i <= 10 && (
                  <ReviewCard
                    key={i}
                    email={e?.patientEmail}
                    rating={e?.rating}
                    review={e?.review}
                  />
                )
            )}
          {tab === 3 && <Typography>No reports uploaded yet.</Typography>}
        </Box>
      </Paper>
    </Box>
  );
}
