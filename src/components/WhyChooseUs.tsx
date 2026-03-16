"use client";
import React from 'react';
import { Box, Container, Typography, useTheme } from '@mui/material';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const features = [
  {
    icon: <DirectionsCarFilledIcon fontSize="large" />,
    title: "Premium Fleet",
    description: "Choose from our wide range of well-maintained, comfortable, and sanitized vehicles for your perfect Goan getaway."
  },
  {
    icon: <CurrencyRupeeIcon fontSize="large" />,
    title: "Best Prices",
    description: "We offer the most competitive rates in Goa with zero hidden charges. You get exactly what you pay for."
  },
  {
    icon: <SupportAgentIcon fontSize="large" />,
    title: "24/7 Support",
    description: "Our dedicated team is available round the clock to ensure your journey is seamless and stress-free."
  },
  {
    icon: <LocationOnIcon fontSize="large" />,
    title: "Easy Pickup & Drop",
    description: "Conveniently get your car delivered and picked up from Dabolim Airport, Mopa Airport, or major railway stations."
  }
];

const WhyChooseUs = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box component="section" id="why-choose-us" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h3" color="text.primary" fontWeight={800} mb={2}>
            Why Choose Us?
          </Typography>
          <Typography variant="h6" color="text.secondary" fontWeight={400} maxWidth="md" mx="auto">
            Experience the best car rental service in Goa. We are committed to making your trip unforgettable with our premium services.
          </Typography>
        </Box>

        <Box display="grid" gridTemplateColumns={{ xs: '1fr', sm: '1fr 1fr', md: 'repeat(4, 1fr)' }} gap={4}>
          {features.map((feature, index) => (
            <Box key={index}>
              <Box 
                sx={{ 
                  p: 4, 
                  height: '100%',
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  textAlign: 'center',
                  bgcolor: isDark ? 'rgba(255,255,255,0.02)' : '#ffffff',
                  borderRadius: 4,
                  border: '1px solid',
                  borderColor: 'divider',
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: isDark ? '0 12px 24px rgba(0,0,0,0.5)' : '0 12px 24px rgba(0,0,0,0.06)',
                    borderColor: 'primary.main',
                  }
                }}
              >
                <Box 
                  sx={{ 
                    mb: 3, 
                    p: 2, 
                    borderRadius: '50%', 
                    bgcolor: 'primary.main', 
                    color: 'primary.contrastText',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 8px 16px rgba(14, 165, 233, 0.25)'
                  }}
                >
                  {feature.icon}
                </Box>
                <Typography variant="h5" fontWeight={700} color="text.primary" mb={2}>
                  {feature.title}
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ flexGrow: 1, lineHeight: 1.7 }}>
                  {feature.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default WhyChooseUs;
