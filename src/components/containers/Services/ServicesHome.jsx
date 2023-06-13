import React from 'react';
import { Box, Text, Container, Spacer } from '@chakra-ui/react';
import data from './data';
import { ScrollAnimationWrapper } from 'react-scroll-animation';

const ServicesHome = () => {
  return (
    <Box
      height='100%'
      background='white'
      display='flex'
      justifyContent='center'
      alignItems='center'
      flexDirection='column'
    >
      <Box sx={styles.title}>
        <Text as='h3'>Our Advantage</Text>
        <Text as='h1'>Providing The Best Service <br/> For All Home Projects</Text>
      </Box>

      <Box sx={styles.serviceContainer}>
        {data.map((item, index) => (
          <Box key={index} sx={styles.serviceBox} className={`animate__animated animate__${item.animation}`}>
            <Box fontSize='30px' sx={styles.iconContainer}>
              <i style={{ color: 'orange' }}>{item.icon}</i>
            </Box>
            <Box sx={styles.serviceInfo}>
              <Text as='h2'>{item.title}</Text>
              <Text as='p'>{item.description}</Text>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

const styles = {
  title: {
    textAlign: 'center',
    mt: ['150px'],
    h3: {
      color: 'orange',
    },
    h1: {
      fontSize: ['35px'],
      fontFamily: 'Lato',
      fontWeight: 'black',
    },
  },
  serviceContainer: {
    mt: ['100px'],
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center', // Added to horizontally center the boxes
    alignItems: 'stretch', // Added to make boxes have equal height
  },
  serviceBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '30px 30px',
    flex: '1 1 200px', // Added to make boxes take up equal width
  },
  serviceInfo: {
    textAlign: 'center',
    h2: {
      fontSize: '23px',
      fontFamily: 'Lato',
      fontWeight: 'black',
      mt: ['25px'],
      mb: ['10px'],
    },
  },
  iconContainer: {
    background: 'rgba(217, 192, 91, 0.38)',
    borderRadius: '50%',
    padding: '13px',
    color:'white',
  },
};

export default ServicesHome;
