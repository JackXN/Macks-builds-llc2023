"use client";
import React from 'react';
import {Box,Container,Text} from '@chakra-ui/react';


const HomeProjects = () => {
  return (
<Container mt={['150px']}>
    <Box sx={styles.textContainer}>
<Text as='h3'>Our Projects</Text>
<Text as='h1'>Featured Projects</Text>

    </Box>
</Container>
  )
}



const styles = {
    textContainer: {
        position: 'relative',
        bottom: ['50px'],
        textAlign: 'center',
    }
}

export default HomeProjects
