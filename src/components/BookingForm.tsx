'use client';
import React, { useState } from 'react';
import { Box, TextField, Button, MenuItem, Typography, Autocomplete } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const locations = [
  'Goa Dabolim Airport',
  'Panjim',
  'Margao',
  'Calangute',
  'Baga',
  'Vasco da Gama',
  'Madgaon Railway Station'
];

const carTypes = [
  'Baleno MT',
  'Baleno AT',
  'Ertiga MT / AT',
  'Thar MT / AT',
  'Swift MT / AT',
  'Fortuner MT / AT'
];

const BookingForm = () => {
  const [pickup, setPickup] = useState('Goa Dabolim Airport');
  const [dropoff, setDropoff] = useState('');
  const [carType, setCarType] = useState('Baleno MT');
  const [date, setDate] = useState('');
  
  const handleBooking = () => {
    const message = `Hello Vihan tours & travels! I want to book a car.%0APickup: ${pickup}%0ADropoff: ${dropoff || 'Not specified'}%0ACar Type: ${carType}%0ADate: ${date}`;
    window.open(`https://wa.me/919876543210?text=${message}`, '_blank');
  };

  return (
    <Box className="glass-card" sx={{ p: 4 }}>
      <Typography variant="h5" sx={{ mb: 3, fontWeight: 700, color: 'white' }}>
        Book Your Ride
      </Typography>
      <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <Autocomplete
          options={locations}
          value={pickup}
          onChange={(e, newValue) => setPickup(newValue || '')}
          freeSolo
          renderInput={(params) => (
            <TextField {...params} label="Pickup Location *" variant="filled" fullWidth />
          )}
        />
        <Autocomplete
          options={locations}
          value={dropoff}
          onChange={(e, newValue) => setDropoff(newValue || '')}
          freeSolo
          renderInput={(params) => (
            <TextField {...params} label="Drop-off Location" variant="filled" fullWidth />
          )}
        />
        <TextField
          select
          label="Car Type"
          variant="filled"
          value={carType}
          onChange={(e) => setCarType(e.target.value)}
          fullWidth
        >
          {carTypes.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          type="date"
          label="Pickup Date"
          variant="filled"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          InputLabelProps={{ shrink: true }}
          fullWidth
        />
        <Button
          variant="contained"
          color="secondary"
          size="large"
          startIcon={<WhatsAppIcon />}
          onClick={handleBooking}
          sx={{ mt: 2, height: 56, fontWeight: 'bold' }}
        >
          Book via WhatsApp
        </Button>
      </Box>
    </Box>
  );
};

export default BookingForm;
