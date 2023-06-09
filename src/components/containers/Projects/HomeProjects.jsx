import React from 'react';
import { Box, Container, Text, Image, Flex } from '@chakra-ui/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import data from './data';
import 'swiper/css';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const ResponsiveSwiper = () => {
  return (
    <Box mt={['150px']}>
      <Box sx={styles.textContainer}>
        <Text as='h3'>Our Projects</Text>
        <Text as='h1' color='white'>Featured Projects</Text>
        <Swiper
          slidesPerView={2}
          spaceBetween={5}
          navigation
          pagination={{ clickable: true }}
          autoplay
          loop
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <Box sx={styles.projectBox}>
                <Box sx={styles.imageContainer(item.images[0])} />
   
                  {/* <Text as='p'>{item.category}</Text> */}
                  {/* <Text as='h1'>{item.title}</Text> */}
                  {/* <Text as='p'>{item.date}</Text> */}
                
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
};

const styles = {
  textContainer: {
    position: 'relative',
    bottom: ['50px'],
    textAlign: 'center',
  },
  projectBox: {
    background: 'white',
    margin: '30px',
    textAlign: 'left',
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '400px',
    width: '300px',
  },
  infoContainer: {
    padding: '30px',
  },
  imageContainer: (image) => ({
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '200%',
    width: '200%',
  }),
};

export default ResponsiveSwiper;