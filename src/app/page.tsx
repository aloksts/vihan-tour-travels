"use client";
import { Box, Container, Typography, useTheme } from '@mui/material';
import BookingForm from '@/components/BookingForm';
import FAQ from '@/components/FAQ';
import WhyChooseUs from '@/components/WhyChooseUs';
import AboutUs from '@/components/AboutUs';
import Fleet from '@/components/Fleet';

export default function Home() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

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
        <div className={`absolute inset-0 bg-gradient-to-r ${isDark ? 'from-slate-950 via-slate-900/95 to-slate-900/30' : 'from-slate-50 via-slate-100/95 to-slate-100/30'}`}></div>

        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 10 }}>
          <Box display="grid" gridTemplateColumns={{ xs: '1fr', lg: '1fr 400px' }} gap={{ xs: 6, lg: 12 }} alignItems="center">
            {/* Hero Text */}
            <Box>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '3rem', md: '4.5rem', lg: '5.5rem' },
                  fontWeight: 900,
                  color: 'text.primary',
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
                  color: 'text.secondary',
                  fontWeight: 400,
                  maxWidth: 'xl',
                  mb: 5,
                  lineHeight: 1.7,
                }}
              >
                Premium car rental services in Goa. From Dabolim Airport to your breathtaking destination, our comfortable fleet ensures a memorable journey.
              </Typography>
              
              <Box className="flex flex-wrap gap-4">
                <Box className="glass p-5 rounded-2xl flex-1 min-w-[140px]">
                  <Typography variant="h5" color="text.primary" fontWeight="800">24/7</Typography>
                  <Typography variant="body2" color="text.secondary" fontWeight="500">Customer Support</Typography>
                </Box>
                <Box className="glass p-5 rounded-2xl flex-1 min-w-[140px]">
                  <Typography variant="h5" color="text.primary" fontWeight="800">50+</Typography>
                  <Typography variant="body2" color="text.secondary" fontWeight="500">Premium Cars</Typography>
                </Box>
                <Box className="glass p-5 rounded-2xl flex-1 min-w-[140px]">
                  <Typography variant="h5" color="text.primary" fontWeight="800">100%</Typography>
                  <Typography variant="body2" color="text.secondary" fontWeight="500">Satisfaction</Typography>
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
      <Fleet />
      {/* About Us Section */}
      <AboutUs />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* FAQ Section */}
      <FAQ />
    </>
  );
}
