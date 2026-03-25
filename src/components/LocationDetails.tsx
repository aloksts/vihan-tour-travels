'use client';

import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import SectionHeader from '@/components/SectionHeader';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import DirectionsIcon from '@mui/icons-material/Directions';
import dynamic from 'next/dynamic';
import { Location } from '@/data/locations';

const Fleet = dynamic(() => import('@/components/Fleet'), { ssr: false });

interface LocationDetailsProps {
  location: Location;
}

const LocationDetails = ({ location }: LocationDetailsProps) => {
  const whatsappLink = `https://wa.me/919765460182?text=Hello%20Vihan%20Rentals!%20I%20want%20to%20book%20a%20car%20for%20pickup%20at%20${location.shortName}.`;

  return (
    <Box sx={{ bgcolor: 'background.default' }}>
      <Box sx={{ bgcolor: 'primary.main', color: 'primary.contrastText', py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', md: '4rem' }, fontWeight: 900, mb: 3 }}>
            Rent a Car at {location.shortName}
          </Typography>
          <Typography variant="h5" sx={{ opacity: 0.9, maxWidth: '800px', mb: 4, lineHeight: 1.6 }}>
            {location.description}
          </Typography>
          <div className="flex flex-wrap gap-4">
            <Button
              variant="contained"
              color="secondary"
              size="large"
              startIcon={<WhatsAppIcon />}
              href={whatsappLink}
              target="_blank"
              sx={{ py: 1.5, px: 4, fontWeight: 'bold' }}
            >
              Check Availability
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              size="large"
              startIcon={<DirectionsIcon />}
              sx={{ py: 1.5, px: 4, fontWeight: 'bold' }}
            >
              Get Directions
            </Button>
          </div>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 10 }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Typography variant="h3" fontWeight={800} mb={3}>Why Choose {location.shortName} Delivery?</Typography>
            <Typography variant="body1" color="text.secondary" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              Vihan Rentals offers the most convenient vehicle handover at {location.name}. Our team ensures your car is cleaned, fueled, and ready for you the moment you arrive.
            </Typography>
            <ul className="space-y-4 mt-6">
              {[
                '24/7 Airport Delivery & Pickup',
                'Transparent Pricing - No Hidden Charges',
                'Minimal Documentation Process',
                'Clean & Sanitized Vehicles',
                '24/7 Roadside Assistance'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary-500" />
                  <Typography variant="body1" fontWeight={500}>{item}</Typography>
                </li>
              ))}
            </ul>
          </div>
          <Box sx={{ p: 4, bgcolor: 'background.paper', borderRadius: 4, border: '1px solid', borderColor: 'divider' }}>
            <Typography variant="h5" fontWeight={700} mb={3}>Our Service Center</Typography>
            <Typography variant="body1" color="text.primary" fontWeight={600}>{location.name}</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>{location.fullAddress}</Typography>
            <Divider sx={{ my: 3 }} />
            <Typography variant="body2" color="text.secondary">
              Open 24 Hours for Airport Pickups.<br />
              Contact: +91 9765460182
            </Typography>
          </Box>
        </div>
      </Container>

      <Box sx={{ py: 10, bgcolor: 'rgba(0,0,0,0.02)' }}>
        <Container maxWidth="lg">
          <SectionHeader 
            title="Available Fleet" 
            subtitle={`Choose your ride for ${location.shortName}`} 
            center 
          />
          <Fleet />
        </Container>
      </Box>
    </Box>
  );
};

export default LocationDetails;
