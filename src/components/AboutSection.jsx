// src/components/AboutSection.jsx
import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const AboutSection = ({ heading, para }) => {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: 'primary.dark', // Equivalent to bg-blue-900
        color: 'common.white',
        py: { xs: 6, sm: 8, md: 6 }, // Responsive padding on Y-axis
        px: { xs: 2, sm: 4, md: 8 },  // Responsive padding on X-axis
        boxShadow: 3,                   // Equivalent to shadow-lg
        mx: 'auto',                     // Center horizontally
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            textAlign: { xs: 'center', sm: 'left' }, // Center on small screens, left-align on larger
            mx: 'auto',
          }}
        >
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontWeight: 'bold',
              mb: 3, // Equivalent to mb-4
              fontSize: {
                xs: '1.75rem', // text-3xl ~ 1.875rem
                sm: '2rem',
                md: '2.5rem',
              },
            }}
          >
            {heading}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              lineHeight: 1.6,         // Equivalent to leading-relaxed
              opacity: 0.9,            // Equivalent to opacity-90
              fontSize: {
                xs: '1rem',           // text-base ~ 1rem
                sm: '1.1rem',
                md: '1.25rem',
              },
            }}
          >
            {para}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutSection;
