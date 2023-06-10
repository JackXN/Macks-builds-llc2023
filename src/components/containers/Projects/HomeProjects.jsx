import React from 'react';
import { Box, Container, Text, Image } from '@chakra-ui/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import data from './data';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const SmoothScrollingSwiper = () => {
  return (
    <Box mt="150px">
      <Container maxW="container.lg">
        <Text as="h3" textAlign="center">
          Our Projects
        </Text>
        <Text as="h1" textAlign="center" color="white" mt="4">
          Featured Projects
        </Text>
        <Swiper
          spaceBetween={2}
          navigation
          pagination={{ clickable: true }}
          autoplay
          loop
          speed={500}
          grabCursor
          mousewheel
          breakpoints={{
            // When window width is <= 768px (mobile view)
            768: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            // When window width is > 768px (desktop view)
            1024: {
              slidesPerView: 2,
              spaceBetween: 2,
            },
          }}
          className="smooth-scrolling-swiper"
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <Box
                p="4"
                rounded="lg"
                textAlign="left"
                height="400px"
                width="300px"
                _hover={{ transform: 'translateY(-5px)', transition: 'transform 0.3s ease' }}
              >
                <Image src={item.images[0]} alt={item.title} objectFit="cover" height="100%" width="100%" />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
};

export default SmoothScrollingSwiper;
