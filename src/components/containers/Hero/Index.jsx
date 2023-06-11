"use client";
import React from 'react';
import styles from './styles';
import {Box, Text,Container, Button, Flex} from '@chakra-ui/react';
import Counter from './Counter';
// import 'boxicons';
import MobileNav from '../Navbar/MobileNav';




const Index = () => {
  return (
  <Box
  height='100vh'

  backgroundImage='./HeroBgTwo.png'
  backgroundPosition='center'
  backgroundSize='cover'
  backgroundRepeat='no-repeat'
  backgroundAttachment='fixed'
  display='flex'
  flexDirection='column'
  justifyContent='center'
  alignItems='center'
  zIndex={1}
  >

    <Box sx={styles.textContainer}>
        <Text as='h1'>Transforming Spaces <br/> & Delivering Quality</Text>
        <Text as='h3'>Your Premier Contracting Solution</Text>
        <Box>
            <Text as='p'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolor non, dolorum sed corrupti deserunt eveniet rem? Voluptatum officia impedit, libero sed repudiandae error necessitatibus soluta ea ducimus quae delectus?
            </Text>
        </Box>
        <Box sx={styles.buttonContainer}>
            <Button
            bg='#D9C05B'
            color='white'
            >Our Services</Button>
            <Button
            color='#D9C05B'
            bg='none'            
            >Our Projects
            </Button>
        </Box>


        <Box>
            <Counter/>
        </Box>
    </Box>
    

  </Box>
  )
}

export default Index
