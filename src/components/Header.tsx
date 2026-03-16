"use client";
import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Header = () => {
  return (
    <Box
      component="header"
      sx={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backdropFilter: 'blur(12px)',
        backgroundColor: 'rgba(15, 23, 42, 0.7)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', py: 2 }}>
          {/* Logo Section */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <DirectionsCarIcon sx={{ color: 'primary.main', fontSize: 32 }} />
            <Typography variant="h6" sx={{ fontWeight: 800, color: 'white', letterSpacing: 1 }}>
              Vihan <Typography component="span" sx={{ color: 'primary.main', fontWeight: 800, fontSize: 'inherit' }}>tours & travels</Typography>
            </Typography>
          </Box>

          {/* Desktop Nav */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4, alignItems: 'center' }}>
            {['Home', 'Fleet', 'About Goa', 'Contact'].map((item) => (
              <Typography
                key={item}
                component="a"
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                sx={{
                  color: 'grey.300',
                  textDecoration: 'none',
                  fontWeight: 500,
                  transition: 'color 0.2s',
                  '&:hover': { color: 'primary.main' },
                }}
              >
                {item}
              </Typography>
            ))}
          </Box>

          {/* Call to action */}
          <Button
            variant="contained"
            color="secondary"
            startIcon={<WhatsAppIcon />}
            href="https://wa.me/919876543210?text=Hello%20Vihan%20tours%20%26%20travels!%20I%20would%20like%20to%20inquire%20about%20a%20car%20rental%20in%20Goa."
            target="_blank"
            sx={{ display: { xs: 'flex' }, fontWeight: 'bold' }}
          >
            Book Now
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
