"use client";
import React from 'react';
import { Box, Container, Typography, Link, Divider, Stack } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: 'rgba(2, 12, 27, 0.95)', color: 'grey.300', pt: 8, pb: 4, mt: 'auto' }}>
      <Container maxWidth="lg">
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} justifyContent="space-between">
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" sx={{ color: 'white', fontWeight: 700, mb: 2 }}>
              Vihan Travels
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.8 }}>
              Premium car rental services based in Goa Dabolim. Experience the beauty of Goa with our comfortable and reliable fleet.
            </Typography>
          </Box>

          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" sx={{ color: 'white', fontWeight: 700, mb: 2 }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {['Home', 'Our Fleet', 'Terms & Conditions', 'Privacy Policy'].map((item) => (
                <Link key={item} href="#" color="inherit" underline="hover">
                  {item}
                </Link>
              ))}
            </Box>
          </Box>

          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" sx={{ color: 'white', fontWeight: 700, mb: 2 }}>
              Contact Us
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <LocationOnIcon color="primary" />
                <Typography variant="body2">Dabolim Airport Road, Goa, India</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <PhoneIcon color="primary" />
                <Typography variant="body2">+91 98765 43210</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <EmailIcon color="primary" />
                <Typography variant="body2">bookings@vihantravels.com</Typography>
              </Box>
            </Box>
          </Box>
        </Stack>
        
        <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)', my: 4 }} />
        
        <Typography variant="body2" align="center" sx={{ color: 'grey.500' }}>
          &copy; {new Date().getFullYear()} Vihan Tour and Travels. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
