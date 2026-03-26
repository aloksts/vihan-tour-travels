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

interface BookingFormProps {
  initialCarType?: string;
  onClose?: () => void;
  isFixedCar?: boolean;
}

const BookingForm = ({ initialCarType = 'Baleno MT', onClose, isFixedCar = false }: BookingFormProps) => {
  const [pickup, setPickup] = useState('Goa Dabolim Airport');
  const [dropoff, setDropoff] = useState('');
  const [carType, setCarType] = useState(initialCarType);
  const [date, setDate] = useState('');
  
  const handleBooking = () => {
    const message = `Hello Vihan tours & travels! I want to book a car.%0APickup: ${pickup}%0ADropoff: ${dropoff || 'Not specified'}%0ACar Type: ${carType}%0ADate: ${date}`;
    window.open(`https://wa.me/919765460182?text=${message}`, '_blank');
    if (onClose) onClose();
  };

  return (
    <Box className="glass-card" sx={{ p: 4, bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider' }}>
      <Typography variant="h5" sx={{ mb: 3, fontWeight: 800, color: 'text.primary' }}>
        Book Your Ride
      </Typography>
      <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <Autocomplete
          options={locations}
          value={pickup}
          onChange={(e, newValue) => setPickup(newValue || '')}
          freeSolo
          renderInput={(params) => (
            <TextField {...params} label="Pickup Location *" variant="outlined" fullWidth />
          )}
        />
        <Autocomplete
          options={locations}
          value={dropoff}
          onChange={(e, newValue) => setDropoff(newValue || '')}
          freeSolo
          renderInput={(params) => (
            <TextField {...params} label="Drop-off Location" variant="outlined" fullWidth />
          )}
        />
        <TextField
          select
          disabled={isFixedCar}
          label="Car Type"
          variant="outlined"
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
          variant="outlined"
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
