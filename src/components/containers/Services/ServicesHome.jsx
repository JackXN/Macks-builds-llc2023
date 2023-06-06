import React from 'react';
import { Box, Text, Container,Spacer } from '@chakra-ui/react';
import data from './data';
import { ScrollAnimationWrapper } from 'react-scroll-animation';

const ServicesHome = () => {
  return (
   
    <Container height='100%' background='white' display='flex' justifyContent='center' alignItems='center' flexDirection='column'>
      <Box sx={styles.title}>
        <Text as='h3'>Our Advantage</Text>
        <Text as='h1'>Providing The Best Service <br/> For All Home Projects</Text>
      </Box>

      <Box sx={styles.serviceContainer}>

        {data.map((item, index) => (
        
          <Box key={index} sx={styles.serviceBox} className={`animate__animated animate__${item.animation}`}>
            <Box fontSize='30px' sx={styles.iconContainer}>
             <i style={{color: 'orange'}}>{item.icon}</i>
            </Box>
<Box sx={styles.serviceInfo}>
            <Text as='h2'>{item.title}</Text>
            <Text as='p'>{item.description}</Text>
</Box>
          </Box>
    
        ))}
       
      </Box>
    
    </Container>

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
      fontWeight:'black'
    }
  },

  serviceContainer: {
    mt: ['100px'],
    display: 'flex',
    flexDirection: ['column'],
  },
  serviceBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '30px 30px'
  },
  serviceInfo: {
    textAlign: 'center',

    h2: {
       fontSize: '23px',
       fontFamily: 'Lato',
       fontWeight: 'black',
       mt: ['25px'],
       mb: ['10px']
    },


  },
  iconContainer: {
    background: 'rgba(217, 192, 91, 0.38)',
    borderRadius: '50%',
    padding: '13px'
  }
};

export default ServicesHome;
