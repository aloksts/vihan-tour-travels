"use client";
import { Box, Container, Typography, Dialog, IconButton, useTheme } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import BookingForm from '@/components/BookingForm';
import FAQ from '@/components/FAQ';
import WhyChooseUs from '@/components/WhyChooseUs';
import AboutUs from '@/components/AboutUs';
import dynamic from 'next/dynamic';

const Fleet = dynamic(() => import('@/components/Fleet'), { ssr: false });
import Image from 'next/image';


export default function Home() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState('Baleno MT');

  const handleOpenBooking = (carType: string) => {
    setSelectedCar(carType);
    setBookingModalOpen(true);
  };

  return (
    <>
      <Box
        component="section"
        id="home"
        sx={{
          position: 'relative',
          minHeight: '80vh',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          pt: { xs: 8, md: 0 },
          bgcolor: '#020617', // Force dark background for premium look
        }}
      >
        {/* Background Layer with Dark Gradient */}
        <Box 
          sx={{ 
            position: 'absolute', 
            inset: 0, 
            zIndex: 0,
            background: 'linear-gradient(to right, #020617 0%, rgba(2, 6, 23, 0.9) 30%, rgba(2, 6, 23, 0.4) 100%)',
          }}
        >
          <Image
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Luxury Car Rental Goa - Vihan Tour and Travels"
            fill
            priority
            className="object-cover opacity-40 mix-blend-overlay"
          />
        </Box>

        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 10 }}>
          <Box display="grid" gridTemplateColumns={{ xs: '1fr', lg: '1fr 400px' }} gap={{ xs: 6, lg: 12 }} alignItems="center">
            {/* Hero Text */}
            <Box>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '3rem', md: '4.5rem', lg: '5.5rem' },
                  fontWeight: 900,
                  color: '#f8fafc', // Force light text for readability on dark
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                  mb: 3,
                }}
              >
                Explore Goa with <br />
                <Typography component="span" sx={{ color: 'primary.main', fontSize: 'inherit', fontWeight: 'inherit' }}>
                  Vihan tours & travels
                </Typography>
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '1.125rem', md: '1.25rem' },
                  color: '#94a3b8', // Force slate-400 for secondary text
                  fontWeight: 400,
                  maxWidth: 'xl',
                  mb: 5,
                  lineHeight: 1.7,
                }}
              >
                Premium car rental services in Goa. From Dabolim Airport to your breathtaking destination, our comfortable fleet ensures a memorable journey.
              </Typography>
              
              <Box className="flex flex-wrap gap-4">
                <Box sx={{ p: 5, borderRadius: 4, flex: 1, minWidth: '140px', bgcolor: 'rgba(15, 23, 42, 0.6)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                  <Typography variant="h5" color="#f8fafc" fontWeight="800">24/7</Typography>
                  <Typography variant="body2" color="#94a3b8" fontWeight="500">Customer Support</Typography>
                </Box>
                <Box sx={{ p: 5, borderRadius: 4, flex: 1, minWidth: '140px', bgcolor: 'rgba(15, 23, 42, 0.6)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                  <Typography variant="h5" color="#f8fafc" fontWeight="800">50+</Typography>
                  <Typography variant="body2" color="#94a3b8" fontWeight="500">Premium Cars</Typography>
                </Box>
                <Box sx={{ p: 5, borderRadius: 4, flex: 1, minWidth: '140px', bgcolor: 'rgba(15, 23, 42, 0.6)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                  <Typography variant="h5" color="#f8fafc" fontWeight="800">100%</Typography>
                  <Typography variant="body2" color="#94a3b8" fontWeight="500">Satisfaction</Typography>
                </Box>
              </Box>
            </Box>

            {/* Booking Form */}
            <Box sx={{ position: 'relative' }}>
               <Box className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-3xl blur opacity-25" />
               <Box sx={{ position: 'relative' }}>
                 <BookingForm />
               </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Fleet Section */}
      <Fleet onBookNow={handleOpenBooking} />

      {/* About Us Section */}
      <AboutUs />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* FAQ Section */}
      <FAQ />



      {/* Booking Modal */}
      <Dialog 
        open={bookingModalOpen} 
        onClose={() => setBookingModalOpen(false)}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: { borderRadius: 4, bgcolor: 'transparent', backgroundImage: 'none', boxShadow: 'none' }
        }}
      >
        <Box sx={{ position: 'relative' }}>
          <IconButton 
            onClick={() => setBookingModalOpen(false)}
            sx={{ position: 'absolute', right: 20, top: 20, zIndex: 10, color: 'text.secondary', bgcolor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)', '&:hover': { bgcolor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)' } }}
          >
            <CloseIcon />
          </IconButton>
          <BookingForm initialCarType={selectedCar} onClose={() => setBookingModalOpen(false)} />
        </Box>
      </Dialog>
    </>
  );
}
