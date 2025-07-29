import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  IconButton,
  Paper,
  useTheme,
  useMediaQuery,
  Divider,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { motion } from 'framer-motion';


export default function LoginSingup(){

  const [isSignup, setIsSignup] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (isSignup) {
      console.log('Signup data:', form);
    } else {
      console.log('Login data:', {
        email: form.email,
        password: form.password,
      });
    }
  };

  return (
       <Paper
      elevation={6}
      sx={{
        position: 'relative',
        width: { xs: '95%', sm: 768 },
        height: isMobile ? 'auto' : 520,
        overflow: 'hidden',
        borderRadius: 3,
        mx: 'auto',
        my: 4,
        p: 0,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection:isMobile ? "column":'row',
          justifyContent:'space-evenly',
          height: '100%',
        }}
      >
        {/* Login Form */}
          <Box
          sx={{
            px: 6,
            py: 5,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            bgcolor: '#fff',
          }}
        >
          <Typography variant="h5" fontWeight={600} mb={2} textAlign="center">
            Login
          </Typography>

          <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center', gap: 1 }}>
            <IconButton><FacebookIcon color="primary" /></IconButton>
            <IconButton><GoogleIcon sx={{ color: '#E94335' }} /></IconButton>
            <IconButton><LinkedInIcon color="primary" /></IconButton>
          </Box>

          <Typography variant="body2" mb={2} textAlign="center">
            or use your account
          </Typography>

          <TextField
            label="Email"
            name="email"
            value={form.email}
            onChange={handleChange}
            variant="outlined"
            size="small"
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            variant="outlined"
            size="small"
            fullWidth
            sx={{ mb: 2 }}
          />

          <Typography
            variant="body2"
            sx={{ color: 'primary.main', mb: 2, cursor: 'pointer', textAlign: 'right' }}
          >
            Forgot your password?
          </Typography>

          <Button
            variant="contained"
            fullWidth
            sx={{ mt: 1, borderRadius: '20px', py: 1 }}
            onClick={handleSubmit}
          >
            Login
          </Button>
        </Box>
        
          {isMobile && <Divider textAlign="center">OR</Divider>}

        {/* Signup Form */}
          <Box
          sx={{
            px: 6,
            py: 5,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            bgcolor: '#fff',
          }}
        >
          <Typography variant="h5" fontWeight={600} mb={2} textAlign="center">
            Create Account
          </Typography>

          <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center', gap: 1 }}>
            <IconButton><FacebookIcon color="primary" /></IconButton>
            <IconButton><GoogleIcon sx={{ color: '#E94335' }} /></IconButton>
            <IconButton><LinkedInIcon color="primary" /></IconButton>
          </Box>

          <Typography variant="body2" mb={2} textAlign="center">
            or use your email for registration
          </Typography>

          <TextField
            label="Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            variant="outlined"
            size="small"
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            label="Email"
            name="email"
            value={form.email}
            onChange={handleChange}
            variant="outlined"
            size="small"
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            variant="outlined"
            size="small"
            fullWidth
            sx={{ mb: 2 }}
          />

          <Button
            variant="contained"
            fullWidth
            sx={{ mt: 1, borderRadius: '20px', py: 1 }}
            onClick={handleSubmit}
          >
            Sign Up
          </Button>
        </Box>
        </Box>

      {/* Overlay Panel */}
      {!isMobile && (
        <motion.div
          animate={{ x: isSignup ? 0 : '100%' }}
          transition={{ duration: 0.6 }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '50%',
            background: 'linear-gradient(135deg, #37DFB8, #E87B37, #E8375A)',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '0 40px',
            zIndex: 10,
          }}
        >
          <Box>
            <Typography variant="h5" fontWeight={600}>
              {isSignup ? 'Welcome Back' : 'Hello, Friend'}
            </Typography>
            <Typography variant="body2" mt={2} mb={3}>
              {isSignup
                ? 'To keep connected with us please login with your personal info'
                : 'Enter your personal details and start your journey with us'}
            </Typography>
            <Button
              variant="outlined"
              sx={{ color: '#fff', borderColor: '#fff', borderRadius: '20px', px: 3 }}
              onClick={() => {
                setForm({ name: '', email: '', password: '' });
                setIsSignup(!isSignup);
              }}
            >
              {isSignup ? 'Login' : 'Signup'}
            </Button>
          </Box>
        </motion.div>
      )}
    </Paper>
  );
}
