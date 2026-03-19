"use client";
import React from 'react';
import { Box, Container, Typography, Link, Divider, useTheme } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  const theme = useTheme();
  
  return (
    <Box 
      component="footer" 
      id="contact"
      sx={{ 
        bgcolor: theme.palette.mode === 'dark' ? 'rgba(2, 6, 23, 0.95)' : 'rgba(248, 250, 252, 1)', 
        color: 'text.secondary', 
        pt: 8, 
        pb: 4, 
        mt: 'auto',
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="xl">
        <Box 
          display="grid" 
          gridTemplateColumns={{ xs: '1fr', sm: '1fr 1fr', md: '1.5fr 1fr 1fr 1.5fr' }} 
          gap={4}
          justifyContent="space-between"
        >
          <Box>
            <Typography variant="h6" sx={{ color: 'text.primary', fontWeight: 800, mb: 2 }}>
              Vihan tours & travels
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.8 }}>
              Premium car rental services based in Goa Dabolim. Experience the beauty of Goa with our comfortable and reliable fleet.
            </Typography>
          </Box>

          <Box>
            <Typography variant="h6" sx={{ color: 'text.primary', fontWeight: 700, mb: 2 }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {[
                { label: 'Home', href: '#home' },
                { label: 'Our Fleet', href: '#fleet' },
                { label: 'Terms & Conditions', href: '#' },
                { label: 'Privacy Policy', href: '#' }
              ].map((item) => (
                <Link key={item.label} href={item.href} color="inherit" underline="hover" sx={{ transition: 'color 0.2s', '&:hover': { color: 'primary.main' } }}>
                  {item.label}
                </Link>
              ))}
            </Box>
          </Box>

          <Box>
            <Typography variant="h6" sx={{ color: 'text.primary', fontWeight: 700, mb: 2 }}>
              Contact Us
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <LocationOnIcon color="primary" />
                <Typography variant="body2" color="text.primary" fontWeight={500}>Dabolim Airport Road, Goa</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <PhoneIcon color="primary" />
                <Typography variant="body2" color="text.primary" fontWeight={500}>+91 98765 43210</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <EmailIcon color="primary" />
                <Typography variant="body2" color="text.primary" fontWeight={500}>bookings@vihantravels.com</Typography>
              </Box>
            </Box>
          </Box>

          <Box>
            <Typography variant="h6" sx={{ color: 'text.primary', fontWeight: 700, mb: 2 }}>
              Our Location
            </Typography>
            <Box 
              sx={{ 
                width: '100%', 
                height: 200, 
                borderRadius: 2, 
                overflow: 'hidden',
                boxShadow: theme.palette.mode === 'dark' ? '0 4px 12px rgba(0,0,0,0.5)' : '0 4px 12px rgba(0,0,0,0.05)',
                bgcolor: 'background.paper',
              }}
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15392.54483737!2d73.8322623!3d15.385312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfb643d9b5e5fb%3A0xe7582eb7bc36df2!2sDabolim%2C%20Goa!5e0!3m2!1sen!2sin!4v1716912345678!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Vihan Tours & Travels Location"
              />
            </Box>
          </Box>
        </Box>
        
        <Divider sx={{ my: 4 }} />
        
        <Typography variant="body2" align="center" sx={{ color: 'text.secondary' }}>
          &copy; {new Date().getFullYear()} Vihan tours & travels. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
