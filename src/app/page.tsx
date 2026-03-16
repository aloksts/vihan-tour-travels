"use client";
import { Box, Container, Typography, Button, useTheme } from '@mui/material';
import BookingForm from '@/components/BookingForm';

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
      <Box sx={{ bgcolor: 'background.default', py: { xs: 10, md: 16 } }}>
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
            {[
              { name: 'Baleno', type: 'MT / AT', img: '/cars/baleno.png' },
              { name: 'Ertiga', type: 'MT / AT', img: '/cars/ertiga.png' },
              { name: 'Thar', type: 'MT / AT', img: '/cars/thar.png' },
              { name: 'Swift', type: 'MT / AT', img: '/cars/swift.png' },
              { name: 'Fortuner', type: 'MT / AT', img: '/cars/fortuner.png' }
            ].map((car) => (
              <Box key={car.name} className="glass-card flex flex-col overflow-hidden group">
                <Box sx={{ height: 260, width: '100%', position: 'relative', overflow: 'hidden', bgcolor: isDark ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)' }}>
                  <img 
                    src={car.img} 
                    alt={car.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                  <Box className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Box>
                <Box sx={{ p: 4, flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', bgcolor: 'background.paper', borderTop: '1px solid', borderColor: 'divider' }}>
                  <Box>
                    <Typography variant="h5" color="text.primary" fontWeight="800" mb={1}>{car.name}</Typography>
                    <Box sx={{ display: 'inline-block', px: 2, py: 0.5, bgcolor: 'primary.main', color: 'primary.contrastText', borderRadius: 4, mb: 3 }}>
                       <Typography variant="body2" fontWeight="700">{car.type}</Typography>
                    </Box>
                  </Box>
                  <Button 
                    variant="contained" 
                    color="primary" 
                    fullWidth 
                    size="large"
                    href={`https://wa.me/919876543210?text=Hello%20Vihan%20tours%20%26%20travels!%20I%20am%20interested%20in%20booking%20the%20${car.name}%20(${car.type}).`} 
                    target="_blank"
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
    </>
  );
}
