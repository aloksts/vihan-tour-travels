"use client";
import { Box, Container, Typography } from '@mui/material';
import BookingForm from '@/components/BookingForm';

export default function Home() {
  return (
    <>
      <Box
        component="section"
        sx={{
          position: 'relative',
          minHeight: '80vh',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          pt: { xs: 8, md: 0 },
        }}
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542385151-efd9000785a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20 MixBlendMode-luminosity"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>

        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 10 }}>
          <Box display="grid" gridTemplateColumns={{ xs: '1fr', lg: '1fr 400px' }} gap={8} alignItems="center">
            {/* Hero Text */}
            <Box>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '3rem', md: '5rem' },
                  fontWeight: 900,
                  color: 'white',
                  lineHeight: 1.1,
                  mb: 2,
                }}
              >
                Explore Goa with <br />
                <Typography component="span" sx={{ color: 'primary.400', fontSize: 'inherit', fontWeight: 'inherit' }}>
                  Vihan Travels
                </Typography>
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '1.25rem', md: '1.5rem' },
                  color: 'grey.300',
                  fontWeight: 400,
                  maxWidth: 'xl',
                  mb: 4,
                  lineHeight: 1.6,
                }}
              >
                Premium car rental services in Goa. From Dabolim Airport to your breathtaking destination, our comfortable fleet ensures a memorable journey.
              </Typography>
              <Box className="flex gap-4">
                <Box className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/50 backdrop-blur-md">
                  <Typography variant="h6" color="white" fontWeight="bold">24/7</Typography>
                  <Typography variant="body2" color="grey.400">Customer Support</Typography>
                </Box>
                <Box className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/50 backdrop-blur-md">
                  <Typography variant="h6" color="white" fontWeight="bold">50+</Typography>
                  <Typography variant="body2" color="grey.400">Premium Cars</Typography>
                </Box>
              </Box>
            </Box>

            {/* Booking Form */}
            <Box>
              <BookingForm />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Additional Features Section (placeholder) */}
      <Container maxWidth="xl" sx={{ py: { xs: 8, md: 12 } }}>
        <Typography variant="h3" align="center" color="white" fontWeight={800} mb={6}>
          Our Popular Fleet
        </Typography>
        <Box display="grid" gridTemplateColumns={{ xs: '1fr', sm: '1fr 1fr', md: 'repeat(4, 1fr)' }} gap={4}>
          {[
            { name: 'Swift', type: 'Hatchback', img: '🚗' },
            { name: 'Dzire', type: 'Sedan', img: '🚙' },
            { name: 'Innova', type: 'SUV', img: '🚐' },
            { name: 'Mercedes', type: 'Luxury', img: '🏎️' }
          ].map((car) => (
            <Box key={car.name} className="glass-card" sx={{ p: 4, textAlign: 'center', transition: 'transform 0.3s', '&:hover': { transform: 'translateY(-10px)' } }}>
              <Typography variant="h1" mb={2}>{car.img}</Typography>
              <Typography variant="h6" color="white" fontWeight="bold">{car.name}</Typography>
              <Typography variant="body2" color="primary.main">{car.type}</Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </>
  );
}
