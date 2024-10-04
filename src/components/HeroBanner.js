import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => (
  <Box
    sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }}
    position="relative"
    p="20px"
  >
    <Typography
      color="#3333FF"
      fontWeight="1000"
      fontSize="36px"
      fontFamily="Roboto"
    >
      FITTY
    </Typography>
    <Typography
      fontWeight={700}
      sx={{ fontSize: { lg: '44px', xs: '40px' } }}
      mb="23px"
      mt="30px"
    >
      Commit, Train
      <br />
      And Succeed
    </Typography>
    <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
      Check out the most effective exercises personalized to you
    </Typography>
    <Stack>
      <a
        href="#exercises"
        style={{
          marginTop: '45px',
          textDecoration: 'none',
          width: '200px',
          textAlign: 'center',
          background: '#3333FF',
          padding: '14px',
          fontSize: '22px',
          textTransform: 'none',
          color: 'white',
          borderRadius: '4px',
          transition: 'background 0.3s, color 0.3s smooth',
        }}
        onMouseEnter={(e) => {
          e.target.style.background = '#FFFAFB';
          e.target.style.color = '#3333FF';
          e.target.style.border = '3px solid #3333FF';
          e.target.style.transform = 'translateY(-3px)';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = '#3333FF';
          e.target.style.color = 'white';
          e.target.style.transform = 'translateY(3px)';
        }}
      >
        Explore Exercises
      </a>
    </Stack>
    <Typography
      fontWeight={600}
      color="#3333FF"
      sx={{
        opacity: '0.05',
        display: { lg: 'block', xs: 'none' },
        fontSize: '200px',
      }}
    >
      GRIND
    </Typography>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
  </Box>
);

export default HeroBanner;
