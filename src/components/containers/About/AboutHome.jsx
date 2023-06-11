"use client";
import React from 'react'
import {Box, Text, Image, Button,Container} from '@chakra-ui/react';

import Sponsor from '../../Sponsor';







const AboutHome = () => {
  return (
    <Container height='100%' background='white' display='flex' justifyContent='center' alignItems='center' flexDirection='column' id='about'>
    <Box sx={styles.title}>
    <Text as='h3'>About Us</Text>
    <Text as='h1'>High Quality Construction Solutions & Reliable Contractors</Text>
    <Text as='p'>Embark on your next construction project with confidence! Discover a range of high-quality construction solutions and connect with reliable contractors who will bring your vision to life. Whether youre building a residential home, commercial space, or renovating an existing property, our trusted network of contractors ensures exceptional craftsmanship and timely delivery. Experience peace of mind knowing that our construction solutions and contractors prioritize quality, reliability, and customer satisfaction. Start your construction journey today and unlock the excellence your project deserves!</Text>
    <Box sx={styles.buttonContainer}> 
    <Button>Read More</Button>
    </Box>

    <Box>
        <Sponsor/>
    </Box>

    </Box>
   </Container>
  )
}



const styles = {
    title:{
        textAlign: 'center',
        mt: ['150px'],
    }
}

export default AboutHome
