import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Box, Text} from '@chakra-ui/react';
import 'swiper/swiper.min.css';

const images = [
  '/projects/bathroom/BathroomOne.png',
  '/projects/bathroom/BathroomTwo.png',
  '/projects/general/HomeOne.png',
  '/projects/general/HomeTwo.png',
  '/projects/outdoor/OutdoorOne.png',
  '/projects/general/Flooring.png',
  '/projects/outdoor/OutdoorTwo.png',
];

const SwiperComponent = () => {
  return (
    <>
    <Box mb={['50px']} id='projects'>
   <Text as='h3'>Our Work</Text>
   <Text as='h1' color='white' data-aos='fade-left'>Featured Projects</Text>
   </Box>
    <Swiper
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay
      loop
      breakpoints={{
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
    >
      {images.map((imageUrl, index) => (
        <SwiperSlide key={index}>
          <div style={{ width: '100%', height: '0', paddingBottom: '75%', position: 'relative' }}>
            <img
              src={imageUrl}
              alt={`Slide ${index + 1}`}
              style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    </>
  );
};

export default SwiperComponent;
