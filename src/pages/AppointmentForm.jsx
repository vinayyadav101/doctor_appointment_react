import { Box, Button, Checkbox, FormControlLabel, Input, Modal, TextField, Typography, useTheme } from "@mui/material";
import { useContext, useState } from "react";
import Sheet from '@mui/joy/Sheet';
import { ModalClose } from "@mui/joy";
import { mobileContext } from "../App";

export default function AppointmentForm(){
        const isSmall = useContext(mobileContext)
        const [open, setOpen] = useState(false);
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

    return(
        <div className="relative mb-5 mt-5">
            <Box component='section' sx={{p:2}}>
                <form>
                    <Box component="div" sx={{p:2 , boxShadow: 3, borderRadius: 2, gap:3 ,display:"grid" , gridTemplateColumns:`${isSmall ? 'repeat(1fr)': 'repeat(2,1fr)'}` , mx:(!isSmall) && 23}}>
                        <Typography variant="h5" sx={{gridColumn:(!isSmall && "span 2")}}>Book Appointment</Typography>
                        <TextField
                          fullWidth label="First Name" name="firstName"
                          required
                        />
                        <TextField
                          fullWidth label="First Name" name="firstName"
                          required
                        />
                        <TextField
                          fullWidth label="Email" name="email" type="email"
                          value={form.email} onChange={handleChange}
                          required
                        />
                        <TextField
                          fullWidth label="Phone" name="phone" type="tel"
                          value={form.phone} onChange={handleChange}
                          required
                        />
                        <TextField
                          fullWidth label="Doctor Name" name="doctorName"
                          value={form.doctorName} onChange={handleChange}
                          required
                        />
                        <TextField
                            fullWidth label="Date" name="date" type="date"
                            value={form.date} onChange={handleChange}
                            InputLabelProps={{ shrink: true }}
                            required
                        />
                        <TextField
                          fullWidth label="Time" name="time" type="time"
                          value={form.time} onChange={handleChange}
                          InputLabelProps={{ shrink: true }}
                          required
                        />
                        <TextField
                          fullWidth label="Base Fee (₹)" name="baseFee" type="number"
                          value={form.baseFee} onChange={handleChange}
                          required
                          disabled
                        />
                        <TextField
                          multiline rows={3}
                          sx={{gridColumn:(!isSmall) && 'span 2'}}
                          label="Description" name="description"
                          value={form.description} onChange={handleChange}
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={form.terms}
                              onChange={handleChange}
                              name="terms"
                            />
                          }
                          label={
                                 <span onClick={() => setOpen(true)} style={{ cursor: 'pointer', color: '#1976d2', textDecoration: 'underline' }}>
                                    I agree to the terms and conditions
                                 </span>
                                }
                        />
                       <Modal
                            open={open}
                            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                        >
                            <Sheet
                            variant="outlined"
                            sx={{ maxWidth: 500, borderRadius: 'md', p: 3, boxShadow: 'lg' }}
                            >
                            <ModalClose variant="plain" sx={{ m: 1 }} onClick={() => setOpen(false)}/>
                            <Typography
                                component="h2"
                                id="modal-title"
                                level="h4"
                                textColor="inherit"
                                sx={{ fontWeight: 'lg', mb: 1 }}
                            >
                                This is the modal title
                            </Typography>
                            <Typography id="modal-desc" textColor="text.tertiary">
                                Make sure to use <code>aria-labelledby</code> on the modal dialog with an
                                optional <code>aria-describedby</code> attribute.
                            </Typography>
                            </Sheet>
                       </Modal>
                        <Button type="submit" variant="contained" fullWidth>
                             Submit
                        </Button>
                    </Box>
                </form>
            </Box>
        </div>
    )
}