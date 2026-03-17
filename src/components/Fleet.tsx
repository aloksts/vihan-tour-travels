"use client";
import React from 'react';
import { Box, Container, Typography, Button, useTheme } from '@mui/material';
import Image from 'next/image';
import AirlineSeatReclineNormalIcon from '@mui/icons-material/AirlineSeatReclineNormal';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import LuggageIcon from '@mui/icons-material/Luggage';

const carsData = [
  { name: 'Baleno', type: 'MT / AT', img: '/cars/baleno.png', seats: 5, luggage: 2, fuel: 'Petrol' },
  { name: 'Ertiga', type: 'MT / AT', img: '/cars/ertiga.png', seats: 7, luggage: 3, fuel: 'Petrol / CNG' },
  { name: 'Thar', type: 'MT / AT', img: '/cars/thar.png', seats: 4, luggage: 2, fuel: 'Diesel' },
  { name: 'Swift', type: 'MT / AT', img: '/cars/swift.png', seats: 5, luggage: 2, fuel: 'Petrol' },
  { name: 'Fortuner', type: 'MT / AT', img: '/cars/fortuner.png', seats: 7, luggage: 4, fuel: 'Diesel' }
];

interface FleetProps {
  onBookNow?: (carType: string) => void;
}

const Fleet = ({ onBookNow }: FleetProps) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box component="section" id="fleet" sx={{ bgcolor: 'background.default', py: { xs: 10, md: 16 } }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h3" color="text.primary" fontWeight={800} mb={2}>
            Our Premium Fleet
          </Typography>
          <Typography variant="h6" color="text.secondary" fontWeight={400} maxWidth="md" mx="auto">
            Choose from our wide range of well-maintained, comfortable vehicles for the perfect Goan getaway.
          </Typography>
        </Box>
        
        <Box display="grid" gridTemplateColumns={{ xs: '1fr', sm: '1fr 1fr', md: 'repeat(3, 1fr)' }} gap={4}>
          {carsData.map((car) => (
            <Box key={car.name} className="glass-card flex flex-col overflow-hidden group">
              <Box sx={{ height: 260, width: '100%', position: 'relative', overflow: 'hidden', bgcolor: isDark ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)' }}>
                <Image 
                  src={car.img} 
                  alt={`${car.name} - Premium Car Rental in Goa by Vihan Tours & Travels`} 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                <Box className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Box>
              <Box sx={{ p: 4, flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', bgcolor: 'background.paper', borderTop: '1px solid', borderColor: 'divider' }}>
                <Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                    <Typography variant="h5" color="text.primary" fontWeight="800">{car.name}</Typography>
                    <Box sx={{ px: 2, py: 0.5, bgcolor: 'primary.main', color: 'primary.contrastText', borderRadius: 4 }}>
                       <Typography variant="body2" fontWeight="700">{car.type}</Typography>
                    </Box>
                  </Box>
                  
                  {/* Enhanced vehicle details */}
                  <Box display="grid" gridTemplateColumns="1fr 1fr" gap={2} sx={{ mt: 3, mb: 4 }}>
                    <Box display="flex" alignItems="center" gap={1}>
                      <AirlineSeatReclineNormalIcon color="action" fontSize="small" />
                      <Typography variant="body2" color="text.secondary" fontWeight={500}>{car.seats} Seats</Typography>
                    </Box>
                    <Box display="flex" alignItems="center" gap={1}>
                      <LuggageIcon color="action" fontSize="small" />
                      <Typography variant="body2" color="text.secondary" fontWeight={500}>{car.luggage} Bags</Typography>
                    </Box>
                    <Box display="flex" alignItems="center" gap={1}>
                      <LocalGasStationIcon color="action" fontSize="small" />
                      <Typography variant="body2" color="text.secondary" fontWeight={500}>{car.fuel}</Typography>
                    </Box>
                  </Box>

                </Box>
                <Button 
                  variant="contained" 
                  color="primary" 
                  fullWidth 
                  size="large"
                  onClick={() => onBookNow && onBookNow(car.name + ' ' + car.type)}
                  sx={{ fontWeight: 'bold', py: 1.5, boxShadow: '0 4px 14px 0 rgba(14, 165, 233, 0.39)', '&:hover': { boxShadow: '0 6px 20px rgba(14, 165, 233, 0.23)' } }}
                >
                  Book Now
                </Button>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Fleet;
