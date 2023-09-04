"use client";
import React from 'react';
import styles from './styles';
import {Box, Text,Container, Button, Flex} from '@chakra-ui/react';
import Counter from './Counter';
// import 'boxicons';
import MobileNav from '../Navbar/MobileNav';
import Buttons from './Buttons';
import DesktopImage from './DesktopImage';
import Phone from '../../phone';
import LicenseButton from './LicenseButton'

const Index = () => {
  return (
    <>
    <Box height='100%'  backgroundImage='./HeroBgTwo.png'

    backgroundAttachment='fixed'
    flexDirection='column'
    display={["flex", "flex", "flex", "none", "none"]}
    >
    <MobileNav/>
    <Text as='p' fontSize='18px' alignSelf='center'  textAlign='center' color='gray'>Licensed In The State Of Utah <br/>
    # 13487920-5501
     </Text>
  <Box
  height='100vh'
  display={["flex", "flex", "flex", "none", "none"]}
  padding='50px'
  // display='none'
  // backgroundImage='./HeroBgTwo.png'
  // backgroundColor='#242632'
  backgroundPosition='center'
  backgroundSize='cover'
  backgroundRepeat='no-repeat'
  backgroundAttachment='fixed'
  flexDirection='column'
  justifyContent='center'
  alignItems='center'
  zIndex={1}
  >


    <Box sx={styles.textContainer}>
    
        <Text as='h1'>Transforming Spaces <br/> & Delivering Quality</Text>
        <Text as='h3'>Your Premier Contracting Solution</Text>
        <Phone/>
        <Box>
        </Box>
        <Buttons/>
        <Box position='relative' display='flex' bottom= '80px'>
            <Counter/>
        </Box>
    </Box>
    
    </Box>
  </Box>
  </>
  )
}

export default Index
