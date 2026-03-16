"use client";
import React from 'react';
import { Box, Container, Typography, Button, useTheme } from '@mui/material';
import Image from 'next/image';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const AboutUs = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  const highlights = [
    "Premium & Well-Maintained Fleet",
    "24/7 Dedicated Customer Support",
    "Transparent Pricing, No Hidden Costs",
    "Easy Airport & Railway Pickups"
  ];

  return (
    <Box component="section" id="about-us" sx={{ py: { xs: 8, md: 16 }, bgcolor: 'background.paper', position: 'relative', overflow: 'hidden' }}>
      {/* Background elements for visual interest */}
      <Box sx={{
        position: 'absolute',
        top: '10%',
        left: '-5%',
        width: '300px',
        height: '300px',
        bgcolor: 'primary.main',
        opacity: isDark ? 0.05 : 0.03,
        borderRadius: '50%',
        filter: 'blur(80px)',
        zIndex: 0
      }} />
      <Box sx={{
        position: 'absolute',
        bottom: '10%',
        right: '-5%',
        width: '400px',
        height: '400px',
        bgcolor: 'secondary.main',
        opacity: isDark ? 0.05 : 0.03,
        borderRadius: '50%',
        filter: 'blur(100px)',
        zIndex: 0
      }} />

      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <Box display="grid" gridTemplateColumns={{ xs: '1fr', lg: '1fr 1fr' }} gap={{ xs: 8, md: 12 }} alignItems="center">
          
          {/* Image Section */}
          <Box sx={{ position: 'relative', height: { xs: '400px', md: '600px' }, width: '100%', borderRadius: 6, overflow: 'hidden', boxShadow: isDark ? '0 20px 40px rgba(0,0,0,0.4)' : '0 20px 40px rgba(0,0,0,0.1)' }}>
            <Image 
              src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="About Vihan Tour and Travels - Premium Car Rental Goa" 
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 1200px) 100vw, 50vw"
            />
            {/* Experience Badge overlay */}
            <Box sx={{
              position: 'absolute',
              bottom: 30,
              left: 30,
              bgcolor: 'background.paper',
              p: 3,
              borderRadius: 4,
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              backdropFilter: 'blur(10px)',
              background: isDark ? 'rgba(15, 23, 42, 0.8)' : 'rgba(255, 255, 255, 0.9)'
            }}>
              <Typography variant="h3" color="primary.main" fontWeight={900}>10+</Typography>
              <Box>
                <Typography variant="body2" fontWeight={700} color="text.primary">Years of</Typography>
                <Typography variant="body2" color="text.secondary">Experience</Typography>
              </Box>
            </Box>
          </Box>

          {/* Content Section */}
          <Box>
            <Typography variant="subtitle1" color="primary.main" fontWeight={800} letterSpacing={1.5} textTransform="uppercase" mb={2}>
              About Our Company
            </Typography>
            <Typography variant="h2" color="text.primary" fontWeight={800} mb={3} sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' }, lineHeight: 1.1 }}>
              Your Trusted Travel Partner in <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">Goa</span>
            </Typography>
            
            <Typography variant="body1" color="text.secondary" mb={4} sx={{ fontSize: '1.125rem', lineHeight: 1.8 }}>
              At <strong>Vihan Tour and Travels</strong>, we believe that the journey is just as important as the destination. We are a premier car rental service provider based in Goa, dedicated to offering top-notch mobility solutions to tourists and locals alike.
            </Typography>
            <Typography variant="body1" color="text.secondary" mb={5} sx={{ fontSize: '1.125rem', lineHeight: 1.8 }}>
              Whether you are landing at Dabolim Airport or arriving by train, our pristine fleet of modern vehicles ensures that you can explore the beautiful beaches and vibrant culture of Goa in unmatched comfort and style.
            </Typography>

            <Box display="grid" gridTemplateColumns={{ xs: '1fr', sm: '1fr 1fr' }} gap={3} mb={6}>
              {highlights.map((highlight, index) => (
                <Box key={index} display="flex" alignItems="center" gap={2}>
                  <CheckCircleOutlineIcon color="primary" />
                  <Typography variant="body1" fontWeight={600} color="text.primary">{highlight}</Typography>
                </Box>
              ))}
            </Box>

            <Button 
              variant="contained" 
              color="primary" 
              size="large"
              href="#fleet"
              sx={{ 
                py: 2, 
                px: 5, 
                borderRadius: 2, 
                fontWeight: 'bold', 
                fontSize: '1.1rem',
                boxShadow: '0 8px 24px rgba(14, 165, 233, 0.3)',
                '&:hover': {
                  boxShadow: '0 12px 32px rgba(14, 165, 233, 0.4)',
                  transform: 'translateY(-2px)'
                },
                transition: 'all 0.3s'
              }}
            >
              Explore Our Fleet
            </Button>
          </Box>
          
        </Box>
      </Container>
    </Box>
  );
};

export default AboutUs;
