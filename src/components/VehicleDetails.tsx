'use client';

import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Image from 'next/image';
import AirlineSeatReclineNormalIcon from '@mui/icons-material/AirlineSeatReclineNormal';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import LuggageIcon from '@mui/icons-material/Luggage';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Car } from '@/data/fleet';

interface VehicleDetailsProps {
  car: Car;
}

const VehicleDetails = ({ car }: VehicleDetailsProps) => {
  const whatsappLink = `https://wa.me/919765460182?text=Hello%20Vihan%20Rentals!%20I%20am%20interested%20in%20booking%20the%20${car.name}%20(${car.type}).`;

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Left: Image */}
        <div className="md:col-span-7">
          <Box sx={{ position: 'relative', height: { xs: 250, md: 450 }, borderRadius: 6, overflow: 'hidden', bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider' }}>
            <Image
              src={car.img}
              alt={`${car.name} Rental Goa - Vihan Tours and Travels`}
              fill
              className="object-contain p-4"
              priority
            />
          </Box>
        </div>

        {/* Right: Details */}
        <div className="md:col-span-5">
          <Box>
            <Typography variant="overline" color="primary" fontWeight="bold" letterSpacing={1.2}>
              {car.type}
            </Typography>
            <Typography variant="h2" fontWeight={800} sx={{ mb: 2, fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
              {car.name}
            </Typography>
            
            <Typography variant="h4" color="text.primary" fontWeight={700} sx={{ mb: 4 }}>
              ₹{car.pricePerDay} <Typography component="span" variant="h6" color="text.secondary">/ day</Typography>
            </Typography>

            <div className="p-6 border border-slate-200 dark:border-slate-800 rounded-2xl mb-8 bg-transparent">
              <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col items-center">
                  <AirlineSeatReclineNormalIcon color="primary" />
                  <Typography variant="body2" fontWeight={600} mt={1}>{car.seats} Seats</Typography>
                </div>
                <div className="flex flex-col items-center">
                  <LuggageIcon color="primary" />
                  <Typography variant="body2" fontWeight={600} mt={1}>{car.luggage} Bags</Typography>
                </div>
                <div className="flex flex-col items-center">
                  <LocalGasStationIcon color="primary" />
                  <Typography variant="body2" fontWeight={600} mt={1}>{car.fuel}</Typography>
                </div>
              </div>
            </div>

            <Typography variant="body1" color="text.secondary" paragraph sx={{ lineHeight: 1.8, mb: 4 }}>
              {car.description}
            </Typography>

            <Box sx={{ mb: 6 }}>
              <Typography variant="h6" fontWeight={700} mb={2}>Key Features</Typography>
              <div className="flex flex-wrap gap-2">
                {car.features.map((feature, index) => (
                  <div key={index} className="px-3 py-1 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg">
                    <Typography variant="body2" fontWeight={500}>{feature}</Typography>
                  </div>
                ))}
              </div>
            </Box>

            <Button
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              startIcon={<WhatsAppIcon />}
              href={whatsappLink}
              target="_blank"
              sx={{ py: 2, fontWeight: 'bold', borderRadius: 3, fontSize: '1.2rem' }}
            >
              Book via WhatsApp
            </Button>
          </Box>
        </div>
      </div>
      
      <Box sx={{ mt: 10 }}>
        <Divider sx={{ mb: 6 }} />
        <Typography variant="h4" fontWeight={800} mb={4}>Why Rent {car.name} with us?</Typography>
        <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
          Vihan Rentals provides the best-in-class {car.name} hire in Goa. Whether you&apos;re arriving at Dabolim or Mopa, we ensure your vehicle is ready and waiting. Our {car.name} fleet is regularly serviced and comes with full insurance and 24/7 roadside assistance.
        </Typography>
      </Box>
    </Container>
  );
};

export default VehicleDetails;
