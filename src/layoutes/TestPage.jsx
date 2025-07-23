import React, { useState } from 'react';
import {
  TextField,
  Checkbox,
  Button,
  FormControlLabel,
  Grid,
  Typography,
  Box
} from '@mui/material';

export default function UserForm() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    doctorName: '',
    date: '',
    time: '',
    description: '',
    baseFee: '',
    terms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.terms) {
      alert("Please accept the terms and conditions");
      return;
    }
    console.log("Form Submitted:", form);
  };

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', mt: 4, p: 3, boxShadow: 3, borderRadius: 2 }}>
      <Typography variant="h5" mb={2}>Book Appointment</Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              fullWidth label="First Name" name="firstName"
              value={form.firstName} onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth label="Last Name" name="lastName"
              value={form.lastName} onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth label="Email" name="email" type="email"
              value={form.email} onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth label="Phone" name="phone" type="tel"
              value={form.phone} onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth label="Doctor Name" name="doctorName"
              value={form.doctorName} onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth label="Date" name="date" type="date"
              value={form.date} onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth label="Time" name="time" type="time"
              value={form.time} onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth multiline rows={3}
              label="Description" name="description"
              value={form.description} onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth label="Base Fee (₹)" name="baseFee" type="number"
              value={form.baseFee} onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={form.terms}
                  onChange={handleChange}
                  name="terms"
                />
              }
              label="I agree to the terms and conditions"
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" fullWidth>
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}
