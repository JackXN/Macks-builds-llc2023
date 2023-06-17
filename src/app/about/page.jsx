"use client";
import React from 'react';
import {Container, Box,Text, Image,Flex} from '@chakra-ui/react';
import Nav from '../../components/containers/Navbar/nav';
import Contact from '../../components/Contact';
import data from './data';
import Features from './Features';
import Footer from '../../components/Footer';

import Head from 'next/head';

const page = () => {


const titlesToDisplay=[1,2];

  return (
    <>
    <Head>
        <title>About Us - Macks Builds LLC.</title>
    </Head>
    <Nav/>
    <Container sx={styles.container}>
        <Box sx={styles.hero}>
        <Text as='h1' fontSize='50px'>About Us</Text>
        <Text as='p' mt='50px'>
        {data[0].description}
        </Text>
        <Image src='/FinalLogo.png' height='300px' width='300px'/>
        </Box>

    </Container>

    <Box bg='#242632' width='100%' height={['100vh', '100vh', '100vh', '100vh', '75vh']}>
        <Box display='flex' sx={styles.aboutContainer} data-aos='fade-left'>
        {titlesToDisplay.map((index) => (
            <Box key={index} sx={styles.aboutBox}>
        <Text as='h1' key={index}>{data[index].title}</Text>
        <Text as='p'>{data[index].description}</Text>
    </Box>
      ))}
        </Box>
    </Box>
    <Flex direction={['column', 'column' ,'column',]} justifyContent='center' alignItems='center'>
<Box flex='3' display='flex' alignItems='center' justifyContent='center' textAlign='center'>
        <Text as='h1' fontSize={['35px','35px','35px','70px']} mt='50px' mb='50px' data-aos='fade-left'>Why <br/> Choose Us?</Text>
        </Box>
        <Image src='/wireframeHouse.png' data-aos='fade-right' height='50%' width='50%' alt='wireframe photo' />
    </Flex>
    <Features/>
<Contact data-aos='fade-up'/>

<Footer/>

    </>
  )
}


const styles = {
    container: {
     
    },
    hero: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    aboutBox: {
        margin: '60px 0px 0px 0px',
        textAlign: 'center',
        boxShadow: ['lg', 'lg', 'lg', 'xl'],
        color: 'white',
        maxW: '450px'

    },
    aboutContainer: {
        display: 'flex',
        flexDirection: ['column','column','column','column','row'],
        justifyContent: 'space-evenly',
        alignItems: 'center',
        textAlign: 'center'
    }
}

export default page
