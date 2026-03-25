import React from 'react';
import { Box, Typography } from '@mui/material';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

const SectionHeader = ({ title, subtitle, center = false, light = false }: SectionHeaderProps) => {
  return (
    <Box sx={{ mb: 6, textAlign: center ? 'center' : 'left' }}>
      <Typography
        variant="h3"
        color={light ? '#f8fafc' : 'text.primary'}
        fontWeight={800}
        sx={{
          fontSize: { xs: '2rem', md: '3rem' },
          mb: 2,
          position: 'relative',
          display: 'inline-block',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: -8,
            left: center ? '50%' : 0,
            transform: center ? 'translateX(-50%)' : 'none',
            width: '60px',
            height: '4px',
            bgcolor: 'primary.main',
            borderRadius: '2px',
          }
        }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography
          variant="h6"
          color={light ? '#94a3b8' : 'text.secondary'}
          fontWeight={400}
          sx={{ mt: 3, maxWidth: '800px', mx: center ? 'auto' : 0 }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
};

export default SectionHeader;
