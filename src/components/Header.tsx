"use client";
import React, { useEffect, useState } from 'react';
import { Box, Container, Typography, Button, IconButton, useTheme as useMuiTheme } from '@mui/material';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme } from 'next-themes';

const Header = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const muiTheme = useMuiTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Box
      component="header"
      className="sticky top-0 z-50 glass border-b transition-colors duration-300"
      sx={{
         borderColor: 'divider',
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', py: 2 }}>
          {/* Logo Section */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box sx={{
              p: 1, 
              borderRadius: 2, 
              bgcolor: 'primary.main', 
              color: 'primary.contrastText',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 14px 0 rgba(14, 165, 233, 0.39)'
            }}>
               <DirectionsCarIcon sx={{ fontSize: 24 }} />
            </Box>
            <Typography variant="h6" sx={{ fontWeight: 800, color: 'text.primary', letterSpacing: 0.5 }}>
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
                  color: 'text.secondary',
                  textDecoration: 'none',
                  fontWeight: 600,
                  transition: 'color 0.2s',
                  '&:hover': { color: 'primary.main' },
                }}
              >
                {item}
              </Typography>
            ))}
          </Box>

          {/* Actions */}
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            {mounted && (
               <IconButton 
                 onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')} 
                 color="inherit"
                 sx={{ 
                   color: 'text.secondary',
                   '&:hover': { bgcolor: muiTheme.palette.mode === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.04)' }
                 }}
               >
                 {resolvedTheme === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
               </IconButton>
            )}
            <Button
              variant="contained"
              color="secondary"
              startIcon={<WhatsAppIcon />}
              href="https://wa.me/919876543210?text=Hello%20Vihan%20tours%20%26%20travels!%20I%20would%20like%20to%20inquire%20about%20a%20car%20rental%20in%20Goa."
              target="_blank"
              sx={{ display: { xs: 'none', sm: 'flex' }, fontWeight: 'bold' }}
            >
              Book Now
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
