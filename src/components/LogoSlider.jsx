import React from 'react';
import Slider from 'react-slick';
import { Box } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const logos = [
  { id: 1, src: './o1.png', alt: 'Logo 1' },
  { id: 2, src: './o2.png', alt: 'Logo 2' },
  { id: 3, src: './o3.png', alt: 'Logo 3' },
  { id: 4, src: './o4.png', alt: 'Logo 4' },
  { id: 5, src: './o5.png', alt: 'Logo 5' },
  { id: 6, src: './o6.jpeg', alt: 'Logo 5' },

];

const LogoSlider = () => {
  const settings = {
    dots: false, // No dots under the slider
    infinite: true, // Infinite scrolling
    speed: 900, // Transition speed
    slidesToShow: 5, // Number of logos shown at once
    slidesToScroll: 1, // Number of logos to scroll at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 0, // Speed of auto slide (3 seconds)
    responsive: [
      {
        breakpoint: 1024, // Screen width below 1024px
        settings: {
          slidesToShow: 3, // Show 3 slides
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // Screen width below 600px
        settings: {
          slidesToShow: 2, // Show 2 slides
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Screen width below 480px
        settings: {
          slidesToShow: 1, // Show 1 slide
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box sx={{ width: '100%', overflow: 'hidden', backgroundColor: 'transparent', padding: '40px 0' }}>
      <Slider {...settings}>
        {logos.map((logo) => (
          <Box key={logo.id} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img
              src={logo.src}
              alt={logo.alt}
              style={{ width: '150px', height: 'auto', objectFit: 'contain', padding: '10px' }}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default LogoSlider;
