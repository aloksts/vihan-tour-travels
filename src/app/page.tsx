"use client";
import { Box, Container, Typography, Dialog, IconButton, useTheme } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import BookingForm from '@/components/BookingForm';
import FAQ from '@/components/FAQ';
import WhyChooseUs from '@/components/WhyChooseUs';
import AboutUs from '@/components/AboutUs';
import Fleet from '@/components/Fleet';
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
        {/* Background Overlay */}
        <Box sx={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image
            src="https://images.unsplash.com/photo-1542385151-efd9000785a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Premium Car Rental Goa - Vihan Tour and Travels"
            fill
            priority
            className="object-cover opacity-30 mix-blend-luminosity"
          />
        </Box>
        <div className={`absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/95 to-slate-900/30`}></div>

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
                <Box className="glass p-5 rounded-2xl flex-1 min-w-[140px] bg-slate-900/50">
                  <Typography variant="h5" color="#f8fafc" fontWeight="800">24/7</Typography>
                  <Typography variant="body2" color="#94a3b8" fontWeight="500">Customer Support</Typography>
                </Box>
                <Box className="glass p-5 rounded-2xl flex-1 min-w-[140px] bg-slate-900/50">
                  <Typography variant="h5" color="#f8fafc" fontWeight="800">50+</Typography>
                  <Typography variant="body2" color="#94a3b8" fontWeight="500">Premium Cars</Typography>
                </Box>
                <Box className="glass p-5 rounded-2xl flex-1 min-w-[140px] bg-slate-900/50">
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

      {/* Location Section */}
      <Box sx={{ bgcolor: isDark ? 'rgba(2, 6, 23, 0.6)' : 'rgba(255, 255, 255, 0.6)', py: { xs: 8, md: 12 }, borderTop: '1px solid', borderColor: 'divider' }}>
        <Container maxWidth="xl">
          <Box display="grid" gridTemplateColumns={{ xs: '1fr', lg: '1fr 1fr' }} gap={8} alignItems="center">
            <Box>
              <Typography variant="h3" color="text.primary" fontWeight={800} mb={3}>
                Premium Fleet, Prime Location
              </Typography>
              <Typography variant="h6" color="text.secondary" fontWeight={400} mb={4} lineHeight={1.8}>
                Located conveniently near Dabolim Airport, our premium car rental service is easily accessible. Pick up your luxury ride right after you land and start your Goan adventure in style.
              </Typography>
              <Box className="glass p-6 rounded-2xl border-l-4 border-l-primary-500">
                <Typography variant="h6" color="text.primary" fontWeight="700" mb={1}>Head Office</Typography>
                <Typography variant="body1" color="text.secondary">Dabolim Airport Road, Vasco da Gama, Goa, India 403801</Typography>
              </Box>
            </Box>
            <Box sx={{ height: 450, borderRadius: 4, overflow: 'hidden', boxShadow: isDark ? '0 20px 40px -10px rgba(0,0,0,0.5)' : '0 20px 40px -10px rgba(0,0,0,0.1)' }}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15392.54483737!2d73.8322623!3d15.385312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfb643d9b5e5fb%3A0xe7582eb7bc36df2!2sDabolim%2C%20Goa!5e0!3m2!1sen!2sin!4v1716912345678!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Box>
          </Box>
        </Container>
      </Box>

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
