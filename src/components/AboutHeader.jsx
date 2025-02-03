// src/components/AboutHeader.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';

export default function AboutHeader({
  title = "Service",
  tagline = "Innovative Solutions for Your Online Presence",
  backgroundImage = "./heroimg.png", // Default background image
}) {
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: { xs: '40vh', sm: '50vh', md: '60vh', lg: '70vh' }, // Adjust height for responsiveness
        backgroundImage: `url(${backgroundImage})`, // Use the passed background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Overlay
          zIndex: 1,
        }}
      />
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center', // Center the text
          color: 'white',
          padding: { xs: 2, sm: 3, md: 4 }, // Adjust padding for responsiveness
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          fontWeight="bold"
          gutterBottom
          sx={{
            fontSize: { xs: '2rem', sm: '3rem', md: '4rem' }, // Adjust font size for responsiveness
          }}
        >
          {title} {/* Display title prop */}
        </Typography>
        <Typography
          variant="h6"
          color="white"
          sx={{
            fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' }, // Adjust font size for responsiveness
          }}
        >
          {tagline} {/* Optional tagline */}
        </Typography>
      </Box>
    </Box>
  );
}
